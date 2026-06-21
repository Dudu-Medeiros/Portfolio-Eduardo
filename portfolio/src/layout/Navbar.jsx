import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTerminal, FaSun, FaMoon, FaGlobe } from 'react-icons/fa'

export default function Navbar({ theme, toggleTheme, language, toggleLanguage }) {
  
  // Mapeamento dos links traduzidos com base no idioma atual
  const links = [
    { name: language === 'pt' ? 'Início' : 'Home', href: '#home' },
    { name: language === 'pt' ? 'Sobre' : 'About', href: '#about' },
    { name: language === 'pt' ? 'Projetos' : 'Projects', href: '#projects' },
    { name: language === 'pt' ? 'Contato' : 'Contact', href: '#contact' },
  ]

  // Função para controlar a rolagem fluida de forma manual
  const handleScroll = (e, href) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-[50] backdrop-blur-md border-b transition-colors duration-500 ${
        theme === 'light' 
        ? 'bg-slate-50/80 border-slate-200' 
        : 'bg-tech-bg/60 border-slate-800/40'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* LOGO */}
        <a 
          href="#home" 
          onClick={(e) => handleScroll(e, '#home')}
          className="flex items-center gap-2.5 font-mono font-medium text-base tracking-tight group cursor-pointer"
        >
          <FaTerminal className="text-tech-cyan group-hover:rotate-6 transition-transform duration-500 ease-out text-sm" />
          
          <motion.span 
            animate={{ 
              textShadow: theme === 'light' 
                ? [
                    "0 0 4px rgba(0,210,255,0.05)", 
                    "0 0 10px rgba(0,210,255,0.15)", 
                    "0 0 4px rgba(0,210,255,0.05)"
                  ]
                : [
                    "0 0 4px rgba(0,240,255,0.1)", 
                    "0 0 12px rgba(0,240,255,0.3)", 
                    "0 0 4px rgba(0,240,255,0.1)"
                  ] 
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 4, 
              ease: "easeInOut" 
            }}
            className={`transition-colors duration-300 group-hover:text-tech-cyan ${
              theme === 'light' ? 'text-slate-900' : 'text-slate-200'
            }`}
          >
            Eduardo<span className="text-slate-400 font-light">.dev</span>
          </motion.span>
        </a>

        {/* NAVEGAÇÃO E CONTROLES ALTERNADORES */}
        <div className="flex items-center gap-4 md:gap-8">
          
          {/* LINKS DE NAVEGAÇÃO (Desktop) */}
          <nav className="hidden md:flex items-center gap-6 font-mono text-sm">
            {links.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.08 + 0.2, duration: 0.4 }}
                className={`transition-colors duration-300 relative group py-2 cursor-pointer ${
                  theme === 'light' ? 'text-slate-600 hover:text-tech-cyan' : 'text-slate-400 hover:text-tech-cyan'
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-tech-cyan transition-all duration-300 ease-out group-hover:w-full"></span>
              </motion.a>
            ))}
          </nav>

          {/* DIVISOR DE INTERFACE */}
          <div className={`hidden md:block w-[1px] h-6 ${theme === 'light' ? 'bg-slate-200' : 'bg-slate-800'}`}></div>

          {/* BOTÕES HUD DE CONFIGURAÇÃO */}
          <div className="flex items-center gap-2">
            
            {/* Botão de Idioma (I18N) */}
            <button 
              onClick={toggleLanguage}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md font-mono text-[10px] border transition-all duration-300 ${
                theme === 'light' 
                ? 'bg-white border-slate-200 text-slate-600 hover:border-tech-cyan/40 hover:text-tech-cyan' 
                : 'bg-slate-950/40 border-slate-800 text-slate-400 hover:border-tech-cyan/40 hover:text-tech-cyan'
              }`}
              title={language === 'pt' ? 'Mudar para Inglês' : 'Switch to Portuguese'}
            >
              <FaGlobe className={language === 'en' ? 'text-tech-cyan' : 'text-slate-400'} />
              <span className="font-bold">{language.toUpperCase()}</span>
            </button>

            {/* Botão de Alternar Tema (Light/Dark) */}
            <button 
              onClick={toggleTheme}
              className={`p-2.5 rounded-md border transition-all duration-300 flex items-center justify-center ${
                theme === 'light' 
                ? 'bg-amber-50 border-amber-200 text-amber-600 shadow-sm' 
                : 'bg-slate-950/40 border-slate-800 text-slate-400 hover:border-tech-cyan/40 hover:text-tech-cyan'
              }`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={theme}
                  initial={{ y: 10, opacity: 0, rotate: -45 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: -10, opacity: 0, rotate: 45 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === 'light' ? <FaSun size={14} /> : <FaMoon size={14} />}
                </motion.div>
              </AnimatePresence>
            </button>

          </div>
        </div>

      </div>
    </motion.header>
  )
}