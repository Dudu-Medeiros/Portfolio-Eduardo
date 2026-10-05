import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import "./Preloader.css";

const LOADING_MESSAGES = [
  "INITIALIZING...",
  "LOADING INTERFACE...",
  "ALMOST READY...",
  "SYSTEM READY",
];

function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const duration = 2400;
    const interval = 30;
    const step = 100 / (duration / interval);

    const progressInterval = setInterval(() => {
      setProgress((current) => {
        const next = Math.min(
          current + step,
          100
        );

        if (next >= 100) {
          clearInterval(progressInterval);
        }

        return next;
      });
    }, interval);

    return () => clearInterval(progressInterval);
  }, []);

  const getMessage = () => {
    if (progress >= 100) {
      return LOADING_MESSAGES[3];
    }

    if (progress >= 75) {
      return LOADING_MESSAGES[2];
    }

    if (progress >= 35) {
      return LOADING_MESSAGES[1];
    }

    return LOADING_MESSAGES[0];
  };

  const message = getMessage();
  const percentage = Math.round(progress);

  useEffect(() => {
    if (progress < 100) return;

    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 300);

    return () => clearTimeout(exitTimer);
  }, [progress]);

  useEffect(() => {
    if (!isExiting) return;

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 600);

    return () => clearTimeout(completeTimer);
  }, [isExiting, onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.01,
          }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
        >
          <div
            className="preloader__grid"
            aria-hidden="true"
          />

          <div
            className="preloader__glow"
            aria-hidden="true"
          />

          <motion.div
            className="preloader__content"
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          >
            <div className="preloader__brand">
              <span className="preloader__symbol">
                &lt;/&gt;
              </span>

              <span className="preloader__name">
                EDUARDO<span>.DEV</span>
              </span>
            </div>

            <div
              className="preloader__panel"
              aria-live="polite"
            >
              <div className="preloader__message">
                <span className="preloader__message-prefix">
                  &gt;
                </span>

                <AnimatePresence mode="wait">
                  <motion.span
                    key={message}
                    initial={{
                      opacity: 0,
                      y: 6,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -6,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    {message}
                  </motion.span>
                </AnimatePresence>

                <motion.span
                  className="preloader__cursor"
                  animate={{
                    opacity: [1, 0, 1],
                  }}
                  transition={{
                    duration: 0.9,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>

              <div className="preloader__progress">
                <div className="preloader__progress-top">
                  <span>LOADING</span>

                  <strong>
                    {percentage}%
                  </strong>
                </div>

                <div className="preloader__bar">
                  <motion.div
                    className="preloader__bar-fill"
                    animate={{
                      width: `${progress}%`,
                    }}
                    transition={{
                      duration: 0.08,
                      ease: "linear",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="preloader__footer">
              <span>PORTFOLIO</span>
              <span>V1.0</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Preloader;