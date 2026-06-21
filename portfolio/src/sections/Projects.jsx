import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'

export default function Projects({ theme, language }) {
  const projectsData = [
    {
      id: 1,
      title: language === 'pt' ? "FLUXO — GERENCIAMENTO FINANCEIRO" : "FLUXO — FINANCIAL MANAGEMENT",
      status: "ACTIVE_PRODUCTION",
      description: language === 'pt'
        ? "Plataforma inteligente de controladoria residencial desenvolvida sob medida para substituir planilhas complexas. Possui fluxos ágeis para lançamento de entradas e saídas, arquitetura baseada em Context API para persistência leve e uma interface projetada com foco em usabilidade doméstica de alta fidelidade."
        : "Intelligent residential financial control platform tailored to replace complex spreadsheets. It features agile streams for income and expense entries, lightweight persistence architecture built on Context API, and a interface designed focused on high-fidelity household usability.",
      tags: ["React", "JavaScript", "Tailwind CSS", "Bootstrap", "Context API", "Python", "Flask" ],
      githubLink: "https://github.com/Dudu-Medeiros?tab=repositories"
    },
    {
      id: 2,
      title: language === 'pt' ? "PHYSICOLOG — ANÁLISES DIÁRIAS" : "PHYSICOLOG — DAILY ANALYSIS",
      status: "CORE_STABLE",
      description: language === 'pt'
        ? "Sistema web voltado ao acompanhamento cognitivo e organização de rotinas diárias. Integra uma interface minimalista de diário conectada a uma estrutura lógica no backend para indexação de entradas, tratamento de sessões seguras e análise cronológica de dados do usuário."
        : "Web system geared towards cognitive tracking and daily routine organization. It integrates a minimalist diary interface connected to a backend logical structure for entry indexing, secure session handling, and chronological user data analysis.",
      tags: ["Javascript","HTML", "CSS", "Python", "Flask", "MySQL"],
      githubLink: "https://github.com/Dudu-Medeiros/PhysicoLog"
    },
    {
      id: 3,
      title: language === 'pt' ? "SEAKALM — SAÚDE MENTAL INFANTIL" : "SEAKALM — CHILD MENTAL HEALTH",
      status: "ECO_SYSTEM",
      description: language === 'pt'
        ? "Aplicação voltada para o gerenciamento de saúde mental, controle de estresse e monitoramento de bem-estar para tripulações marítimas. Desenvolvido com foco em interfaces de alta legibilidade para condições críticas de navegação, utilizando roteamento dinâmico e consumo otimizado de estados."
        : "Application focused on mental health management, stress control, and well-being monitoring for maritime crews. Developed with a high-readability UI tailored for critical navigation environments, utilizing dynamic routing and optimized state consumption.",
      tags: ["Javascript", "HTML", "CSS", "Java", "Springboot", "MySQL", "APIs RESTful"],
      githubLink: "https://github.com/Dudu-Medeiros/SeaKalm"
    },
    {
      id: 4,
      title: language === 'pt' ? "AVENTURA DAS LETRAS — SISTEMA HOSPITALAR ACADÊMICO" : "AVENTURA DAS LETRAS — ACADEMIC HOSPITAL SYSTEM",
      status: "SYSTEM_INTEGRATION",
      description: language === 'pt'
        ? "Desenvolvimento e integração de módulos funcionais para a plataforma institutional do IMIP. Focado na otimização de fluxos de dados internos, tratamento de regras de negócio complexas para ambientes acadêmicos/médicos e refinamento de interfaces operacionais para manipulação de registros estruturados."
        : "Development and integration of functional modules for IMIP's institutional platform. Focused on optimizing internal data flows, handling complex business logic for academic/medical environments, and refining operational interfaces for structured record manipulation.",
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

  const isLight = theme === 'light';

  return (
    <section id="projects" className={`py-28 border-t relative transition-colors duration-500 ${isLight ? 'border-slate-200' : 'border-slate-900/60'}`}>
      
      {/* Cabeçalho Técnico HUD */}
      <div className={`mb-20 text-left relative pl-4 border-l transition-colors duration-500 ${isLight ? 'border-tech-cyan/60' : 'border-tech-cyan/30'}`}>
        <span className="text-tech-cyan font-mono text-xs tracking-[0.25em] uppercase block mb-2">
          // MAIN_REPOSITORY_LOG
        </span>
        <h2 className={`text-4xl md:text-5xl font-black tracking-tight uppercase transition-colors duration-500 ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
          {language === 'pt' ? 'PROJETOS ' : 'EXECUTED '}
          <span className={`font-light transition-colors duration-500 ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>
            {language === 'pt' ? 'EXECUTADOS' : 'PROJECTS'}
          </span>
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
            className={`relative rounded-xl p-6 md:p-8 flex flex-col justify-between group transition-all duration-500 overflow-hidden border ${
              isLight 
                ? 'bg-white border-slate-200 shadow-md hover:border-tech-cyan/50 hover:shadow-lg' 
                : 'bg-[#070b14]/90 border-slate-900 hover:border-tech-cyan/30'
            }`}
          >
            {/* Miras Angulares de Interface nos Cantos */}
            <div className={`absolute top-0 left-0 w-3 h-3 border-t border-l group-hover:border-tech-cyan transition-colors duration-500 ${isLight ? 'border-slate-300' : 'border-slate-800'}`} />
            <div className={`absolute top-0 right-0 w-3 h-3 border-t border-r group-hover:border-tech-cyan transition-colors duration-500 ${isLight ? 'border-slate-300' : 'border-slate-800'}`} />
            <div className={`absolute bottom-0 left-0 w-3 h-3 border-b border-l group-hover:border-tech-cyan transition-colors duration-500 ${isLight ? 'border-slate-300' : 'border-slate-800'}`} />
            <div className={`absolute bottom-0 right-0 w-3 h-3 border-b border-r group-hover:border-tech-cyan transition-colors duration-500 ${isLight ? 'border-slate-300' : 'border-slate-800'}`} />

            {/* Linha de Varredura Laser de Fundo */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_95%,rgba(0,240,255,0.03)_98%,transparent)] bg-[size:100%_400%] animate-[scan_6s_linear_infinite] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="w-full">
              {/* Metadados Superiores e Botão de Ação */}
              <div className={`flex justify-between items-center mb-6 border-b pb-4 transition-colors duration-500 ${isLight ? 'border-slate-100' : 'border-slate-900/60'}`}>
                <div className="flex items-center gap-3 font-mono text-[10px] tracking-wider">
                  <span className={isLight ? 'text-slate-400' : 'text-slate-600'}>ID: 00{project.id}</span>
                  <span className={isLight ? 'text-slate-300' : 'text-slate-700'}>//</span>
                  <span className={`px-2 py-0.5 rounded border ${isLight ? 'text-tech-cyan bg-tech-cyan/5 border-tech-cyan/20 font-medium' : 'text-tech-cyan bg-tech-cyan/5 border-tech-cyan/10'}`}>
                    STATUS: {project.status}
                  </span>
                </div>
                
                {/* Botão de Acesso Direto com Internacionalização */}
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noreferrer"
                  className={`flex items-center gap-2 px-4 py-1.5 rounded-md border font-mono text-xs transition-all duration-300 shadow-sm ${
                    isLight 
                      ? 'border-slate-200 bg-slate-50 text-slate-500 group-hover:text-tech-cyan group-hover:border-tech-cyan/40 hover:bg-tech-cyan/5' 
                      : 'border-slate-800 bg-slate-950/40 text-slate-400 group-hover:text-tech-cyan group-hover:border-tech-cyan/40 hover:bg-tech-cyan/5'
                  }`}
                  title={language === 'pt' ? "Acessar código-fonte no GitHub" : "Access source code on GitHub"}
                >
                  <FaGithub className="text-sm" />
                  <span className="tracking-wider text-[10px] font-bold">
                    {language === 'pt' ? 'VER_REPOSITORIO' : 'VIEW_REPOSITORY'}
                  </span>
                  <span className={`w-1.5 h-1.5 rounded-full group-hover:bg-tech-cyan animate-pulse transition-colors ${isLight ? 'bg-slate-300' : 'bg-slate-700'}`} />
                </a>
              </div>

              {/* Título e escopo descritivo */}
              <h3 className={`text-xl md:text-2xl font-mono font-black tracking-wide group-hover:text-tech-cyan transition-colors duration-300 uppercase ${isLight ? 'text-slate-800' : 'text-slate-200'}`}>
                {project.title}
              </h3>
              
              <p className={`text-sm leading-relaxed mt-4 font-sans font-light max-w-4xl text-justify transition-colors duration-500 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                {project.description}
              </p>
            </div>

            {/* Rodapé: Arquitetura e Stack Utilizada */}
            <div className={`mt-8 pt-4 border-t flex flex-wrap items-center gap-2 transition-colors duration-500 ${isLight ? 'border-slate-100' : 'border-slate-900/40'}`}>
              <span className={`font-mono text-[10px] mr-2 uppercase tracking-widest ${isLight ? 'text-slate-400' : 'text-slate-600'}`}>
                {language === 'pt' ? 'ARQUITETURA:' : 'STACK:'}
              </span>
              {project.tags.map((tag, idx) => (
                <span 
                  key={idx} 
                  className={`text-[10px] font-mono border px-2.5 py-1 rounded transition-all duration-300 ${
                    isLight
                      ? 'text-slate-500 bg-slate-50 border-slate-200 group-hover:border-slate-300 group-hover:text-slate-700'
                      : 'text-slate-500 bg-slate-950/50 border-slate-900/80 group-hover:border-slate-800 group-hover:text-slate-400'
                  }`}
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