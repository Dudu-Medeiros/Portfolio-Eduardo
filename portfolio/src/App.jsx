import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/layout/Navbar";
import Preloader from "./components/common/Preloader";
import AnimatedCounter from "./components/common/AnimatedCounter";
import DecryptText from "./components/common/DecryptText";

import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";

import "./styles/global.css";
import "./App.css";

const TECH_TICKER = [
  "REACT",
  "JAVASCRIPT",
  "TYPESCRIPT",
  "ANGULAR",
  "HTML5",
  "CSS3",
  "TAILWIND",
  "BOOTSTRAP",
  "PYTHON",
  "FLASK",
  "UI/UX DESIGN",
  "ENGENHARIA DE PROMPT",
  "CLEAN CODE",
  "REST API",
];

const STATS = [
  {
    code: "EXP_01",
    number: "1+",
    label: {
      pt: "Ano de Experiência",
      en: "Year of Experience",
    },
  },
  {
    code: "PRJ_02",
    number: "5+",
    label: {
      pt: "Projetos em Destaque",
      en: "Featured Projects",
    },
  },
  {
    code: "STK_03",
    number: "10+",
    label: {
      pt: "Tecnologias Utilizadas",
      en: "Technologies Used",
    },
  },
  {
    code: "CORE_04",
    number: "SI",
    label: {
      pt: "Sistemas de Informação",
      en: "Information Systems",
    },
  },
];

const PAGE_CONTENT = {
  pt: {
    systemStatus: "SYS_OPERATIONAL",
    futureMessage: "PROJETANDO O FUTURO",
    backToTop: "VOLTAR_AO_TOPO",
  },
  en: {
    systemStatus: "SYS_OPERATIONAL",
    futureMessage: "ENGINEERING THE FUTURE",
    backToTop: "BACK_TO_TOP",
  },
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState("dark");
  const [language, setLanguage] = useState("pt");

  const content = PAGE_CONTENT[language];

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark"
    );
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage((currentLanguage) =>
      currentLanguage === "pt" ? "en" : "pt"
    );
  }, []);

  const handlePreloaderComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader onComplete={handlePreloaderComplete} />
        )}
      </AnimatePresence>

      <div
        className={`app-shell app-shell--${theme}`}
        data-theme={theme}
      >
        <div
          className="app-background"
          aria-hidden="true"
        >
          <div className="app-background__grid" />

          <div className="app-background__glow app-background__glow--cyan" />

          <div className="app-background__glow app-background__glow--purple" />
        </div>

        <Navbar
          theme={theme}
          toggleTheme={toggleTheme}
          language={language}
          toggleLanguage={toggleLanguage}
        />

        <main className="app-content">
          <Hero
            language={language}
            theme={theme}
          />

          <TechTicker theme={theme} />

          <About
            language={language}
            theme={theme}
          />

          <Stats
            language={language}
            theme={theme}
          />

          <Projects
            language={language}
            theme={theme}
          />

          <Contact
            language={language}
            theme={theme}
          />
        </main>

        <Footer
          theme={theme}
          content={content}
          onBackToTop={scrollToTop}
        />
      </div>
    </>
  );
}

function TechTicker({ theme }) {
  return (
    <section
      className={`tech-ticker tech-ticker--${theme}`}
      aria-label="Tecnologias utilizadas"
    >
      <div className="tech-ticker__track">
        <div className="tech-ticker__group">
          <TickerItems />
        </div>

        <div
          className="tech-ticker__group"
          aria-hidden="true"
        >
          <TickerItems />
        </div>
      </div>
    </section>
  );
}

function TickerItems() {
  return (
    <>
      {TECH_TICKER.map((technology) => (
        <span
          className="tech-ticker__item"
          key={technology}
        >
          <span>{technology}</span>

          <span className="tech-ticker__separator">
            //
          </span>
        </span>
      ))}
    </>
  );
}

function Stats({ language, theme }) {
  return (
    <section
      className={`stats-section stats-section--${theme}`}
      aria-label={
        language === "pt"
          ? "Métricas profissionais"
          : "Professional metrics"
      }
    >
      <div className="stats-grid">
        {STATS.map((stat, index) => (
          <StatCard
            key={stat.code}
            stat={stat}
            index={index}
            language={language}
            theme={theme}
          />
        ))}
      </div>
    </section>
  );
}

function StatCard({
  stat,
  index,
  language,
  theme,
}) {
  const numericValue = Number.parseInt(stat.number, 10);

  const hasNumericValue = !Number.isNaN(numericValue);

  return (
    <motion.article
      className={`stat-card stat-card--${theme}`}
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-60px",
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
        ease: "easeOut",
      }}
    >
      <div
        className="stat-card__corner stat-card__corner--top"
        aria-hidden="true"
      />

      <div
        className="stat-card__corner stat-card__corner--bottom"
        aria-hidden="true"
      />

      <div className="stat-card__header">
        <span className="stat-card__code">
          [{stat.code}]
        </span>

        <span
          className="stat-card__status"
          aria-hidden="true"
        />
      </div>

      <div className="stat-card__value">
        {hasNumericValue ? (
          <>
            <span>
              <AnimatedCounter value={numericValue} />
            </span>

            {stat.number.includes("+") && (
              <span className="stat-card__plus">
                +
              </span>
            )}
          </>
        ) : (
          <span className="stat-card__text">
            <DecryptText text={stat.number} />
          </span>
        )}
      </div>

      <div className="stat-card__label">
        <DecryptText text={stat.label[language]} />
      </div>
    </motion.article>
  );
}

function Footer({
  theme,
  content,
  onBackToTop,
}) {
  return (
    <footer
      className={`app-footer app-footer--${theme}`}
    >
      <div className="app-footer__inner">
        <div className="app-footer__status">
          <span
            className="app-footer__indicator"
            aria-hidden="true"
          >
            <span />
          </span>

          <p>
            Core Status:{" "}
            <strong>
              {content.systemStatus}
            </strong>
          </p>
        </div>

        <p className="app-footer__copyright">
          © {new Date().getFullYear()} —{" "}
          <strong>EDUARDO GUILHERME</strong>{" "}
          // {content.futureMessage}
        </p>

        <button
          type="button"
          className="app-footer__top-button"
          onClick={onBackToTop}
          aria-label={content.backToTop}
        >
          [{content.backToTop}]
        </button>
      </div>
    </footer>
  );
}

export default App;