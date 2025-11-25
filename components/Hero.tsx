import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, Atom, Dna, FlaskConical, Microscope, LayoutDashboard, Wrench, ChevronRight, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onConsultClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onConsultClick }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-50">
      
      {/* --- Dynamic Background Layer --- */}
      
      {/* 1. Gradient Orbs (Blobs) */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-labblue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 -left-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      {/* 2. Animated Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{
              backgroundImage: 'radial-gradient(#0ea5e9 1px, transparent 1px)',
              backgroundSize: '40px 40px'
           }}>
      </div>

      {/* 3. Floating Lab Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ y: [-20, 20, -20], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[10%] text-labblue-200 opacity-60"
        >
          <Atom size={64} />
        </motion.div>
        
        <motion.div 
          animate={{ y: [20, -20, 20], rotate: [0, -5, 5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[25%] right-[15%] text-purple-200 opacity-60"
        >
          <Dna size={80} />
        </motion.div>

        <motion.div 
          animate={{ y: [0, -30, 0], x: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] left-[20%] text-emerald-100 opacity-60"
        >
          <FlaskConical size={56} />
        </motion.div>

        <motion.div 
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[30%] right-[10%] text-labblue-100 opacity-60"
        >
          <Microscope size={48} />
        </motion.div>
      </div>

      {/* --- Content Layer --- */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        
        <motion.img 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          src="https://i.postimg.cc/J0MDkbWj/labflow-transparan.png"
          alt="LabFlow Logo"
          className="h-16 w-auto mb-6 object-contain"
        />
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight tracking-tight max-w-5xl mb-8"
        >
          We’re Reimagining the <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-labblue-600 via-indigo-500 to-labblue-600 animate-gradient-x relative bg-[length:200%_auto]">
            Future of Laboratory Systems
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-labblue-200 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
            </svg>
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 max-w-3xl mb-10 leading-relaxed"
        >
          We transform your laboratory into an orchestrated powerhouse. 
          Make workflows more efficient, faster, and more accurate with intelligent automation.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full justify-center"
        >
          <a 
            href="#about"
            className="px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Explore Services
            <ArrowRight size={18} />
          </a>
          <button 
            onClick={onConsultClick}
            className="px-8 py-4 bg-white text-labblue-600 border border-labblue-100 rounded-xl font-semibold hover:bg-labblue-50 transition-all shadow-sm hover:shadow-md hover:-translate-y-1 flex items-center justify-center gap-2 group"
          >
            <span className="relative flex h-3 w-3 mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-labblue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-labblue-500"></span>
            </span>
            Consult with AI Agent
          </button>
        </motion.div>

        {/* Floating Dashboard Preview */}
        <motion.div 
          initial={{ opacity: 0, y: 100, rotateX: 20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.2, delay: 0.4, type: "spring" }}
          style={{ perspective: 1000 }}
          className="mt-20 w-full max-w-6xl relative"
        >
          {/* Continuous Floating Animation */}
          <motion.div
             animate={{ y: [0, -15, 0] }}
             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
             className="relative"
          >
              <div className="absolute inset-0 bg-labblue-600 blur-3xl opacity-15 rounded-full transform scale-90 translate-y-10"></div>
              
              <div className="relative bg-slate-100 backdrop-blur-xl border border-white/40 p-1 rounded-2xl shadow-2xl ring-1 ring-slate-900/5 overflow-hidden">
                
                {/* Mock Browser Window */}
                <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-inner flex h-[500px] md:h-[600px] text-left text-slate-800 font-sans text-xs md:text-sm">
                   
                   {/* Sidebar */}
                   <div className="w-16 md:w-56 bg-slate-50 border-r border-slate-200 flex flex-col flex-shrink-0 pt-4">
                      <div className="px-4 mb-6 hidden md:block">
                        <div className="font-bold text-lg text-slate-800 flex items-center gap-2">
                          <FlaskConical size={20} className="text-labblue-600"/>
                          <div className="flex flex-col leading-tight">
                              <span>LabFlow</span>
                              <span className="text-[10px] text-slate-400 font-normal">Instrument v</span>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-1 px-2">
                        <div className="flex items-center gap-3 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg cursor-pointer font-medium">
                          <LayoutDashboard size={16} />
                          <span className="hidden md:inline">Dashboard</span>
                        </div>
                        <div className="ml-8 space-y-1 hidden md:block">
                            <div className="px-3 py-1.5 bg-blue-100/50 text-blue-700 rounded text-xs font-medium">Main Dashboard</div>
                            <div className="px-3 py-1.5 text-slate-500 hover:text-blue-600 text-xs">Calibration Schedule</div>
                        </div>
                        <div className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:bg-slate-100 rounded-lg cursor-pointer">
                          <Microscope size={16} />
                          <span className="hidden md:inline">Instrument</span>
                        </div>
                        <div className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:bg-slate-100 rounded-lg cursor-pointer">
                          <Wrench size={16} />
                          <span className="hidden md:inline">Equipment</span>
                        </div>
                        <div className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:bg-slate-100 rounded-lg cursor-pointer">
                           <div className="w-4 h-4 flex items-center justify-center border border-slate-400 rounded text-[8px]">A</div>
                           <span className="hidden md:inline">Laboratory Asset Detail</span>
                        </div>
                         <div className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:bg-slate-100 rounded-lg cursor-pointer">
                           <div className="w-4 h-4 flex items-center justify-center border border-slate-400 rounded text-[8px]">M</div>
                           <span className="hidden md:inline">Maintenance</span>
                        </div>
                      </div>
                   </div>

                   {/* Main Content */}
                   <div className="flex-1 flex flex-col bg-white overflow-hidden">
                      {/* Top Breadcrumb & Header */}
                      <div className="p-6 pb-0">
                         <div className="flex justify-between items-start mb-4">
                             <div className="text-xs text-slate-400 flex items-center gap-2">
                                <span>Dashboard</span>
                                <ChevronRight size={10} />
                                <span className="text-slate-800 font-medium">Main Dashboard</span>
                             </div>
                             <div className="p-1 hover:bg-slate-100 rounded cursor-pointer">
                                 <span className="text-xs border border-slate-200 rounded px-1.5 py-0.5 text-slate-500">...</span>
                             </div>
                         </div>

                         <div className="flex justify-between items-start mb-6">
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-1">Status & Monitoring Alat</h2>
                                <p className="text-xs text-slate-500">Visual overview and detailed list of all equipment statuses from the Calibration Database, along with instrument and equipment navigation.</p>
                            </div>
                            <button className="bg-slate-900 hover:bg-slate-800 text-white text-xs px-4 py-2 rounded-md flex items-center gap-2 transition-colors">
                                Go to Lab Assistant <ArrowUpRight size={12} />
                            </button>
                         </div>

                         {/* Tabs */}
                         <div className="flex gap-8 border-b border-slate-200">
                             <div className="pb-3 border-b-2 border-slate-900 font-medium text-sm cursor-pointer text-slate-900">Instrument</div>
                             <div className="pb-3 border-b-2 border-transparent text-slate-500 text-sm cursor-pointer hover:text-slate-700">Peralatan</div>
                             <div className="pb-3 border-b-2 border-transparent text-slate-500 text-sm cursor-pointer hover:text-slate-700">All records</div>
                         </div>
                      </div>

                      {/* Dashboard Scrollable Content */}
                      <div className="flex-1 overflow-y-auto p-6 bg-slate-50/50 relative">
                         
                         {/* Chart Card */}
                         <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm mb-4">
                             <div className="flex justify-between mb-6">
                                 <div>
                                     <h3 className="font-bold text-slate-800 text-sm">Equipment Status Distribution</h3>
                                     <p className="text-[10px] text-slate-400">Distribution of equipment statuses based on Status Alat in the Calibration Database.</p>
                                 </div>
                                 <div className="text-slate-300 hover:text-slate-500 cursor-pointer"><ArrowUpRight size={16}/></div>
                             </div>
                             
                             <div className="flex items-center justify-center gap-12">
                                 {/* Donut Chart */}
                                 <div className="relative w-40 h-40 rounded-full" 
                                      style={{
                                          background: 'conic-gradient(#fbcfe8 0% 9.1%, #bae6fd 9.1% 18.2%, #bbf7d0 18.2% 100%)'
                                      }}>
                                     <div className="absolute inset-8 bg-white rounded-full flex items-center justify-center flex-col">
                                         {/* Percentage texts removed */}
                                     </div>
                                 </div>
                                 
                                 {/* Legend */}
                                 <div className="space-y-2">
                                     <div className="text-xs text-slate-400 font-medium mb-2">Status Alat</div>
                                     <div className="flex items-center gap-2 text-xs text-slate-600">
                                         <div className="w-2 h-2 rounded-full bg-green-200"></div> 
                                         <span>Terkalibrasi (9)</span>
                                     </div>
                                     <div className="flex items-center gap-2 text-xs text-slate-600">
                                         <div className="w-2 h-2 rounded-full bg-blue-200"></div> 
                                         <span>Jadwal Mendatang (1)</span>
                                     </div>
                                     <div className="flex items-center gap-2 text-xs text-slate-600">
                                         <div className="w-2 h-2 rounded-full bg-pink-200"></div> 
                                         <span>Lewat Jatuh Tempo (1)</span>
                                     </div>
                                 </div>
                             </div>
                         </div>

                         {/* Table Card */}
                         <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                             <h3 className="font-bold text-slate-800 text-sm mb-6">Calibration Database List View</h3>
                             
                             <div className="overflow-x-auto">
                                 <table className="w-full text-xs text-left border-collapse">
                                     <thead>
                                         <tr className="text-slate-400 border-b border-slate-100">
                                             <th className="pb-3 font-normal w-1/3">Nama Alat</th>
                                             <th className="pb-3 font-normal">Hari Menuju Jatuh Tempo</th>
                                             <th className="pb-3 font-normal">Kalibrasi Selanjutnya</th>
                                             <th className="pb-3 font-normal">Kalibrasi Terakhir</th>
                                         </tr>
                                     </thead>
                                     <tbody className="text-slate-700">
                                         <tr className="border-b border-slate-50 hover:bg-slate-50">
                                             <td className="py-3 flex items-center gap-2">
                                                 <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-[10px] font-medium">Terkalibrasi</span> 
                                                 Spektro Single Beam
                                             </td>
                                             <td className="py-3">206</td>
                                             <td className="py-3">June 18, 2026</td>
                                             <td className="py-3">2025-06-18</td>
                                         </tr>
                                         <tr className="border-b border-slate-50 hover:bg-slate-50">
                                             <td className="py-3 flex items-center gap-2">
                                                 <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-[10px] font-medium">Terkalibrasi</span> 
                                                 LC-MS
                                             </td>
                                             <td className="py-3">190</td>
                                             <td className="py-3">June 2, 2026</td>
                                             <td className="py-3">2025-06-02</td>
                                         </tr>
                                         <tr className="border-b border-slate-50 hover:bg-slate-50">
                                             <td className="py-3 flex items-center gap-2">
                                                 <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-[10px] font-medium">Terkalibrasi</span> 
                                                 GC-MS Agilent 01
                                             </td>
                                             <td className="py-3">43</td>
                                             <td className="py-3">January 6, 2026</td>
                                             <td className="py-3">2025-07-08</td>
                                         </tr>
                                         <tr className="border-b border-slate-50 hover:bg-slate-50">
                                             <td className="py-3 flex items-center gap-2">
                                                 <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-[10px] font-medium">Terkalibrasi</span> 
                                                 GC-MS Shimadzu
                                             </td>
                                             <td className="py-3">43</td>
                                             <td className="py-3">January 6, 2026</td>
                                             <td className="py-3">2025-07-08</td>
                                         </tr>
                                         <tr className="hover:bg-slate-50">
                                             <td className="py-3 flex items-center gap-2">
                                                 <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-[10px] font-medium">Terkalibrasi</span> 
                                                 Spark-OES
                                             </td>
                                             <td className="py-3">131</td>
                                             <td className="py-3">April 4, 2026</td>
                                             <td className="py-3">2025-10-04</td>
                                         </tr>
                                     </tbody>
                                 </table>
                             </div>
                         </div>
                        
                        {/* Scanning Line Overlay */}
                        <motion.div 
                          initial={{ top: "-10%" }}
                          animate={{ top: "120%" }}
                          transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                          className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-labblue-500 to-transparent opacity-30 shadow-[0_0_15px_rgba(14,165,233,0.6)] pointer-events-none z-10"
                        />
                      </div>
                   </div>
                </div>
              </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;