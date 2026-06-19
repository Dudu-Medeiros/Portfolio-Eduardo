import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp, FaEnvelope, FaTimes, FaFileDownload, FaEye } from 'react-icons/fa'
import memojiImg from '../assets/memoji.png'
import './Hero.css' 

export default function Hero() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [isCvModalOpen, setIsCvModalOpen] = useState(false)

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="home" className="hero-section">
      
      <div className="hero-grid">
        
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.15 }}
          className="lg:col-span-7"
        >
          <motion.p variants={itemVariants} className="hero-subtitle">
            &lt;DESENVOLVEDOR FRONT-END /&gt;
          </motion.p>

          <motion.h1 variants={itemVariants} className="hero-title">
            Eduardo <span className="text-tech-cyan">Guilherme</span>
          </motion.h1>

          <motion.h2 
            variants={itemVariants} 
            className="text-2xl md:text-5xl font-bold text-slate-400 mb-6 leading-tight"
          >
            Construindo o futuro da web.
          </motion.h2>

          <motion.p variants={itemVariants} className="hero-description">
            Especialista em interfaces de alta performance e experiências digitais interativas. 
            Focado em transformar conceitos complexos em código limpo.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col gap-4 items-start">
            <div className="flex flex-wrap gap-4 items-center">
              <a href="#projects" className="group btn-primary">
                VER PROJETOS_
              </a>

              <button onClick={() => setIsContactModalOpen(true)} className="btn-secondary">
                <FaEnvelope /> ENTRAR EM CONTATO
              </button>
            </div>

            <button onClick={() => setIsCvModalOpen(true)} className="btn-cv">
              <FaEye /> VER CURRÍCULO
            </button>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="group hero-image-container"
        >
          <div className="hero-glow-effect"></div>

          <motion.div
            animate={{ y: [0, -20, 0] }}
            whileHover={{ scale: 1.08 }}
            transition={{
              y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 0.3, ease: "easeOut" }
            }}
            className="hero-avatar-wrapper"
          >
            <img 
              src={memojiImg} 
              alt="Eduardo Guilherme Visual" 
              className="hero-avatar-img"
            />
          </motion.div>
        </motion.div>

      </div>

      {/* MODAL DE CONTATO */}
      <AnimatePresence>
        {isContactModalOpen && (
          <div className="modal-overlay-fixed z-modal">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsContactModalOpen(false)}
              className="modal-backdrop-dark"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="modal-contact-card"
            >
              <button onClick={() => setIsContactModalOpen(false)} className="btn-close-modal">
                <FaTimes size={18} />
              </button>
              
              <h3 className="text-xl font-bold text-slate-100 mb-2 font-mono tracking-tighter">
                DESEJA CONTATO? SELECIONE A MELHOR OPÇÃO!
              </h3>
              
              <div className="flex flex-col gap-3 mt-6">
                <a 
                  href="https://wa.me/5581994304742" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-modal-whatsapp"
                >
                  <FaWhatsapp size={20} /> WHATSAPP
                </a>
                
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=eduardoguilhermedem987@gmail.com"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-modal-gmail"
                >
                  <FaEnvelope size={18} /> GMAIL
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* MODAL DO CURRÍCULO */}
      <AnimatePresence>
        {isCvModalOpen && (
          <div className="fixed inset-0 w-screen h-screen z-99999 flex items-center justify-center p-4 md:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCvModalOpen(false)}
              className="modal-backdrop-blur" 
            />

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              className="modal-cv-container"
            >
              <div className="modal-cv-header">
                <h3 className="text-tech-cyan font-mono font-black tracking-[0.15em] text-base md:text-lg">
                  CURRICULO
                </h3>
                
                <div className="flex items-center gap-4">
                  {/* AJUSTE AQUI: Inserido o 'group' para o link de download */}
                  <a 
                    href="/curriculo.pdf" 
                    download="Eduardo_Guilherme_Curriculo.pdf" 
                    className="group btn-cv-download"
                  >
                    BAIXAR O PDF <FaFileDownload size={14} />
                  </a>
                  <button onClick={() => setIsCvModalOpen(false)} className="text-slate-400 hover:text-tech-cyan transition-colors cursor-pointer">
                    <FaTimes size={24} />
                  </button>
                </div>
              </div>

              <div className="iframe-wrapper">
                <iframe 
                  src="/curriculo.pdf#toolbar=0&navpanes=0&view=FitH" 
                  title="Currículo Eduardo Guilherme"
                  className="w-full h-full border-none opacity-95"
                />
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  )
}