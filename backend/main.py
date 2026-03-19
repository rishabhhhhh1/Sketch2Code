import os
import io
from fastapi import FastAPI, UploadFile, File, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel 
import google.generativeai as genai
from PIL import Image

# --- KEY SETUP ---
my_api_key = os.getenv("GEMINI_API_KEY") 

if not my_api_key:
    my_api_key = "AIzaSyD9S8rh7mG_aZndsMLlAgPRufe5-VPv2UYntend"

genai.configure(api_key=my_api_key)

model_name = 'gemini-1.5-flash' 
model = genai.GenerativeModel(model_name)

app = FastAPI()

# ✅ FIXED CORS: Credentials must be False when using wildcard "*" origin
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=False, 
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)

# --- MODELS ---
class TextRequest(BaseModel):
    prompt: str
    framework: str

class RefineRequest(BaseModel):
    original_code: str
    prompt: str
    framework: str

@app.get("/")
def read_root():
    return {"status": "online", "message": "Sketch2Code Backend is Running!"}

# --- 1. GENERATE FROM TEXT ---
@app.post("/generate/text")
async def generate_text(request: TextRequest):
    try:
        system_prompt = f"""
        You are an expert web developer.
        Task: Generate pixel-perfect code based on this description.
        Target Framework: {request.framework}
        User Description: "{request.prompt}"

        RULES:
        1. Create a COMPLETE single file solution.
        2. IF Framework contains 'HTML': Include <script src="https://cdn.tailwindcss.com"></script>.
        3. IF Framework contains 'React' or 'Next.js': Return a functional React component.
        4. Use raw SVGs for icons. Return ONLY raw code, no markdown blocks.
        """
        response = model.generate_content(system_prompt)
        # Ensure we return plain text from the AI response
        return {"code": response.text}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# --- 2. GENERATE FROM IMAGE ---
@app.post("/generate/image")
async def generate_image(
    file: UploadFile = File(...), 
    framework: str = Form(...) 
):
    try:
        contents = await file.read()
        image_part = Image.open(io.BytesIO(contents))
        
        prompt = f"""
        Analyze this UI image and generate code for: {framework}.
        RULES:
        1. COMPLETE single file solution.
        2. IF HTML: Include Tailwind CDN.
        3. IF React: Functional component, no HTML boilerplate.
        4. Return ONLY raw code.
        """
        response = model.generate_content([prompt, image_part])
        return {"code": response.text}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# --- 3. CHAT TO REFINE ---
@app.post("/generate/refine")
async def refine_code(request: RefineRequest):
    try:
        system_prompt = f"""
        Modify the existing code based on the request.
        Target Framework: {request.framework}
        Modification: "{request.prompt}"
        Existing Code: {request.original_code}
        Return COMPLETE updated code. No markdown.
        """
        response = model.generate_content(system_prompt)
        return {"code": response.text}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))