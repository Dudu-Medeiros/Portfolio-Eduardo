import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'

export default function Projects() {
  const projectsData = [
    {
      id: 1,
      title: "FLUXO — GERENCIAMENTO FINANCEIRO",
      status: "ACTIVE_PRODUCTION",
      description: "Plataforma inteligente de controladoria residencial desenvolvida sob medida para substituir planilhas complexas. Possui fluxos ágeis para lançamento de entradas e saídas, arquitetura baseada em Context API para persistência leve e uma interface projetada com foco em usabilidade doméstica de alta fidelidade.",
      tags: ["React", "JavaScript", "Tailwind CSS", "Bootstrap", "Context API", "Python", "Flask" ],
      githubLink: "https://github.com/Dudu-Medeiros?tab=repositories"
    },
    {
      id: 2,
      title: "PHYSICOLOG — ANÁLISES DIÁRIAS",
      status: "CORE_STABLE",
      description: "Sistema web voltado ao acompanhamento cognitivo e organização de rotinas diárias. Integra uma interface minimalista de diário conectada a uma estrutura lógica no backend para indexação de entradas, tratamento de sessões seguras e análise cronológica de dados do usuário.",
      tags: ["Javascript","HTML", "CSS", "Python", "Flask", "MySQL"],
      githubLink: "https://github.com/Dudu-Medeiros/PhysicoLog"
    },
    {
      id: 3,
      title: "SEAKALM — SAÚDE MENTAL INFANTIL",
      status: "ECO_SYSTEM",
      description: "Aplicação voltada para o gerenciamento de saúde mental, controle de estresse e monitoramento de bem-estar para tripulações marítimas. Desenvolvido com foco em interfaces de alta legibilidade para condições críticas de navegação, utilizando roteamento dinâmico e consumo otimizado de estados.",
      tags: ["Javascript", "HTML", "CSS", "Java", "Springboot", "MySQL", "APIs RESTful"],
      githubLink: "https://github.com/Dudu-Medeiros/SeaKalm"
    },
    {
      id: 4,
      title: "AVENTURA DAS LETRAS — SISTEMA HOSPITALAR ACADÊMICO",
      status: "SYSTEM_INTEGRATION",
      description: "Desenvolvimento e integração de módulos funcionais para a plataforma institucional do IMIP. Focado na otimização de fluxos de dados internos, tratamento de regras de negócio complexas para ambientes acadêmicos/médicos e refinamento de interfaces operacionais para manipulação de registros estruturados.",
      tags: ["React", "JavaScript", "Tailwind CSS", "Python", "Flask", "API Integration", "Git / Agile"],
      githubLink: "https://github.com/Dudu-Medeiros/Aventura_das_letras"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    whileInView: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  }

  return (
    <section id="projects" className="py-28 border-t border-slate-900/60 relative">
      
      {/* Cabeçalho Técnico HUD */}
      <div className="mb-20 text-left relative pl-4 border-l border-tech-cyan/30">
        <span className="text-tech-cyan font-mono text-xs tracking-[0.25em] uppercase block mb-2">
          // MAIN_REPOSITORY_LOG
        </span>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-100 uppercase">
          PROJETOS <span className="text-slate-500 font-light">EXECUTADOS</span>
        </h2>
      </div>

      {/* Container Principal */}
      <motion.div 
        className="flex flex-col gap-12 w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-100px" }}
      >
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            className="relative bg-[#070b14]/90 border border-slate-900 rounded-xl p-6 md:p-8 flex flex-col justify-between group hover:border-tech-cyan/30 transition-all duration-500 overflow-hidden"
          >
            {/* Miras Angulares de Interface nos Cantos (Efeito Hover) */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-slate-800 group-hover:border-tech-cyan transition-colors duration-500" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-slate-800 group-hover:border-tech-cyan transition-colors duration-500" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-slate-800 group-hover:border-tech-cyan transition-colors duration-500" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-slate-800 group-hover:border-tech-cyan transition-colors duration-500" />

            {/* Linha de Varredura Laser de Fundo */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_95%,rgba(0,240,255,0.03)_98%,transparent)] bg-[size:100%_400%] animate-[scan_6s_linear_infinite] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="w-full">
              {/* Metadados Superiores e Botão de Ação Integrado */}
              <div className="flex justify-between items-center mb-6 border-b border-slate-900/60 pb-4">
                <div className="flex items-center gap-3 font-mono text-[10px] tracking-wider">
                  <span className="text-slate-600">ID: 00{project.id}</span>
                  <span className="text-slate-700">//</span>
                  <span className="text-tech-cyan bg-tech-cyan/5 px-2 py-0.5 rounded border border-tech-cyan/10">
                    STATUS: {project.status}
                  </span>
                </div>
                
                {/* Botão de Acesso Direto Altamente Intuitivo */}
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-1.5 rounded-md border border-slate-800 bg-slate-950/40 font-mono text-xs text-slate-400 group-hover:text-tech-cyan group-hover:border-tech-cyan/40 hover:bg-tech-cyan/5 transition-all duration-300 shadow-sm"
                  title="Acessar código-fonte no GitHub"
                >
                  <FaGithub className="text-sm" />
                  <span className="tracking-wider text-[10px] font-bold">VIEW_REPOSITORY</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-tech-cyan animate-pulse transition-colors" />
                </a>
              </div>

              {/* Título e escopo descritivo */}
              <h3 className="text-xl md:text-2xl font-mono font-black tracking-wide text-slate-200 group-hover:text-tech-cyan transition-colors duration-300 uppercase">
                {project.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed mt-4 font-sans font-light max-w-4xl text-justify">
                {project.description}
              </p>
            </div>

            {/* Rodapé: Arquitetura e Stack Utilizada */}
            <div className="mt-8 pt-4 border-t border-slate-900/40 flex flex-wrap items-center gap-2">
              <span className="font-mono text-[10px] text-slate-600 mr-2 uppercase tracking-widest">ARCHITECTURE:</span>
              {project.tags.map((tag, idx) => (
                <span 
                  key={idx} 
                  className="text-[10px] font-mono text-slate-500 bg-slate-950/50 border border-slate-900/80 px-2.5 py-1 rounded transition-all duration-300 group-hover:border-slate-800 group-hover:text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>

          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}