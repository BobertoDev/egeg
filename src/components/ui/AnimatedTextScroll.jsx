import React from 'react'
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
function AnimatedTextScroll({text, color }) {

    const scrollRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: scrollRef,
      offset: ["center end", "end center"],
    });

    const colorStyle = `linear-gradient(to right, ${color}, ${color})`;


    const words = text.split(" ");
    const bgSizes = words.map((_, index) =>
      useTransform(
        scrollYProgress,
        [index * 0.02, index * 0.02 + 0.02],
        ["0% 100%", "100% 100%"]
      )
    );

    return (
        <div className=" px-10">
        <div className=" flex flex-wrap gap-x-6 w-[95vw] ">
          <div ref={scrollRef} className="flex flex-wrap w-[100%] mt-[15vh] mb-[15vh]">
            {words.map((word, index) => (
              <motion.h1
                key={index}
                style={{
                  backgroundImage: colorStyle,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "left",
                  backgroundSize: bgSizes[index],
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                className="text-[6rem] sm:text-[4rem] gap-x-4 font-bold whitespace-nowrap"
              >
                {word + "\u00A0"}
              </motion.h1>
            ))}
          </div>
        </div>
      </div>
    )
}

export default AnimatedTextScroll