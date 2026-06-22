import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './About.css'
import fluxoDashboard from "../assets/fluxoDashboard.png"
import ADL from "../assets/ADL.png"
import seakalmDashboard from "../assets/seakalmDashboard.png"

export default function About({ theme, language }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const projectScreens = [
    { id: 1, src: fluxoDashboard, alt: language === 'pt' ? 'Dashboard Módulo Fluxo' : 'Fluxo Module Dashboard' },
    { id: 2, src: ADL, alt: language === 'pt' ? 'Dashboard aventura das letras' : 'Letters Adventure Dashboard' },
    { id: 3, src: seakalmDashboard, alt: language === 'pt' ? 'Dashboard SeaKalm' : 'SeaKalm Dashboard' },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === projectScreens.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? projectScreens.length - 1 : prev - 1))
  }

  const scrollAnimation = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  const capabilities = language === 'pt' ? [
    "Módulo de Autenticação e Segurança",
    "Gestão de Transações",
    "Exportação e Portabilidade de Dados",
    "Automação de Documentos Fiscais (XML/PDF)",
    "Fluxos de Controladoria"
  ] : [
    "Authentication & Security Module",
    "Transaction Management",
    "Data Export & Portability",
    "Fiscal Document Automation (XML/PDF)",
    "Financial Control Flows"
  ]

  const texts = {
    title1: language === 'pt' ? 'TRANSFORME' : 'TRANSFORM',
    title2: language === 'pt' ? 'IDEIA' : 'IDEAS',
    title3: language === 'pt' ? 'EM CÓDIGO' : 'INTO CODE',
    desc: language === 'pt'
      ? 'Desenvolvedor Front-End com trajetória sólida no desenvolvimento de aplicações escaláveis e sistemas complexos nas áreas financeira e de educação. Especialista na evolução e manutenção de arquiteturas SPA utilizando o ecossistema JavaScript (React, Angular), com histórico na entrega de módulos funcionais críticos.'
      : 'Front-End Developer with a solid track record in creating scalable applications and complex systems in the financial and education fields. Expert in evolving and maintaining SPA architectures using the JavaScript ecosystem (React, Angular), with a history of delivering critical core modules.',
    manifesto: language === 'pt'
      ? '“Acredito que um bom software vai além de funcionar corretamente: ele precisa ser intuitivo, eficiente e proporcionar uma excelente experiência ao usuário. Por isso, combino atenção aos detalhes, boas práticas de desenvolvimento e aprendizado contínuo para criar soluções modernas, escaláveis e de alta qualidade.”'
      : '“I believe that good software goes beyond working correctly: it needs to be intuitive, efficient, and provide an excellent user experience. Therefore, I combine attention to detail, development best practices, and continuous learning to create modern, scalable, and high-quality solutions.”',
    nextSquadTitle: language === 'pt' ? 'COLOQUE SUA EMPRESA NESSA LISTA_' : 'PLACE YOUR COMPANY ON THIS LIST_',
    nextSquadDesc: language === 'pt'
      ? 'Pronto para integrar squads de alta performance, aplicando rigor técnico e arquitetura limpa para escalar seu produto digital.'
      : 'Ready to join high-performance squads, applying technical rigor and clean architecture to scale your digital product.',
    fluxoRole: language === 'pt' ? 'Desenvolvedor Front-End / Full-Stack' : 'Front-End / Full-Stack Developer',
    fluxoDesc: language === 'pt'
      ? 'Desenvolvimento de interfaces modernas de sistema financeiro robusto, integração de APIs e automação de documentos críticos como PDFs e XMLs.'
      : 'Development of modern interfaces for robust financial systems, API integrations, and automation of critical documents like PDFs and XMLs.',
    eduTitle: language === 'pt' ? 'FORMAÇÃO ACADÊMICA' : 'ACADEMIC BACKGROUND',
    eduDesc: language === 'pt'
      ? 'Graduando focado em evolução contínua para engenharia de software, banco de dados e performance web. Previsão de Formação: 2028.'
      : 'Undergraduate student focused on continuous growth in software engineering, databases, and web performance. Graduation expected: 2028.'
  }

  return (
    <section id="about" className={`about-split-section ${theme === 'light' ? 'light-mode' : ''}`}>
      <div className="hud-grid-overlay"></div>

      <div className="about-split-container">
        
        {/* COLUNA DA ESQUERDA */}
        <motion.div className="about-left-col" {...scrollAnimation}>
          <h2 className="about-main-title">
            {texts.title1} <span className="text-tech-cyan">{texts.title2}</span> <br />
            {texts.title3}
          </h2>
          <p className="about-description">
            {texts.desc}
          </p>

          <blockquote className="about-manifesto">
            {texts.manifesto}
          </blockquote>

          {/* INFINITE MARQUEE */}
          <div className="about-capabilities-marquee">
            <div className="marquee-track">
              <div className="marquee-group">
                {capabilities.map((cap, idx) => (
                  <span key={`orig-${idx}`} className="cap-tag">{cap}</span>
                ))}
              </div>
              <div className="marquee-group" aria-hidden="true">
                {capabilities.map((cap, idx) => (
                  <span key={`dup-${idx}`} className="cap-tag">{cap}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* COLUNA DA DIREITA */}
        <div className="about-right-col">
          
          {/* SLIDER INTERATIVO */}
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

            <div className="slider-controls">
              <button onClick={prevSlide} className="slider-arrow-btn" aria-label="Previous slide">
                <FaChevronLeft />
              </button>
              <span className="font-mono text-xs label-counter">
                0{currentSlide + 1} / 0{projectScreens.length}
              </span>
              <button onClick={nextSlide} className="slider-arrow-btn" aria-label="Next slide">
                <FaChevronRight />
              </button>
            </div>
          </motion.div>

          {/* LINHA DO TEMPO EDITORIAL */}
          <div className="editorial-timeline">
            
            {/* TRAJETÓRIA 1 */}
            <motion.div
              className="timeline-item active-node"
              {...scrollAnimation}
              transition={{ ...scrollAnimation.transition, delay: 0.3 }}
            >
              <div className="timeline-node animate-blue-glow"></div>
              <div className="timeline-content">
                <span className="timeline-date font-mono text-tech-cyan">NEXT SQUAD_</span>
                <h4 className="timeline-title text-tech-cyan font-black tracking-wider">
                  {texts.nextSquadTitle}
                </h4>
                <p className="timeline-text mt-1">
                  {texts.nextSquadDesc}
                </p>
              </div>
            </motion.div>

            {/* TRAJETÓRIA 2 */}
            <motion.div
              className="timeline-item"
              {...scrollAnimation}
              transition={{ ...scrollAnimation.transition, delay: 0.4 }}
            >
              <div className="timeline-node"></div>
              <div className="timeline-content">
                <span className="timeline-date font-mono">{language === 'pt' ? 'MAIO 2026 — JUNHO 2026' : 'MAY 2026 — JUNE 2026'}</span>
                <h4 className="timeline-title">Fluxo — Gerenciamento Financeiro</h4>
                <span className="timeline-role font-mono">{texts.fluxoRole}</span>
                <p className="timeline-text">
                  {texts.fluxoDesc}
                </p>
              </div>
            </motion.div>

            {/* TRAJETÓRIA 3 */}
            <motion.div
              className="timeline-item"
              {...scrollAnimation}
              transition={{ ...scrollAnimation.transition, delay: 0.5 }}
            >
              <div className="timeline-node"></div>
              <div className="timeline-content">
                <span className="timeline-date font-mono">{texts.eduTitle}</span>
                <h4 className="timeline-title">UNINASSAU</h4>
                <span className="timeline-role font-mono">{language === 'pt' ? 'Sistemas de Informação // Bacharelado' : 'Information Systems // Bachelor\'s Degree'}</span>
                <p className="timeline-text">
                  {texts.eduDesc}
                </p>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  )
}