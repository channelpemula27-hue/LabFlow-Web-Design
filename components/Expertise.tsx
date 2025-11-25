
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { CheckCircle2, ShieldCheck, FileText, Target, Settings2 } from 'lucide-react';

// Data untuk setiap kartu nilai
const valuesData = [
  {
    id: 1,
    icon: ShieldCheck,
    title: "17025 Compliant",
    color: "labblue", // Menggunakan warna kustom 'labblue'
    description: "Memenuhi standar internasional untuk kompetensi laboratorium.",
    delay: 0,
  },
  {
    id: 2,
    icon: FileText,
    title: "Traceable Data",
    color: "purple",
    description: "Jejak audit lengkap untuk setiap titik data yang dihasilkan.",
    delay: 0.2,
  },
  {
    id: 3,
    icon: Target,
    title: "Human Error 0%",
    color: "emerald",
    description: "Otomatisasi yang menghilangkan risiko kesalahan manual.",
    delay: 0.4,
  },
  {
    id: 4,
    icon: Settings2,
    title: "SOP Adaptive",
    color: "orange",
    description: "Fleksibel menyesuaikan dengan prosedur operasional standar Anda.",
    delay: 0.6,
  },
];

const Expertise: React.FC = () => {
  // Varian animasi untuk kartu
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: "easeOut",
      },
    }),
    hover: {
      scale: 1.05,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="expertise" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div className="order-2 lg:order-1 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Expertise</h3>
              <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-labblue-500 pl-6">
                We are not just software developers; we are <strong>laboratory practitioners</strong>. By combining technical testing experience and deep understanding of ISO standards, we build solutions that truly understand your laboratory's "language".
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Adaptability</h3>
              <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-purple-500 pl-6">
                Forget rigid systems that force you to change SOPs. Our AI agents are designed to <strong>adapt to your unique workflow</strong>. We automate repetitive tasks and integrate instruments without disrupting the existing work rhythm.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Focus on Standards (Audit Ready)</h3>
              <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-emerald-500 pl-6">
                Your peace of mind is our priority. LabFlow is built on an <strong>audit-readiness foundation</strong>, ensuring every data point is tracked, validated, and secure. We turn dizzying audit preparation into a transparent automated process.
              </p>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2 flex items-center justify-center">
            <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
              {/* Latar Belakang Abstrak */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-labblue-100/50 to-purple-100/50 rounded-full blur-3xl opacity-70 animate-pulse"></div>
              
              {/* Dashed Border Container */}
              <div className="absolute top-0 left-0 right-0 bottom-0 border-2 border-dashed border-labblue-200 rounded-3xl pointer-events-none"></div>

              <div className="grid grid-cols-2 gap-6 relative z-10 w-full max-w-md p-6">
                 {valuesData.map((item, index) => {
                   const Icon = item.icon;
                   // Menentukan kelas warna secara dinamis
                   const bgColorClass = `bg-${item.color}-50`;
                   const iconBgColorClass = `bg-${item.color}-100`;
                   const iconColorClass = `text-${item.color}-600`;
                   const borderColorClass = `border-${item.color}-100`;
                   // Menambahkan margin top pada kartu di kolom kedua untuk efek "staggered"
                   const marginTopClass = index % 2 !== 0 ? "mt-12" : "";

                   return (
                     <motion.div
                       key={item.id}
                       variants={cardVariants}
                       initial="hidden"
                       whileInView="visible"
                       whileHover="hover"
                       viewport={{ once: true, margin: "-50px" }}
                       custom={item.delay}
                       className={`${bgColorClass} ${borderColorClass} ${marginTopClass} relative p-6 rounded-2xl shadow-lg border flex flex-col items-center text-center gap-4 overflow-hidden group`}
                     >
                       {/* Elemen Dekoratif Latar Belakang */}
                       <div className={`absolute -right-4 -bottom-4 w-24 h-24 ${iconBgColorClass} rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500`}></div>
                       <Icon className={`absolute right-2 bottom-2 ${iconColorClass} opacity-5 w-16 h-16 group-hover:rotate-12 transition-transform duration-500`} />

                       <div className={`${iconBgColorClass} w-14 h-14 rounded-full flex items-center justify-center ${iconColorClass} shadow-sm relative z-10 group-hover:scale-110 transition-transform duration-300`}>
                         <Icon size={28} />
                       </div>
                       <h4 className="font-bold text-slate-800 text-lg relative z-10">{item.title}</h4>
                       {/* Deskripsi opsional untuk menambah konteks */}
                       <p className="text-sm text-slate-600 relative z-10">{item.description}</p>
                     </motion.div>
                   );
                 })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Expertise;
