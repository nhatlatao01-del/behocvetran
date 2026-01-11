import React from 'react';

const ImageSection: React.FC = () => {
  return (
    <section className="my-8 flex justify-center px-4">
      {/* Khung chứa ảnh được thiết kế gọn gàng, làm nổi bật bức ảnh gốc */}
      <div className="bg-white p-2 md:p-4 rounded-3xl shadow-2xl border-4 border-green-200 max-w-2xl w-full">
        
        {/* Ảnh con trăn với đầy đủ thông tin đã có sẵn trong hình */}
        <img 
          src="https://i.postimg.cc/cvrdm24J/Screenshot-112.png" 
          alt="Cấu tạo cơ thể con trăn" 
          className="w-full h-auto rounded-xl shadow-inner block"
        />
        
      </div>
    </section>
  );
};

export default ImageSection;
