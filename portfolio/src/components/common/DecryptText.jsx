import { useEffect, useState } from "react";

const CHARACTERS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#$%&@";

function DecryptText({
  text = "",
  speed = 35,
  delay = 0,
}) {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    if (!text) {
      setDisplayText("");
      return;
    }

    let interval;
    let timeout;
    let currentIndex = 0;

    const startAnimation = () => {
      interval = setInterval(() => {
        setDisplayText(() => {
          return text
            .split("")
            .map((character, index) => {
              if (character === " ") {
                return " ";
              }

              if (index < currentIndex) {
                return text[index];
              }

              const randomIndex = Math.floor(
                Math.random() * CHARACTERS.length
              );

              return CHARACTERS[randomIndex];
            })
            .join("");
        });

        currentIndex += 1;

        if (currentIndex > text.length) {
          clearInterval(interval);
          setDisplayText(text);
        }
      }, speed);
    };

    timeout = setTimeout(startAnimation, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, delay]);

  return <span>{displayText}</span>;
}

export default DecryptText;