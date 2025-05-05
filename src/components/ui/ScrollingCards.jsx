import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function ScrollingCards({ cards, scrollTargetRef }) {
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        if (scrollTargetRef?.current) {
            setEnabled(true);
        }
    }, [scrollTargetRef]);

    if (!enabled) return null;

    return <CardsWithScroll cards={cards} scrollTargetRef={scrollTargetRef} />;
}
function CardsWithScroll({ cards, scrollTargetRef }) {
    const { scrollYProgress } = useScroll({
        target: scrollTargetRef,
        offset: ['start end', 'end start']
    });

    const containerRef = useRef(null);
    const [containerHeight, setContainerHeight] = useState(0);

    useEffect(() => {
        if (containerRef.current) {
            setContainerHeight(containerRef.current.offsetHeight);
        }
    
        const handleResize = () => {
            if (containerRef.current) {
                setContainerHeight(containerRef.current.offsetHeight);
            }
        };
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const scrollChunk = 1 / cards.length;

    const cardsY = cards.map((_, index) => {
        const start = index * scrollChunk;
        const end = start + scrollChunk;

        const fromY = 0.1 * containerHeight * index;  
        const toY = -0.7 * containerHeight * index;

        return useTransform(scrollYProgress, [start, end], [fromY, toY]);
    });

    return (
        <div className='mb-100 flex flex-col items-center'>
            <div className=' relative flex flex-col items-center'>
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        style={{ y: cardsY[index], zIndex: index, top: index / 50, backgroundColor: card.color }}
                        className='rounded-3xl  w-[97vw] flex flex-col sm:flex-row items-center justify-between sm:h-[100px] h-[50vh] md:h-[300px] lg:h-[350px] '
                        ref={containerRef}
                    >
                        <p className=' self-start ml-5 mt-5 text-[3rem]'>{`00${index+1}`}</p>
                        <div className='flex flex-col w-[90%] sm:w-[40%] mt-10'>
                            <h2 className='text-[10rem] sm:text-[2.5rem]'>{card.title}</h2>
                            <p className='text-[4rem] sm:text-[1rem]'>{card.description}</p>
                        </div>
                        <img src={card.icon} alt={card.title} className='h-auto mt-5 self-center w-[30vw] sm:w-[10vw] ' />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}


export default ScrollingCards;
