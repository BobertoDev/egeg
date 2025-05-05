import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';

const Test = () => {
  const ref = useRef(null);
  const [offsetX, setOffsetX] = useState(0);


  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const elemCenterX = rect.left + rect.width / 2;
        const viewportCenterX = window.innerWidth / 2;
        
        setOffsetX(viewportCenterX - elemCenterX);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize); 

    return () => window.removeEventListener('resize', handleResize);
  }, [scrollYProgress]);



  // Animate X from 0 to offsetX based on scroll
  const xPos = useTransform(scrollYProgress, [0, 0.2], [0, offsetX]);

  return (
    <div style={{ height: '300vh' }}>
      <motion.div
        ref={ref}
        style={{ x: xPos }}
        className="mt-300 ml-[-100vw] border-2 w-[30vw] h-[30vh]"
      >
        Your content here
      </motion.div>
    </div>
  );
};

export default Test;
