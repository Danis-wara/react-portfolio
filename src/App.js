import React, { useState, useEffect } from 'react';

// --- Komponen Ikon (dibuat manual untuk kesederhanaan) ---
const Icon = ({ name, className }) => {
  const icons = {
    github: <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.0-1.43-.5-2.5 1.5-3.5-1.5-.5-3-1.5-4.5-2.5-1-.25-2 0-2.5 1-.5-1-1.5-1-2.5-1-1.5 1-3 2-4.5 2.5 2 1 1.5 2.1 1.5 3.5.0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></>,
    menu: <><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></>,
    x: <><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></>,
    cpu: <><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2M15 20v2M9 2v2M9 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/></>,
    database: <><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></>,
    code: <><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></>,
    arrowUpRight: <><path d="M7 7h10v10"/><path d="M7 17 17 7"/></>,
    target: <><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></>,
    layers: <><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></>,
  };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {icons[name]}
    </svg>
  );
};

// --- DATA PORTFOLIO ---
// Ganti semua konten di sini dengan data Anda sendiri.
const portfolioData = {
  name: "Muhammad Firzatullah Daniswara",
  title: "Automation Engineer",
  profileImage: "/images/profil.jpg", 
  about: "I am a passionate student in the field of industrial automation and control systems engineering. I have a strong interest in designing, building, and implementing technological solutions to improve efficiency and productivity.",
  skills: [
    { name: "PLC Programming", icon: "cpu", description: "Omron CJ1M/CP1E (CX-One), Ladder Diagram, HMI/SCADA." },
    { name: "Software Simulasi, Desain & IDE", icon: "layers", description: "Eagle, Proteus, FluidSIM, Arduino IDE, dan VS Code." },
    { name: "Mikrokontroler & IoT", icon: "target", description: "Pengembangan perangkat berbasis ESP32 dan Arduino untuk sistem IoT dan embedded." },
  ],
  projects: [
    // --- PERUBAHAN: Daftar proyek diperbarui ---
    {
      title: "Sistem Monitoring Suhu Real-time",
      description: "Membangun sistem telemetri berbasis ESP32 untuk memantau suhu secara real-time dengan antarmuka web.",
      tags: ["ESP32", "Arduin IDE", "Python"],
      link: "#", // Ganti dengan link ke proyek Anda
    },
    {
      title: "Simulasi Lengan Robot 3-Axis",
      description: "Merancang dan mensimulasikan lengan robot untuk tugas pick-and-place menggunakan software industri.",
      tags: ["Robotika", "Simulasi", "ESP-32"],
      link: "#",
    },
    {
      title: "Robot Line Follower",
      description: "Membangun robot line follower otonom menggunakan Arduino yang dinavigasi oleh sensor inframerah (IR).",
      tags: ["Arduino", "Sensor IR", "Robotika"],
      link: "#",
    },
    {
      title: "Camera CCTV",
      description: "Mengimplementasikan sistem pemantauan video streaming lokal menggunakan ESP32-CAM yang dapat diakses melalui jaringan WiFi.",
      tags: ["ESP32-CAM", "Video Streaming", "IoT"],
      link: "#",
    },
    {
      title: "Alarm Keamanan",
      description: "Merancang sirkuit alarm sederhana berbasis sensor PIR yang dapat mendeteksi gerakan manusia tanpa memerlukan mikrokontroler.",
      tags: ["Sensor PIR", "Elektronika Analog", "Sirkuit"],
      link: "#",
    },
  ],
  contact: {
    email: "email.anda@example.com",
    social: {
      github: "https://github.com/Danis-wara",
      linkedin: "https://www.linkedin.com/in/muhammadfirzatullahdaniswara/",
    },
  },
};

// --- Komponen Latar Belakang Animasi ---
const AnimatedBackground = () => ( <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0"> <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="opacity-10"> <defs> <pattern id="circuit" patternUnits="userSpaceOnUse" width="100" height="100"> <path d="M 50 0 L 50 20 L 20 20 L 20 50 L 0 50 M 50 100 L 50 80 L 80 80 L 80 50 L 100 50" stroke="#06b6d4" fill="none" strokeWidth="1"/> <circle cx="50" cy="50" r="2" fill="#06b6d4" /> <circle cx="20" cy="20" r="1.5" fill="#06b6d4" /> <circle cx="80" cy="80" r="1.5" fill="#06b6d4" /> </pattern> </defs> <rect width="100%" height="100%" fill="url(#circuit)" /> </svg> </div> );

// --- Komponen Header ---
const Header = () => { const [isOpen, setIsOpen] = useState(false); const [isScrolled, setIsScrolled] = useState(false); useEffect(() => { const handleScroll = () => { setIsScrolled(window.scrollY > 10); }; window.addEventListener('scroll', handleScroll); return () => window.removeEventListener('scroll', handleScroll); }, []); const navLinks = ["Tentang", "Keterampilan", "Proyek", "Kontak"]; return ( <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}> <div className="container mx-auto px-4 sm:px-6 lg:px-8"> <div className="flex items-center justify-between h-16"> <div className="flex-shrink-0"> <a href="#hero" className="text-2xl font-bold text-white transition-colors hover:text-cyan-400"> {portfolioData.name} </a> </div> <div className="hidden md:block"> <div className="ml-10 flex items-baseline space-x-4"> {navLinks.map((link) => ( <a key={link} href={`#${link.toLowerCase()}`} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all"> {link} </a> ))} </div> </div> <div className="-mr-2 flex md:hidden"> <button onClick={() => setIsOpen(!isOpen)} className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"> <span className="sr-only">Buka menu</span> {isOpen ? <Icon name="x" className="h-6 w-6" /> : <Icon name="menu" className="h-6 w-6" />} </button> </div> </div> </div> {isOpen && ( <div className="md:hidden"> <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3"> {navLinks.map((link) => ( <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-all"> {link} </a> ))} </div> </div> )} </header> ); };

// --- Komponen Hero ---
const Hero = () => (
  <section id="hero" className="min-h-screen flex items-center justify-center text-center relative">
    <div className="z-10 flex flex-col items-center">
      <img 
        src={portfolioData.profileImage} 
        alt="Foto Profil" 
        className="w-40 h-40 rounded-full object-cover border-4 border-cyan-400 shadow-lg mb-6"
      />
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
        {portfolioData.name}
      </h1>
      <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-cyan-300">
        {portfolioData.title}
      </p>
      <a href="#proyek" className="mt-8 inline-block bg-cyan-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-cyan-600 transition-all transform hover:scale-105">
        Lihat Proyek Saya
      </a>
    </div>
  </section>
);

// --- Komponen Tentang ---
const About = () => ( <section id="tentang" className="py-20 sm:py-32"> <div className="container mx-auto px-4 sm:px-6 lg:px-8"> <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">Tentang Saya</h2> <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed text-center"> {portfolioData.about} </p> </div> </section> );

// --- Komponen Keterampilan ---
const Skills = () => ( <section id="keterampilan" className="py-20 sm:py-32 bg-gray-800/50"> <div className="container mx-auto px-4 sm:px-6 lg:px-8"> <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-16">Keterampilan Teknis</h2> <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> {portfolioData.skills.map((skill) => ( <div key={skill.name} className="bg-gray-900 p-6 rounded-lg border border-gray-700 text-center transition-all transform hover:-translate-y-2 hover:shadow-cyan-500/20 hover:shadow-lg"> <div className="inline-block p-4 bg-gray-800 rounded-full mb-4"> <Icon name={skill.icon} className="h-8 w-8 text-cyan-400" /> </div> <h3 className="text-xl font-bold text-white mb-2">{skill.name}</h3> <p className="text-gray-400">{skill.description}</p> </div> ))} </div> </div> </section> );

// --- Komponen Proyek ---
const Projects = () => ( <section id="proyek" className="py-20 sm:py-32"> <div className="container mx-auto px-4 sm:px-6 lg:px-8"> <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-16">Proyek Unggulan</h2> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {portfolioData.projects.map((project) => ( <a href={project.link} key={project.title} target="_blank" rel="noopener noreferrer" className="block bg-gray-900 rounded-lg overflow-hidden border border-gray-700 group transition-all transform hover:-translate-y-2 hover:shadow-cyan-500/20 hover:shadow-2xl"> <div className="p-6"> <div className="flex justify-between items-start"> <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3> <Icon name="arrowUpRight" className="h-5 w-5 text-gray-500 transition-colors group-hover:text-cyan-400" /> </div> <p className="text-gray-400 mb-4">{project.description}</p> <div className="flex flex-wrap gap-2"> {project.tags.map((tag) => ( <span key={tag} className="text-xs font-semibold bg-cyan-900/50 text-cyan-300 px-2 py-1 rounded-full"> {tag} </span> ))} </div> </div> </a> ))} </div> </div> </section> );

// --- Komponen Kontak ---
const Contact = () => ( <section id="kontak" className="py-20 sm:py-32 bg-gray-800/50"> <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"> <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Hubungi Saya</h2> <p className="text-lg text-gray-300 mb-8">Saya selalu terbuka untuk diskusi mengenai proyek, peluang, atau sekadar bertukar pikiran.</p> <a href={`mailto:${portfolioData.contact.email}`} className="inline-block bg-cyan-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-cyan-600 transition-all transform hover:scale-105 mb-10"> Kirim Email </a> <div className="flex justify-center space-x-6"> <a href={portfolioData.contact.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"> <Icon name="github" className="h-8 w-8" /> </a> <a href={portfolioData.contact.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"> <Icon name="linkedin" className="h-8 w-8" /> </a> </div> </div> </section> );

// --- Komponen Footer ---
const Footer = () => ( <footer className="py-6"> <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500"> <p>&copy; {new Date().getFullYear()} {portfolioData.name}. Dibuat dengan React & Tailwind CSS.</p> </div> </footer> );

// --- Komponen Utama Aplikasi ---
export default function App() {
  return (
    <div className="bg-gray-900 text-gray-200 font-sans relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
