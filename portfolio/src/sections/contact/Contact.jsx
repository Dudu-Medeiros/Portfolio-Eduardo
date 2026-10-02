import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

export default function Contact({ theme, language }) {
  // Configuração protegida via variáveis de ambiente do Vite
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  const formRef = useRef()
  const [formState, setFormState] = useState({ nome: '', email: '', assunto: '', mensagem: '' })
  const [status, setStatus] = useState({ loading: false, success: null, error: null })

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: null, error: null })

    // Envio real através do protocolo EmailJS utilizando as chaves seguras
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus({ 
          loading: false, 
          success: language === 'pt' ? 'Mensagem enviada com sucesso para Eduardo!' : 'Message successfully sent to Eduardo!', 
          error: null 
        })
        setFormState({ nome: '', email: '', assunto: '', mensagem: '' })
      })
      .catch((err) => {
        console.error('Erro ao transmitir e-mail:', err)
        setStatus({ 
          loading: false, 
          success: null, 
          error: language === 'pt' ? 'Falha ao enviar. Tente novamente mais tarde.' : 'Failed to send. Please try again later.' 
        })
      })
  }

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const isLight = theme === 'light';

  return (
    <section id="contact" className={`py-28 border-t relative transition-colors duration-500 ${isLight ? 'border-slate-200' : 'border-slate-900/60'}`}>
      
      {/* Cabeçalho Técnico HUD */}
      <div className={`mb-20 text-left relative pl-4 border-l transition-colors duration-500 ${isLight ? 'border-tech-cyan/60' : 'border-tech-cyan/30'}`}>
        <span className="text-tech-cyan font-mono text-xs tracking-[0.25em] uppercase block mb-2">
          {language === 'pt' ? '// CANAIS_DE_CONEXAO' : '// CONNECTION_CHANNELS'}
        </span>
        <h2 className={`text-4xl md:text-5xl font-black tracking-tight uppercase transition-colors duration-500 ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
          {language === 'pt' ? 'INICIAR ' : 'INITIATE '}
          <span className={`font-light transition-colors duration-500 ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>
            {language === 'pt' ? 'CONTATO' : 'CONTACT'}
          </span>
        </h2>
      </div>

      {/* Grade de Contato */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-start">
        
        {/* LADO ESQUERDO: LINKS DE ACESSO DIRETO */}
        <div className="lg:col-span-5 flex flex-col gap-6 font-mono">
          <div className={`rounded-xl p-6 relative overflow-hidden border transition-all duration-500 ${
            isLight ? 'bg-white border-slate-200 shadow-md' : 'bg-[#070b14]/80 border-slate-900'
          }`}>
            <div className={`absolute top-0 left-0 w-2 h-2 border-t border-l ${isLight ? 'border-slate-300' : 'border-slate-800'}`} />
            <div className={`absolute bottom-0 right-0 w-2 h-2 border-b border-r ${isLight ? 'border-slate-300' : 'border-slate-800'}`} />
            
            <span className={`text-[10px] block mb-4 ${isLight ? 'text-slate-400' : 'text-slate-600'}`}>
              {language === 'pt' ? '// ENDPOINTS_OFICIAIS' : '// OFFICIAL_ENDPOINTS'}
            </span>
            
            <div className="flex flex-col gap-4">
              {/* WHATSAPP */}
              <a 
                href="https://wa.me/5581994304742" 
                target="_blank"
                rel="noreferrer"
                className={`flex items-center justify-between p-3 border rounded-md transition-all duration-300 group ${
                  isLight 
                    ? 'border-slate-200 bg-slate-50 hover:border-tech-cyan/40 hover:bg-tech-cyan/[0.02]' 
                    : 'border-slate-900/60 bg-slate-950/20 hover:border-tech-cyan/30 hover:bg-tech-cyan/[0.02]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <FaWhatsapp className="text-slate-500 group-hover:text-tech-cyan transition-colors" />
                  <span className={`text-xs transition-colors group-hover:text-slate-900 dark:group-hover:text-slate-200 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>WHATSAPP</span>
                </div>
                <span className={`text-[10px] transition-colors group-hover:text-tech-cyan ${isLight ? 'text-slate-400' : 'text-slate-600'}`}>
                  {language === 'pt' ? '[CONECTAR]' : '[CONNECT]'}
                </span>
              </a>

              {/* E-MAIL */}
              <a 
                href="mailto:eduardoguilhermedem987@gmail.com" 
                className={`flex items-center justify-between p-3 border rounded-md transition-all duration-300 group ${
                  isLight 
                    ? 'border-slate-200 bg-slate-50 hover:border-tech-cyan/40 hover:bg-tech-cyan/[0.02]' 
                    : 'border-slate-900/60 bg-slate-950/20 hover:border-tech-cyan/30 hover:bg-tech-cyan/[0.02]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-slate-500 group-hover:text-tech-cyan transition-colors" />
                  <span className={`text-xs transition-colors group-hover:text-slate-900 dark:group-hover:text-slate-200 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                    {language === 'pt' ? 'E-MAIL DIRETO' : 'DIRECT EMAIL'}
                  </span>
                </div>
                <span className={`text-[10px] transition-colors group-hover:text-tech-cyan ${isLight ? 'text-slate-400' : 'text-slate-600'}`}>
                  {language === 'pt' ? '[COPIAR]' : '[COPY]'}
                </span>
              </a>

              {/* LINKEDIN */}
              <a 
                href="https://www.linkedin.com/in/eduardo-guilherme-5b41a9266/" 
                target="_blank" 
                rel="noreferrer"
                className={`flex items-center justify-between p-3 border rounded-md transition-all duration-300 group ${
                  isLight 
                    ? 'border-slate-200 bg-slate-50 hover:border-tech-cyan/40 hover:bg-tech-cyan/[0.02]' 
                    : 'border-slate-900/60 bg-slate-950/20 hover:border-tech-cyan/30 hover:bg-tech-cyan/[0.02]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <FaLinkedinIn className="text-slate-500 group-hover:text-tech-cyan transition-colors" />
                  <span className={`text-xs transition-colors group-hover:text-slate-900 dark:group-hover:text-slate-200 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>LINKEDIN</span>
                </div>
                <span className={`text-[10px] transition-colors group-hover:text-tech-cyan ${isLight ? 'text-slate-400' : 'text-slate-600'}`}>
                  {language === 'pt' ? '[VISITAR]' : '[VISIT]'}
                </span>
              </a>

              {/* GITHUB */}
              <a 
                href="https://github.com/Dudu-Medeiros" 
                target="_blank" 
                rel="noreferrer"
                className={`flex items-center justify-between p-3 border rounded-md transition-all duration-300 group ${
                  isLight 
                    ? 'border-slate-200 bg-slate-50 hover:border-tech-cyan/40 hover:bg-tech-cyan/[0.02]' 
                    : 'border-slate-900/60 bg-slate-950/20 hover:border-tech-cyan/30 hover:bg-tech-cyan/[0.02]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <FaGithub className="text-slate-500 group-hover:text-tech-cyan transition-colors" />
                  <span className={`text-xs transition-colors group-hover:text-slate-900 dark:group-hover:text-slate-200 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>GITHUB</span>
                </div>
                <span className={`text-[10px] transition-colors group-hover:text-tech-cyan ${isLight ? 'text-slate-400' : 'text-slate-600'}`}>
                  {language === 'pt' ? '[EXPLORAR]' : '[EXPLORE]'}
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* LADO DIREITO: FORMULÁRIO COM SUPORTE LIGHT MODE E INTERNACIONALIZAÇÃO */}
        <div className="lg:col-span-7">
          <form 
            ref={formRef} 
            onSubmit={handleSubmit} 
            className={`border rounded-xl p-6 md:p-8 flex flex-col gap-6 transition-all duration-500 ${
              isLight ? 'bg-white border-slate-200 shadow-md' : 'bg-[#070b14]/80 border-slate-900'
            }`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Campo Nome */}
              <div className="flex flex-col gap-2">
                <label className={`font-mono text-[11px] tracking-wider uppercase ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  {language === 'pt' ? 'Seu Nome:' : 'Your Name:'}
                </label>
                <input 
                  type="text" 
                  name="nome"
                  value={formState.nome}
                  onChange={handleChange}
                  required
                  placeholder={language === 'pt' ? "Ex: João Silva" : "e.g., John Doe"}
                  className={`w-full rounded-md px-4 py-3 text-sm font-mono focus:outline-none transition-all duration-300 border ${
                    isLight 
                      ? 'bg-slate-50 border-slate-200 text-slate-800 placeholder:text-slate-300 focus:border-tech-cyan/50 focus:bg-white' 
                      : 'bg-slate-950/60 border-slate-900 text-slate-200 placeholder:text-slate-700 focus:border-tech-cyan/40 focus:bg-slate-950'
                  }`}
                />
              </div>

              {/* Campo Email */}
              <div className="flex flex-col gap-2">
                <label className={`font-mono text-[11px] tracking-wider uppercase ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  {language === 'pt' ? 'Seu E-mail (Real):' : 'Your Email (Real):'}
                </label>
                <input 
                  type="email" 
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  placeholder={language === 'pt' ? "Ex: seuemail@provedor.com" : "e.g., mail@provider.com"}
                  className={`w-full rounded-md px-4 py-3 text-sm font-mono focus:outline-none transition-all duration-300 border ${
                    isLight 
                      ? 'bg-slate-50 border-slate-200 text-slate-800 placeholder:text-slate-300 focus:border-tech-cyan/50 focus:bg-white' 
                      : 'bg-slate-950/60 border-slate-900 text-slate-200 placeholder:text-slate-700 focus:border-tech-cyan/40 focus:bg-slate-950'
                  }`}
                />
              </div>
            </div>

            {/* Campo Assunto */}
            <div className="flex flex-col gap-2">
              <label className={`font-mono text-[11px] tracking-wider uppercase ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                {language === 'pt' ? 'Título da Mensagem:' : 'Message Subject:'}
              </label>
              <input 
                type="text" 
                name="assunto"
                value={formState.assunto}
                onChange={handleChange}
                required
                placeholder={language === 'pt' ? "Ex: Proposta de projeto / Oportunidade de vaga" : "e.g., Project proposal / Job opportunity"}
                className={`w-full rounded-md px-4 py-3 text-sm font-mono focus:outline-none transition-all duration-300 border ${
                  isLight 
                    ? 'bg-slate-50 border-slate-200 text-slate-800 placeholder:text-slate-300 focus:border-tech-cyan/50 focus:bg-white' 
                      : 'bg-slate-950/60 border-slate-900 text-slate-200 placeholder:text-slate-700 focus:border-tech-cyan/40 focus:bg-slate-950'
                }`}
              />
            </div>

            {/* Campo Mensagem */}
            <div className="flex flex-col gap-2">
              <label className={`font-mono text-[11px] tracking-wider uppercase ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                {language === 'pt' ? 'Mensagem:' : 'Message:'}
              </label>
              <textarea 
                name="mensagem"
                value={formState.mensagem}
                onChange={handleChange}
                required
                rows="5"
                placeholder={language === 'pt' ? "Escreva os detalhes da sua mensagem aqui..." : "Write your message details here..."}
                className={`w-full rounded-md px-4 py-3 text-sm font-mono focus:outline-none transition-all duration-300 resize-none border ${
                  isLight 
                    ? 'bg-slate-50 border-slate-200 text-slate-800 placeholder:text-slate-300 focus:border-tech-cyan/50 focus:bg-white' 
                    : 'bg-slate-950/60 border-slate-900 text-slate-200 placeholder:text-slate-700 focus:border-tech-cyan/40 focus:bg-slate-950'
                }`}
              />
            </div>

            {/* Alertas de Status */}
            {status.success && <div className="text-xs text-emerald-400 font-mono bg-emerald-500/5 p-3 rounded border border-emerald-500/20">{status.success}</div>}
            {status.error && <div className="text-xs text-rose-400 font-mono bg-rose-500/5 p-3 rounded border border-rose-500/20">{status.error}</div>}

            {/* Botão de Envio */}
            <div className={`border-t pt-4 flex justify-end ${isLight ? 'border-slate-100' : 'border-slate-900/60'}`}>
              <button
                type="submit"
                disabled={status.loading}
                className={`w-full sm:w-auto px-6 py-2.5 rounded-md border font-mono text-xs font-bold shadow-sm disabled:opacity-50 transition-all duration-300 flex items-center justify-center gap-2 ${
                  isLight 
                    ? 'border-slate-200 bg-slate-50 text-slate-500 hover:text-tech-cyan hover:border-tech-cyan/40 hover:bg-tech-cyan/5' 
                    : 'border-slate-800 bg-slate-950/40 text-slate-400 hover:text-tech-cyan hover:border-tech-cyan/40 hover:bg-tech-cyan/5'
                }`}
              >
                <span>
                  {status.loading 
                    ? (language === 'pt' ? 'ENVIANDO MENSAGEM...' : 'SENDING MESSAGE...') 
                    : (language === 'pt' ? 'ENVIAR E-MAIL' : 'SEND EMAIL')}
                </span>
                <span className={`w-1.5 h-1.5 rounded-full ${status.loading ? 'bg-amber-500 animate-ping' : 'bg-tech-cyan animate-pulse'}`} />
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  )
}