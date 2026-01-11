
import React, { useState, useEffect } from 'react';
import { getPythonFacts } from '../services/gemini';
import { PythonFact } from '../types';

const FactsSection: React.FC = () => {
  const [facts, setFacts] = useState<PythonFact[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchFacts = async () => {
      try {
        const data = await getPythonFacts();
        setFacts(data);
      } catch (err) {
        console.error("Failed to fetch facts", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFacts();
  }, []);

  if (isLoading) {
    return (
      <div className="py-20 text-center text-green-600">
        <p className="animate-pulse">Đang tìm những sự thật thú vị...</p>
      </div>
    );
  }

  return (
    <section id="facts" className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-green-800 text-center mb-10">Bé Có Biết Không?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {facts.map((fact, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-3xl shadow-md border-b-4 border-green-400 hover:transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                💡
              </div>
              <h3 className="text-xl font-bold text-green-700 mb-3">{fact.title}</h3>
              <p className="text-gray-600 leading-relaxed">{fact.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FactsSection;
