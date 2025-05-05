import React, { useEffect, useRef, useState } from 'react';

function InfiniteSlider({ items }) {
  const [offsetX, setOffsetX] = useState(0);
  const containerRef = useRef(null);
  const singleSetWidth = useRef(0);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {

      const children = container.children;
      const itemCount = items.length;

      let totalWidth = 0;
      for (let i = 0; i < itemCount; i++) {
        const child = children[i];
        const style = window.getComputedStyle(child);
        const width = child.offsetWidth;
        const marginRight = parseInt(style.marginRight, 10) || 0;
        totalWidth += width + marginRight;
      }
      singleSetWidth.current = totalWidth;
    }

    const interval = setInterval(() => {
      setOffsetX((prev) => {
        if (Math.abs(prev) >= singleSetWidth.current) {
          return 0;
        }
        return prev - 2;
      });
    }, 16);

    return () => clearInterval(interval);
  }, [items]);

  return (
    <div className='w-[100%] overflow-hidden'>
      <div
        ref={containerRef}
        className='flex w-max '
        style={{
          transform: `translateX(${offsetX}px)`,
          transition: 'transform 0.016s linear',
        }}
      >
        {[...items, ...items].map((item, index) => (
          <img
            key={index}
            src={item}
            className='w-[5%] sm:w-[9%] mr-[20px]'
            alt={`slide-${index}`}
          />
        ))}
      </div>
    </div>
  );
}

export default InfiniteSlider;
