"use client";

import React, { useState, useEffect, useRef } from "react";
import { useAuth } from "../context/AuthContext"; 
import { useSearchParams } from "next/navigation"; 
import { TEMPLATES } from "../../data/templates"; 
import { 
  Image as ImageIcon, 
  Type, 
  Code, 
  Loader2, 
  Copy, 
  Download, 
  MousePointer2, 
  Trash2, 
  Box, 
  Square,
  Move,
  Lock,
  Unlock,
  RefreshCw,
  Maximize2,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  Layout,
  LogOut,
  User,
  Edit3,
  Play,
  Smartphone,
  Tablet,
  Monitor,
  Sparkles 
} from "lucide-react";
import Link from "next/link"; 

export default function Dashboard() {
  const { user, logOut } = useAuth(); 
  const searchParams = useSearchParams(); 
  
  const [mode, setMode] = useState<"image" | "text" | "templates">("image");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [textPrompt, setTextPrompt] = useState("");
  const [framework, setFramework] = useState<string>("HTML + Tailwind");

  const [isEditorOpen, setIsEditorOpen] = useState(true);
  const [isEditMode, setIsEditMode] = useState(true);
  const [deviceSize, setDeviceSize] = useState<"desktop" | "tablet" | "mobile">("desktop");

  const [generatedCode, setGeneratedCode] = useState<string>("");
  const [iframeCode, setIframeCode] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const [refinePrompt, setRefinePrompt] = useState("");
  const [isRefining, setIsRefining] = useState(false);

  const [aiInsights, setAiInsights] = useState<{ summary: string, tips: string[] } | null>(null);
  
  const [selectedElData, setSelectedElData] = useState<{ 
    tagName: string; 
    width: string; 
    height: string; 
    text: string;
    left: string;
    top: string;
    position: string;
  } | null>(null);
  
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const templateId = searchParams.get("template");
    if (templateId) {
      const template = TEMPLATES.find(t => t.id === templateId);
      if (template) {
        setMode("templates");
        setGeneratedCode(template.code);
        setIframeCode(template.code);
        window.history.replaceState(null, "", "/dashboard");
      }
    }
  }, [searchParams]);

  const loadTemplate = (code: string) => {
      setGeneratedCode(code);
      setIframeCode(code);
  };

  const downloadCode = () => {
    if (!generatedCode) return alert("No code to download!");
    const blob = new Blob([generatedCode], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "sketch2code_export.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (!event.data.type) return;

      if (event.data.type === "ELEMENT_CLICKED") {
        setSelectedElData({
          tagName: event.data.tagName,
          width: event.data.width,
          height: event.data.height,
          text: event.data.text || "",
          left: event.data.left || "auto",
          top: event.data.top || "auto",
          position: event.data.position || "static"
        });
      }
      else if (event.data.type === "ELEMENT_DELETED") {
        setSelectedElData(null);
      }
      else if (event.data.type === "CODE_UPDATED") {
        setGeneratedCode(event.data.html); 
      }
    };
    
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  const updateElement = (property: string, value: string) => {
    if (selectedElData) {
      setSelectedElData({ ...selectedElData, [property]: value });
    }
    if (iframeRef.current?.contentWindow) {
      const msgType = property === 'text' ? "UPDATE_TEXT" : "UPDATE_STYLE";
      iframeRef.current.contentWindow.postMessage({ type: msgType, property, value }, "*");
    }
  };

  const toggleAbsolute = () => {
      if (!selectedElData) return;
      const newPos = selectedElData.position === 'absolute' ? 'static' : 'absolute';
      updateElement('position', newPos);
      if (newPos === 'absolute') {
           updateElement('left', '50px');
           updateElement('top', '50px');
      } else {
           updateElement('left', 'auto');
           updateElement('top', 'auto');
      }
  };

  const deleteElement = () => {
    iframeRef.current?.contentWindow?.postMessage({ type: "DELETE_ELEMENT" }, "*");
    setSelectedElData(null);
  };

  const addElement = (elementType: 'div' | 'p' | 'button') => {
    iframeRef.current?.contentWindow?.postMessage({ type: "ADD_ELEMENT", elementType }, "*");
  };

  const handleManualCodeEdit = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setGeneratedCode(e.target.value);
  };

  const applyCodeToPreview = () => {
      setIframeCode(generatedCode);
      setSelectedElData(null);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedCode);
    alert("Code copied to clipboard! 📋");
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) setSelectedImage(e.target.files[0]);
  };

  const generateCode = async () => {
    if (mode === "image" && !selectedImage) return alert("Please upload an image!");
    if (mode === "text" && !textPrompt) return alert("Please describe your design!");
    
    setLoading(true);
    setAiInsights(null);

    try {
      let endpoint = mode === "image" ? "http://127.0.0.1:8000/generate/image" : "http://127.0.0.1:8000/generate/text";
      let body;
      let headers = {};

      if (mode === "image") {
        const formData = new FormData();
        formData.append("file", selectedImage!);
        formData.append("framework", framework);
        body = formData;
      } else {
        headers = { "Content-Type": "application/json" };
        body = JSON.stringify({ prompt: textPrompt, framework: framework });
      }

      const response = await fetch(endpoint, { method: "POST", headers, body });

      if (response.status === 429) {
          alert("⏳ Quota Exceeded! Please wait 1-2 minutes before trying again.");
          setLoading(false);
          return;
      }

      const data = await response.json();
      
      if (data.code) {
        setGeneratedCode(data.code);
        setIframeCode(data.code);
        setSelectedElData(null); 
        
        if (data.structure_summary || data.improvement_tips) {
            setAiInsights({
                summary: data.structure_summary || "No summary provided.",
                tips: data.improvement_tips || []
            });
        }
      } else {
        alert("Failed to generate code.");
      }
    } catch (error) {
      console.error(error);
      alert("Backend error. Ensure Python server is running.");
    } finally {
      setLoading(false);
    }
  };

  const handleRefineCode = async () => {
    if (!refinePrompt.trim() || !generatedCode) return;
    
    setIsRefining(true);
    try {
      const response = await fetch("http://127.0.0.1:8000/generate/refine", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          original_code: generatedCode,
          prompt: refinePrompt,
          framework: framework
        })
      });

      const data = await response.json();
      
      if (data.code) {
        setGeneratedCode(data.code);
        setIframeCode(data.code);
        setRefinePrompt(""); 
      } else {
        alert("Failed to refine code.");
      }
    } catch (error) {
      console.error(error);
      alert("Backend error. Ensure Python server is running.");
    } finally {
      setIsRefining(false);
    }
  };

  // ✅ BULLETPROOF REACT PREVIEW RENDERER
  const getPreviewContent = () => {
    if (!iframeCode) return "";

    // Check if it's a React component
    if (iframeCode.includes('export default') || iframeCode.includes('import React')) {
        
        let cleanCode = iframeCode.replace(/```(jsx|js|tsx|html)?/gi, '');
        
        // 1. Find the REAL main component name (what did the AI name the page?)
        let componentName = "App";
        const exportFuncMatch = cleanCode.match(/export\s+default\s+function\s+([a-zA-Z0-9_]+)/);
        const exportDefaultMatch = cleanCode.match(/export\s+default\s+([a-zA-Z0-9_]+)/);

        if (exportFuncMatch && exportFuncMatch[1]) {
            componentName = exportFuncMatch[1];
        } else if (exportDefaultMatch && exportDefaultMatch[1]) {
            componentName = exportDefaultMatch[1];
        } else {
            // If it's literally just "export default function()", rename it to App
            cleanCode = cleanCode.replace(/export\s+default\s+function\s*\(/, 'function App(');
        }

        // 2. Remove imports so browser doesn't crash
        // 2. Remove imports so browser doesn't crash
cleanCode = cleanCode.replace(/^import\s+.*?;?$/gm, '');
cleanCode = cleanCode.replace(/import\s+[\s\S]*?from\s+['"][^'"]+['"];?/g, '');

        // 3. Strip export keywords so it runs natively in the browser
        cleanCode = cleanCode.replace(/export\s+default\s+function/g, 'function');
        cleanCode = cleanCode.replace(/export\s+default\s+[a-zA-Z0-9_]+;?/g, '');
        cleanCode = cleanCode.replace(/export\s+/g, '');

        return `
            <!DOCTYPE html>
            <html>
            <head>
                <script src="[https://cdn.tailwindcss.com](https://cdn.tailwindcss.com)"></script>
                <script src="[https://unpkg.com/react@18/umd/react.development.js](https://unpkg.com/react@18/umd/react.development.js)" crossorigin></script>
                <script src="[https://unpkg.com/react-dom@18/umd/react-dom.development.js](https://unpkg.com/react-dom@18/umd/react-dom.development.js)" crossorigin></script>
                <script src="[https://unpkg.com/@babel/standalone/babel.min.js](https://unpkg.com/@babel/standalone/babel.min.js)"></script>
                <style>body { font-family: system-ui, sans-serif; margin: 0; padding: 0; }</style>
            </head>
            <body>
                <div id="root"></div>
                <script type="text/babel">
                    try {
                        const { useState, useEffect, useRef, useCallback, useMemo } = React;
                        
                        ${cleanCode}
                        
                        const root = ReactDOM.createRoot(document.getElementById('root'));
                        if (typeof ${componentName} !== 'undefined') {
                            root.render(React.createElement(${componentName}));
                        } else {
                            throw new Error("Could not detect main React component name.");
                        }
                    } catch (error) {
                        document.getElementById('root').innerHTML = 
                            '<div style="padding: 2rem; color: #ef4444; background: #fef2f2; border-bottom: 1px solid #fca5a5; font-family: monospace;">' +
                            '<h3 style="margin-top:0;">Preview Build Error:</h3>' +
                            '<p>' + error.message + '</p>' +
                            '<p style="color: #666; font-size: 12px; margin-top: 1rem;">Ask the AI in the Refine chat to fix the syntax error.</p>' +
                            '</div>';
                        console.error(error);
                    }
                </script>
            </body>
            </html>
        `;
    }

    // --- STANDARD HTML PREVIEW ---
    if (!isEditMode) return iframeCode; 

    const interactiveScript = `
      <script>
        let selectedElement = null;
        let isDragging = false;
        let startX, startY, initialLeft, initialTop;

        function syncCode() {
            const clone = document.documentElement.cloneNode(true);
            const body = clone.querySelector('body');
            body.querySelectorAll('script').forEach(s => s.remove());
            body.querySelectorAll('*').forEach(el => {
                el.style.outline = '';
                el.style.boxShadow = '';
                el.style.cursor = '';
            });
            window.parent.postMessage({ type: 'CODE_UPDATED', html: clone.outerHTML }, '*');
        }

        document.body.addEventListener('click', (e) => {
          if(isDragging) return;
          e.preventDefault(); e.stopPropagation();
          if (selectedElement) {
            selectedElement.style.outline = '';
            selectedElement.style.boxShadow = '';
          }
          selectedElement = e.target;
          if (['BODY', 'HTML'].includes(selectedElement.tagName)) {
             selectedElement = null; return;
          }
          updateVisuals();
          sendData();
        }, true);

        function updateVisuals() {
            if(!selectedElement) return;
            selectedElement.style.outline = '2px solid #3b82f6'; 
            selectedElement.style.boxShadow = '0 0 0 4px rgba(59, 130, 246, 0.2)';
        }

        function sendData() {
            if(!selectedElement) return;
            const style = window.getComputedStyle(selectedElement);
            window.parent.postMessage({
                type: 'ELEMENT_CLICKED',
                tagName: selectedElement.tagName.toLowerCase(),
                width: style.width, height: style.height,
                text: selectedElement.innerText,
                left: style.left, top: style.top,
                position: style.position
            }, '*');
        }

        document.addEventListener('mousedown', (e) => {
            if (selectedElement && selectedElement.style.position === 'absolute' && e.target === selectedElement) {
                isDragging = true;
                startX = e.clientX;
                startY = e.clientY;
                initialLeft = parseFloat(selectedElement.style.left || 0);
                initialTop = parseFloat(selectedElement.style.top || 0);
                selectedElement.style.cursor = 'grabbing';
            }
        });

        document.addEventListener('mousemove', (e) => {
            if (isDragging && selectedElement) {
                e.preventDefault();
                const dx = e.clientX - startX;
                const dy = e.clientY - startY;
                selectedElement.style.left = (initialLeft + dx) + 'px';
                selectedElement.style.top = (initialTop + dy) + 'px';
            }
        });

        document.addEventListener('mouseup', () => {
            if(isDragging && selectedElement) {
                isDragging = false;
                selectedElement.style.cursor = 'default';
                sendData();
                syncCode();
            }
        });

        window.addEventListener('message', (event) => {
          if (!selectedElement && event.data.type !== 'ADD_ELEMENT') return;
          let mutated = false;

          if (event.data.type === 'UPDATE_STYLE') {
            selectedElement.style[event.data.property] = event.data.value;
            mutated = true;
          } 
          else if (event.data.type === 'UPDATE_TEXT') {
            selectedElement.innerText = event.data.value;
            mutated = true;
          }
          else if (event.data.type === 'DELETE_ELEMENT') {
            selectedElement.remove();
            selectedElement = null;
            mutated = true;
          }
          else if (event.data.type === 'ADD_ELEMENT') {
             try {
               let newEl = document.createElement(event.data.elementType);
               if (event.data.elementType === 'button') {
                 newEl.innerText = 'Button'; newEl.className = 'px-4 py-2 bg-blue-600 text-white rounded shadow mx-2';
               } else if (event.data.elementType === 'p') {
                 newEl.innerText = 'Text...'; newEl.className = 'text-gray-800 my-2';
               } else if (event.data.elementType === 'div') {
                 newEl.innerText = 'Box'; newEl.className = 'w-32 h-32 border-2 dashed border-gray-400 bg-gray-100 m-2';
               }
               if(selectedElement) selectedElement.appendChild(newEl);
               else document.body.appendChild(newEl);
               mutated = true;
             } catch (err) {}
          }
          if(mutated) syncCode();
        });
      </script>
    `;
    return iframeCode.replace("</body>", interactiveScript + "</body>");
  };

  return (
    <div className="flex h-screen w-full bg-[#020617] text-white overflow-hidden font-sans">
      
      {/* 1. LEFT SIDEBAR */}
      <aside className="w-80 flex flex-col border-r border-gray-800 bg-[#0f172a] h-full overflow-y-auto overflow-x-hidden">
        
        {/* LOGO */}
        <div className="p-5 border-b border-gray-800 flex items-center gap-2">
             <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white">S2</div>
             <Link href="/" className="font-bold text-lg tracking-tight hover:text-blue-400 transition-colors">Sketch2Code</Link>
        </div>

        {/* INPUT SECTION */}
        <div className="p-5 border-b border-gray-800">
            <h2 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wider">Generator</h2>
            
            <div className="flex bg-[#020617] p-1 rounded-lg mb-4 border border-gray-700">
                <button onClick={() => setMode("image")} className={`flex-1 py-1.5 text-xs font-bold rounded-md transition-all ${mode === "image" ? "bg-blue-600 text-white" : "text-gray-400 hover:text-white"}`}>Image</button>
                <button onClick={() => setMode("text")} className={`flex-1 py-1.5 text-xs font-bold rounded-md transition-all ${mode === "text" ? "bg-purple-600 text-white" : "text-gray-400 hover:text-white"}`}>Text</button>
                <button onClick={() => setMode("templates")} className={`flex-1 py-1.5 text-xs font-bold rounded-md transition-all ${mode === "templates" ? "bg-emerald-600 text-white" : "text-gray-400 hover:text-white"}`}>Library</button>
            </div>

            {mode === "image" && (
                <div className="relative border-2 border-dashed border-gray-700 rounded-xl p-6 hover:bg-gray-800 transition-colors text-center cursor-pointer group mb-4">
                    <input type="file" accept="image/*" onChange={handleImageUpload} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                    <div className="text-2xl mb-2">📂</div>
                    <p className="text-xs text-gray-400 truncate px-2">{selectedImage ? selectedImage.name : "Upload Sketch"}</p>
                </div>
            )}
            
            {mode === "text" && (
                <textarea value={textPrompt} onChange={(e) => setTextPrompt(e.target.value)} placeholder="Describe your UI..." className="w-full h-24 bg-[#020617] border border-gray-700 rounded-xl p-3 text-white text-xs focus:border-purple-500 outline-none mb-4 resize-none" />
            )}

            {mode === "templates" && (
                <div className="flex flex-col gap-2 h-[200px] overflow-y-auto custom-scrollbar pr-1 mb-4">
                    {TEMPLATES.map((t) => (
                        <button key={t.id} onClick={() => loadTemplate(t.code)} className="text-left p-3 rounded-xl border border-gray-700 bg-[#020617] hover:bg-gray-800 transition-all">
                            <span className="text-[11px] font-bold text-slate-200 block">{t.name}</span>
                            <p className="text-[9px] text-slate-500 line-clamp-1">{t.description}</p>
                        </button>
                    ))}
                </div>
            )}

            {mode !== "templates" && (
              <>
                <select value={framework} onChange={(e) => setFramework(e.target.value)} className="w-full p-2 bg-[#020617] border border-gray-700 rounded-lg text-xs text-white outline-none mb-4">
    <option value="HTML + Tailwind">HTML + Tailwind</option>
    
    <option value="HTML + CSS">HTML + CSS</option>
    <option value="HTML + JavaScript">HTML + JavaScript</option>
</select>

                <button onClick={generateCode} disabled={loading} className={`w-full py-3 rounded-lg font-bold text-white text-sm transition-all flex items-center justify-center gap-2 ${loading ? 'bg-gray-700' : 'bg-blue-600 hover:bg-blue-700'}`}>
                    {loading ? <Loader2 className="animate-spin w-4 h-4" /> : <Code className="w-4 h-4" />}
                    {loading ? "Generating..." : "Generate Code"}
                </button>
              </>
            )}
        </div>

        {/* AI INSIGHTS */}
        {aiInsights && !selectedElData && (
            <div className="p-5 border-b border-gray-800">
                <h2 className="text-xs font-bold text-purple-400 flex items-center gap-2 uppercase mb-3"><Lightbulb className="w-3 h-3" /> AI Insights</h2>
                <div className="bg-[#1e293b]/50 p-3 rounded-lg border border-gray-700 mb-3"><p className="text-xs text-gray-400 leading-relaxed">{aiInsights.summary}</p></div>
                <div className="space-y-2">{aiInsights.tips.map((tip, idx) => (<div key={idx} className="flex gap-2 items-start text-xs text-gray-400"><span className="text-purple-500 mt-0.5">•</span><span>{tip}</span></div>))}</div>
            </div>
        )}

        {/* PROPERTIES PANEL */}
        {selectedElData && (
            <div className="p-5 animate-in fade-in slide-in-from-left-4">
                <div className="flex items-center justify-between mb-4 border-t border-gray-800 pt-4">
                    <h2 className="text-xs font-bold text-blue-400 flex items-center gap-2 uppercase"><MousePointer2 className="w-3 h-3" /> {selectedElData.tagName}</h2>
                    <button onClick={() => setSelectedElData(null)} className="text-[10px] text-gray-500 hover:text-white">Close</button>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-4">
                    <div><label className="text-[10px] text-gray-500 font-bold">W</label><input type="text" value={selectedElData.width} onChange={(e) => updateElement("width", e.target.value)} className="w-full bg-[#020617] border border-gray-700 rounded p-1.5 text-xs text-white outline-none" /></div>
                    <div><label className="text-[10px] text-gray-500 font-bold">H</label><input type="text" value={selectedElData.height} onChange={(e) => updateElement("height", e.target.value)} className="w-full bg-[#020617] border border-gray-700 rounded p-1.5 text-xs text-white outline-none" /></div>
                </div>
                <div className="mb-4 text-[10px] text-gray-500 font-bold block mb-1 uppercase">Content<input type="text" value={selectedElData.text} onChange={(e) => updateElement("text", e.target.value)} className="w-full bg-[#020617] border border-gray-700 rounded p-1.5 text-xs text-white outline-none mt-1" /></div>
                <div className="mb-4 p-3 bg-gray-900/50 rounded-lg border border-gray-800">
                    <div className="flex items-center justify-between mb-2">
                        <label className="text-[10px] text-gray-400 font-bold flex gap-1"><Move className="w-3 h-3" /> Pos</label>
                        <button onClick={toggleAbsolute} className={`text-[10px] px-1.5 py-0.5 rounded border ${selectedElData.position === 'absolute' ? 'bg-blue-600 border-blue-500 text-white' : 'bg-gray-800 border-gray-700 text-gray-400'}`}>{selectedElData.position === 'absolute' ? "Free" : "Locked"}</button>
                    </div>
                    {selectedElData.position === 'absolute' && (
                    <div className="grid grid-cols-2 gap-2">
                        <div><label className="text-[10px] text-gray-500 font-bold">X</label><input type="text" value={selectedElData.left} onChange={(e) => updateElement("left", e.target.value)} className="w-full bg-[#020617] border border-gray-700 rounded p-1.5 text-xs text-white" /></div>
                        <div><label className="text-[10px] text-gray-500 font-bold">Y</label><input type="text" value={selectedElData.top} onChange={(e) => updateElement("top", e.target.value)} className="w-full bg-[#020617] border border-gray-700 rounded p-1.5 text-xs text-white" /></div>
                    </div>
                    )}
                </div>
                <div className="grid grid-cols-4 gap-2">
                    <button onClick={deleteElement} className="col-span-4 bg-red-900/20 text-red-400 border border-red-900/50 hover:bg-red-900/40 rounded p-2 text-xs font-bold mb-2 flex justify-center items-center gap-2 transition-colors"><Trash2 className="w-3 h-3"/> DELETE</button>
                    <button onClick={() => addElement('div')} className="bg-[#1e293b] border border-gray-700 rounded p-2 hover:border-blue-500 flex justify-center text-gray-400 hover:text-blue-400 transition-all" title="Add Box"><Box className="w-4 h-4" /></button>
                    <button onClick={() => addElement('p')} className="bg-[#1e293b] border border-gray-700 rounded p-2 hover:border-blue-500 flex justify-center text-gray-400 hover:text-green-400 transition-all" title="Add Text"><Type className="w-4 h-4" /></button>
                    <button onClick={() => addElement('button')} className="bg-[#1e293b] border border-gray-700 rounded p-2 hover:border-blue-500 flex justify-center text-gray-400 hover:text-purple-400 transition-all" title="Add Button"><Square className="w-4 h-4" /></button>
                </div>
            </div>
        )}

        {/* LOG OUT DIV */}
        {!selectedElData && !aiInsights && (
            <div className="p-10 flex flex-col items-center justify-center text-gray-600 text-center h-64 opacity-30">
                <MousePointer2 className="w-10 h-10 mb-2" />
                <p className="text-xs">Select an element<br/>to edit properties</p>
            </div>
        )}

        {/* USER PROFILE */}
        {user && (
            <div className="p-4 border-t border-gray-800 bg-[#0a0f1e] mt-auto">
                <div className="flex items-center gap-3">
                    {user.photoURL ? (<img src={user.photoURL} alt="Profile" className="w-9 h-9 rounded-full border border-gray-600" />) : (<div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center text-xs font-bold text-white">{user.displayName?.charAt(0) || "U"}</div>)}
                    <div className="flex-1 overflow-hidden"><p className="text-xs font-bold text-white truncate">{user.displayName || "User"}</p><p className="text-[10px] text-gray-500 truncate">{user.email}</p></div>
                    <button onClick={logOut} className="p-2 text-gray-400 hover:text-red-400 transition-colors"><LogOut className="w-4 h-4" /></button>
                </div>
            </div>
        )}
      </aside>

      {/* 2. RIGHT AREA: Editor & Preview */}
      <div className="flex-1 flex flex-col h-full relative bg-[#0a0a0a]">
        
        {/* TOP: Code Editor */}
        {iframeCode && (
          <div className={`border-b border-gray-800 bg-[#0f172a] flex flex-col transition-all duration-300 ${isEditorOpen ? 'h-[40%]' : 'h-10'}`}>
              <div className="flex items-center justify-between px-4 py-2 bg-[#020617] border-b border-gray-800">
                  <div className="flex items-center gap-2">
                      <button onClick={() => setIsEditorOpen(!isEditorOpen)} className="text-gray-400 hover:text-white">
                          {isEditorOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                      <span className="text-xs font-bold text-gray-400 uppercase">Generated Code</span>
                  </div>
                  <div className="flex items-center gap-2">
                      <button onClick={applyCodeToPreview} className="px-2 py-1 bg-green-600/20 text-green-400 border border-green-600/50 hover:bg-green-600/30 rounded text-[10px] font-bold flex items-center gap-1 transition-all"><RefreshCw className="w-3 h-3" /> Run Edits</button>
                      <button onClick={copyToClipboard} className="text-gray-400 hover:text-white"><Copy className="w-4 h-4" /></button>
                      <button onClick={downloadCode} className="text-gray-400 hover:text-white" title="Download HTML">
                          <Download className="w-4 h-4" />
                      </button>
                  </div>
              </div>
              
              {/* TEXT AREA AND NEW REFINE CHAT BOX */}
              {isEditorOpen && (
                  <>
                    <textarea className="flex-1 w-full bg-[#0a0a0a] text-gray-300 font-mono text-xs p-4 resize-none focus:outline-none custom-scrollbar" value={generatedCode} onChange={handleManualCodeEdit} spellCheck="false" />
                    
                    {/* CHAT TO REFINE INPUT */}
                    <div className="bg-[#020617] border-t border-gray-800 p-2 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-purple-400 ml-2" />
                        <input 
                            type="text" 
                            value={refinePrompt} 
                            onChange={(e) => setRefinePrompt(e.target.value)} 
                            onKeyDown={(e) => e.key === 'Enter' && handleRefineCode()}
                            placeholder="Ask AI to change colors, add a button, fix layout..." 
                            className="flex-1 bg-transparent text-xs text-white outline-none placeholder-gray-600 px-2"
                            disabled={isRefining}
                        />
                        <button 
                            onClick={handleRefineCode} 
                            disabled={isRefining || !refinePrompt.trim()} 
                            className={`px-4 py-1.5 rounded-md text-xs font-bold flex items-center gap-2 transition-all ${isRefining || !refinePrompt.trim() ? 'bg-gray-800 text-gray-500' : 'bg-purple-600 hover:bg-purple-500 text-white'}`}
                        >
                            {isRefining ? <Loader2 className="animate-spin w-3 h-3" /> : 'Refine'}
                        </button>
                    </div>
                  </>
              )}
          </div>
        )}

        {/* BOTTOM: Live Preview OR Template Gallery */}
        <div className="flex-1 bg-[#1e293b] relative flex flex-col overflow-hidden items-center justify-center">
            
            {iframeCode ? (
                <>
                  {/* EDIT/PLAY TOGGLES & DEVICE PREVIEW TOGGLES */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black/50 backdrop-blur text-white px-2 py-1.5 rounded-full text-[10px] font-bold border border-white/10 shadow-xl z-10">
                      
                      {/* Left side: Edit vs Play */}
                      <div className="flex gap-1">
                          <button onClick={() => { setIsEditMode(true); setSelectedElData(null); }} className={`flex items-center gap-1 px-3 py-1 rounded-full transition-all ${isEditMode ? 'bg-blue-600 text-white shadow' : 'text-gray-400 hover:text-white'}`}><Edit3 className="w-3 h-3" /> Edit</button>
                          <button onClick={() => { setIsEditMode(false); setSelectedElData(null); }} className={`flex items-center gap-1 px-3 py-1 rounded-full transition-all ${!isEditMode ? 'bg-green-600 text-white shadow' : 'text-gray-400 hover:text-white'}`}><Play className="w-3 h-3" /> Play</button>
                      </div>

                      <div className="w-px h-4 bg-gray-600"></div>

                      {/* Right side: Device Previews */}
                      <div className="flex gap-1 pr-1">
                          <button onClick={() => setDeviceSize("mobile")} className={`p-1.5 rounded-full transition-colors ${deviceSize === "mobile" ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'}`} title="Mobile View"><Smartphone className="w-4 h-4" /></button>
                          <button onClick={() => setDeviceSize("tablet")} className={`p-1.5 rounded-full transition-colors ${deviceSize === "tablet" ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'}`} title="Tablet View"><Tablet className="w-4 h-4" /></button>
                          <button onClick={() => setDeviceSize("desktop")} className={`p-1.5 rounded-full transition-colors ${deviceSize === "desktop" ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'}`} title="Desktop View"><Monitor className="w-4 h-4" /></button>
                      </div>
                  </div>

                  {/* IFRAME CONTAINER WRAPPER FOR RESPONSIVE WIDTH */}
                  <div className={`transition-all duration-500 ease-in-out h-full mt-14 bg-white shadow-2xl border-x border-t border-gray-400/20 overflow-hidden
                      ${deviceSize === "desktop" ? "w-full" : ""}
                      ${deviceSize === "tablet" ? "w-[768px]" : ""}
                      ${deviceSize === "mobile" ? "w-[375px]" : ""}
                  `}>
                      <iframe ref={iframeRef} srcDoc={getPreviewContent()} className="w-full h-full border-none" title="Preview" />
                  </div>
                </>
            ) : (
                <div className="w-full h-full p-10 overflow-y-auto custom-scrollbar">
                    <div className="max-w-6xl mx-auto animate-in fade-in zoom-in-95 duration-500">
                        <div className="mb-10 text-center">
                            <h2 className="text-3xl font-black text-white mb-2 tracking-tight">Template Gallery</h2>
                            <p className="text-slate-400 text-sm">Upload a sketch on the left, or click a template below to start editing immediately.</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                            {TEMPLATES.map((t) => (
                                <div key={t.id} onClick={() => loadTemplate(t.code)} className="group rounded-2xl overflow-hidden border border-white/5 bg-[#0a0f1e] hover:border-blue-500/50 transition-all cursor-pointer shadow-lg hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] flex flex-col h-[300px]">
                                    <div className="h-[75%] bg-[#020617] relative overflow-hidden">
                                        <div className="absolute inset-0 bg-blue-900/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 backdrop-blur-sm">
                                            <span className="bg-white text-blue-900 px-5 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform"><Edit3 className="w-4 h-4"/> Use Template</span>
                                        </div>
                                        <img src={t.image} alt={t.name} className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-all duration-700" />
                                    </div>
                                    <div className="h-[25%] p-5 flex flex-col justify-center border-t border-white/5 group-hover:bg-[#0f172a] transition-colors">
                                        <div className="flex justify-between items-center w-full">
                                            <h3 className="font-bold text-sm text-white truncate pr-2">{t.name}</h3>
                                            <span className="text-[9px] bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-1 rounded uppercase font-bold whitespace-nowrap">{t.category}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
      </div>
    </div>
  );
}