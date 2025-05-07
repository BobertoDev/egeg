import React from 'react';
import { motion } from 'framer-motion';

const AnimatedText = ({
  text,
  className,
  initial_y = 20,
  delay = 0.5,
  stagger = 0.01,
}) => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const letterVariants = {
    hidden: (custom) => ({
      opacity: 0,
      scale: 0.8,
      y: custom,
    }),
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  return (
    <motion.h1
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      className={`flex flex-wrap ${className}`}
    >
      {text.split("").map((letter, index) => {
        if (letter === " ") {
          return (
            <motion.span
              key={index}
              custom={initial_y}
              variants={letterVariants}
              className="inline-block"
            >
              &nbsp;
            </motion.span>
          );
        }

        if (letter === "\n") {
          return <br key={index} />;
        }

        return (
          <motion.span
            key={index}
            custom={initial_y}
            variants={letterVariants}
            className="inline-block"
          >
            {letter}
          </motion.span>
        );
      })}
    </motion.h1>
  );
};

export default AnimatedText;
