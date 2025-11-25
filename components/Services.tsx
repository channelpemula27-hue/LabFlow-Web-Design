import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Network, FileCheck } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Adaptive Automation",
      description: "We design flexible, adaptive, and high-performance AI automation agents based on your laboratory's unique SOPs. Workflow efficiency and ease of technology adoption are our standards, powered by robust n8n systems.",
      icon: <Cpu size={40} className="text-white" />,
      color: "from-blue-500 to-cyan-400",
      shadowColor: "shadow-blue-200"
    },
    {
      id: 2,
      title: "Integrated Ecosystem",
      description: "We create a unified, seamless, and interconnected laboratory ecosystem based on advanced AI and IoT integration. Real-time data synchronization between instruments, reagents, and admin ensures a single source of truth.",
      icon: <Network size={40} className="text-white" />,
      color: "from-indigo-500 to-purple-500",
      shadowColor: "shadow-indigo-200"
    },
    {
      id: 3,
      title: "Audit Readiness",
      description: "We build precise, secure, and regulatory-compliant digital systems based on ISO standards. Automatic data traceability and readiness assurance mean full peace of mind every time an auditor visits.",
      icon: <FileCheck size={40} className="text-white" />,
      color: "from-emerald-500 to-teal-400",
      shadowColor: "shadow-emerald-200"
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-labblue-600 font-bold tracking-wide uppercase text-sm mb-3">Our Services</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 max-w-2xl mx-auto leading-tight">
            Specialized in <span className="text-labblue-600">Intelligent</span> Lab Automation
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl ${service.shadowColor} transition-all duration-300 group border border-slate-100 relative overflow-hidden`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-10 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-500`}></div>
              
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-md group-hover:-translate-y-2 transition-transform duration-300`}>
                {service.icon}
              </div>
              
              <h4 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="text-slate-300 text-lg font-mono">0{service.id}.</span> 
                {service.title}
              </h4>
              
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;