
import React from 'react';
import Header from './components/Header';
import ImageSection from './components/ImageSection';
import FactsSection from './components/FactsSection';
import BodyPartsQuiz from './components/BodyPartsQuiz';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-12">
          <h1 className="text-5xl md:text-6xl font-extrabold text-green-900 mb-6 tracking-tight">
            Chào Mừng Bé Đến Với <br/>
            <span className="text-green-500">Thế Giới Loài Trăn</span>
          </h1>
          <p className="text-xl text-green-700 max-w-2xl mx-auto font-medium">
            Học về các bộ phận cơ thể và những điều kỳ diệu của bạn Trăn qua hình ảnh 3D cực đẹp!
          </p>
        </section>

        {/* Anatomy Image Section */}
        <ImageSection />

        {/* Fun Facts Section */}
        <FactsSection />

        {/* Interactive Quiz */}
        <BodyPartsQuiz />
      </main>

      <footer className="bg-green-900 text-green-100 py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Học Cùng Bé</h3>
            <p className="text-green-300">Ứng dụng giáo dục thông minh sử dụng trí tuệ nhân tạo Gemini để tạo ra những trải nghiệm học tập trực quan và sinh động.</p>
          </div>
          <div className="text-right">
            <p className="font-medium">© 2024 Bé Học Loài Trăn. Bảo lưu mọi quyền.</p>
            <p className="text-sm text-green-400 mt-2">Dành cho các bé mầm non yêu thiên nhiên.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
