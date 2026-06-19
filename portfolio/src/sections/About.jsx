import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './About.css'

export default function About() {
  // Estado para controlar qual imagem de projeto está ativa no slider
  const [currentSlide, setCurrentSlide] = useState(0)

  // Array com as telas dos seus sistemas (substitua pelos caminhos reais das suas imagens)
  const projectScreens = [
    { id: 1, src: '/images/fluxo-dashboard.png', alt: 'Dashboard Módulo Fluxo' },
    { id: 2, src: '/images/fluxo-terminal.png', alt: 'Terminal SEC-AUTH' },
    { id: 3, src: '/images/physicolog-diary.png', alt: 'Interface PhysicoLog' },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === projectScreens.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? projectScreens.length - 1 : prev - 1))
  }

  // Configuração padrão de animação ao scroll para reaproveitamento nos elementos
  const scrollAnimation = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  // Lista de capacidades para alimentar o marquee contínuo
  const capabilities = [
    "Módulo de Autenticação e Segurança",
    "Gestão de Transações",
    "Exportação e Portabilidade de Dados",
    "Automação de Documentos Fiscais (XML/PDF)",
    "Fluxos de Controladoria"
  ]

  return (
    <section id="about" className="about-split-section">
      {/* Grade HUD sutil de fundo */}
      <div className="hud-grid-overlay"></div>

      <div className="about-split-container">
        
        {/* COLUNA DA ESQUERDA: APRESENTAÇÃO, MANIFESTO E MARQUEE CONTÍNUO */}
        <motion.div 
          className="about-left-col"
          {...scrollAnimation}
        >
          <h2 className="about-main-title">
            TRANSFORME <span className="text-tech-cyan">IDEIA</span> <br />
            EM CÓDIGO
          </h2>
          <p className="about-description">
            Desenvolvedor Front-End com trajetória sólida no desenvolvimento de aplicações escaláveis e sistemas complexos nas áreas financeira e de educação. Especialista na evolução e manutenção de arquiteturas SPA utilizando o ecossistema JavaScript (React, Angular), com histórico na entrega de módulos funcionais críticos.
          </p>

          {/* TEXTO DE MANIFESTO DESTACADO */}
          <blockquote className="about-manifesto">
            “Acredito que um bom software vai além de funcionar corretamente: ele precisa ser intuitivo, eficiente e proporcionar uma excelente experiência ao usuário. Por isso, combino atenção aos detalhes, boas práticas de desenvolvimento e aprendizado contínuo para criar soluções modernas, escaláveis e de alta qualidade.”
          </blockquote>

          {/* ANIMAÇÃO FLUIDA E LENTA CONTÍNUA (INFINITE MARQUEE) */}
          <div className="about-capabilities-marquee">
            <div className="marquee-track">
              {/* Bloco Original */}
              <div className="marquee-group">
                {capabilities.map((cap, idx) => (
                  <span key={`orig-${idx}`} className="cap-tag">{cap}</span>
                ))}
              </div>
              {/* Bloco Duplicado para garantir o efeito infinito e sem emendas */}
              <div className="marquee-group" aria-hidden="true">
                {capabilities.map((cap, idx) => (
                  <span key={`dup-${idx}`} className="cap-tag">{cap}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* COLUNA DA DIREITA: SLIDER INTERATIVO + LINHA DO TEMPO */}
        <div className="about-right-col">
          
          {/* SLIDER DE CAPTURAS DE TELA DOS SISTEMAS */}
          <motion.div 
            className="project-slider-container"
            {...scrollAnimation}
            transition={{ ...scrollAnimation.transition, delay: 0.2 }}
          >
            <div className="slider-window">
              {projectScreens.map((screen, index) => {
                let cardClass = "slider-card-hidden"
                if (index === currentSlide) cardClass = "slider-card-active"
                else if (index === (currentSlide + 1) % projectScreens.length) cardClass = "slider-card-next"

                return (
                  <div key={screen.id} className={`slider-card ${cardClass}`}>
                    <img src={screen.src} alt={screen.alt} className="system-screenshot" />
                    <div className="slider-card-badge font-mono">
                      {screen.alt}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* CONTROLES DO SLIDER */}
            <div className="slider-controls">
              <button onClick={prevSlide} className="slider-arrow-btn" aria-label="Slide anterior">
                <FaChevronLeft />
              </button>
              <span className="font-mono text-xs text-slate-500">
                0{currentSlide + 1} / 0{projectScreens.length}
              </span>
              <button onClick={nextSlide} className="slider-arrow-btn" aria-label="Próximo slide">
                <FaChevronRight />
              </button>
            </div>
          </motion.div>

          {/* LINHA DO TEMPO EDITORIAL COM ELEMENTOS 100% AZUL/CIANO */}
          <div className="editorial-timeline">
            
            {/* TRAJETÓRIA 1: COLOQUE SUA EMPRESA NESSA LISTA */}
            <motion.div 
              className="timeline-item active-node"
              {...scrollAnimation}
              transition={{ ...scrollAnimation.transition, delay: 0.3 }}
            >
              <div className="timeline-node animate-blue-glow"></div>
              <div className="timeline-content">
                <span className="timeline-date font-mono text-tech-cyan">NEXT SQUAD_</span>
                <h4 className="timeline-title text-tech-cyan font-black tracking-wider">
                  COLOQUE SUA EMPRESA NESSA LISTA_
                </h4>
                <p className="timeline-text text-slate-400 mt-1">
                  Pronto para integrar squads de alta performance, aplicando rigor técnico e arquitetura limpa para escalar seu produto digital.
                </p>
              </div>
            </motion.div>

            {/* TRAJETÓRIA 2: FLUXO */}
            <motion.div 
              className="timeline-item"
              {...scrollAnimation}
              transition={{ ...scrollAnimation.transition, delay: 0.4 }}
            >
              <div className="timeline-node"></div>
              <div className="timeline-content">
                <span className="timeline-date font-mono">MAIO 2026 — JUNHO 2026</span>
                <h4 className="timeline-title">Fluxo — Gerenciamento Financeiro</h4>
                <span className="timeline-role font-mono">Desenvolvedor Front-End / Full-Stack</span>
                <p className="timeline-text">
                  Desenvolvimento de interfaces modernas de sistema financeiro robusto, integração de APIs e automação de documentos críticos como PDFs e XMLs.
                </p>
              </div>
            </motion.div>

            {/* TRAJETÓRIA 3: BACHARELADO */}
            <motion.div 
              className="timeline-item"
              {...scrollAnimation}
              transition={{ ...scrollAnimation.transition, delay: 0.5 }}
            >
              <div className="timeline-node"></div>
              <div className="timeline-content">
                <span className="timeline-date font-mono">FORMAÇÃO ACADÊMICA</span>
                <h4 className="timeline-title">UNINASSAU</h4>
                <span className="timeline-role font-mono">Sistemas de Informação // Bacharelado</span>
                <p className="timeline-text">
                  Graduando focado em evolução contínua para engenharia de software, banco de dados e performance web. Previsão de Formação: 2028.
                </p>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  )
}