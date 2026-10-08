import React, { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaArrowUpRightFromSquare,
  FaGithub,
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
  FaXmark,
} from 'react-icons/fa6'

import fluxo1 from '../../assets/images/fluxo1.PNG'
import fluxo2 from '../../assets/images/fluxo2.jpeg'
import fluxo3 from '../../assets/images/fluxo3.jpeg'
import fluxo4 from '../../assets/images/fluxo4.jpeg'

import cvflow1 from '../../assets/images/cvflow1.jpeg'
import cvflow2 from '../../assets/images/cvflow2.jpeg'
import cvflow4 from '../../assets/images/cvflow4.jpeg'
import cvflow5 from '../../assets/images/cvflow5.jpeg'
import cvflow6 from '../../assets/images/cvflow6.jpeg'
import cvflow7 from '../../assets/images/cvflow7.jpeg'
import cvflow8 from '../../assets/images/cvflow8.jpeg'

import adl1 from '../../assets/images/adl1.PNG'
import adl2 from '../../assets/images/adl2.png'
import adl3 from '../../assets/images/adl3.png'
import adl4 from '../../assets/images/adl4.png'
import adl5 from '../../assets/images/adl5.png'
import adl6 from '../../assets/images/adl6.png'
import adl7 from '../../assets/images/adl7.png'
import adl8 from '../../assets/images/adl8.png'

import seakalm1 from '../../assets/images/seakalm1.PNG'

import './Projects.css'

const PROJECT_IMAGES = {
  fluxo: [fluxo1, fluxo2, fluxo3, fluxo4],
  cvflow: [cvflow1, cvflow2, cvflow4, cvflow5, cvflow6, cvflow7, cvflow8],
  adventure: [adl1, adl2, adl3, adl4, adl5, adl6, adl7, adl8],
  seakalm: [seakalm1],
}

const getProjectsData = (language) => {
  const isPt = language === 'pt'

  return [
    {
      id: 1,
      code: 'FLX_01',
      slug: 'fluxo',
      title: isPt
        ? 'FLUXO — GERENCIAMENTO FINANCEIRO'
        : 'FLUXO — FINANCIAL MANAGEMENT',
      status: 'ACTIVE_PRODUCTION',
      images: PROJECT_IMAGES.fluxo,
      description: isPt
        ? 'Plataforma de controladoria financeira residencial desenvolvida para substituir planilhas complexas. Possui fluxos para lançamento de entradas e saídas, persistência com Context API e uma interface desenvolvida com foco em usabilidade e organização.'
        : 'Residential financial management platform designed to replace complex spreadsheets. It features income and expense workflows, Context API persistence, and an interface focused on usability and organization.',
      tags: [
        'React',
        'JavaScript',
        'Tailwind CSS',
        'Bootstrap',
        'Context API',
        'Python',
        'Flask',
      ],
      githubLink: 'https://github.com/Dudu-Medeiros?tab=repositories',
    },
    {
      id: 2,
      code: 'CVFLW_02',
      slug: 'cvflow',
      title: isPt
        ? 'CVFLOW — GERADOR DE CURRÍCULOS'
        : 'CVFLOW — RESUME BUILDER',
      status: 'STABLE',
      images: PROJECT_IMAGES.cvflow,
      description: isPt
        ? 'Sistema web voltado a geração de currículos com visualização em tempo real. Salvamento, gerenciamento, edição e modelos (ATS, MODERNO, EXECUTIVO) são opções de dinâmicas do usuário no sistema.'
        : 'A web-based system for generating resumes with real-time preview. Users can save, manage, and edit resumes, as well as choose from various templates (ATS, Modern, Executive).',
      tags: [
        'JavaScript',
        'React',
        'HTML',
        'CSS',
        'Python',
        'Flask',
        'PostgreSQL',
      ],
      githubLink: 'https://github.com/Dudu-Medeiros/CVFlow',
    },
    {
      id: 3,
      code: 'SEA_03',
      slug: 'seakalm',
      title: isPt
        ? 'SEAKALM — SAÚDE MENTAL INFANTIL'
        : 'SEAKALM — CHILD MENTAL HEALTH',
      status: 'HEALTHY_SYSTEM',
      images: PROJECT_IMAGES.seakalm,
      description: isPt
        ? 'Aplicação voltada ao gerenciamento de saúde mental, controle de estresse e monitoramento de bem-estar. Desenvolvida com foco em alta legibilidade, navegação estruturada e organização de estados para uma experiência digital clara e acessível.'
        : 'Application focused on mental health management, stress control, and well-being monitoring. Developed with an emphasis on readability, structured navigation, and organized state management for a clear and accessible digital experience.',
      tags: [
        'JavaScript',
        'HTML',
        'CSS',
        'Java',
        'Spring Boot',
        'MySQL',
        'REST APIs',
      ],
      githubLink: 'https://github.com/Dudu-Medeiros/SeaKalm',
    },
    {
      id: 4,
      code: 'ADL_04',
      slug: 'aventura',
      title: isPt
        ? 'AVENTURA DAS LETRAS — SISTEMA EDUCACIONAL PARA CRIANÇAS DO IMIP'
        : 'ADVENTURE OF LETTERS — EDUCATIONAL SYSTEM FOR CHILDREN AT IMIP',
      status: 'SYSTEM_INTEGRATION',
      images: PROJECT_IMAGES.adventure,
      description: isPt
        ? 'Desenvolvimento e integração de módulos funcionais para uma plataforma educacional voltada ao IMIP. O projeto envolve otimização de fluxos internos, aplicação de regras de negócio e refinamento de interfaces para manipulação de registros estruturados.'
        : 'Development and integration of functional modules for an educational platform designed for IMIP. The project involves optimizing internal workflows, applying business rules, and refining interfaces for managing structured records.',
      tags: [
        'React',
        'JavaScript',
        'Tailwind CSS',
        'Python',
        'Flask',
        'API Integration',
        'Git',
        'Agile',
      ],
      githubLink: 'https://github.com/Dudu-Medeiros/Aventura_das_letras',
    },
  ]
}

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.12 },
  },
}

const itemFadeVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
  exit: (direction) => ({
    x: direction < 0 ? 80 : -80,
    opacity: 0,
    scale: 0.98,
    transition: { duration: 0.25, ease: 'easeIn' },
  }),
}

const innerImageVariants = {
  enter: (direction) => ({ x: direction > 0 ? 30 : -30, opacity: 0 }),
  center: { x: 0, opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
  exit: (direction) => ({ x: direction < 0 ? 30 : -30, opacity: 0, transition: { duration: 0.2, ease: 'easeIn' } }),
}

function ProjectVisual({ project, isPt, onExpand }) {
  const images = project.images || []
  const hasImages = images.length > 0
  const hasMultipleImages = images.length > 1
  const [[currentImage, direction], setImage] = useState([0, 0])

  useEffect(() => {
    setImage([0, 0])
  }, [project.id])

  const paginateImage = (newDir) => {
    let next = currentImage + newDir
    if (next < 0) next = images.length - 1
    if (next >= images.length) next = 0
    setImage([next, newDir])
  }

  return (
    <div className="project-card__visual">
      {hasImages ? (
        <div className="project-preview">
          <div className="project-preview__header">
            <div className="project-preview__header-info">
              <span>{project.code}</span>
              {hasMultipleImages && (
                <span className="project-preview__counter">
                  {String(currentImage + 1).padStart(2, '0')}/
                  {String(images.length).padStart(2, '0')}
                </span>
              )}
            </div>

            <div className="project-preview__lights">
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className="project-preview__screen group">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.img
                key={currentImage}
                src={images[currentImage]}
                custom={direction}
                variants={innerImageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                alt={`${project.title} preview ${currentImage + 1}`}
                loading="lazy"
                decoding="async"
                onClick={() => onExpand(images[currentImage])}
                className="cursor-pointer"
              />
            </AnimatePresence>

            {hasMultipleImages && (
              <>
                <button
                  type="button"
                  className="inner-carousel-btn inner-carousel-btn--prev"
                  onClick={(e) => {
                    e.stopPropagation()
                    paginateImage(-1)
                  }}
                  aria-label="Previous image"
                >
                  <FaChevronLeft />
                </button>

                <button
                  type="button"
                  className="inner-carousel-btn inner-carousel-btn--next"
                  onClick={(e) => {
                    e.stopPropagation()
                    paginateImage(1)
                  }}
                  aria-label="Next image"
                >
                  <FaChevronRight />
                </button>
              </>
            )}

            <div className="project-preview__overlay pointer-events-none">
              <span>{isPt ? 'VISUALIZAÇÃO DO SISTEMA' : 'SYSTEM PREVIEW'}</span>
              <button
                type="button"
                className="project-preview__expand-btn pointer-events-auto"
                onClick={(e) => {
                  e.stopPropagation()
                  onExpand(images[currentImage])
                }}
                aria-label="Expand image"
              >
                <FaExpand />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="project-preview project-preview--empty">
          <span className="project-preview__empty-code">{project.code}</span>
          <strong>{isPt ? 'PREVIEW INDISPONÍVEL' : 'PREVIEW UNAVAILABLE'}</strong>
          <small>// SYSTEM_INTERFACE</small>
        </div>
      )}
    </div>
  )
}

export default function Projects({ theme, language }) {
  const isLight = theme === 'light'
  const isPt = language === 'pt'
  const projects = useMemo(() => getProjectsData(language), [language])

  const [[currentIndex, direction], setPage] = useState([0, 0])
  const [expandedImage, setExpandedImage] = useState(null)

  useEffect(() => {
    document.body.style.overflow = expandedImage ? 'hidden' : 'unset'
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setExpandedImage(null)
    }
    if (expandedImage) window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [expandedImage])

  const paginateProject = (newDirection) => {
    let nextIndex = currentIndex + newDirection
    if (nextIndex < 0) nextIndex = projects.length - 1
    if (nextIndex >= projects.length) nextIndex = 0
    setPage([nextIndex, newDirection])
  }

  const selectProject = (idx) => {
    if (idx === currentIndex) return
    setPage([idx, idx > currentIndex ? 1 : -1])
  }

  const activeProject = projects[currentIndex]

  return (
    <section
      id="projects"
      className={`projects-section ${isLight ? 'light-mode' : ''}`}
    >
      <motion.div
        className="projects-container"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.header className="projects-header" variants={itemFadeVariants}>
          <div className="projects-header__line" />
          <div>
            <span className="projects-header__eyebrow">// MAIN_REPOSITORY_LOG</span>
            <h2 className="projects-header__title">
              {isPt ? 'PROJETOS' : 'EXECUTED'}
              <span>{isPt ? ' EXECUTADOS' : ' PROJECTS'}</span>
            </h2>
            <p className="projects-header__description">
              {isPt
                ? 'Uma seleção de sistemas, interfaces e soluções desenvolvidas ao longo da minha trajetória.'
                : 'A selection of systems, interfaces, and solutions developed throughout my journey.'}
            </p>
          </div>
        </motion.header>

        <motion.div className="showcase-nav-bar" variants={itemFadeVariants}>
          <div className="showcase-nav-bar__tabs">
            {projects.map((project, idx) => (
              <button
                key={project.id}
                type="button"
                onClick={() => selectProject(idx)}
                className={`showcase-nav-bar__tab ${idx === currentIndex ? 'active' : ''}`}
              >
                <span>0{idx + 1}</span>
                <strong>{project.code}</strong>
              </button>
            ))}
          </div>

          <div className="showcase-nav-bar__controls">
            <span className="showcase-counter">
              [{String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}]
            </span>
            <button
              type="button"
              onClick={() => paginateProject(-1)}
              className="showcase-control-btn"
              aria-label="Previous Project"
            >
              <FaChevronLeft />
            </button>
            <button
              type="button"
              onClick={() => paginateProject(1)}
              className="showcase-control-btn"
              aria-label="Next Project"
            >
              <FaChevronRight />
            </button>
          </div>
        </motion.div>

        <motion.div className="showcase-stage" variants={itemFadeVariants}>
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.article
              key={activeProject.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="project-card showcase-card"
            >
              <div className="project-card__corner project-card__corner--top-left" />
              <div className="project-card__corner project-card__corner--top-right" />
              <div className="project-card__corner project-card__corner--bottom-left" />
              <div className="project-card__corner project-card__corner--bottom-right" />
              <div className="project-card__scanline" />

              <ProjectVisual project={activeProject} isPt={isPt} onExpand={setExpandedImage} />

              <div className="project-card__content">
                <div className="project-card__header">
                  <div>
                    <div className="project-card__meta">
                      <span className="project-card__index">/ 0{activeProject.id}</span>
                      <span className="project-card__separator">//</span>
                      <span className="project-card__id">ID: 00{activeProject.id}</span>
                      <span className="project-card__separator">//</span>
                      <span className="project-card__status">
                        <span className="project-card__status-dot" />
                        {activeProject.status}
                      </span>
                    </div>
                    <h3 className="project-card__title">{activeProject.title}</h3>
                  </div>

                  <a
                    href={activeProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__github"
                    aria-label={isPt ? `Abrir repositório de ${activeProject.title}` : `Open repository`}
                  >
                    <FaGithub />
                    <span>{isPt ? 'VER_REPOSITÓRIO' : 'VIEW_REPOSITORY'}</span>
                    <FaArrowUpRightFromSquare />
                  </a>
                </div>

                <div className="project-card__body">
                  <p className="project-card__description">{activeProject.description}</p>
                </div>

                <div className="project-card__footer">
                  <span className="project-card__stack-label">{isPt ? 'ARQUITETURA' : 'STACK'}</span>
                  <div className="project-card__tags">
                    {activeProject.tags.map((tag) => (
                      <span key={tag} className="project-card__tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </motion.div>

        <motion.div className="showcase-dock" variants={itemFadeVariants}>
          {projects.map((project, idx) => {
            const thumbImage = project.images && project.images.length > 0 ? project.images[0] : null
            return (
              <button
                key={project.id}
                type="button"
                onClick={() => selectProject(idx)}
                className={`showcase-dock__item ${idx === currentIndex ? 'active' : ''}`}
              >
                <div className="showcase-dock__thumb">
                  {thumbImage ? (
                    <img src={thumbImage} alt={project.title} />
                  ) : (
                    <span className="showcase-dock__empty-thumb">{project.code}</span>
                  )}
                </div>
                <div className="showcase-dock__info">
                  <span className="showcase-dock__code">{project.code}</span>
                  <span className="showcase-dock__title">{project.title}</span>
                </div>
              </button>
            )
          })}
        </motion.div>
      </motion.div>

      {/* Lightbox / Modal de imagem expandida */}
      <AnimatePresence>
        {expandedImage && (
          <div className="lightbox-root">
            <motion.div
              className="lightbox-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setExpandedImage(null)}
            />
            <motion.div
              className="lightbox-content"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="lightbox-close"
                onClick={() => setExpandedImage(null)}
                aria-label="Fechar"
              >
                <FaXmark />
              </button>
              <img src={expandedImage} alt="Fullscreen preview" className="lightbox-img" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}