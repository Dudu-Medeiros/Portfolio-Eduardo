import { useState } from "react";

import "./Navbar.css";

function Navbar({
  theme,
  toggleTheme,
  language,
  toggleLanguage,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
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

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`navbar navbar--${theme}`}
    >
      <div className="navbar__container">
        <a
          href="#home"
          className="navbar__brand"
          onClick={closeMenu}
          aria-label="Eduardo Guilherme - início"
        >
          <span className="navbar__brand-symbol">
            &lt;/&gt;
          </span>

          <span className="navbar__brand-text">
            EDUARDO
            <span>.DEV</span>
          </span>
        </a>

        <nav
          className={`navbar__navigation ${
            isMenuOpen ? "navbar__navigation--open" : ""
          }`}
          aria-label={
            language === "pt"
              ? "Navegação principal"
              : "Main navigation"
          }
        >
          <div className="navbar__links">
            {navigation.map((item) => (
              <a
                href={`#${item.id}`}
                className="navbar__link"
                key={item.id}
                onClick={closeMenu}
              >
                <span className="navbar__link-index">
                  //
                </span>

                {item.label[language]}
              </a>
            ))}
          </div>

          <div className="navbar__controls">
            <button
              type="button"
              className="navbar__control"
              onClick={toggleLanguage}
              aria-label={
                language === "pt"
                  ? "Mudar idioma para inglês"
                  : "Switch language to Portuguese"
              }
            >
              <span className="navbar__control-label">
                {language === "pt" ? "PT" : "EN"}
              </span>

              <span className="navbar__control-arrow">
                ↔
              </span>

              <span className="navbar__control-label navbar__control-label--muted">
                {language === "pt" ? "EN" : "PT"}
              </span>
            </button>

            <button
              type="button"
              className="navbar__control navbar__theme-control"
              onClick={toggleTheme}
              aria-label={
                theme === "dark"
                  ? "Ativar tema claro"
                  : "Ativar tema escuro"
              }
              aria-pressed={theme === "light"}
            >
              <span
                className={`navbar__theme-icon ${
                  theme === "dark"
                    ? "navbar__theme-icon--active"
                    : ""
                }`}
                aria-hidden="true"
              >
                ◐
              </span>

              <span className="navbar__theme-text">
                {theme === "dark" ? "DARK" : "LIGHT"}
              </span>
            </button>
          </div>
        </nav>

        <button
          type="button"
          className={`navbar__menu-button ${
            isMenuOpen
              ? "navbar__menu-button--open"
              : ""
          }`}
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-label={
            isMenuOpen
              ? "Fechar menu"
              : "Abrir menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Navbar;