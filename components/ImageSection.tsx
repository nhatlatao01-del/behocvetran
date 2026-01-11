const ImageSection = () => {
  return (
    <section className="flex justify-center my-8">
      {/* KHUNG CHỨA (Phải có relative để nhãn dán bám vào) */}
      <div className="relative inline-block"> 
        
        {/* 1. LỚP DƯỚI CÙNG: ẢNH CON TRĂN */}
        <img 
          src="https://i.postimg.cc/8sVVqswt/Gemini-Generated-Image-4h501h4h501h4h50.png" 
          alt="Con trăn"
          className="rounded-xl" // Bạn có thể chỉnh thêm độ rộng như w-[500px]
        />

        {/* 2. LỚP TRÊN: CÁC NHÃN DÁN CỦA BẠN */}
        {/* Bạn hãy bê nguyên đoạn code các nhãn dán cũ của bạn dán vào dưới đây */}
        <div className="absolute top-5 right-5 bg-yellow-400 p-1 rounded">
          Đầu bạn trăn
        </div>
        
        <div className="absolute bottom-10 left-5 bg-green-400 p-1 rounded">
          Đuôi bạn trăn
        </div>
        {/* ... dán tiếp các nhãn khác của bạn ở đây ... */}

      </div>
    </section>
  );
};

export default ImageSection;
