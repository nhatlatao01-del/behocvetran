import React from 'react';

const PythonFactsOnly: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-[#f0f9f4]">
      {/* Container chứa 3 cột thông tin */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Thẻ 1: Trăn không có nọc độc */}
        <div className="bg-white pt-10 pb-8 px-8 rounded-[3rem] shadow-md border-b-[8px] border-[#52d681] flex flex-col items-center text-center transition-transform hover:scale-105">
          <div className="text-3xl mb-4">💡</div>
          <h3 className="text-[#1a7a44] text-xl font-bold mb-4">Trăn không có nọc độc</h3>
          <p className="text-[#4b5563] leading-7">
            Khác với một số loài rắn đáng sợ, trăn hoàn toàn không có nọc độc đâu bé ơi! 
            Chúng thường rất hiền lành và chỉ thích nằm cuộn tròn một chỗ thôi.
          </p>
        </div>

        {/* Thẻ 2: Những vận động viên bơi lội */}
        <div className="bg-white pt-10 pb-8 px-8 rounded-[3rem] shadow-md border-b-[8px] border-[#52d681] flex flex-col items-center text-center transition-transform hover:scale-105">
          <div className="text-3xl mb-4">💡</div>
          <h3 className="text-[#1a7a44] text-xl font-bold mb-4">Những vận động viên bơi lội</h3>
          <p className="text-[#4b5563] leading-7">
            Bé có biết không? Trăn không chỉ biết bò trên mặt đất mà còn bơi dưới nước cực giỏi nữa đấy. 
            Chúng có thể nín thở rất lâu khi ở dưới nước.
          </p>
        </div>

        {/* Thẻ 3: Chiếc bụng siêu co giãn */}
        <div className="bg-white pt-10 pb-8 px-8 rounded-[3rem] shadow-md border-b-[8px] border-[#52d681] flex flex-col items-center text-center transition-transform hover:scale-105">
          <div className="text-3xl mb-4">💡</div>
          <h3 className="text-[#1a7a44] text-xl font-bold mb-4">Chiếc bụng siêu co giãn</h3>
          <p className="text-[#4b5563] leading-7">
            Trăn có một chiếc miệng và cái bụng rất đặc biệt, có thể mở rộng ra để nuốt những món ăn 
            to hơn cả cái đầu của mình. Thật là kỳ diệu phải không nào!
          </p>
        </div>

      </div>
    </section>
  );
};

export default PythonFactsOnly;
