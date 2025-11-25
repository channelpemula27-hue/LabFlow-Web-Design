import React, { useState, useEffect } from 'react';
import { Quote, Activity, Star, CheckCircle2, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Ivan Sarifudin",
      role: "CEO, Labmania Indonesia",
      quote: "LabFlow mampu memecahkan masalah alur kerja kami, menjadi lebih efisien. Visi LabFlow ini sangat baik kedepannya, saya tidak sabar untuk menunggu project selanjutnya.",
      metric: "Workflow Optimized",
      tags: ["Efficiency", "Automation"],
      rating: 5
    },
    {
      id: 2,
      name: "Ayu Melinda",
      role: "Trainer, Labmania Indonesia",
      quote: "Efisiensi kerja kami meningkat lebih dari 30% dan human-error team kami hampir hilang. Sebuah transformasi digital yang nyata.",
      metric: "30% Growth",
      tags: ["Productivity", "Zero Error"],
      rating: 5
    }
  ];

  return (
    <section className="relative min-h-screen bg-slate-950 text-slate-200 py-24 px-4 overflow-hidden font-sans selection:bg-cyan-500 selection:text-white flex flex-col justify-center">
      
      {/* --- DYNAMIC BACKGROUND EFFECTS --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ 
               backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, 
               backgroundSize: '40px 40px' 
             }}>
        </div>
        
        {/* Orbs */}
        <div 
          className="absolute top-[10%] left-[-5%] w-[40vw] h-[40vw] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse"
          style={{ transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)` }}
        ></div>
        <div 
          className="absolute top-[40%] right-[-10%] w-[35vw] h-[35vw] bg-cyan-500/10 rounded-full blur-[100px] mix-blend-screen"
          style={{ transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)` }}
        ></div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10 mb-32"> {/* Added mb-32 to give space for the bottom glow */}
        
        {/* Header Section */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800 backdrop-blur-md shadow-xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-xs font-mono font-medium text-cyan-400 uppercase tracking-wider">Success Stories</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
            Trusted by <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
              Visionary Leaders
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
            Bergabunglah dengan para inovator yang telah mendefinisikan ulang standar laboratorium modern.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 relative z-20">
          {testimonials.map((item, index) => (
            <div 
              key={item.id}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl opacity-0 blur transition duration-500 group-hover:opacity-40`} />
              
              <div className="relative h-full bg-slate-900/40 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-2xl overflow-hidden flex flex-col justify-between transition-transform duration-500 hover:-translate-y-1">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none mix-blend-overlay"></div>
                
                <div className="relative z-10 flex justify-between items-start mb-8">
                  <div className="flex gap-2">
                     {item.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold font-mono text-cyan-200/70 px-2 py-1 bg-cyan-900/20 rounded border border-cyan-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Quote className="text-slate-700 w-10 h-10 group-hover:text-cyan-500/50 transition-colors duration-500" />
                </div>

                <div className="relative z-10 mb-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xl md:text-2xl font-light text-slate-200 leading-relaxed">
                    "{item.quote}"
                  </p>
                </div>

                <div className="relative z-10 pt-8 border-t border-white/10 flex items-end justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {item.name.charAt(0)}
                      </div>
                      <div className="absolute -bottom-1 -right-1 bg-slate-900 rounded-full p-0.5">
                        <CheckCircle2 size={16} className="text-cyan-400 fill-slate-900" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-base">{item.name}</h4>
                      <p className="text-sm text-slate-400">{item.role}</p>
                    </div>
                  </div>

                  <div className="hidden sm:flex flex-col items-end">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 mb-1">
                      <Activity size={12} />
                      <span>{item.metric}</span>
                    </div>
                    <div className="h-1 w-24 bg-slate-700/50 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 w-[85%] rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* --- VISUAL HORIZON DIVIDER (NO TEXT/NO CTA) --- */}
      {/* Ini adalah objek visual gradien biru murni sesuai permintaan */}
      <div className="absolute bottom-0 left-0 right-0 h-[400px] pointer-events-none z-0">
         {/* 1. Main Horizon Blue Glow (Bottom Up) */}
         <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-blue-600/30 via-cyan-500/5 to-transparent"></div>
         
         {/* 2. Concentric Circles / Radar Effect (Visual Only) */}
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full overflow-hidden opacity-30">
            <div className="absolute bottom-[-150px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] border border-blue-400/20 rounded-full"></div>
            <div className="absolute bottom-[-250px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] border border-blue-400/10 rounded-full"></div>
            <div className="absolute bottom-[-350px] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] border border-blue-400/5 rounded-full"></div>
         </div>

         {/* 3. Intense Center Glow Spot */}
         <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 w-[300px] h-[150px] bg-blue-500/40 blur-[80px] rounded-full mix-blend-screen"></div>

         {/* 4. Bottom Grid Accent (Stronger near bottom) */}
         <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:linear-gradient(to_top,black,transparent)]"></div>
      </div>
      
      {/* Footer Note (Small branding) */}
      <div className="relative z-10 text-center pb-8 opacity-50">
          <p className="text-slate-500 text-xs font-mono flex items-center justify-center gap-2">
              <Cpu size={12} />
              LABFLOW INDONESIA
          </p>
      </div>

    </section>
  );
};

export default Testimonials;