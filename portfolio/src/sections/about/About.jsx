import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import fluxo1 from '../../assets/images/fluxo1.PNG'
import adl1 from '../../assets/images/adl1.PNG'
import seakalm1 from '../../assets/images/seakalm1.PNG'
import cvflow1 from '../../assets/images/cvflow1.jpeg'
import './About.css'

export default function About({ theme, language }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const isLight = theme === 'light'
  const isPt = language === 'pt'

  const projectScreens = [
    {
      id: 1,
      src: fluxo1,
      alt: isPt ? 'DASHBOARD // FLUXO' : 'DASHBOARD // FLUXO',
    },
    {
      id: 2,
      src: cvflow1,
      alt: isPt ? 'PREVIEW // CVFLOW' : 'PREVIEW // CVFLOW',
    },
    {
      id: 3,
      src: adl1,
      alt: isPt ? 'SISTEMA // AVENTURA DAS LETRAS' : 'SYSTEM // LETTERS ADVENTURE',
    },
    {
      id: 4,
      src: seakalm1,
      alt: isPt ? 'INTERFACE // SEAKALM' : 'INTERFACE // SEAKALM',
    },
  ]

  const capabilities = isPt
    ? [
        'Módulo de Autenticação e Segurança',
        'Gestão de Transações',
        'Exportação e Portabilidade de Dados',
        'Automação de Documentos Fiscais (XML/PDF)',
        'Fluxos de Controladoria',
      ]
    : [
        'Authentication & Security Module',
        'Transaction Management',
        'Data Export & Portability',
        'Fiscal Document Automation (XML/PDF)',
        'Financial Control Flows',
      ]

  const texts = {
    title1: isPt ? 'TRANSFORME' : 'TRANSFORM',
    title2: isPt ? 'IDEIAS' : 'IDEAS',
    title3: isPt ? 'EM CÓDIGO' : 'INTO CODE',
    desc: isPt
      ? 'Desenvolvedor Front-End com experiência prática na criação de aplicações web modernas e responsivas. Trabalho com React, JavaScript, HTML e CSS, buscando transformar ideias e necessidades de negócio em interfaces funcionais, organizadas e focadas na experiência do usuário.'
      : 'Front-End Developer with hands-on experience building modern and responsive web applications. I work with React, JavaScript, HTML, and CSS, focusing on turning ideas and business needs into functional, well-structured interfaces centered on user experience.',
    manifesto: isPt
      ? '“Ainda estou construindo minha experiência, e é justamente isso que me motiva. Gosto de aprender na prática, enfrentar problemas novos e transformar cada projeto em uma oportunidade para melhorar meu código, minhas ideias e minha forma de desenvolver.”'
      : '“I am still building my experience, and that is exactly what motivates me. I enjoy learning through practice, facing new challenges, and turning every project into an opportunity to improve my code, my ideas, and the way I develop.”',
    nextSquadTitle: isPt
      ? 'COLOQUE SUA EMPRESA NESSA LISTA_'
      : 'PLACE YOUR COMPANY ON THIS LIST_',
    nextSquadDesc: isPt
      ? 'Busco novas oportunidades para continuar aprendendo, contribuir com minhas habilidades e evoluir junto com novos desafios.'
      : 'I am looking for new opportunities to keep learning, contribute with my skills, and grow through new challenges.',
    corenDate: isPt ? 'ATUALMENTE' : 'CURRENT',
    corenTitle: isPt
      ? 'COREN-PE — CONSELHO REGIONAL DE ENFERMAGEM DE PERNAMBUCO'
      : 'COREN-PE — REGIONAL NURSING COUNCIL OF PERNAMBUCO',
    corenRole: isPt ? 'Estagiário // Help Desk N1' : 'Intern // Help Desk N1',
    corenDesc: isPt
      ? 'Atuação em suporte técnico de primeiro nível, auxiliando usuários na resolução de demandas de TI e no atendimento de chamados.'
      : 'Working in first-level technical support, assisting users with IT requests and handling support tickets.',
    fluxoDate: isPt ? 'MAIO 2026 — JUNHO 2026' : 'MAY 2026 — JUNE 2026',
    fluxoTitle: 'Fluxo — Gerenciamento Financeiro',
    fluxoRole: isPt
      ? 'Desenvolvedor Front-End / Full-Stack'
      : 'Front-End / Full-Stack Developer',
    fluxoDesc: isPt
      ? 'Desenvolvimento de interfaces para um sistema financeiro, integração de APIs e automação de documentos como PDFs e XMLs.'
      : 'Development of interfaces for a financial system, API integration, and document automation such as PDFs and XMLs.',
    eduTitle: isPt ? 'FORMAÇÃO ACADÊMICA' : 'ACADEMIC BACKGROUND',
    eduStatus: isPt ? 'EM ANDAMENTO' : 'IN PROGRESS',
    eduInstitution: 'UNINASSAU',
    eduCourse: isPt
      ? 'Sistemas de Informação - Bacharelado'
      : "Information Systems - Bachelor's Degree",
    eduDesc: isPt
      ? 'Graduação voltada ao desenvolvimento de conhecimentos em programação, banco de dados, engenharia de software e desenvolvimento web. Previsão de formação: 2028.'
      : 'Degree focused on programming, databases, software engineering, and web development. Expected graduation: 2028.',
  }

  const scrollAnimation = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.6, ease: 'easeOut' },
  }

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === projectScreens.length - 1 ? 0 : prev + 1
    )
  }

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? projectScreens.length - 1 : prev - 1
    )
  }

  return (
    <section
      id="about"
      className={`about-section ${isLight ? 'light-mode' : ''}`}
    >
      <div className="about-grid-overlay" aria-hidden="true" />

      <div className="about-container">
        <motion.div className="about-left" {...scrollAnimation}>
          <h2 className="about-title">
            {texts.title1} <span>{texts.title2}</span>
            <br />
            {texts.title3}
          </h2>

          <p className="about-description">{texts.desc}</p>

          <blockquote className="about-manifesto">
            {texts.manifesto}
          </blockquote>

          <div className="about-capabilities tech-panel">
            <div className="tech-panel__corner tech-panel__corner--top-left" />
            <div className="tech-panel__corner tech-panel__corner--top-right" />
            <div className="tech-panel__corner tech-panel__corner--bottom-left" />
            <div className="tech-panel__corner tech-panel__corner--bottom-right" />

            <div className="about-marquee">
              <div className="about-marquee__group">
                {capabilities.map((capability, index) => (
                  <span key={`original-${index}`} className="capability-tag">
                    {capability}
                  </span>
                ))}
              </div>
              <div className="about-marquee__group" aria-hidden="true">
                {capabilities.map((capability, index) => (
                  <span key={`duplicate-${index}`} className="capability-tag">
                    {capability}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            className="about-education tech-panel"
            {...scrollAnimation}
            transition={{ ...scrollAnimation.transition, delay: 0.2 }}
          >
            <div className="tech-panel__corner tech-panel__corner--top-left" />
            <div className="tech-panel__corner tech-panel__corner--top-right" />
            <div className="tech-panel__corner tech-panel__corner--bottom-left" />
            <div className="tech-panel__corner tech-panel__corner--bottom-right" />
            <div className="tech-panel__scanline" />

            <div className="about-education__header">
              <div>
                <span className="about-education__code">// EDUCAÇÃO</span>
                <span className="about-education__label">{texts.eduTitle}</span>
              </div>
              <span className="about-education__status">
                <span className="status-pulse" />
                {texts.eduStatus}
              </span>
            </div>

            <div className="about-education__body">
              <h4 className="about-education__institution">
                {texts.eduInstitution}
              </h4>
              <span className="about-education__course">{texts.eduCourse}</span>
              <p className="about-education__description">{texts.eduDesc}</p>
            </div>
          </motion.div>
        </motion.div>

        <div className="about-right">
          <motion.div
            className="project-slider-wrapper"
            {...scrollAnimation}
            transition={{ ...scrollAnimation.transition, delay: 0.15 }}
          >
            <div className="slider-window">
              {projectScreens.map((screen, index) => {
                let cardClass = 'slider-card--hidden'
                if (index === currentSlide) {
                  cardClass = 'slider-card--active'
                } else if (
                  index ===
                  (currentSlide + 1) % projectScreens.length
                ) {
                  cardClass = 'slider-card--next'
                }

                return (
                  <div
                    key={screen.id}
                    className={`slider-card tech-panel ${cardClass}`}
                  >
                    <div className="tech-panel__scanline" />
                    <img
                      src={screen.src}
                      alt={screen.alt}
                      className="system-screenshot"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="slider-card__badge">
                      <span className="slider-card__lights">
                        <span />
                        <span />
                        <span />
                      </span>
                      <span>{screen.alt}</span>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="slider-controls">
              <button
                type="button"
                onClick={prevSlide}
                className="slider-arrow"
                aria-label="Previous image"
              >
                <FaChevronLeft />
              </button>
              <span className="slider-counter">
                {String(currentSlide + 1).padStart(2, '0')} /{' '}
                {String(projectScreens.length).padStart(2, '0')}
              </span>
              <button
                type="button"
                onClick={nextSlide}
                className="slider-arrow"
                aria-label="Next image"
              >
                <FaChevronRight />
              </button>
            </div>
          </motion.div>

          <div className="editorial-timeline">
            <motion.div
              className="timeline-item timeline-item--active"
              {...scrollAnimation}
              transition={{ ...scrollAnimation.transition, delay: 0.2 }}
            >
              <div className="timeline-node timeline-node--active" />
              <div className="timeline-content">
                <span className="timeline-date timeline-date--active">
                  NEXT SQUAD_
                </span>
                <h4 className="timeline-title timeline-title--active">
                  {texts.nextSquadTitle}
                </h4>
                <p className="timeline-text">{texts.nextSquadDesc}</p>
              </div>
            </motion.div>

            <motion.div
              className="timeline-item timeline-item--current"
              {...scrollAnimation}
              transition={{ ...scrollAnimation.transition, delay: 0.3 }}
            >
              <div className="timeline-node timeline-node--current" />
              <div className="timeline-content">
                <span className="timeline-date timeline-date--current">
                  {texts.corenDate}
                </span>
                <h4 className="timeline-title">{texts.corenTitle}</h4>
                <span className="timeline-role">{texts.corenRole}</span>
                <p className="timeline-text">{texts.corenDesc}</p>
              </div>
            </motion.div>

            <motion.div
              className="timeline-item"
              {...scrollAnimation}
              transition={{ ...scrollAnimation.transition, delay: 0.4 }}
            >
              <div className="timeline-node" />
              <div className="timeline-content">
                <span className="timeline-date">{texts.fluxoDate}</span>
                <h4 className="timeline-title">{texts.fluxoTitle}</h4>
                <span className="timeline-role">{texts.fluxoRole}</span>
                <p className="timeline-text">{texts.fluxoDesc}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}