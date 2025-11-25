import React, { useState, useEffect } from 'react';
import { FlaskConical, Mail, Phone, Linkedin, ArrowRight, ArrowUpRight } from 'lucide-react';

// Komponen Footer Premium
const Footer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Efek parallax halus mengikuti mouse untuk background blobs
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <footer className="relative w-full pt-20 pb-10 overflow-hidden bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white">
      
      {/* --- DYNAMIC BACKGROUND & AURORA EFFECTS --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ 
               backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, 
               backgroundSize: '40px 40px' 
             }}>
        </div>
        
        {/* Animated Orbs (Aurora Effect) */}
        <div 
          className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse"
          style={{ transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)` }}
        ></div>
        <div 
          className="absolute bottom-[-10%] right-[-5%] w-[35vw] h-[35vw] bg-cyan-500/10 rounded-full blur-[100px] mix-blend-screen"
          style={{ transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)` }}
        ></div>
        <div className="absolute top-[40%] left-[30%] w-[20vw] h-[20vw] bg-indigo-500/10 rounded-full blur-[80px] mix-blend-screen animate-bounce delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* --- HERO CTA SECTION (GLASSMORPHISM) --- */}
        <div className="relative w-full mb-24 group">
            {/* Glowing Border Gradient */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between overflow-hidden">
              {/* Decorative Circle inside Card */}
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/0 rounded-full blur-3xl pointer-events-none"></div>

              <div className="max-w-2xl relative z-10 text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                  Ready to revolutionize <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    your laboratory?
                  </span>
                </h2>
                <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed mb-8 md:mb-0">
                  Join the future of automation with LabFlow. Precision, speed, and reliability tailored for your workflow.
                </p>
              </div>

              <button className="relative group/btn z-10 px-8 py-4 bg-white text-slate-950 font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] flex items-center gap-3 overflow-hidden">
                <span className="relative z-10">Talk to Us</span>
                <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover/btn:translate-x-1" />
                {/* Button Shine Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"></div>
              </button>
            </div>
        </div>

        {/* --- FOOTER CONTENT GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-white/5 pt-16">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-4 space-y-6">
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative flex items-center justify-center w-12 h-12 bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-xl text-white shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300 group-hover:scale-110">
                <FlaskConical size={24} className="animate-pulse" />
              </div>
              <span className="text-3xl font-bold tracking-tighter text-white">LabFlow</span>
            </a>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Empowering scientific discovery through intelligent automation and seamless data management.
            </p>
            <div className="flex gap-4 pt-4">
              <SocialIcon icon={<Linkedin size={20} />} href="#" />
              <SocialIcon icon={<Mail size={20} />} href="mailto:farrel@labflow.my.id" />
              <SocialIcon icon={<Phone size={20} />} href="tel:+6285641525681" />
            </div>
          </div>

          {/* Links Columns */}
          <div className="col-span-1 md:col-span-2 md:col-start-6">
            <h4 className="text-white font-semibold mb-6 text-lg tracking-wide">Company</h4>
            <ul className="space-y-4">
              <FooterLink href="#home">Home</FooterLink>
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#services">Services</FooterLink>
              <FooterLink href="#careers" badge="Hiring">Careers</FooterLink>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-3">
            <h4 className="text-white font-semibold mb-6 text-lg tracking-wide">Solutions</h4>
            <ul className="space-y-4">
              <FooterLink href="#">Lab Consultation</FooterLink>
              <FooterLink href="#">LabFlow Inventory</FooterLink>
              <FooterLink href="#">Instrument Integration</FooterLink>
              <FooterLink href="#">SampleManager LIMS</FooterLink>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="text-white font-semibold mb-6 text-lg tracking-wide">Contact</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2.5"></span>
                <span>Jakarta, Indonesia</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5"></span>
                <span className="hover:text-cyan-400 transition-colors cursor-pointer">+62 856 4152 5681</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5"></span>
                <span className="hover:text-cyan-400 transition-colors cursor-pointer">farrel@labflow.my.id</span>
              </li>
            </ul>
          </div>
        </div>

        {/* --- COPYRIGHT BAR --- */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 pb-8 mt-12 border-t border-white/5 text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} LabFlow Inc. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Sub-komponen untuk Link Footer dengan animasi hover
interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  badge?: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children, badge }) => (
  <li>
    <a href={href} className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300 w-fit">
      <span className="relative overflow-hidden">
        {children}
        <span className="absolute left-0 bottom-0 w-full h-px bg-cyan-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
      </span>
      {badge && (
        <span className="text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-2 py-0.5 rounded-full animate-pulse">
          {badge}
        </span>
      )}
    </a>
  </li>
);

// Sub-komponen untuk Social Icons
interface SocialIconProps {
  icon: React.ReactNode;
  href: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon, href }) => (
  <a 
    href={href} 
    className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-gradient-to-br hover:from-blue-600 hover:to-cyan-500 hover:border-transparent transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg shadow-black/20"
  >
    {icon}
  </a>
);

export default Footer;