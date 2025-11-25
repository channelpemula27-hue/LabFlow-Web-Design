
import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { 
  Cpu, Network, FileCheck, ArrowRight, Zap, 
  Layers, Lock, Workflow, CheckCircle2, ChevronDown 
} from 'lucide-react';

interface ServicesPageProps {
  onTalkToUs: () => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onTalkToUs }) => {
  const [activeStep, setActiveStep] = useState(0);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 50 }
    }
  };

  const detailedServices = [
    {
      id: "automation",
      title: "Adaptive Automation",
      subtitle: "The Engine of Efficiency",
      description: "We don't just script tasks; we build intelligent agents that understand your SOPs. Utilizing robust n8n workflows and custom Python bridges, we connect legacy serial-port instruments to modern cloud databases without replacing hardware.",
      features: ["Legacy Equipment Bridging", "SOP-based Logic Agents", "Error-Handling Workflows", "Automated Reporting"],
      icon: <Cpu size={32} className="text-white" />,
      gradient: "from-blue-600 to-cyan-400"
    },
    {
      id: "ecosystem",
      title: "Integrated Ecosystem",
      subtitle: "The Nervous System of Your Lab",
      description: "Silos destroy productivity. We architect a unified data mesh where your LIMS, instruments, and inventory talk to each other in real-time. No more manual transcription. No more lost data.",
      features: ["IoT Sensor Networks", "Real-time Dashboards", "SampleManager LIMS Integration", "Bi-directional Data Sync"],
      icon: <Network size={32} className="text-white" />,
      gradient: "from-indigo-600 to-purple-500"
    },
    {
      id: "audit",
      title: "Audit Readiness",
      subtitle: "Compliance as Code",
      description: "Turn audit anxiety into assurance. Our systems automatically log every action, change, and result with a timestamped, immutable digital signature. ISO 17025 compliance is baked into the workflow, not checked after the fact.",
      features: ["Immutable Audit Trails", "Digital Signatures", "Role-Based Access Control", "Auto-Generated Compliance Docs"],
      icon: <FileCheck size={32} className="text-white" />,
      gradient: "from-emerald-600 to-teal-400"
    }
  ];

  const processSteps = [
    { title: "Discovery", desc: "We map your current SOPs and identify bottlenecks." },
    { title: "Architecture", desc: "We design a custom automation topology for your lab." },
    { title: "Integration", desc: "We deploy sensors, agents, and bridges non-disruptively." },
    { title: "Evolution", desc: "Our AI agents learn and optimize your workflow over time." }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen bg-slate-50 pt-20"
    >
      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-900"></div>
          {/* Animated Mesh Gradient */}
          <div className="absolute top-[-50%] left-[-20%] w-[80vw] h-[80vw] bg-blue-600/30 rounded-full blur-[120px] animate-blob"></div>
          <div className="absolute bottom-[-50%] right-[-20%] w-[80vw] h-[80vw] bg-cyan-500/20 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-mono mb-6 tracking-widest uppercase">
              LabFlow Services Suite
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
              Engineering the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400">
                Future of Science
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 font-light">
              We go beyond simple software. We build the digital infrastructure that allows your laboratory to operate at the speed of thought.
            </p>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* --- DEEP DIVE SERVICES --- */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-20"
          >
            {detailedServices.map((service, index) => (
              <motion.div 
                key={service.id}
                variants={itemVariants}
                className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Visual Side */}
                <div className="flex-1 w-full">
                  <motion.div 
                    whileHover={{ scale: 1.02, rotateY: 5 }}
                    className={`relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br ${service.gradient} p-1`}
                  >
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                    <div className="relative bg-slate-900/90 h-80 rounded-[22px] flex items-center justify-center p-8 overflow-hidden group">
                      {/* Background Icons Pattern */}
                      <div className="absolute inset-0 opacity-10 flex flex-wrap gap-8 p-4 rotate-12 scale-150">
                        {Array(10).fill(0).map((_, i) => (
                          <div key={i} className="text-white transform">{service.icon}</div>
                        ))}
                      </div>
                      
                      {/* Center Icon */}
                      <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 relative z-10`}>
                        {React.cloneElement(service.icon as React.ReactElement<any>, { size: 48 })}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Content Side */}
                <div className="flex-1 space-y-6">
                  <div className={`w-12 h-1 bg-gradient-to-r ${service.gradient}`}></div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{service.title}</h2>
                  <h3 className="text-xl text-labblue-600 font-medium">{service.subtitle}</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">{service.description}</p>
                  
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                        <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- PROCESS ROADMAP --- */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>

        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">The LabFlow Standard</h2>
            <p className="text-slate-400 text-lg">From chaotic workflows to orchestrated precision in four steps.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-slate-700 -z-10"></div>
                )}
                
                <div 
                  className={`bg-slate-800/50 backdrop-blur-md border border-slate-700 p-6 rounded-2xl hover:bg-slate-800 transition-colors h-full flex flex-col items-center text-center group cursor-pointer ${activeStep === index ? 'ring-2 ring-blue-500 bg-slate-800' : ''}`}
                  onMouseEnter={() => setActiveStep(index)}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mb-4 transition-colors ${activeStep === index ? 'bg-blue-500 text-white' : 'bg-slate-700 text-slate-400'}`}>
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
        <div className="container mx-auto px-6 text-center relative z-10 text-white">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to modernize?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
              Stop letting manual processes slow down your innovation. Let's build your custom automation roadmap today.
            </p>
            <button 
              onClick={onTalkToUs}
              className="px-10 py-5 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-3 mx-auto"
            >
              Start Your Transformation <ArrowRight />
            </button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ServicesPage;
