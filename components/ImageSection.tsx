import React from 'react';

const ImageSection: React.FC = () => {
  return (
    <section className="my-8 flex justify-center px-4">
      {/* Để ảnh nét: 
         1. Không bóp kích thước quá nhỏ (dùng max-w-full hoặc rộng hẳn ra)
         2. Không dùng các bộ lọc image-rendering gây nhiễu 
      */}
      <div className="w-full max-w-[1200px]"> 
        <img 
          src="https://i.postimg.cc/gX9Rd3T9/Gemini-Generated-Image-rrj6a1rrj6a1rrj6.png" 
          alt="Cấu tạo cơ thể con trăn" 
          className="w-full h-auto block rounded-2xl"
          // Bỏ hết các style can thiệp render gây mờ
        />
      </div>
    </section>
  );
};

export default ImageSection;
