
import React from 'react';
import Header from './components/Header';
import ImageSection from './components/ImageSection';
import FactsSection from './components/FactsSection';
import BodyPartsQuiz from './components/BodyPartsQuiz';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-4">
        {/* Tiêu đề ngắn gọn */}
        <section className="text-center py-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-900 tracking-tight">
            Sơ Đồ Cơ Thể <span className="text-green-500">Bạn Trăn</span>
          </h2>
        </section>

        {/* Khu vực ảnh và nhãn dán */}
        <ImageSection />

        <div className="mt-12">
          {/* Các sự thật thú vị */}
          <FactsSection />
          {/* Đố vui cuối trang */}
          <BodyPartsQuiz />
        </div>
      </main>

      <footer className="bg-green-900 text-green-100 py-10 px-4 mt-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Học Cùng Bé</h3>
            <p className="text-green-300 italic">Sơ đồ giáo dục trực quan dành cho các bé yêu thiên nhiên.</p>
          </div>
          <div className="text-right">
            <p className="font-medium">© 2024 Bé Học Loài Trăn.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
