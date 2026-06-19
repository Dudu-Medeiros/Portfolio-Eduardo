import React from 'react'
import Navbar from './layout/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import "./styles/global.css"; // Caminho corrigido relativo à pasta src

function App() {
  // Lista de tecnologias e palavras-chave que vão rodar no divisor contínuo
  const techTicker = [
    "REACT", "JAVASCRIPT", "TYPESCRIPT", "ANGULAR", "TAILWIND CSS", 
    "NEXT.JS", "NODE.JS", "UI/UX DESIGN", "CLEAN CODE", "REST API"
  ]

  return (
    <div className="bg-tech-bg text-slate-100 font-sans min-h-screen relative overflow-hidden selection:bg-tech-cyan selection:text-tech-bg">
      
      {/* Grid Tecnológico de Fundo */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
      
      {/* Luzes Tech de fundo (efeito de profundidade neon) */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-tech-cyan/5 blur-[150px] pointer-events-none"></div>
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] rounded-full bg-tech-purple/5 blur-[180px] pointer-events-none"></div>

      {/* Menu Fixo */}
      <Navbar />
      
      {/* SEÇÃO HERO: Mantida dentro do container estrutural */}
      <main className="max-w-6xl mx-auto px-6 relative z-10">
        <Hero />
      </main>

      {/* TRANSICÃO HUD MARQUEE: Posicionada fora do container central para ocupar 100% da largura de ponta a ponta */}
      <div className="section-divider-marquee">
        <div className="divider-marquee-track">
          {/* Bloco 1 */}
          <div className="divider-marquee-group">
            {techTicker.map((tech, idx) => (
              <React.Fragment key={`t1-${idx}`}>
                <span className="ticker-item">{tech}</span>
                <span className="ticker-separator">//</span>
              </React.Fragment>
            ))}
          </div>
          {/* Bloco 2 (Duplicado para efeito infinito contínuo) */}
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

      {/* RESTANTE DAS SEÇÕES: Retomando o fluxo principal do layout */}
      <main className="max-w-6xl mx-auto px-6 relative z-10">
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