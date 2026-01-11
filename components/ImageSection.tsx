import React from 'react';

const ImageSection: React.FC = () => {
  return (
    <section className="my-8 flex justify-center px-4">
      <div className="max-w-2xl w-full">
        <img 
          src="https://i.postimg.cc/gX9Rd3T9/Gemini-Generated-Image-rrj6a1rrj6a1rrj6.png" 
          alt="Cấu tạo cơ thể con trăn" 
          className="w-full h-auto rounded-3xl shadow-xl block"
          style={{ 
            imageRendering: 'auto',
            WebkitBackfaceVisibility: 'hidden'
          }}
        />
      </div>
    </section>
  );
};

export default ImageSection;
