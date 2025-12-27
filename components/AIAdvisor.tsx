
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

const AIAdvisor: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getAdvice = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const res = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `As an expert construction consultant, advise on this project inquiry: "${prompt}". Suggest materials, design principles, and potential challenges. Keep it concise but professional.`,
        config: {
          systemInstruction: 'You are Apex Construction AI, a professional architectural and structural advisor.'
        }
      });
      setResponse(res.text || "I'm unable to provide advice at the moment. Please try again.");
    } catch (err) {
      setError("Failed to reach the AI consultant. Please check your connection.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 bg-blue-900 overflow-hidden relative">
      {/* Abstract Design Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-800 rounded-full blur-3xl -mr-48 -mt-48 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600 rounded-full blur-3xl -ml-32 -mb-32 opacity-30"></div>

      <div className="max-w-4xl mx-auto relative z-10 text-white">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 bg-blue-700/50 backdrop-blur-sm border border-blue-500/30 rounded-full text-blue-300 text-sm font-bold mb-4 uppercase tracking-widest">
            AI Project Consultant
          </div>
          <h2 className="text-4xl font-display font-bold mb-4">Smart Building Advisor</h2>
          <p className="text-blue-200 text-lg opacity-80">
            Tell us about your dream project and let our AI provide instant architectural and structural insights.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-2xl">
          <div className="flex flex-col gap-4">
            <textarea
              className="w-full h-32 bg-white/5 border border-white/10 rounded-2xl p-4 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
              placeholder="e.g., I want to build a 4-bedroom sustainable duplex in a coastal area. What should I consider for the foundation and materials?"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <button
              onClick={getAdvice}
              disabled={loading}
              className={`w-full py-4 bg-white text-blue-900 font-bold rounded-xl transition-all transform active:scale-95 flex items-center justify-center space-x-2 ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-50 hover:shadow-lg shadow-white/10'}`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-blue-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Consulting...</span>
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Get AI Advice</span>
                </>
              )}
            </button>
          </div>

          {(response || error) && (
            <div className={`mt-8 p-6 rounded-2xl ${error ? 'bg-red-500/20 text-red-200 border border-red-500/30' : 'bg-white/5 text-blue-50 border border-white/10'}`}>
              <div className="flex items-center space-x-2 mb-4">
                <div className={`w-2 h-2 rounded-full ${error ? 'bg-red-500' : 'bg-green-500'}`}></div>
                <span className="text-xs font-bold uppercase tracking-widest">{error ? 'Error' : 'AI Recommendation'}</span>
              </div>
              <p className="whitespace-pre-wrap leading-relaxed text-sm md:text-base">
                {error || response}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIAdvisor;
