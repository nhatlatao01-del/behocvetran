
import React, { useState } from 'react';
import { BODY_PARTS_INITIAL } from '../constants';
import { BodyPart } from '../types';

const BodyPartsQuiz: React.FC = () => {
  const [currentPart, setCurrentPart] = useState<BodyPart>(
    BODY_PARTS_INITIAL[Math.floor(Math.random() * BODY_PARTS_INITIAL.length)]
  );
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error', message: string } | null>(null);
  const [score, setScore] = useState(0);

  const handleOptionClick = (part: BodyPart) => {
    if (part.id === currentPart.id) {
      setFeedback({ type: 'success', message: 'Chính xác! Bé giỏi quá!' });
      setScore(s => s + 10);
      setTimeout(() => {
        setFeedback(null);
        setCurrentPart(BODY_PARTS_INITIAL[Math.floor(Math.random() * BODY_PARTS_INITIAL.length)]);
      }, 2000);
    } else {
      setFeedback({ type: 'error', message: 'Chưa đúng rồi, bé hãy thử lại nhé!' });
      setTimeout(() => setFeedback(null), 2000);
    }
  };

  return (
    <section id="quiz" className="py-16 px-4 bg-yellow-50 rounded-[3rem] my-12 shadow-inner">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-block bg-yellow-400 text-white px-6 py-2 rounded-full font-bold mb-4 shadow-sm">
          ĐIỂM: {score} 🌟
        </div>
        <h2 className="text-3xl font-bold text-yellow-900 mb-2">Thử Thách Đố Vui</h2>
        <p className="text-lg text-yellow-800 mb-8 font-medium">
          Đâu là <span className="underline decoration-yellow-400 decoration-4 text-2xl px-1">"{currentPart.vn}"</span> của bạn Trăn?
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {BODY_PARTS_INITIAL.map((part) => (
            <button
              key={part.id}
              onClick={() => handleOptionClick(part)}
              className="bg-white hover:bg-yellow-100 p-4 rounded-2xl shadow-sm border-2 border-yellow-200 text-lg font-bold text-yellow-800 transition-all active:scale-95"
            >
              {part.en}
            </button>
          ))}
        </div>

        {feedback && (
          <div className={`mt-8 p-4 rounded-2xl font-bold text-xl animate-bounce ${
            feedback.type === 'success' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
          }`}>
            {feedback.message}
          </div>
        )}
      </div>
    </section>
  );
};

export default BodyPartsQuiz;
