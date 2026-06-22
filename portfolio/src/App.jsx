import React, { useEffect, useState, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion'
import Navbar from './layout/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import "./styles/global.css"; 

// ================= COMPONENTE PRELOADER CIBERNÉTICO ULTRA FLUIDO =================
function Preloader({ onComplete }) {
  const motionProgress = useMotionValue(0);
  
  // Configuração de mola para suavizar as transições de carregamento
  const springProgress = useSpring(motionProgress, { 
    stiffness: 60,   // Rigidez da mola
    damping: 20,     // Amortecimento para evitar oscilações bruscas
    mass: 0.5 
  });
  
  // Transforma o valor flutuante da mola em um número inteiro para o texto
  const displayPercent = useTransform(springProgress, (latest) => Math.floor(latest));
  const [percentText, setPercentText] = useState(0);

  useEffect(() => {
    // Escuta as mudanças da mola para atualizar o contador de texto em tempo real
    const unsubscribe = displayPercent.onChange((latest) => {
      setPercentText(latest);
      if (latest >= 100) {
        setTimeout(onComplete, 600); // Delay refinado pós-conclusão da mola
      }
    });

    // Loop de carregamento simulado dinâmico e mais rápido
    const interval = setInterval(() => {
      const currentTarget = motionProgress.get();
      if (currentTarget >= 100) {
        clearInterval(interval);
        return;
      }
      
      // Incrementos variados para quebrar a linearidade
      const nextStep = currentTarget + (Math.floor(Math.random() * 15) + 5);
      motionProgress.set(Math.min(nextStep, 100));
    }, 120);

    return () => {
      clearInterval(interval);
      unsubscribe();
    };
  }, [onComplete, motionProgress, displayPercent]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.5, ease: "easeInOut" } }}
      className="fixed inset-0 bg-[#0a0f1d] z-[99999] flex flex-col items-center justify-center font-mono p-4 sm:p-6"
    >
      {/* Grid Tecnológico de Fundo do Preloader */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none"></div>
      
      {/* Container Responsivo Adaptável */}
      <div className="relative flex flex-col items-center w-full max-w-[280px] sm:max-w-sm md:max-w-md z-10 text-center">
        
        {/* Ícone de Programação Animado (Glow Neon) */}
        <motion.div
          animate={{ 
            scale: [1, 1.08, 1],
            textShadow: ["0 0 8px #00f0ff", "0 0 20px #00f0ff", "0 0 8px #00f0ff"] 
          }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="text-tech-cyan text-3xl sm:text-4xl mb-4 select-none"
        >
          &lt;/&gt;
        </motion.div>

        {/* Nome do Dev Responsivo */}
        <h1 className="text-slate-100 text-lg sm:text-xl md:text-2xl font-bold tracking-[0.2em] uppercase mb-1 select-none">
          Eduardo<span className="text-tech-cyan">.dev</span>
        </h1>
        
        {/* Status do Sistema */}
        <p className="text-slate-500 text-[9px] sm:text-[10px] uppercase tracking-widest mb-6 sm:mb-8 animate-pulse select-none">
          Initializing_System_Core...
        </p>

        {/* Container da Barra de Carregamento Responsivo */}
        <div className="w-full bg-[#131c31] h-1.5 sm:h-2 rounded-full overflow-hidden border border-slate-900/80 relative">
          <motion.div 
            className="h-full bg-gradient-to-r from-tech-purple to-tech-cyan shadow-[0_0_14px_#00f0ff]"
            style={{ width: useTransform(springProgress, (v) => `${v}%`) }}
          />
        </div>

        {/* Porcentagem HUD Responsiva */}
        <div className="flex justify-between w-full mt-2.5 text-[9px] sm:text-[10px] text-slate-400 font-bold tracking-wider select-none">
          <span>[SYS_LOAD]</span>
          <span className="text-tech-cyan font-black">{percentText}%</span>
        </div>
      </div>
    </motion.div>
  );
}

// 1. ANIMAÇÃO DE CONTADOR ULTRA FLUIDA (FÍSICA DE MOLA)
function CyberCounter({ value }) {
  const target = parseInt(value);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 45, damping: 15 });
  const displayValue = useTransform(springValue, (latest) => Math.floor(latest));
  const elementRef = useRef(null);
  const isInView = useInView(elementRef, { once: true, margin: "-50px" });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (isInView && !isNaN(target)) {
      motionValue.set(target);
    }
  }, [isInView, target, motionValue]);

  useEffect(() => {
    return displayValue.onChange((latest) => setCurrent(latest));
  }, [displayValue]);

  return <span ref={elementRef}>{current}</span>;
}

// 2. ANIMAÇÃO DE TEXTO DECODIFICANDO (ESTILO MATRIX/TERMINAL)
function DecryptText({ text, delay = 0 }) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_@#$";
  const [displayText, setDisplayText] = useState("");
  const elementRef = useRef(null);
  const isInView = useInView(elementRef, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let iterations = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < iterations) return text[index];
            if (char === " ") return " ";
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iterations >= text.length) clearInterval(interval);
      iterations += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, [isInView, text]);

  return <span ref={elementRef} className="font-mono">{displayText || text}</span>;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState('dark')      
  const [language, setLanguage] = useState('pt')  

  const techTicker = [
    "REACT", "JAVASCRIPT", "TYPESCRIPT", "ANGULAR", "TAILWIND CSS", 
    "NEXT.JS", "NODE.JS", "UI/UX DESIGN", "CLEAN CODE", "REST API"
  ]

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  const toggleLanguage = () => setLanguage(prev => prev === 'pt' ? 'en' : 'pt')

  const stats = [
    { code: "EXP_01", number: "1+", label: language === 'pt' ? "Ano de Experiência" : "Year of Experience" },
    { code: "PRJ_02", number: "5+", label: language === 'pt' ? "Projetos Destaque" : "Featured Projects" },
    { code: "STK_03", number: "10+", label: language === 'pt' ? "Tecnologias Dominadas" : "Mastered Technologies" },
    { code: "CORE_04", number: "SI", label: language === 'pt' ? "Sistemas de Informação" : "Information Systems" }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <div className={`transition-colors duration-500 font-sans min-h-screen relative overflow-hidden selection:bg-tech-cyan selection:text-tech-bg ${
        theme === 'light' ? 'bg-slate-100 text-slate-900' : 'bg-tech-bg text-slate-100'
      }`}>
        
        {/* Grid Tecnológico de Fundo */}
        <div className={`absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none ${
          theme === 'light' ? 'opacity-40' : 'opacity-100'
        }`}></div>
        
        {/* Luzes Tech adaptativas de fundo */}
        <div className={`absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-tech-cyan/5 blur-[150px] pointer-events-none ${theme === 'light' ? 'opacity-30' : 'opacity-100'}`}></div>
        <div className={`absolute top-[40%] right-[-10%] w-[600px] h-[600px] rounded-full bg-tech-purple/5 blur-[180px] pointer-events-none ${theme === 'light' ? 'opacity-20' : 'opacity-100'}`}></div>

        <Navbar 
          theme={theme}
          toggleTheme={toggleTheme}
          language={language}
          toggleLanguage={toggleLanguage}
        />
        
        <main className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <Hero language={language} theme={theme} />
        </main>

        <div className={`section-divider-marquee border-y ${theme === 'light' ? 'border-slate-200/60 bg-slate-200/20' : 'border-slate-900/40 bg-transparent'}`}>
          <div className="divider-marquee-track">
            <div className="divider-marquee-group">
              {techTicker.map((tech, idx) => (
                <React.Fragment key={`t1-${idx}`}>
                  <span className="ticker-item">{tech}</span>
                  <span className="ticker-separator">//</span>
                </React.Fragment>
              ))}
            </div>
            <div className="divider-marquee-group" aria-hidden="true">
              {techTicker.map((tech, idx) => (
                <React.Fragment key={`t2-${idx}`}>
                  <span className="ticker-item">{tech}</span>
                  <span className="ticker-separator">//</span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        <main className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <About language={language} theme={theme} />
          
          {/* ================= SEÇÃO DE MÉTRICAS HUD CIBERNÉTICAS ================= */}
          <div className={`py-16 md:py-24 my-6 md:my-12 border-y grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative ${
            theme === 'light' ? 'border-slate-200' : 'border-slate-900/60'
          }`}>
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: idx * 0.1, ease: "easeOut" }}
                className={`relative border rounded-lg p-5 flex flex-col justify-between items-start group hover:border-tech-cyan/30 transition-all duration-500 overflow-hidden w-full ${
                  theme === 'light' ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#070b14]/80 border-slate-900'
                }`}
              >
                <div className="absolute top-0 left-0 w-2 h-[1px] bg-slate-400 dark:bg-slate-800 group-hover:bg-tech-cyan/60 transition-colors"></div>
                <div className="absolute top-0 left-0 w-[1px] h-2 bg-slate-400 dark:bg-slate-800 group-hover:bg-tech-cyan/60 transition-colors"></div>
                <div className="absolute bottom-0 right-0 w-2 h-[1px] bg-slate-400 dark:bg-slate-800 group-hover:bg-tech-cyan/60 transition-colors"></div>
                <div className="absolute bottom-0 right-0 w-[1px] h-2 bg-slate-400 dark:bg-slate-800 group-hover:bg-tech-cyan/60 transition-colors"></div>

                <div className={`flex justify-between items-center w-full mb-4 font-mono text-[10px] tracking-wider ${
                  theme === 'light' ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  <span>[{stat.code}]</span>
                  <span className={`w-1.5 h-1.5 rounded-full group-hover:bg-tech-cyan group-hover:animate-pulse transition-colors ${
                    theme === 'light' ? 'bg-slate-300' : 'bg-slate-800'
                  }`}></span>
                </div>

                <div className={`text-3xl sm:text-4xl md:text-5xl font-mono font-black tracking-tight transition-colors ${
                  theme === 'light' ? 'text-slate-800 group-hover:text-slate-900' : 'text-slate-200 group-hover:text-slate-100'
                }`}>
                  {isNaN(parseInt(stat.number)) ? (
                    <span className="text-tech-cyan">
                      <DecryptText text={stat.number} />
                    </span>
                  ) : (
                    <div className="flex items-baseline">
                      <CyberCounter value={stat.number} />
                      <span className="text-tech-cyan text-xl sm:text-2xl font-sans ml-0.5 group-hover:animate-ping duration-1000">
                        {stat.number.includes('+') ? '+' : ''}
                      </span>
                    </div>
                  )}
                </div>

                <div className={`text-[11px] sm:text-xs font-mono tracking-wide uppercase mt-4 border-t pt-3 w-full text-left group-hover:text-slate-400 transition-colors break-words ${
                  theme === 'light' ? 'text-slate-400 border-slate-100' : 'text-slate-500 border-slate-900/60'
                }`}>
                  <DecryptText text={stat.label} />
                </div>
              </motion.div>
            ))}
          </div>

          <Projects language={language} theme={theme} />
          <Contact language={language} theme={theme} />
        </main>

        <footer className={`w-full border-t py-8 mt-24 font-mono text-xs relative z-10 transition-colors duration-500 ${
          theme === 'light' ? 'bg-slate-200/50 border-slate-300/60 text-slate-500' : 'w-full border-t border-slate-900/60 bg-[#04070e]/80 text-slate-500'
        }`}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <p className="tracking-wide uppercase">
                Core Status: <span className={theme === 'light' ? 'text-slate-700' : 'text-slate-400'}>SYS_OPERATIONAL</span>
              </p>
            </div>

            <div className="tracking-wide">
              <p>© {new Date().getFullYear()} — <span className={theme === 'light' ? 'text-slate-800 font-bold' : 'text-slate-300 font-bold'}>EDUARDO GUILHERME</span> // {language === 'pt' ? 'PROJETANDO O FUTURO' : 'ENGINEERING THE FUTURE'}</p>
            </div>

            <div className="flex items-center justify-center w-full md:w-auto">
              <button 
                onClick={scrollToTop}
                className={`transition-colors duration-300 uppercase tracking-widest border px-3 py-1.5 rounded text-[10px] w-full md:w-auto ${
                  theme === 'light' 
                  ? 'bg-white border-slate-300 text-slate-600 hover:text-tech-cyan hover:border-tech-cyan/40' 
                  : 'bg-slate-950/40 border-slate-900 text-slate-500 hover:text-tech-cyan'
                }`}
              >
                [ {language === 'pt' ? 'VOLTAR_AO_TOPO' : 'BACK_TO_TOP'} ]
              </button>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App