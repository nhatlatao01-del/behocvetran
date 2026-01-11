import React from 'react';

const PythonFactSection: React.FC = () => {
  return (
    <div className="bg-[#f0f9f4] py-12 px-4">
      {/* Phần ảnh con trăn - Giữ nguyên link bạn muốn */}
      <div className="flex justify-center mb-16">
        <div className="max-w-3xl w-full">
          <img 
            src="https://i.postimg.cc/gX9Rd3T9/Gemini-Generated-Image-rrj6a1rrj6a1rrj6.png" 
            alt="Cấu tạo con trăn" 
            className="w-full h-auto rounded-3xl"
          />
        </div>
      </div>

      {/* Phần "Em có biết" - Tái tạo đúng theo mẫu image_156123.png */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Thẻ 1 */}
        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border-b-[8px] border-[#52d681] flex flex-col items-center text-center">
          <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mb-6 text-2xl">
            💡
          </div>
          <h3 className="text-[#1a7a44] text-xl font-bold mb-4">Trăn không có nọc độc</h3>
          <p className="text-gray-600 leading-relaxed">
            Khác với một số loài rắn đáng sợ, trăn hoàn toàn không có nọc độc đâu bé ơi! 
            Chúng thường rất hiền lành và chỉ thích nằm cuộn tròn một chỗ thôi.
          </p>
        </div>

        {/* Thẻ 2 */}
        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border-b-[8px] border-[#52d681] flex flex-col items-center text-center">
          <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mb-6 text-2xl">
            💡
          </div>
          <h3 className="text-[#1a7a44] text-xl font-bold mb-4">Những vận động viên bơi lội</h3>
          <p className="text-gray-600 leading-relaxed">
            Bé có biết không? Trăn không chỉ biết bò trên mặt đất mà còn bơi dưới nước cực giỏi nữa đấy. 
            Chúng có thể nín thở rất lâu khi ở dưới nước.
          </p>
        </div>

        {/* Thẻ 3 */}
        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border-b-[8px] border-[#52d681] flex flex-col items-center text-center">
          <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mb-6 text-2xl">
            💡
          </div>
          <h3 className="text-[#1a7a44] text-xl font-bold mb-4">Chiếc bụng siêu co giãn</h3>
          <p className="text-gray-600 leading-relaxed">
            Trăn có một chiếc miệng và cái bụng rất đặc biệt, có thể mở rộng ra để nuốt những món ăn 
            to hơn cả cái đầu của mình. Thật là kỳ diệu phải không nào!
          </p>
        </div>

      </div>
    </div>
  );
};

export default PythonFactSection;
