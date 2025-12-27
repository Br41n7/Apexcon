
import React from 'react';

const About: React.FC = () => {
  const values = [
    { title: 'Integrity', desc: 'Honesty and transparency are the pillars of every contract we sign.' },
    { title: 'Quality', desc: 'We never compromise on materials or craftsmanship, ensuring lasting value.' },
    { title: 'Innovation', desc: 'Embracing modern engineering techniques for smarter, faster building.' }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1541913057-9556e511bd95?auto=format&fit=crop&w=800&q=80" 
                alt="Founders at construction site" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-blue-600 p-8 rounded-2xl text-white hidden md:block shadow-xl">
              <div className="text-4xl font-black mb-1">15+</div>
              <div className="text-sm font-bold uppercase tracking-widest opacity-80">Years of Excellence</div>
            </div>
          </div>
          
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-1 w-8 bg-blue-600"></div>
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm text-center lg:text-left">Our Story</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">Established Legacy, Built for the Future</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Founded in 2009 by a group of visionary engineers, Apex Construction & Developments began with a single mission: to revolutionize the urban landscape through structural integrity and aesthetic brilliance.
            </p>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Today, we are a leading name in premium developments, known for our unwavering commitment to ISO standards and sustainable building practices. We don't just build houses; we create ecosystems where families and businesses thrive.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((value, idx) => (
                <div key={idx} className="p-4 border-l-2 border-blue-100 hover:border-blue-600 transition-colors group">
                  <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{value.title}</h4>
                  <p className="text-sm text-gray-500 leading-snug">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
