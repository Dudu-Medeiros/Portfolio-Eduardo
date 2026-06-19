import React from 'react'

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-24 flex flex-col justify-center">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-200">Meus Projetos</h2>
        <div className="h-[1px] bg-slate-800 flex-grow max-w-md"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card Temporário */}
        <div className="bg-tech-card p-6 rounded-lg border border-slate-800/50 hover:border-tech-cyan/50 transition-all duration-300">
          <div className="text-tech-cyan font-mono text-xs mb-2">Projeto Em Destaque</div>
          <h3 className="text-xl font-bold text-slate-100 mb-2">Meu Portfólio Tech</h3>
          <p className="text-slate-400 text-sm mb-4">Esta SPA moderna criada com React e Tailwind v4 para expor minhas habilidades de forma única.</p>
          <div className="flex gap-3 text-xs font-mono text-slate-500">
            <span>React</span>
            <span>Tailwind v4</span>
            <span>Vite</span>
          </div>
        </div>
      </div>
    </section>
  )
}