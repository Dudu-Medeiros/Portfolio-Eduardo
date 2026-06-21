import React from 'react'
import { motion } from 'framer-motion'
import { FaTerminal } from 'react-icons/fa'

export default function Navbar() {
  const links = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Contato', href: '#contact' },
  ]

  // Função para controlar a rolagem fluida de forma manual
  const handleScroll = (e, href) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start', // Alinha o topo da seção com o topo da tela
      })
    }
  }

  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-[50] bg-tech-bg/60 backdrop-blur-md border-b border-slate-800/40"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        <a 
          href="#home" 
          onClick={(e) => handleScroll(e, '#home')}
          className="flex items-center gap-2.5 font-mono font-medium text-base tracking-tight group cursor-pointer"
        >
          <FaTerminal className="text-tech-cyan group-hover:rotate-6 transition-transform duration-500 ease-out text-sm" />
          
          <motion.span 
            animate={{ 
              textShadow: [
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
            className="text-slate-200 transition-colors duration-300 group-hover:text-tech-cyan"
          >
            Eduardo<span className="text-slate-400 font-light">.dev</span>
          </motion.span>
        </a>

        <nav className="hidden md:flex items-center gap-8 font-mono text-sm">
          {links.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)} // Intercepta o clique para rodar a rolagem suave
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.08 + 0.2, duration: 0.4 }}
              className="text-slate-400 hover:text-tech-cyan transition-colors duration-300 relative group py-2 cursor-pointer"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-tech-cyan transition-all duration-300 ease-out group-hover:w-full"></span>
            </motion.a>
          ))}
        </nav>
      </div>
    </motion.header>
  )
}