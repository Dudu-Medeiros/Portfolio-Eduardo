import React, { useState, useEffect, useMemo } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  FaWhatsapp,
  FaEnvelope,
  FaFileArrowDown,
  FaEye,
  FaArrowRight,
  FaXmark,
} from 'react-icons/fa6'

import memojiImg from '../../assets/images/memoji.png'
import './Hero.css'

const getHeroData = (language) => {
  const isPt = language === 'pt'

  return {
    status: isPt ? 'DISPONÍVEL PARA PROJETOS' : 'AVAILABLE FOR WORK',
    role: isPt ? '<DESENVOLVEDOR FRONT-END />' : '<FRONT-END DEVELOPER />',
    heading: isPt
      ? 'Construindo o futuro da web.'
      : 'Building the future of the web.',
    description: isPt
      ? 'Desenvolvedor Front-End focado na construção de aplicações web modernas, responsivas e de alto desempenho. Transformo regras de negócio em interfaces funcionais, organizadas e intuitivas.'
      : 'Front-End Developer focused on building modern, responsive, and high-performance web applications. Turning business requirements into functional, well-structured, and intuitive interfaces.',
    btnProjects: isPt ? 'VER PROJETOS_' : 'VIEW PROJECTS_',
    btnContact: isPt ? 'ENTRAR EM CONTATO' : 'GET IN TOUCH',
    btnCv: isPt ? 'VER CURRÍCULO' : 'VIEW RESUME',
    modalContactTitle: isPt
      ? 'CANAL DE COMUNICAÇÃO'
      : 'COMMUNICATION CHANNEL',
    modalContactSubtitle: isPt
      ? 'Escolha a melhor plataforma para iniciar uma conversa:'
      : 'Select your preferred platform to start a conversation:',
    modalCvTitle: isPt ? 'CURRÍCULO // PREVIEW' : 'RESUME // PREVIEW',
    btnDownload: isPt ? 'BAIXAR PDF' : 'DOWNLOAD PDF',
  }
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export default function Hero({ theme, language }) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [isCvModalOpen, setIsCvModalOpen] = useState(false)

  const isLight = theme === 'light'
  const isPt = language === 'pt'
  const texts = useMemo(() => getHeroData(language), [language])

  // controle de scroll e tecla esc
  useEffect(() => {
    const isAnyModalOpen = isContactModalOpen || isCvModalOpen
    document.body.style.overflow = isAnyModalOpen ? 'hidden' : 'unset'

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsContactModalOpen(false)
        setIsCvModalOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isContactModalOpen, isCvModalOpen])

  return (
    <section
      id="home"
      className={`hero-section ${isLight ? 'light-mode' : ''}`}
    >
      <div className="hero-container">
        <div className="hero-grid">
          <motion.div
            className="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="hero-meta">
              <span className="hero-status">
                <span className="hero-status-dot" />
                {texts.status}
              </span>
              <span className="hero-separator">//</span>
              <span className="hero-role">{texts.role}</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="hero-title">
              Eduardo
              <span>Guilherme</span>
            </motion.h1>

            <motion.h2 variants={itemVariants} className="hero-heading">
              {texts.heading}
            </motion.h2>

            <motion.p variants={itemVariants} className="hero-description">
              {texts.description}
            </motion.p>

            <motion.div variants={itemVariants} className="hero-actions">
              <div className="hero-actions__main">
                <a href="#projects" className="hero-btn hero-btn--primary">
                  <span>{texts.btnProjects}</span>
                  <FaArrowRight />
                </a>

                <button
                  type="button"
                  onClick={() => setIsContactModalOpen(true)}
                  className="hero-btn hero-btn--secondary"
                >
                  <FaEnvelope />
                  <span>{texts.btnContact}</span>
                </button>
              </div>

              <button
                type="button"
                onClick={() => setIsCvModalOpen(true)}
                className="hero-btn hero-btn--cv"
              >
                <FaEye />
                <span>{texts.btnCv}</span>
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-avatar-area"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="hero-glow-layer" />

            <motion.div
              className="hero-avatar-frame"
              animate={{ y: [0, -18, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <img
                src={memojiImg}
                alt="Eduardo Guilherme"
                className="hero-avatar-img"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* modal de contato */}
      <AnimatePresence>
        {isContactModalOpen && (
          <div className="hero-modal-root">
            <motion.div
              className="hero-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsContactModalOpen(false)}
            />

            <motion.div
              className="hero-modal contact-modal-card"
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ duration: 0.25 }}
            >
              <div className="hero-modal__header">
                <div>
                  <span className="hero-modal__eyebrow">// DIRECT_MESSAGE</span>
                  <h3 className="hero-modal__title">{texts.modalContactTitle}</h3>
                </div>

                <button
                  type="button"
                  className="hero-modal__close-btn"
                  onClick={() => setIsContactModalOpen(false)}
                  aria-label="Close"
                >
                  <FaXmark />
                </button>
              </div>

              <p className="contact-modal__subtitle">
                {texts.modalContactSubtitle}
              </p>

              <div className="contact-modal__options">
                <a
                  href="https://wa.me/5581994304742"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card-btn contact-card-btn--whatsapp"
                >
                  <div className="contact-card-btn__icon">
                    <FaWhatsapp />
                  </div>
                  <div className="contact-card-btn__info">
                    <strong>WhatsApp</strong>
                    <span>+55 (81) 99430-4742</span>
                  </div>
                  <FaArrowRight className="contact-card-btn__arrow" />
                </a>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=eduardoguilhermedem987@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card-btn contact-card-btn--gmail"
                >
                  <div className="contact-card-btn__icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-card-btn__info">
                    <strong>Gmail</strong>
                    <span>eduardoguilhermedem987@gmail.com</span>
                  </div>
                  <FaArrowRight className="contact-card-btn__arrow" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* modal de curriculo */}
      <AnimatePresence>
        {isCvModalOpen && (
          <div className="hero-modal-root">
            <motion.div
              className="hero-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCvModalOpen(false)}
            />

            <motion.div
              className="hero-modal cv-modal-card"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="cv-modal__bar">
                <div className="cv-modal__bar-left">
                  <div className="cv-modal__lights">
                    <span />
                    <span />
                    <span />
                  </div>
                  <span className="cv-modal__bar-title">{texts.modalCvTitle}</span>
                </div>

                <div className="cv-modal__bar-actions">
                  <a
                    href="/curriculo.pdf"
                    download="Eduardo_Guilherme_Curriculo.pdf"
                    className="cv-btn-download"
                  >
                    <FaFileArrowDown />
                    <span>{texts.btnDownload}</span>
                  </a>

                  <button
                    type="button"
                    className="hero-modal__close-btn"
                    onClick={() => setIsCvModalOpen(false)}
                    aria-label="Close"
                  >
                    <FaXmark />
                  </button>
                </div>
              </div>

              <div className="cv-modal__viewport">
                <iframe
                  src="/curriculo.pdf#toolbar=0&navpanes=0&view=FitH"
                  title="Currículo Eduardo Guilherme"
                  className="cv-modal__iframe"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}