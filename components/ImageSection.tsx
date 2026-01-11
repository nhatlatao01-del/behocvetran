import React from 'react';



const ImageSection: React.FC = () => {

  return (

    <section className="my-8 flex justify-center px-4">

      {/* Thẻ div cha phải có class "relative" để các nhãn dán căn cứ vào đó mà hiện lên */}

      <div className="relative bg-white p-2 md:p-4 rounded-3xl shadow-2xl border-4 border-green-200 max-w-2xl w-full">

        

        {/* 1. Ảnh con trăn */}

        <img 

          src="<a href='https://postimages.org/' target='_blank'><img src='https://i.postimg.cc/2Sx3zNsn/Screenshot-(112).png' border='0' alt='Screenshot-(112)'></a>" 

          alt="Hình ảnh bạn trăn" 

          className="w-full h-auto rounded-xl shadow-inner block"

        />

        

        {/* 2. Nhãn dán: Đầu bạn trăn (Nằm ở phía trên bên phải) */}

        <div className="absolute top-8 right-8 bg-yellow-400 text-yellow-900 px-4 py-1.5 rounded-full font-bold shadow-lg border-2 border-white animate-bounce text-sm md:text-base z-10">

          Đầu bạn trăn 🐍

        </div>



        {/* 3. Nhãn dán: Thân mình (Nằm ở giữa) */}

        <div className="absolute top-1/2 left-1/4 bg-green-500 text-white px-3 py-1 rounded-full font-bold shadow-md border-2 border-white text-xs md:text-sm z-10">

          Thân mình dài 

        </div>



        {/* 4. Nhãn dán: Đuôi bạn trăn (Nằm ở phía dưới bên trái) */}

        <div className="absolute bottom-10 left-10 bg-orange-500 text-white px-3 py-1 rounded-full font-bold shadow-md border-2 border-white text-sm z-10">

          Cái đuôi nhỏ

        </div>



      </div>

    </section>

  );

};



export default ImageSection;
