import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6'

import fluxoDashboard from '../../assets/images/fluxoDashboard.PNG'
import ADL from '../../assets/images/ADL.PNG'
import seakalmDashboard from '../../assets/images/seakalmDashboard.PNG'

import './Projects.css'

const PROJECT_IMAGES = {
  fluxo: fluxoDashboard,
  adventure: ADL,
  seakalm: seakalmDashboard,
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
      image: PROJECT_IMAGES.fluxo,
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
        ? 'PHYSICOLOG — ANÁLISES DIÁRIAS'
        : 'PHYSICOLOG — DAILY ANALYSIS',
      status: 'CORE_STABLE',
      image: null,
      description: isPt
        ? 'Sistema web voltado ao acompanhamento cognitivo e à organização de rotinas diárias. Integra uma interface minimalista de diário a uma estrutura de backend responsável por indexação de entradas, sessões seguras e análise cronológica dos dados do usuário.'
        : 'Web system focused on cognitive tracking and daily routine organization. It combines a minimalist diary interface with a backend structure responsible for entry indexing, secure sessions, and chronological analysis of user data.',
      tags: [
        'JavaScript',
        'React',
        'HTML',
        'CSS',
        'Python',
        'Flask',
        'PostegreSQL',
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
      status: 'HEALTY_SYSTEM',
      image: PROJECT_IMAGES.seakalm,
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
        ? 'AVENTURA DAS LETRAS — SISTEMA EDUCACIONAL PARA CRINÇAS DO IMIP'
        : 'ADVENTURE OF LETTERS — EDUCATIONAL SYSTEM FOR CHILDREN AT IMIP',
      status: 'SYSTEM_INTEGRATION',
      image: PROJECT_IMAGES.adventure,
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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: 'easeOut',
    },
  },
}

export default function Projects({ theme, language }) {
  const isLight = theme === 'light'
  const isPt = language === 'pt'
  const projects = getProjectsData(language)

  return (
    <section
      id="projects"
      className={`projects-section ${isLight ? 'light-mode' : ''}`}
    >
      <div className="projects-container">
        <header className="projects-header">
          <div className="projects-header__line" />

          <div>
            <span className="projects-header__eyebrow">
              // MAIN_REPOSITORY_LOG
            </span>

            <h2 className="projects-header__title">
              {isPt ? 'PROJETOS' : 'EXECUTED'}
              <span>
                {isPt ? ' EXECUTADOS' : ' PROJECTS'}
              </span>
            </h2>

            <p className="projects-header__description">
              {isPt
                ? 'Uma seleção de sistemas, interfaces e soluções desenvolvidas ao longo da minha trajetória.'
                : 'A selection of systems, interfaces, and solutions developed throughout my journey.'}
            </p>
          </div>
        </header>

        <motion.div
          className="projects-list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={cardVariants}
              className="project-card"
            >
              <div className="project-card__corner project-card__corner--top-left" />
              <div className="project-card__corner project-card__corner--top-right" />
              <div className="project-card__corner project-card__corner--bottom-left" />
              <div className="project-card__corner project-card__corner--bottom-right" />

              <div className="project-card__scanline" />

              <div className="project-card__visual">
                {project.image ? (
                  <div className="project-preview">
                    <div className="project-preview__header">
                      <span>{project.code}</span>

                      <div className="project-preview__lights">
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>

                    <div className="project-preview__screen">
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        loading="lazy"
                        decoding="async"
                      />

                      <div className="project-preview__overlay">
                        <span>
                          {isPt ? 'VISUALIZAÇÃO DO SISTEMA' : 'SYSTEM PREVIEW'}
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="project-preview project-preview--empty">
                    <span className="project-preview__empty-code">
                      {project.code}
                    </span>

                    <strong>
                      {isPt ? 'PREVIEW INDISPONÍVEL' : 'PREVIEW UNAVAILABLE'}
                    </strong>

                    <small>
                      {isPt
                        ? '// SYSTEM_INTERFACE'
                        : '// SYSTEM_INTERFACE'}
                    </small>
                  </div>
                )}
              </div>

              <div className="project-card__content">
                <div className="project-card__top">
                  <div className="project-card__meta">
                    <span className="project-card__id">
                      ID: 00{project.id}
                    </span>

                    <span className="project-card__separator">//</span>

                    <span className="project-card__status">
                      <span className="project-card__status-dot" />
                      {project.status}
                    </span>
                  </div>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__github"
                    aria-label={
                      isPt
                        ? `Abrir repositório de ${project.title}`
                        : `Open repository for ${project.title}`
                    }
                  >
                    <FaGithub />

                    <span>
                      {isPt ? 'VER_REPOSITÓRIO' : 'VIEW_REPOSITORY'}
                    </span>

                    <FaArrowUpRightFromSquare />
                  </a>
                </div>

                <div className="project-card__body">
                  <span className="project-card__index">
                    / 0{project.id}
                  </span>

                  <h3 className="project-card__title">
                    {project.title}
                  </h3>

                  <p className="project-card__description">
                    {project.description}
                  </p>
                </div>

                <div className="project-card__footer">
                  <span className="project-card__stack-label">
                    {isPt ? 'ARQUITETURA' : 'STACK'}
                  </span>

                  <div className="project-card__tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-card__tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}