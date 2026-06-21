import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

export default function Contact() {
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
        setStatus({ loading: false, success: 'Mensagem enviada com sucesso para Eduardo!', error: null })
        setFormState({ nome: '', email: '', assunto: '', mensagem: '' })
      })
      .catch((err) => {
        console.error('Erro ao transmitir e-mail:', err)
        setStatus({ loading: false, success: null, error: 'Falha ao enviar. Tente novamente mais tarde.' })
      })
  }

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-28 border-t border-slate-900/60 relative">
      
      {/* Cabeçalho Técnico HUD */}
      <div className="mb-20 text-left relative pl-4 border-l border-tech-cyan/30">
        <span className="text-tech-cyan font-mono text-xs tracking-[0.25em] uppercase block mb-2">
          // CANAIS_DE_CONEXAO
        </span>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-100 uppercase">
          INICIAR <span className="text-slate-500 font-light">CONTATO</span>
        </h2>
      </div>

      {/* Grade de Contato */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-start">
        
        {/* LADO ESQUERDO: LINKS DE ACESSO DIRETO */}
        <div className="lg:col-span-5 flex flex-col gap-6 font-mono">
          <div className="bg-[#070b14]/80 border border-slate-900 rounded-xl p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-slate-800" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-slate-800" />
            
            <span className="text-[10px] text-slate-600 block mb-4">// ENDPOINTS_OFICIAIS</span>
            
            <div className="flex flex-col gap-4">
              {/* WHATSAPP */}
              <a 
                href="https://wa.me/5581994304742" 
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 border border-slate-900/60 rounded-md bg-slate-950/20 hover:border-tech-cyan/30 hover:bg-tech-cyan/[0.02] transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <FaWhatsapp className="text-slate-500 group-hover:text-tech-cyan transition-colors" />
                  <span className="text-xs text-slate-400 group-hover:text-slate-200">WHATSAPP</span>
                </div>
                <span className="text-[10px] text-slate-600 group-hover:text-tech-cyan">[CONECTAR]</span>
              </a>

              {/* E-MAIL */}
              <a 
                href="mailto:eduardoguilhermedem987@gmail.com" 
                className="flex items-center justify-between p-3 border border-slate-900/60 rounded-md bg-slate-950/20 hover:border-tech-cyan/30 hover:bg-tech-cyan/[0.02] transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-slate-500 group-hover:text-tech-cyan transition-colors" />
                  <span className="text-xs text-slate-400 group-hover:text-slate-200">E-MAIL DIRETO</span>
                </div>
                <span className="text-[10px] text-slate-600 group-hover:text-tech-cyan">[COPIAR]</span>
              </a>

              {/* LINKEDIN */}
              <a 
                href="https://www.linkedin.com/in/eduardo-guilherme-5b41a9266/" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-between p-3 border border-slate-900/60 rounded-md bg-slate-950/20 hover:border-tech-cyan/30 hover:bg-tech-cyan/[0.02] transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <FaLinkedinIn className="text-slate-500 group-hover:text-tech-cyan transition-colors" />
                  <span className="text-xs text-slate-400 group-hover:text-slate-200">LINKEDIN</span>
                </div>
                <span className="text-[10px] text-slate-600 group-hover:text-tech-cyan">[VISITAR]</span>
              </a>

              {/* GITHUB */}
              <a 
                href="https://github.com/Dudu-Medeiros" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-between p-3 border border-slate-900/60 rounded-md bg-slate-950/20 hover:border-tech-cyan/30 hover:bg-tech-cyan/[0.02] transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <FaGithub className="text-slate-500 group-hover:text-tech-cyan transition-colors" />
                  <span className="text-xs text-slate-400 group-hover:text-slate-200">GITHUB</span>
                </div>
                <span className="text-[10px] text-slate-600 group-hover:text-tech-cyan">[EXPLORAR]</span>
              </a>
            </div>
          </div>
        </div>

        {/* LADO DIREITO: FORMULÁRIO SIMPLIFICADO EM PORTUGUÊS */}
        <div className="lg:col-span-7">
          <form ref={formRef} onSubmit={handleSubmit} className="relative bg-[#070b14]/80 border border-slate-900 rounded-xl p-6 md:p-8 flex flex-col gap-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Campo Nome */}
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[11px] tracking-wider text-slate-400 uppercase">Seu Nome:</label>
                <input 
                  type="text" 
                  name="nome"
                  value={formState.nome}
                  onChange={handleChange}
                  required
                  placeholder="Ex: João Silva"
                  className="w-full bg-slate-950/60 border border-slate-900 rounded-md px-4 py-3 text-sm text-slate-200 placeholder:text-slate-700 font-mono focus:outline-none focus:border-tech-cyan/40 focus:bg-slate-950 transition-all duration-300"
                />
              </div>

              {/* Campo Email */}
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[11px] tracking-wider text-slate-400 uppercase">Seu E-mail (Real):</label>
                <input 
                  type="email" 
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  placeholder="Ex: seuemail@provedor.com"
                  className="w-full bg-slate-950/60 border border-slate-900 rounded-md px-4 py-3 text-sm text-slate-200 placeholder:text-slate-700 font-mono focus:outline-none focus:border-tech-cyan/40 focus:bg-slate-950 transition-all duration-300"
                />
              </div>
            </div>

            {/* Campo Assunto (Título da Mensagem) */}
            <div className="flex flex-col gap-2">
              <label className="font-mono text-[11px] tracking-wider text-slate-400 uppercase">Título da Mensagem:</label>
              <input 
                type="text" 
                name="assunto"
                value={formState.assunto}
                onChange={handleChange}
                required
                placeholder="Ex: Proposta de projeto / Oportunidade de vaga"
                className="w-full bg-slate-950/60 border border-slate-900 rounded-md px-4 py-3 text-sm text-slate-200 placeholder:text-slate-700 font-mono focus:outline-none focus:border-tech-cyan/40 focus:bg-slate-950 transition-all duration-300"
              />
            </div>

            {/* Campo Mensagem */}
            <div className="flex flex-col gap-2">
              <label className="font-mono text-[11px] tracking-wider text-slate-400 uppercase">Mensagem:</label>
              <textarea 
                name="mensagem"
                value={formState.mensagem}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Escreva os detalhes da sua mensagem aqui..."
                className="w-full bg-slate-950/60 border border-slate-900 rounded-md px-4 py-3 text-sm text-slate-200 placeholder:text-slate-700 font-mono focus:outline-none focus:border-tech-cyan/40 focus:bg-slate-950 transition-all duration-300 resize-none"
              />
            </div>

            {/* Alertas de Status */}
            {status.success && <div className="text-xs text-emerald-400 font-mono bg-emerald-500/5 p-3 rounded border border-emerald-500/20">{status.success}</div>}
            {status.error && <div className="text-xs text-rose-400 font-mono bg-rose-500/5 p-3 rounded border border-rose-500/20">{status.error}</div>}

            {/* Botão de Envio */}
            <div className="border-t border-slate-900/60 pt-4 flex justify-end">
              <button
                type="submit"
                disabled={status.loading}
                className="w-full sm:w-auto px-6 py-2.5 rounded-md border border-slate-800 bg-slate-950/40 font-mono text-xs text-slate-400 hover:text-tech-cyan hover:border-tech-cyan/40 hover:bg-tech-cyan/5 transition-all duration-300 flex items-center justify-center gap-2 font-bold shadow-sm disabled:opacity-50"
              >
                <span>{status.loading ? 'ENVIANDO MENSAGEM...' : 'ENVIAR E-MAIL'}</span>
                <span className={`w-1.5 h-1.5 rounded-full ${status.loading ? 'bg-amber-500 animate-ping' : 'bg-tech-cyan animate-pulse'}`} />
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  )
}