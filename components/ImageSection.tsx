
import React, { useState, useEffect, useRef } from 'react';
import { generatePythonImage } from '../services/gemini';
import { CLEAN_PYTHON_PROMPT, BODY_PARTS_INITIAL } from '../constants';
import { BodyPart } from '../types';

const ImageSection: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [parts, setParts] = useState<BodyPart[]>(BODY_PARTS_INITIAL);
  const [dragging, setDragging] = useState<{ id: string; type: 'label' | 'target' } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleGenerate = async () => {
    setIsLoading(true);
    try {
      const url = await generatePythonImage(CLEAN_PYTHON_PROMPT);
      setImageUrl(url);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGenerate();
  }, []);

  const moveItem = (clientX: number, clientY: number) => {
    if (!dragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;

    setParts(prev => prev.map(p => {
      if (p.id === dragging.id) {
        return dragging.type === 'label' 
          ? { ...p, x: Math.max(5, Math.min(95, x)), y: Math.max(5, Math.min(95, y)) }
          : { ...p, tx: Math.max(5, Math.min(95, x)), ty: Math.max(5, Math.min(95, y)) };
      }
      return p;
    }));
  };

  const updateText = (id: string, newVn: string) => {
    setParts(prev => prev.map(p => p.id === id ? { ...p, vn: newVn } : p));
  };

  return (
    <section className="py-8 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-6 flex justify-center gap-4">
          <button
            onClick={handleGenerate}
            disabled={isLoading}
            className="px-8 py-4 bg-green-500 text-white rounded-[2rem] font-black shadow-xl hover:bg-green-600 disabled:bg-gray-300 transition-all active:scale-95 flex items-center gap-3 text-lg"
          >
            {isLoading ? (
              <span className="flex items-center gap-3">
                <div className="animate-spin h-6 w-6 border-4 border-white border-t-transparent rounded-full"></div>
                Đang vẽ bạn Trăn mới...
              </span>
            ) : (
              <><span className="text-2xl">🐍</span> Đổi Bạn Trăn Khác</>
            )}
          </button>
        </div>

        <div 
          ref={containerRef}
          onMouseMove={(e) => moveItem(e.clientX, e.clientY)}
          onMouseUp={() => setDragging(null)}
          onMouseLeave={() => setDragging(null)}
          onTouchMove={(e) => moveItem(e.touches[0].clientX, e.touches[0].clientY)}
          onTouchEnd={() => setDragging(null)}
          className="relative group overflow-hidden rounded-[4rem] bg-white aspect-square max-w-2xl mx-auto shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-[12px] border-white touch-none select-none"
        >
          {isLoading ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-green-50/90 z-50 backdrop-blur-sm">
              <div className="w-24 h-24 border-[10px] border-green-100 border-t-green-500 rounded-full animate-spin mb-6"></div>
              <p className="text-2xl font-black text-green-800 animate-bounce text-center px-4">
                Đang chuẩn bị màu vẽ... <br/> Bạn Trăn sắp xuất hiện rồi!
              </p>
            </div>
          ) : imageUrl && (
            <img 
              src={imageUrl} 
              className="w-full h-full object-contain bg-gradient-to-br from-slate-50 to-white" 
              draggable={false} 
              alt="Friendly Python"
            />
          )}

          {/* SVG Layer for Arrows */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-20">
            <defs>
              <marker id="arrowhead" markerWidth="12" markerHeight="9" refX="10" refY="4.5" orient="auto">
                <path d="M0 0 L12 4.5 L0 9 Z" fill="#16a34a" />
              </marker>
            </defs>
            {!isLoading && parts.map(part => (
              <line
                key={`line-${part.id}`}
                x1={`${part.x}%`}
                y1={`${part.y}%`}
                x2={`${part.tx}%`}
                y2={`${part.ty}%`}
                stroke="#16a34a"
                strokeWidth="4"
                strokeDasharray="8,6"
                markerEnd="url(#arrowhead)"
                className="opacity-70 drop-shadow-sm"
              />
            ))}
          </svg>

          {/* Interaction Elements */}
          {!isLoading && parts.map((part) => (
            <React.Fragment key={part.id}>
              {/* Label */}
              <div
                onMouseDown={() => setDragging({ id: part.id, type: 'label' })}
                onTouchStart={() => setDragging({ id: part.id, type: 'label' })}
                style={{ left: `${part.x}%`, top: `${part.y}%`, transform: 'translate(-50%, -50%)' }}
                className={`absolute z-40 flex flex-col items-center group cursor-move`}
              >
                <div className="bg-white/95 border-[5px] border-green-500 p-2.5 px-5 rounded-[2rem] shadow-[0_10px_20px_rgba(0,0,0,0.15)] backdrop-blur-md min-w-[110px] transition-transform group-hover:scale-105 active:scale-95">
                  <input
                    type="text"
                    value={part.vn}
                    onChange={(e) => updateText(part.id, e.target.value)}
                    className="bg-transparent border-none text-center font-black text-green-950 w-full focus:ring-0 text-xl p-0 leading-tight"
                    onClick={(e) => e.stopPropagation()}
                  />
                  <div className="text-[11px] font-black text-green-600 uppercase tracking-widest text-center leading-none mt-1">{part.en}</div>
                </div>
              </div>

              {/* Arrow Target Dot (Mũi tên chỉ vào) */}
              <div
                onMouseDown={() => setDragging({ id: part.id, type: 'target' })}
                onTouchStart={() => setDragging({ id: part.id, type: 'target' })}
                style={{ left: `${part.tx}%`, top: `${part.ty}%`, transform: 'translate(-50%, -50%)' }}
                className="absolute z-30 w-8 h-8 bg-green-500 border-[5px] border-white rounded-full shadow-xl cursor-crosshair hover:scale-125 transition-all active:bg-orange-500 active:scale-110"
              />
            </React.Fragment>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <div className="bg-white/95 p-6 px-10 rounded-[3rem] border-4 border-green-100 shadow-xl flex items-center gap-6 max-w-2xl transform hover:scale-[1.02] transition-transform">
            <span className="text-5xl animate-pulse">💡</span>
            <p className="text-green-900 font-black text-xl text-left leading-tight">
              Bé hãy kéo các <span className="text-green-600 underline">Ô chữ</span> và các <span className="text-green-600 underline">Chấm tròn</span> để chỉ vào đúng Răng, Thân và Đuôi của bạn Trăn nhé!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
