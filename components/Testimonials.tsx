
import React from 'react';

const testimonials = [
  {
    name: 'Michael O.',
    project: 'Residential Villa - Lagos',
    content: 'The attention to detail in the Skyline Heights project was beyond my expectations. Apex delivered on time and within the budget we agreed upon. Truly professional.',
    rating: 5
  },
  {
    name: 'Sarah L.',
    project: 'Nexus Business Hub - Abuja',
    content: 'Apex Construction transformed our corporate headquarters. Their innovative approach to workspace design has significantly boosted our team’s productivity and morale.',
    rating: 5
  },
  {
    name: 'Dr. Ibrahim K.',
    project: 'Industrial Park Phase I',
    content: 'Managing an industrial project of this scale requires precision and transparency. Apex provided both at every stage. I highly recommend them for large-scale developments.',
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">Client Feedback</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            What our valued partners say about their experience building with Apex Construction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all flex flex-col">
              <div className="flex text-blue-500 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="flex-1 italic text-gray-600 mb-8 leading-relaxed">
                "{t.content}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-4">
                  {t.name.split(' ')[0][0]}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 leading-tight">{t.name}</h4>
                  <p className="text-xs text-blue-600 font-medium uppercase tracking-wider">{t.project}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
