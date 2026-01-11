import React from 'react';

const ImageSection: React.FC = () => {
  return (
    <section className="my-8 flex justify-center">
      <div className="relative bg-white p-6 rounded-3xl shadow-2xl border-4 border-green-200 overflow-hidden max-w-2xl w-full">
        {/* Link ảnh bạn vừa tạo nhét vào đây */}
        <img 
          src="https://i.postimg.cc/8sVVqswt/Gemini-Generated-Image-4h501h4h501h4h50.png" 
          alt="Hình ảnh bạn trăn" 
          className="w-full h-auto rounded-xl transform hover:scale-105 transition-transform duration-500"
        />
        
        {/* Một vài nhãn dán cho sinh động */}
        <div className="absolute top-10 right-10 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full font-bold shadow-md">
          Đầu bạn trăn
        </div>
        <div className="absolute bottom-10 left-10 bg-green-500 text-white px-3 py-1 rounded-full font-bold shadow-md">
          Đuôi bạn trăn
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
