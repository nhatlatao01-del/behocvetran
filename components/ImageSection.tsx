import React from 'react';

const PythonAnatomy: React.FC = () => {
  return (
    <section className="my-8 flex flex-col items-center px-4 font-sans selection:bg-yellow-200">
      {/* Tiêu đề chính */}
      <div className="mb-6 text-center">
        <h1 className="text-3xl md:text-4xl font-black text-orange-900 drop-shadow-md">
          CẤU TẠO CƠ THỂ CON TRĂN
        </h1>
        <p className="text-orange-700 font-bold bg-orange-100 px-6 py-1.5 rounded-full inline-block mt-3 border border-orange-200 shadow-sm">
          3 PHẦN CHÍNH: ĐẦU – THÂN – ĐUÔI
        </p>
      </div>

      {/* Container chứa ảnh và nhãn dán */}
      <div className="relative bg-white p-2 md:p-4 rounded-[2rem] shadow-2xl border-4 border-yellow-100 max-w-2xl w-full">
        
        {/* Ảnh con trăn */}
        <img 
          src="https://i.postimg.cc/8sVVqswt/Gemini-Generated-Image-4h501h4h501h4h50.png" 
          alt="Cấu tạo con trăn" 
          className="w-full h-auto rounded-2xl block shadow-inner"
        />
        
        {/* --- NHÃN CHÚ THÍCH CĂN CHỈNH LẠI --- */}

        {/* 1. ĐẦU (Nằm ở phía dưới bên trái, nơi mặt con trăn đang hướng tới) */}
        <div className="absolute bottom-[35%] left-[12%] bg-yellow-400 text-yellow-900 px-4 py-1.5 rounded-full font-black shadow-lg border-2 border-white animate-bounce text-sm md:text-base z-20">
          ĐẦU 🐍
        </div>

        {/* 2. Mắt (Chỉ thẳng vào mắt đỏ) */}
        <div className="absolute bottom-[40%] left-[28%] bg-cyan-50 text-cyan-800 px-2 py-1 rounded-lg font-bold shadow-md border border-cyan-200 text-[10px] md:text-xs z-10">
          👁️ Mắt (để nhìn)
        </div>

        {/* 3. Lưỡi (Chỉ vào lưỡi đỏ) */}
        <div className="absolute bottom-[32%] left-[30%] bg-red-50 text-red-800 px-2 py-1 rounded-lg font-bold shadow-md border border-red-200 text-[10px] md:text-xs z-10">
          👅 Lưỡi chẻ (ngửi mùi)
        </div>

        {/* 4. Thân (Phần cuộn ở giữa) */}
        <div className="absolute top-[45%] right-[35%] bg-green-500 text-white px-4 py-1.5 rounded-full font-black shadow-lg border-2 border-white text-xs md:text-sm z-10">
          THÂN MÌNH
        </div>

        {/* 5. Đuôi (Phần cuối cùng bên dưới) */}
        <div className="absolute bottom-[22%] right-[15%] bg-orange-500 text-white px-4 py-1.5 rounded-full font-black shadow-lg border-2 border-white text-xs md:text-sm z-10">
          ĐUÔI
        </div>

      </div>

      {/* Box tóm tắt cuối trang */}
      <div className="mt-8 bg-yellow-50/80 p-5 rounded-2xl border-2 border-dashed border-yellow-400 max-w-md text-center shadow-sm">
        <h3 className="text-yellow-800 font-bold mb-1 underline decoration-yellow-300 underline-offset-4">Ghi chú quan trọng:</h3>
        <p className="text-yellow-900 font-medium italic leading-relaxed">
          "Trong <strong>Đầu</strong> có: <strong>mắt</strong>, <strong>mũi</strong>, <strong>lưỡi</strong> và <strong>răng nanh</strong> giúp trăn săn mồi."
        </p>
      </div>
    </section>
  );
};

export default PythonAnatomy;
