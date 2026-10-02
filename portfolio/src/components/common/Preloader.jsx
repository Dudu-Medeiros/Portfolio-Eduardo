import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import "./Preloader.css";

const LOADING_STEPS = [
  "INITIALIZING SYSTEM...",
  "LOADING INTERFACE...",
  "CONNECTING MODULES...",
  "LOADING EXPERIENCE...",
  "SYSTEM READY",
];

function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((current) => {
        if (current >= 100) {
          clearInterval(progressInterval);
          return 100;
        }

        return Math.min(current + 2, 100);
      });
    }, 30);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStepIndex((current) => {
        if (current >= LOADING_STEPS.length - 1) {
          clearInterval(interval);
          return current;
        }

        return current + 1;
      });
    }, 450);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress < 100) {
      return;
    }

    const exitTimeout = setTimeout(() => {
      setIsExiting(true);
    }, 300);

    return () => clearTimeout(exitTimeout);
  }, [progress]);

  useEffect(() => {
    if (!isExiting) {
      return;
    }

    const completeTimeout = setTimeout(() => {
      onComplete();
    }, 700);

    return () => clearTimeout(completeTimeout);
  }, [isExiting, onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <div className="preloader__content">
            <motion.div
              className="preloader__brand"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="preloader__brand-symbol">&lt;/&gt;</span>
              <span className="preloader__brand-name">EDUARDO</span>
            </motion.div>

            <div className="preloader__terminal">
              <div className="preloader__terminal-line">
                <span className="preloader__terminal-prefix">&gt;</span>

                <AnimatePresence mode="wait">
                  <motion.span
                    key={LOADING_STEPS[stepIndex]}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {LOADING_STEPS[stepIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            <div className="preloader__progress">
              <div className="preloader__progress-header">
                <span>BOOT_SEQUENCE</span>
                <span>{progress}%</span>
              </div>

              <div className="preloader__progress-track">
                <motion.div
                  className="preloader__progress-bar"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.15, ease: "linear" }}
                />
              </div>
            </div>

            <div className="preloader__footer">
              <span>SYSTEM_LOAD</span>
              <span>V1.0.0</span>
            </div>
          </div>

          <div className="preloader__grid" />
          <div className="preloader__scanline" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Preloader;