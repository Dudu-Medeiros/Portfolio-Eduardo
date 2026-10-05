import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaMoon,
  FaSun,
} from "react-icons/fa6";

import "./Navbar.css";

const NAVIGATION = [
  {
    id: "home",
    label: {
      pt: "Início",
      en: "Home",
    },
  },
  {
    id: "about",
    label: {
      pt: "Sobre",
      en: "About",
    },
  },
  {
    id: "projects",
    label: {
      pt: "Projetos",
      en: "Projects",
    },
  },
  {
    id: "contact",
    label: {
      pt: "Contato",
      en: "Contact",
    },
  },
];

const NAVBAR_SPRING = {
  type: "spring",
  stiffness: 420,
  damping: 30,
};

function Navbar({
  theme,
  toggleTheme,
  language,
  toggleLanguage,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = NAVIGATION
      .map((item) =>
        document.getElementById(item.id)
      )
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio -
              a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(
            visibleSections[0].target.id
          );
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0.05, 0.2, 0.5],
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className={`navbar navbar--${theme}`}>
      <div className="navbar__container">
        <motion.a
          href="#home"
          className="navbar__brand"
          onClick={() => handleNavClick("home")}
          aria-label={
            language === "pt"
              ? "Eduardo Guilherme - início"
              : "Eduardo Guilherme - home"
          }
          whileHover={{
            y: -1,
          }}
          whileTap={{
            scale: 0.97,
          }}
        >
          <motion.span
            className="navbar__brand-symbol"
            whileHover={{
              rotate: -4,
              scale: 1.06,
            }}
            transition={NAVBAR_SPRING}
          >
            &lt;/&gt;
          </motion.span>

          <span className="navbar__brand-text">
            EDUARDO
            <span>.DEV</span>
          </span>
        </motion.a>

        <nav
          id="main-navigation"
          className={`navbar__navigation ${
            isMenuOpen
              ? "navbar__navigation--open"
              : ""
          }`}
          aria-label={
            language === "pt"
              ? "Navegação principal"
              : "Main navigation"
          }
        >
          <div className="navbar__links">
            {NAVIGATION.map((item, index) => {
              const isActive =
                activeSection === item.id;

              return (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`navbar__link ${
                    isActive
                      ? "navbar__link--active"
                      : ""
                  }`}
                  onClick={() =>
                    handleNavClick(item.id)
                  }
                  aria-current={
                    isActive ? "page" : undefined
                  }
                  whileHover={{
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  transition={NAVBAR_SPRING}
                >
                  {isActive && (
                    <motion.span
                      className="navbar__link-active-bg"
                      layoutId="navbar-active-pill"
                      transition={NAVBAR_SPRING}
                    />
                  )}

                  <span className="navbar__link-number">
                    0{index + 1}
                  </span>

                  <span className="navbar__link-label">
                    {item.label[language]}
                  </span>

                  {isActive && (
                    <motion.span
                      className="navbar__link-active-dot"
                      initial={{
                        opacity: 0,
                        scale: 0,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                    />
                  )}
                </motion.a>
              );
            })}
          </div>

          <div className="navbar__divider" />

          <div className="navbar__controls">
            <motion.button
              type="button"
              className="navbar__language"
              onClick={toggleLanguage}
              aria-label={
                language === "pt"
                  ? "Mudar idioma para inglês"
                  : "Mudar idioma para português"
              }
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.94,
              }}
              transition={NAVBAR_SPRING}
            >
              <span
                className={`navbar__language-option ${
                  language === "pt"
                    ? "navbar__language-option--active"
                    : ""
                }`}
              >
                {language === "pt" && (
                  <motion.span
                    className="navbar__language-pill"
                    layoutId="language-pill"
                    transition={NAVBAR_SPRING}
                  />
                )}

                <span>PT</span>
              </span>

              <span className="navbar__language-separator">
                /
              </span>

              <span
                className={`navbar__language-option ${
                  language === "en"
                    ? "navbar__language-option--active"
                    : ""
                }`}
              >
                {language === "en" && (
                  <motion.span
                    className="navbar__language-pill"
                    layoutId="language-pill"
                    transition={NAVBAR_SPRING}
                  />
                )}

                <span>EN</span>
              </span>
            </motion.button>

            <motion.button
              type="button"
              className="navbar__theme"
              onClick={toggleTheme}
              aria-label={
                theme === "dark"
                  ? "Ativar tema claro"
                  : "Ativar tema escuro"
              }
              aria-pressed={theme === "light"}
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.94,
              }}
              transition={NAVBAR_SPRING}
            >
              <AnimatePresence
                mode="wait"
                initial={false}
              >
                <motion.span
                  key={theme}
                  className="navbar__theme-icon"
                  initial={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.5,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.5,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >
                  {theme === "dark" ? (
                    <FaMoon />
                  ) : (
                    <FaSun />
                  )}
                </motion.span>
              </AnimatePresence>

              <span className="navbar__theme-label">
                {theme === "dark"
                  ? "DARK"
                  : "LIGHT"}
              </span>
            </motion.button>
          </div>
        </nav>

        <motion.button
          type="button"
          className={`navbar__menu-button ${
            isMenuOpen
              ? "navbar__menu-button--open"
              : ""
          }`}
          onClick={() =>
            setIsMenuOpen((current) => !current)
          }
          aria-label={
            isMenuOpen
              ? language === "pt"
                ? "Fechar menu"
                : "Close menu"
              : language === "pt"
                ? "Abrir menu"
                : "Open menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          whileTap={{
            scale: 0.9,
          }}
        >
          <span />
          <span />
          <span />
        </motion.button>
      </div>
    </header>
  );
}

export default Navbar;