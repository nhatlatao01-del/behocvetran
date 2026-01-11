import React from 'react';

const ImageSection: React.FC = () => {
  return (
    <section className="my-8 flex justify-center px-4">
      <div className="bg-white p-2 md:p-4 rounded-3xl shadow-2xl border-4 border-green-200 max-w-2xl w-full">
        
        <img 
          src="https://i.postimg.cc/cvrdm24J/Screenshot-112.png" 
          alt="Cấu tạo cơ thể con trăn" 
          {/* - image-render-auto: Tự động tối ưu
            - contrast-105: Tăng nhẹ độ tương phản để chữ rõ hơn
            - saturate-105: Tăng nhẹ màu sắc giúp ảnh tươi hơn
          */}
          className="w-full h-auto rounded-xl block shadow-inner antialiased contrast-[1.02] saturate-[1.02]"
          style={{ imageRendering: 'high-quality' }} 
        />
        
      </div>
    </section>
  );
};

export default ImageSection;
