import os
from fastapi import FastAPI, UploadFile, File, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel 
import uvicorn
import google.generativeai as genai
from PIL import Image
import io

# --- KEY SETUP ---
my_api_key = "AIzaSyD9S8rh7mG_aZndsMLlAgPRufe5-VPv2UY" 

genai.configure(api_key=my_api_key)

model_name = 'gemini-2.5-flash' 
model = genai.GenerativeModel(model_name)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- MODELS ---
class TextRequest(BaseModel):
    prompt: str
    framework: str

# ✅ NEW: Model for the "Chat to Refine" feature
class RefineRequest(BaseModel):
    original_code: str
    prompt: str
    framework: str

@app.on_event("startup")
async def startup_event():
    print("------------------------------------------------")
    print(f"🚀 Connecting to AI Model: {model_name}")
    print("------------------------------------------------")

@app.get("/")
def read_root():
    return {"message": "Sketch2Code Backend is Running!"}

# --- 1. GENERATE FROM TEXT ---
@app.post("/generate/text")
async def generate_text(request: TextRequest):
    try:
        print(f"📝 Processing Text Request: {request.prompt[:50]}...")
        
        # ✅ FIX: Smarter prompt that handles React vs HTML
        system_prompt = f"""
        You are an expert web developer.
        Task: Generate pixel-perfect code based on this description.
        Target Framework: {request.framework}
        User Description: "{request.prompt}"

        RULES:
        1. Create a COMPLETE single file solution.
        2. IF Framework contains 'HTML': Include <script src="https://cdn.tailwindcss.com"></script>.
        3. IF Framework contains 'React' or 'Next.js': Return a functional React component (e.g., `export default function Component() {{ ... }}`). Do NOT use HTML boilerplate. Use raw SVGs for icons.
        4. Use placeholder images (https://placehold.co/600x400) where needed.
        5. Return ONLY the raw code. No markdown blocks (like ```html).
        """
        
        response = model.generate_content(system_prompt)
        return {"code": response.text}

    except Exception as e:
        print(f"❌ TEXT ERROR: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

# --- 2. GENERATE FROM IMAGE ---
@app.post("/generate/image")
async def generate_image(
    file: UploadFile = File(...), 
    framework: str = Form(...) 
):
    try:
        print(f"🖼️ Processing Image Request: {file.filename}")
        contents = await file.read()
        image_part = Image.open(io.BytesIO(contents))
        
        # ✅ FIX: Smarter prompt that handles React vs HTML
        prompt = f"""
        You are an expert web developer. 
        Analyze this UI image and generate the code for: {framework}.

        RULES:
        1. Create a COMPLETE single file solution.
        2. IF Framework contains 'HTML': Include <script src="[https://cdn.tailwindcss.com](https://cdn.tailwindcss.com)"></script>.
        3. IF Framework contains 'React' or 'Next.js': Return a functional React component (e.g., `export default function Component() {{ ... }}`). Do NOT use HTML boilerplate. Use raw SVGs for icons.
        4. Return ONLY the raw code. No markdown blocks.
        """
        
        response = model.generate_content([prompt, image_part])
        return {"code": response.text}
    except Exception as e:
        print(f"❌ IMAGE ERROR: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))


# --- 3. NEW: CHAT TO REFINE FEATURE ---
@app.post("/generate/refine")
async def refine_code(request: RefineRequest):
    try:
        print(f"🔄 Processing Refine Request: {request.prompt[:50]}...")
        
        system_prompt = f"""
        You are an expert web developer.
        I will provide you with existing code and a request to modify it.
        Target Framework: {request.framework}

        Modification Request: "{request.prompt}"

        Existing Code:
        {request.original_code}

        RULES:
        1. Apply the requested modification to the existing code perfectly.
        2. Return the COMPLETE updated code (do not just return the snippet that changed).
        3. Do NOT wrap the code in markdown blocks (like ```html). Return ONLY the raw code.
        """
        
        response = model.generate_content(system_prompt)
        return {"code": response.text}

    except Exception as e:
        print(f"❌ REFINE ERROR: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))


if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)