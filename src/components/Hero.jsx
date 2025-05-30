import { useState, useEffect } from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { motion } from "framer-motion";
import { personalInfo } from "../constants";

const useTypewriter = (text, speed = 150) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setDisplayText(""); // reset text if it changes
    setIndex(0);
    const interval = setInterval(() => {
      setDisplayText((prev) => text.slice(0, prev.length + 1));
      setIndex((prev) => prev + 1);

      if (index >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return displayText;
};

const Hero = () => {
  const name = personalInfo.name || "Guest";
  const typewriterText = useTypewriter(`Hi, I'm ${name}`, 100);
  const fullText = `Hi, I'm ${name}`;
  const showCursor = typewriterText.length < fullText.length;

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        {/* Left Line Indicator */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-electric-purple" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Intro Text */}
        <div className="sm:text-left text-center">
          <h1 className={`${styles.heroHeadText} text-white`}>
            {typewriterText.startsWith("Hi, I'm") ? (
              <>
                Hi,&nbsp;I<span dangerouslySetInnerHTML={{ __html: "&apos;" }} />m{" "}
                <span className="text-electric-purple">
                  {typewriterText.slice(8)}
                  {showCursor && <span className="animate-pulse">|</span>}
                </span>
              </>
            ) : (
              <>
                {typewriterText}
                {showCursor && (
                  <span className="animate-pulse text-electric-purple">|</span>
                )}
              </>
            )}
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            Innovative {personalInfo.role || "developer"},{" "}
            <br className="sm:block hidden" />
            building web and mobile applications.
          </p>
        </div>
      </div>

      {/* Canvas Background */}
      <ComputersCanvas />

      {/* Scroll Down Indicator */}
      <div className="absolute xs:bottom-2 bottom-12 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
