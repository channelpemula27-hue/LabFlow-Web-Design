import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Database, Package, Microscope, User, FlaskConical } from 'lucide-react';

interface AboutProps {
  onFindSolution: () => void;
}

const About: React.FC<AboutProps> = ({ onFindSolution }) => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h4 className="text-labblue-600 font-semibold text-lg mb-2">We’re Flo</h4>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              Pleased to meet you.
            </h2>
            <div className="prose prose-lg text-slate-600 mb-8">
              <p className="mb-6">
                LabFlow is your digital transformation partner. We automate, optimize, and accelerate process flows within your laboratory using a foundation of <strong>Automation, AI Agents, and Agentic AI</strong>.
              </p>
              <p>
                We understand that every lab is unique. Our mission is to provide flexible, high-performance solutions that adapt to your specific needs, ensuring compliance while boosting productivity.
              </p>
            </div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Sparkles className="text-yellow-500" size={20} />
                Got a lab problem?
              </h3>
              <p className="text-slate-600 mb-6">
                Explain your laboratory problem and get a flexible solution tailored for your specific workflow.
              </p>
              <motion.button 
                onClick={onFindSolution}
                whileTap={{ scale: 0.95 }}
                animate={{ boxShadow: ["0 4px 6px -1px rgba(14, 165, 233, 0.1)", "0 10px 15px -3px rgba(14, 165, 233, 0.3)", "0 4px 6px -1px rgba(14, 165, 233, 0.1)"] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-full sm:w-auto px-6 py-3 bg-labblue-600 hover:bg-labblue-700 text-white rounded-lg font-medium transition-colors"
              >
                Find a Solution
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-square md:aspect-[4/5] bg-slate-950 flex items-center justify-center p-8 border border-slate-800">
               
               {/* Background Effects */}
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800/40 via-slate-950 to-slate-950"></div>
               <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

               {/* Network Lines & Particles */}
               <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                  {/* Lines - x1/y1 50% ensures start from exact center */}
                  <line x1="50%" y1="50%" x2="15%" y2="15%" stroke="#1e293b" strokeWidth="2" />
                  <line x1="50%" y1="50%" x2="85%" y2="15%" stroke="#1e293b" strokeWidth="2" />
                  <line x1="50%" y1="50%" x2="15%" y2="85%" stroke="#1e293b" strokeWidth="2" />
                  <line x1="50%" y1="50%" x2="85%" y2="85%" stroke="#1e293b" strokeWidth="2" />

                  {/* Active Connection Beams */}
                  <motion.line x1="50%" y1="50%" x2="15%" y2="15%" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity }} />
                  <motion.line x1="50%" y1="50%" x2="85%" y2="15%" stroke="#a855f7" strokeWidth="1" strokeOpacity="0.3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }} />
                  <motion.line x1="50%" y1="50%" x2="15%" y2="85%" stroke="#10b981" strokeWidth="1" strokeOpacity="0.3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, repeat: Infinity, delay: 1 }} />
                  <motion.line x1="50%" y1="50%" x2="85%" y2="85%" stroke="#f43f5e" strokeWidth="1" strokeOpacity="0.3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.2, repeat: Infinity, delay: 0.2 }} />

                  {/* Particles */}
                  <motion.circle r="3" fill="#38bdf8" animate={{ cx: ["50%", "15%"], cy: ["50%", "15%"], opacity: [1, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
                  <motion.circle r="3" fill="#38bdf8" animate={{ cx: ["15%", "50%"], cy: ["15%", "50%"], opacity: [0, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }} />
                  
                  <motion.circle r="3" fill="#a855f7" animate={{ cx: ["50%", "85%"], cy: ["50%", "15%"], opacity: [1, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 0.5 }} />
                  
                  <motion.circle r="3" fill="#10b981" animate={{ cx: ["50%", "15%"], cy: ["50%", "85%"], opacity: [1, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 0.2 }} />
                  
                  <motion.circle r="3" fill="#f43f5e" animate={{ cx: ["85%", "50%"], cy: ["85%", "50%"], opacity: [0, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
               </svg>

               {/* Central Hub */}
               {/* FIX APPLIED: Removed Tailwind translate classes, added style={{ x: "-50%", y: "-50%" }} */}
               <motion.div 
                 style={{ x: "-50%", y: "-50%" }}
                 animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 0px rgba(14, 165, 233, 0)", "0 0 30px rgba(14, 165, 233, 0.4)", "0 0 0px rgba(14, 165, 233, 0)"] }}
                 transition={{ duration: 3, repeat: Infinity }}
                 className="absolute top-1/2 left-1/2 z-20 w-28 h-28 bg-slate-900 rounded-full border-4 border-labblue-500 flex flex-col items-center justify-center shadow-2xl gap-1"
               >
                 <div className="relative">
                   <div className="absolute inset-0 bg-labblue-400 blur-xl opacity-40 animate-pulse"></div>
                   <FlaskConical className="text-white relative z-10" size={32} />
                 </div>
                 <div className="text-white font-bold text-[10px] tracking-[0.15em]">LABFLOW</div>
               </motion.div>

               {/* Top Left: Data Sources */}
               <motion.div 
                 whileHover={{ scale: 1.1 }}
                 className="absolute top-[12%] left-[8%] z-20 flex flex-col items-center gap-2"
               >
                 <div className="w-14 h-14 bg-slate-800 rounded-2xl border border-slate-700 flex items-center justify-center shadow-lg hover:border-blue-400 transition-colors">
                   <Database className="text-blue-400" size={24} />
                 </div>
                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide bg-slate-900/80 px-2 py-0.5 rounded-full border border-slate-800">Data Sources</span>
               </motion.div>

               {/* Top Right: Inventory */}
               <motion.div 
                 whileHover={{ scale: 1.1 }}
                 className="absolute top-[12%] right-[8%] z-20 flex flex-col items-center gap-2"
               >
                 <div className="w-14 h-14 bg-slate-800 rounded-2xl border border-slate-700 flex items-center justify-center shadow-lg hover:border-purple-400 transition-colors">
                   <Package className="text-purple-400" size={24} />
                 </div>
                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide bg-slate-900/80 px-2 py-0.5 rounded-full border border-slate-800">Inventory</span>
               </motion.div>

               {/* Bottom Left: Instrument */}
               <motion.div 
                 whileHover={{ scale: 1.1 }}
                 className="absolute bottom-[12%] left-[8%] z-20 flex flex-col items-center gap-2"
               >
                 <div className="w-14 h-14 bg-slate-800 rounded-2xl border border-slate-700 flex items-center justify-center shadow-lg hover:border-emerald-400 transition-colors">
                   <Microscope className="text-emerald-400" size={24} />
                 </div>
                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide bg-slate-900/80 px-2 py-0.5 rounded-full border border-slate-800">Instrument</span>
               </motion.div>

               {/* Bottom Right: Analyst */}
               <motion.div 
                 whileHover={{ scale: 1.1 }}
                 className="absolute bottom-[12%] right-[8%] z-20 flex flex-col items-center gap-2"
               >
                 <div className="w-14 h-14 bg-slate-800 rounded-2xl border border-slate-700 flex items-center justify-center shadow-lg hover:border-pink-400 transition-colors">
                   <User className="text-pink-400" size={24} />
                 </div>
                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide bg-slate-900/80 px-2 py-0.5 rounded-full border border-slate-800">Analyst</span>
               </motion.div>

               {/* Status Pill */}
               <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-slate-900/90 backdrop-blur-sm px-4 py-1.5 rounded-full border border-slate-700/50 flex items-center gap-2 shadow-xl z-30">
                 <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse delay-100"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse delay-200"></span>
                 </div>
                 <span className="text-[10px] font-mono text-green-400 uppercase tracking-wider">System Synchronized</span>
               </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;