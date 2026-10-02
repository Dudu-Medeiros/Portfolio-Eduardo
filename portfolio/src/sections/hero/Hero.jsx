import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaWhatsapp,
  FaEnvelope,
  FaTimes,
  FaFileDownload,
  FaEye,
} from "react-icons/fa";

import memojiImg from "../../assets/images/memoji.png";
import "./Hero.css";

export default function Hero({ theme, language }) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  const isLight = theme === "light";

  const texts = {
    role:
      language === "pt"
        ? "<DESENVOLVEDOR FRONT-END />"
        : "<FRONT-END DEVELOPER />",

    heading:
      language === "pt"
        ? "Construindo o futuro da web."
        : "Building the future of the web.",

    description:
      language === "pt"
        ? "Especialista em interfaces de alta performance e experiências digitais interativas. Focado em transformar conceitos complexos em código limpo."
        : "Specialist in high-performance interfaces and interactive digital experiences. Focused on turning complex concepts into clean code.",

    btnProjects:
      language === "pt" ? "VER PROJETOS_" : "VIEW PROJECTS_",

    btnContact:
      language === "pt" ? "ENTRAR EM CONTATO" : "GET IN TOUCH",

    btnCv:
      language === "pt" ? "VER CURRÍCULO" : "VIEW RESUME",

    modalContactTitle:
      language === "pt"
        ? "DESEJA CONTATO? SELECIONE A MELHOR OPÇÃO!"
        : "WANT TO CONNECT? CHOOSE AN OPTION!",

    modalCvTitle:
      language === "pt" ? "CURRÍCULO" : "RESUME",

    btnDownload:
      language === "pt" ? "BAIXAR O PDF" : "DOWNLOAD PDF",
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      id="home"
      className={`hero-section ${
        isLight ? "hero-section--light" : "hero-section--dark"
      }`}
    >
      <div className="hero-grid">
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          transition={{
            staggerChildren: 0.15,
          }}
        >
          <motion.p
            variants={itemVariants}
            className="hero-subtitle"
          >
            {texts.role}
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="hero-title"
          >
            Eduardo <span>Guilherme</span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="hero-heading"
          >
            {texts.heading}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="hero-description"
          >
            {texts.description}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="hero-actions"
          >
            <div className="hero-actions__main">
              <a
                href="#projects"
                className="btn-primary"
              >
                {texts.btnProjects}
              </a>

              <button
                type="button"
                onClick={() => setIsContactModalOpen(true)}
                className="btn-secondary"
              >
                <FaEnvelope />
                {texts.btnContact}
              </button>
            </div>

            <button
              type="button"
              onClick={() => setIsCvModalOpen(true)}
              className="btn-cv"
            >
              <FaEye />
              {texts.btnCv}
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.6,
          }}
        >
          <div className="hero-glow-effect" />

          <motion.div
            className="hero-avatar-wrapper"
            animate={{
              y: [0, -20, 0],
            }}
            whileHover={{
              scale: 1.08,
            }}
            transition={{
              y: {
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
              scale: {
                duration: 0.3,
                ease: "easeOut",
              },
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

      <AnimatePresence>
        {isContactModalOpen && (
          <div className="hero-modal">
            <motion.div
              className="hero-modal__backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsContactModalOpen(false)}
            />

            <motion.div
              className={`contact-modal ${
                isLight ? "contact-modal--light" : ""
              }`}
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
              }}
            >
              <button
                type="button"
                className="modal-close"
                onClick={() => setIsContactModalOpen(false)}
                aria-label="Fechar"
              >
                <FaTimes size={18} />
              </button>

              <h3 className="contact-modal__title">
                {texts.modalContactTitle}
              </h3>

              <div className="contact-modal__actions">
                <a
                  href="https://wa.me/5581994304742"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-modal__whatsapp"
                >
                  <FaWhatsapp size={20} />
                  WHATSAPP
                </a>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=eduardoguilhermedem987@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-modal__gmail"
                >
                  <FaEnvelope size={18} />
                  GMAIL
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isCvModalOpen && (
          <div className="hero-modal">
            <motion.div
              className="hero-modal__backdrop hero-modal__backdrop--blur"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCvModalOpen(false)}
            />

            <motion.div
              className={`cv-modal ${
                isLight ? "cv-modal--light" : ""
              }`}
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: 30,
              }}
            >
              <div className="cv-modal__header">
                <h3>{texts.modalCvTitle}</h3>

                <div className="cv-modal__actions">
                  <a
                    href="/curriculo.pdf"
                    download="Eduardo_Guilherme_Curriculo.pdf"
                    className="btn-cv-download"
                  >
                    {texts.btnDownload}
                    <FaFileDownload size={14} />
                  </a>

                  <button
                    type="button"
                    className="modal-close"
                    onClick={() => setIsCvModalOpen(false)}
                    aria-label="Fechar currículo"
                  >
                    <FaTimes size={24} />
                  </button>
                </div>
              </div>

              <div className="iframe-wrapper">
                <iframe
                  src="/curriculo.pdf#toolbar=0&navpanes=0&view=FitH"
                  title="Currículo Eduardo Guilherme"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}