import React from 'react';

const ImageSection: React.FC = () => {
  return (
    <section className="my-8 flex justify-center px-4">
      <div className="relative bg-white p-4 md:p-6 rounded-3xl shadow-2xl border-4 border-green-200 overflow-hidden max-w-2xl w-full">
        {/* Ảnh con trăn của bạn */}
        <img 
          src="https://i.postimg.cc/8sVVqswt/Gemini-Generated-Image-4h501h4h501h4h50.png" 
          alt="Hình ảnh bạn trăn" 
          className="w-full h-auto rounded-xl shadow-inner"
        />
        
        {/* Nhãn chú thích sinh động */}
        <div className="absolute top-6 right-6 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full font-bold shadow-md text-sm md:text-base animate-bounce">
          Đầu bạn trăn 🐍
        </div>
        <div className="absolute bottom-6 left-6 bg-green-500 text-white px-3 py-1 rounded-full font-bold shadow-md text-sm md:text-base">
          Thân hình dài ngoằng
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
