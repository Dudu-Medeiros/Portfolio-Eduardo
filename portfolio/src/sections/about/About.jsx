import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import fluxoDashboard from "../../assets/images/fluxoDashboard.PNG";
import ADL from "../../assets/images/ADL.PNG";
import seakalmDashboard from "../../assets/images/seakalmDashboard.PNG";

import "./About.css";

export default function About({ theme, language }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const isLight = theme === "light";

  const projectScreens = [
    {
      id: 1,
      src: fluxoDashboard,
      alt:
        language === "pt"
          ? "Dashboard Módulo Fluxo"
          : "Fluxo Module Dashboard",
    },
    {
      id: 2,
      src: ADL,
      alt:
        language === "pt"
          ? "Dashboard Aventura das Letras"
          : "Letters Adventure Dashboard",
    },
    {
      id: 3,
      src: seakalmDashboard,
      alt:
        language === "pt"
          ? "Dashboard SeaKalm"
          : "SeaKalm Dashboard",
    },
  ];

  const capabilities =
    language === "pt"
      ? [
          "Módulo de Autenticação e Segurança",
          "Gestão de Transações",
          "Exportação e Portabilidade de Dados",
          "Automação de Documentos Fiscais (XML/PDF)",
          "Fluxos de Controladoria",
        ]
      : [
          "Authentication & Security Module",
          "Transaction Management",
          "Data Export & Portability",
          "Fiscal Document Automation (XML/PDF)",
          "Financial Control Flows",
        ];

  const texts = {
    title1:
      language === "pt"
        ? "TRANSFORME"
        : "TRANSFORM",

    title2:
      language === "pt"
        ? "IDEIA"
        : "IDEAS",

    title3:
      language === "pt"
        ? "EM CÓDIGO"
        : "INTO CODE",

    desc:
      language === "pt"
        ? "Desenvolvedor Front-End com experiência prática na criação de aplicações web modernas e responsivas. Trabalho com React, JavaScript, HTML e CSS, buscando transformar ideias e necessidades de negócio em interfaces funcionais, organizadas e focadas na experiência do usuário."
        : "Front-End Developer with hands-on experience building modern and responsive web applications. I work with React, JavaScript, HTML, and CSS, focusing on turning ideas and business needs into functional, well-structured interfaces centered on user experience.",

    manifesto:
      language === "pt"
        ? "“Ainda estou construindo minha experiência, e é justamente isso que me motiva. Gosto de aprender na prática, enfrentar problemas novos e transformar cada projeto em uma oportunidade para melhorar meu código, minhas ideias e minha forma de desenvolver.”"
        : "“I am still building my experience, and that is exactly what motivates me. I enjoy learning through practice, facing new challenges, and turning every project into an opportunity to improve my code, my ideas, and the way I develop.”",

    nextSquadTitle:
      language === "pt"
        ? "COLOQUE SUA EMPRESA NESSA LISTA_"
        : "PLACE YOUR COMPANY ON THIS LIST_",

    nextSquadDesc:
      language === "pt"
        ? "Busco novas oportunidades para continuar aprendendo, contribuir com minhas habilidades e evoluir junto com novos desafios."
        : "I am looking for new opportunities to keep learning, contribute with my skills, and grow through new challenges.",

    corenDate:
      language === "pt"
        ? "ATUALMENTE"
        : "CURRENT",

    corenTitle:
      language === "pt"
        ? "COREN-PE — CONSELHO REGIONAL DE ENFERMAGEM DE PERNAMBUCO"
        : "COREN-PE — REGIONAL NURSING COUNCIL OF PERNAMBUCO",

    corenRole:
      language === "pt"
        ? "Estagiário // Help Desk N1"
        : "Intern // Help Desk N1",

    corenDesc:
      language === "pt"
        ? "Atuação em suporte técnico de primeiro nível, auxiliando usuários na resolução de demandas de TI e no atendimento de chamados."
        : "Working in first-level technical support, assisting users with IT requests and handling support tickets.",

    fluxoDate:
      language === "pt"
        ? "MAIO 2026 — JUNHO 2026"
        : "MAY 2026 — JUNE 2026",

    fluxoTitle:
      "Fluxo — Gerenciamento Financeiro",

    fluxoRole:
      language === "pt"
        ? "Desenvolvedor Front-End / Full-Stack"
        : "Front-End / Full-Stack Developer",

    fluxoDesc:
      language === "pt"
        ? "Desenvolvimento de interfaces para um sistema financeiro, integração de APIs e automação de documentos como PDFs e XMLs."
        : "Development of interfaces for a financial system, API integration, and document automation such as PDFs and XMLs.",

    eduTitle:
      language === "pt"
        ? "FORMAÇÃO ACADÊMICA"
        : "ACADEMIC BACKGROUND",

    eduStatus:
      language === "pt"
        ? "EM ANDAMENTO"
        : "IN PROGRESS",

    eduInstitution:
      "UNINASSAU",

    eduCourse:
      language === "pt"
        ? "Sistemas de Informação - Bacharelado"
        : "Information Systems - Bachelor's Degree",

    eduDesc:
      language === "pt"
        ? "Graduação voltada ao desenvolvimento de conhecimentos em programação, banco de dados, engenharia de software e desenvolvimento web. Previsão de formação: 2028."
        : "Degree focused on programming, databases, software engineering, and web development. Expected graduation: 2028.",

    previousSlide:
      language === "pt"
        ? "Slide anterior"
        : "Previous slide",

    nextSlide:
      language === "pt"
        ? "Próximo slide"
        : "Next slide",
  };

  const scrollAnimation = {
    initial: {
      opacity: 0,
      y: 30,
    },
    whileInView: {
      opacity: 1,
      y: 0,
    },
    viewport: {
      once: true,
      margin: "-100px",
    },
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  };

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === projectScreens.length - 1
        ? 0
        : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0
        ? projectScreens.length - 1
        : prev - 1
    );
  };

  return (
    <section
      id="about"
      className={`about-section ${
        isLight
          ? "about-section--light"
          : "about-section--dark"
      }`}
    >
      <div
        className="about-grid-overlay"
        aria-hidden="true"
      />

      <div className="about-container">
        <motion.div
          className="about-left"
          {...scrollAnimation}
        >
          <h2 className="about-title">
            {texts.title1}{" "}
            <span>{texts.title2}</span>
            <br />
            {texts.title3}
          </h2>

          <p className="about-description">
            {texts.desc}
          </p>

          <blockquote className="about-manifesto">
            {texts.manifesto}
          </blockquote>

          <div className="about-capabilities">
            <div className="about-marquee">
              <div className="about-marquee__group">
                {capabilities.map((capability, index) => (
                  <span
                    key={`original-${index}`}
                    className="capability-tag"
                  >
                    {capability}
                  </span>
                ))}
              </div>

              <div
                className="about-marquee__group"
                aria-hidden="true"
              >
                {capabilities.map((capability, index) => (
                  <span
                    key={`duplicate-${index}`}
                    className="capability-tag"
                  >
                    {capability}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            className="about-education"
            {...scrollAnimation}
            transition={{
              ...scrollAnimation.transition,
              delay: 0.35,
            }}
          >
            <div className="about-education__header">
              <div>
                <span className="about-education__code">
                  EDUCAÇÃO
                </span>

                <span className="about-education__label">
                  {texts.eduTitle}
                </span>
              </div>

              <span className="about-education__status">
                {texts.eduStatus}
              </span>
            </div>

            <div className="about-education__body">
              <h4 className="about-education__institution">
                {texts.eduInstitution}
              </h4>

              <span className="about-education__course">
                {texts.eduCourse}
              </span>

              <p className="about-education__description">
                {texts.eduDesc}
              </p>
            </div>
          </motion.div>
        </motion.div>

        <div className="about-right">
          <motion.div
            className="project-slider"
            {...scrollAnimation}
            transition={{
              ...scrollAnimation.transition,
              delay: 0.2,
            }}
          >
            <div className="slider-window">
              {projectScreens.map((screen, index) => {
                let cardClass = "slider-card--hidden";

                if (index === currentSlide) {
                  cardClass = "slider-card--active";
                } else if (
                  index ===
                  (currentSlide + 1) %
                    projectScreens.length
                ) {
                  cardClass = "slider-card--next";
                }

                return (
                  <div
                    key={screen.id}
                    className={`slider-card ${cardClass}`}
                  >
                    <img
                      src={screen.src}
                      alt={screen.alt}
                      className="system-screenshot"
                    />

                    <div className="slider-card__badge">
                      {screen.alt}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="slider-controls">
              <button
                type="button"
                onClick={prevSlide}
                className="slider-arrow"
                aria-label={texts.previousSlide}
              >
                <FaChevronLeft />
              </button>

              <span className="slider-counter">
                0{currentSlide + 1} / 0
                {projectScreens.length}
              </span>

              <button
                type="button"
                onClick={nextSlide}
                className="slider-arrow"
                aria-label={texts.nextSlide}
              >
                <FaChevronRight />
              </button>
            </div>
          </motion.div>

          <div className="editorial-timeline">
            <motion.div
              className="timeline-item timeline-item--active"
              {...scrollAnimation}
              transition={{
                ...scrollAnimation.transition,
                delay: 0.3,
              }}
            >
              <div className="timeline-node timeline-node--active" />

              <div className="timeline-content">
                <span className="timeline-date timeline-date--active">
                  NEXT SQUAD_
                </span>

                <h4 className="timeline-title timeline-title--active">
                  {texts.nextSquadTitle}
                </h4>

                <p className="timeline-text">
                  {texts.nextSquadDesc}
                </p>
              </div>
            </motion.div>

            <motion.div
              className="timeline-item timeline-item--current"
              {...scrollAnimation}
              transition={{
                ...scrollAnimation.transition,
                delay: 0.4,
              }}
            >
              <div className="timeline-node timeline-node--current" />

              <div className="timeline-content">
                <span className="timeline-date timeline-date--current">
                  {texts.corenDate}
                </span>

                <h4 className="timeline-title">
                  {texts.corenTitle}
                </h4>

                <span className="timeline-role">
                  {texts.corenRole}
                </span>

                <p className="timeline-text">
                  {texts.corenDesc}
                </p>
              </div>
            </motion.div>

            <motion.div
              className="timeline-item"
              {...scrollAnimation}
              transition={{
                ...scrollAnimation.transition,
                delay: 0.5,
              }}
            >
              <div className="timeline-node" />

              <div className="timeline-content">
                <span className="timeline-date">
                  {texts.fluxoDate}
                </span>

                <h4 className="timeline-title">
                  {texts.fluxoTitle}
                </h4>

                <span className="timeline-role">
                  {texts.fluxoRole}
                </span>

                <p className="timeline-text">
                  {texts.fluxoDesc}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}