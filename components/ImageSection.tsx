
import React, { useState, useEffect, useRef } from 'react';
import { generatePythonImage } from '../services/gemini';
import { CLEAN_PYTHON_PROMPT, BODY_PARTS_INITIAL } from '../constants';
import { BodyPart } from '../types';

const ImageSection: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [parts, setParts] = useState<BodyPart[]>(BODY_PARTS_INITIAL);
  const [dragging, setDragging] = useState<{ id: string; type: 'label' | 'target' } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleGenerate = async () => {
      setIsLoading(true);
      try {
        const url = await generatePythonImage(CLEAN_PYTHON_PROMPT);
        setImageUrl(url);
      } catch (err) {
        console.error("Lỗi khi tạo ảnh:", err);
      } finally {
        setIsLoading(false);
      }
    };
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
    <section className="py-4 px-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* Khung chứa ảnh - Luôn hiển thị trọn vẹn */}
        <div 
          ref={containerRef}
          onMouseMove={(e) => moveItem(e.clientX, e.clientY)}
          onMouseUp={() => setDragging(null)}
          onMouseLeave={() => setDragging(null)}
          onTouchMove={(e) => moveItem(e.touches[0].clientX, e.touches[0].clientY)}
          onTouchEnd={() => setDragging(null)}
          className="relative group overflow-hidden rounded-[4rem] bg-white aspect-square max-w-2xl mx-auto shadow-[0_40px_80px_rgba(0,0,0,0.1)] border-[16px] border-white touch-none select-none"
        >
          {isLoading ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-green-50/90 z-50 backdrop-blur-md">
              <div className="w-24 h-24 border-[10px] border-green-100 border-t-green-500 rounded-full animate-spin mb-6"></div>
              <p className="text-2xl font-black text-green-800 animate-pulse px-6">
                Đang vẽ bạn Trăn xinh xắn cho bé...
              </p>
            </div>
          ) : imageUrl && (
            <img 
              src={imageUrl} 
              className="w-full h-full object-contain bg-gradient-to-br from-white to-orange-50/20" 
              draggable={false} 
              alt="Friendly Python"
            />
          )}

          {/* Lớp SVG vẽ các đường chỉ dẫn */}
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
                className="opacity-70"
              />
            ))}
          </svg>

          {/* Các nhãn dán tương tác */}
          {!isLoading && parts.map((part) => (
            <React.Fragment key={part.id}>
              {/* Ô chữ (Label) */}
              <div
                onMouseDown={() => setDragging({ id: part.id, type: 'label' })}
                onTouchStart={() => setDragging({ id: part.id, type: 'label' })}
                style={{ left: `${part.x}%`, top: `${part.y}%`, transform: 'translate(-50%, -50%)' }}
                className={`absolute z-40 flex flex-col items-center group cursor-move`}
              >
                <div className="bg-white/95 border-[5px] border-green-500 p-2.5 px-5 rounded-[2rem] shadow-xl backdrop-blur-md min-w-[110px] hover:scale-105 transition-transform">
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

              {/* Chấm tròn chỉ bộ phận (Target) */}
              <div
                onMouseDown={() => setDragging({ id: part.id, type: 'target' })}
                onTouchStart={() => setDragging({ id: part.id, type: 'target' })}
                style={{ left: `${part.tx}%`, top: `${part.ty}%`, transform: 'translate(-50%, -50%)' }}
                className="absolute z-30 w-8 h-8 bg-green-500 border-[5px] border-white rounded-full shadow-xl cursor-crosshair hover:scale-125 transition-all active:scale-110 active:bg-orange-500"
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
