import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="min-h-[70vh] py-24 flex flex-col justify-center items-center text-center">
      <p className="text-tech-cyan font-mono text-sm mb-4">E agora?</p>
      <h2 className="text-4xl md:text-5xl font-bold text-slate-200 mb-4">Vamos Conversar?</h2>
      <p className="max-w-md text-slate-400 mb-8">
        Estou sempre em busca de novos desafios e oportunidades. Se você tiver alguma dúvida ou apenas quiser dizer um olá, minha inbox está aberta!
      </p>
      <a href="mailto:seu-email@gmail.com" className="border border-tech-cyan text-tech-cyan px-8 py-4 rounded hover:bg-tech-cyan/10 transition-all duration-300 font-mono">
        Diga Olá
      </a>
    </section>
  )
}