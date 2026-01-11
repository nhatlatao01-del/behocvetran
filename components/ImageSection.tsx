import React from 'react';

const ImageSection: React.FC = () => {
  return (
    <section className="my-8 flex justify-center px-4">
      <div className="max-w-[1000px] w-full bg-white p-1 rounded-[2.5rem]"> 
        <img 
          src="https://i.postimg.cc/gX9Rd3T9/Gemini-Generated-Image-rrj6a1rrj6a1rrj6.png" 
          // Cung cấp thêm lựa chọn cho trình duyệt để lấy bản nét nhất
          srcSet="https://i.postimg.cc/gX9Rd3T9/Gemini-Generated-Image-rrj6a1rrj6a1rrj6.png 2x"
          alt="Cấu tạo cơ thể con trăn" 
          className="w-full h-auto rounded-[2.2rem] block shadow-md"
          style={{ 
            imageRendering: '-webkit-optimize-contrast', // Tăng độ tương phản nét vẽ
            imageRendering: 'crisp-edges',               // Giữ các cạnh sắc nét
            transform: 'translateZ(0)',                  // Ép dùng GPU khử răng cưa
            imageRendering: 'pixelated'                  // Nếu ảnh vẫn mờ, thử đổi thành 'auto'
          }}
        />
      </div>
    </section>
  );
};

export default ImageSection;
