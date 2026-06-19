import React from 'react'
import Navbar from './layout/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

function App() {
  return (
    <div className="bg-tech-bg text-slate-100 font-sans min-h-screen relative overflow-hidden selection:bg-tech-cyan selection:text-tech-bg">
      
      {/* Grid Tecnológico de Fundo */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
      
      {/* Luzes Tech de fundo (efeito de profundidade neon) */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-tech-cyan/5 blur-[150px] pointer-events-none"></div>
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] rounded-full bg-tech-purple/5 blur-[180px] pointer-events-none"></div>

      {/* Menu Fixo */}
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-6 relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="text-center py-8 text-slate-500 border-t border-slate-900/50 mt-20 font-mono text-sm">
        <p>© 2026 - Eduardo | Projetando o Futuro</p>
      </footer>
    </div>
  )
}

export default App