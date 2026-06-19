import React from 'react'

export default function About() {
  return (
    <section id="about" className="min-h-screen py-24 flex flex-col justify-center">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-200">Sobre Mim</h2>
        <div className="h-[1px] bg-slate-800 flex-grow max-w-md"></div>
      </div>
      <div className="text-slate-400 space-y-4 max-w-2xl">
        <p>
          Minha paixão por tecnologia começou quando percebi que podia transformar linhas de código em interfaces vivas e interativas. Hoje, foco em criar códigos limpos e portfólios profissionais.
        </p>
        <p>Aqui estão algumas tecnologias com as quais tenho trabalhado recentemente:</p>
        <ul className="grid grid-cols-2 gap-2 font-mono text-sm text-tech-cyan">
          <li>◽ React</li>
          <li>◽ JavaScript (ES6+)</li>
          <li>◽ Tailwind CSS</li>
          <li>◽ Vite</li>
        </ul>
      </div>
    </section>
  )
}