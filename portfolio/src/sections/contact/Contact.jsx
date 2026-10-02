import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaWhatsapp,
  FaArrowUpRightFromSquare,
} from 'react-icons/fa6'
import emailjs from '@emailjs/browser'

import './Contact.css'

const INITIAL_FORM = {
  nome: '',
  email: '',
  assunto: '',
  mensagem: '',
}

const CONTACT_CHANNELS = [
  {
    id: 'whatsapp',
    icon: FaWhatsapp,
    labelPt: 'WHATSAPP',
    labelEn: 'WHATSAPP',
    actionPt: '[CONECTAR]',
    actionEn: '[CONNECT]',
    href: 'https://wa.me/5581994304742',
    external: true,
  },
  {
    id: 'email',
    icon: FaEnvelope,
    labelPt: 'E-MAIL DIRETO',
    labelEn: 'DIRECT EMAIL',
    actionPt: '[ENVIAR]',
    actionEn: '[SEND]',
    href: 'mailto:eduardoguilhermedem987@gmail.com',
    external: false,
  },
  {
    id: 'linkedin',
    icon: FaLinkedinIn,
    labelPt: 'LINKEDIN',
    labelEn: 'LINKEDIN',
    actionPt: '[VISITAR]',
    actionEn: '[VISIT]',
    href: 'https://www.linkedin.com/in/eduardo-guilherme-5b41a9266/',
    external: true,
  },
  {
    id: 'github',
    icon: FaGithub,
    labelPt: 'GITHUB',
    labelEn: 'GITHUB',
    actionPt: '[EXPLORAR]',
    actionEn: '[EXPLORE]',
    href: 'https://github.com/Dudu-Medeiros',
    external: true,
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

export default function Contact({ theme, language }) {
  const formRef = useRef(null)

  const [formState, setFormState] = useState(INITIAL_FORM)

  const [status, setStatus] = useState({
    loading: false,
    type: null,
    message: '',
  })

  const isLight = theme === 'light'
  const isPt = language === 'pt'

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormState((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (status.loading) return

    const emailJsConfigured =
      SERVICE_ID &&
      TEMPLATE_ID &&
      PUBLIC_KEY

    if (!emailJsConfigured) {
      setStatus({
        loading: false,
        type: 'error',
        message: isPt
          ? 'Serviço de envio não configurado. Verifique as variáveis do EmailJS.'
          : 'Email service is not configured. Check the EmailJS environment variables.',
      })

      return
    }

    setStatus({
      loading: true,
      type: null,
      message: '',
    })

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      )

      setFormState(INITIAL_FORM)

      setStatus({
        loading: false,
        type: 'success',
        message: isPt
          ? 'Mensagem enviada com sucesso!'
          : 'Message sent successfully!',
      })
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)

      setStatus({
        loading: false,
        type: 'error',
        message: isPt
          ? 'Não foi possível enviar a mensagem. Tente novamente mais tarde.'
          : 'The message could not be sent. Please try again later.',
      })
    }
  }

  return (
    <section
      id="contact"
      className={`contact-section ${isLight ? 'light-mode' : ''}`}
    >
      <div className="contact-container">
        <motion.header
          className="contact-header"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <div className="contact-header__line" />

          <div>
            <span className="contact-header__eyebrow">
              {isPt
                ? '// CANAIS_DE_CONEXAO'
                : '// CONNECTION_CHANNELS'}
            </span>

            <h2 className="contact-header__title">
              {isPt ? 'INICIAR' : 'INITIATE'}
              <span>
                {isPt ? ' CONTATO' : ' CONTACT'}
              </span>
            </h2>

            <p className="contact-header__description">
              {isPt
                ? 'Tem uma oportunidade, projeto ou ideia? Entre em contato através de qualquer um dos canais abaixo.'
                : 'Have an opportunity, project, or idea? Get in touch through any of the channels below.'}
            </p>
          </div>
        </motion.header>

        <motion.div
          className="contact-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div
            className="contact-sidebar"
            variants={itemVariants}
          >
            <div className="contact-panel">
              <div className="contact-panel__corner contact-panel__corner--top-left" />
              <div className="contact-panel__corner contact-panel__corner--bottom-right" />

              <span className="contact-panel__label">
                {isPt
                  ? '// ENDPOINTS_OFICIAIS'
                  : '// OFFICIAL_ENDPOINTS'}
              </span>

              <p className="contact-panel__intro">
                {isPt
                  ? 'Escolha um canal para iniciar a comunicação.'
                  : 'Choose a channel to start the conversation.'}
              </p>

              <div className="contact-channels">
                {CONTACT_CHANNELS.map((channel) => {
                  const Icon = channel.icon

                  return (
                    <a
                      key={channel.id}
                      href={channel.href}
                      target={channel.external ? '_blank' : undefined}
                      rel={
                        channel.external
                          ? 'noopener noreferrer'
                          : undefined
                      }
                      className="contact-channel"
                    >
                      <div className="contact-channel__identity">
                        <span className="contact-channel__icon">
                          <Icon />
                        </span>

                        <span className="contact-channel__name">
                          {isPt
                            ? channel.labelPt
                            : channel.labelEn}
                        </span>
                      </div>

                      <div className="contact-channel__action">
                        <span>
                          {isPt
                            ? channel.actionPt
                            : channel.actionEn}
                        </span>

                        {channel.external && (
                          <FaArrowUpRightFromSquare />
                        )}
                      </div>
                    </a>
                  )
                })}
              </div>

              <div className="contact-panel__status">
                <span className="contact-panel__status-dot" />

                <span>
                  {isPt
                    ? 'CANAL ONLINE'
                    : 'CHANNEL ONLINE'}
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-wrapper"
            variants={itemVariants}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="contact-form"
            >
              <div className="contact-form__header">
                <div>
                  <span className="contact-form__code">
                    FORM_01
                  </span>

                  <h3 className="contact-form__title">
                    {isPt
                      ? 'ENVIE UMA MENSAGEM'
                      : 'SEND A MESSAGE'}
                  </h3>
                </div>

                <span className="contact-form__indicator">
                  {isPt ? 'SECURE_CHANNEL' : 'SECURE_CHANNEL'}
                </span>
              </div>

              <div className="contact-form__fields contact-form__fields--split">
                <div className="contact-field">
                  <label htmlFor="nome">
                    {isPt ? 'Seu Nome' : 'Your Name'}
                  </label>

                  <input
                    id="nome"
                    type="text"
                    name="nome"
                    value={formState.nome}
                    onChange={handleChange}
                    placeholder={
                      isPt
                        ? 'Ex: João Silva'
                        : 'e.g. John Doe'
                    }
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="email">
                    {isPt ? 'Seu E-mail' : 'Your Email'}
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder={
                      isPt
                        ? 'Ex: seuemail@provedor.com'
                        : 'e.g. mail@provider.com'
                    }
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="assunto">
                  {isPt
                    ? 'Assunto da Mensagem'
                    : 'Message Subject'}
                </label>

                <input
                  id="assunto"
                  type="text"
                  name="assunto"
                  value={formState.assunto}
                  onChange={handleChange}
                  placeholder={
                    isPt
                      ? 'Ex: Proposta de projeto / Oportunidade'
                      : 'e.g. Project proposal / Job opportunity'
                  }
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="mensagem">
                  {isPt ? 'Mensagem' : 'Message'}
                </label>

                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formState.mensagem}
                  onChange={handleChange}
                  rows={6}
                  placeholder={
                    isPt
                      ? 'Escreva os detalhes da sua mensagem aqui...'
                      : 'Write the details of your message here...'
                  }
                  required
                />
              </div>

              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`contact-status contact-status--${status.type}`}
                  role="status"
                  aria-live="polite"
                >
                  <span className="contact-status__indicator" />
                  <span>{status.message}</span>
                </motion.div>
              )}

              <div className="contact-form__footer">
                <span className="contact-form__hint">
                  {isPt
                    ? 'RESPONDO ASSIM QUE POSSÍVEL'
                    : 'I REPLY AS SOON AS POSSIBLE'}
                </span>

                <button
                  type="submit"
                  className="contact-submit"
                  disabled={status.loading}
                >
                  <span>
                    {status.loading
                      ? isPt
                        ? 'ENVIANDO...'
                        : 'SENDING...'
                      : isPt
                        ? 'ENVIAR MENSAGEM'
                        : 'SEND MESSAGE'}
                  </span>

                  <span
                    className={`contact-submit__indicator ${
                      status.loading
                        ? 'is-loading'
                        : ''
                    }`}
                  />
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}