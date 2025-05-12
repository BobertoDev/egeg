import React, { useState, useRef, useEffect } from 'react'
import { delay, motion, scale } from 'framer-motion'
import { throttle } from 'lodash';

function NavMenu({ links }) {

    const menuBtnRef = useRef(null);
    const [menuBtnWidth, setMenuBtnWidth] = useState(0);
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    const [navMenuWidth, setNavMenuWidth] = useState("30vw");
    const [navMenuHeight, setNavMenuHeight] = useState("90vh");

    const [navMenuEntrySelected, setNavMenuEntrySelected] = useState("");


    function handleMenuEntryClick(entry) {
        setNavMenuEntrySelected(entry);
    }



    useEffect(() => {
        
        const updateSize = () => {
            setViewportWidth(window.innerWidth);

            if(window.innerWidth < 640) {
                setNavMenuWidth("50vw");
                setNavMenuHeight("90vw");
            }
            else if(window.innerWidth < 1024) {
                setNavMenuWidth("30vw");
                setNavMenuHeight("90vh");
            }
            else
            {
                setNavMenuWidth("20vw");
                setNavMenuHeight("90vh");
            }
        }

        if (menuBtnRef.current) {
            setMenuBtnWidth(menuBtnRef.current.offsetWidth);
            console.log(menuBtnRef.current.offsetWidth);
        }
        
        const throttledUpdateSize = throttle(updateSize, 200);
        updateSize();

        window.addEventListener('resize', throttledUpdateSize);


        return () => {
            window.removeEventListener('resize', updateSize);
        };
    }, [])

    const menuBtnVariants = {
        hover: {
            transition: {
                staggerChildren: 0.05,
            },
        },
    };

    const leftDotVariants = {
        hover: { x: 10 },
        initial: { x: 0 }
    };

    const rightDotVariants = {
        hover: { x: -10 },
        initial: { x: 0 }
    };

    const topDotVariants = {
        hover: { y: 10 },
        initial: { y: 0 }
    };

    const bottomDotVariants = {
        hover: { y: -10 },
        initial: { y: 0 }
    };


    const menuVariants = {

        hidden: {
            width: '0.1vw',
            height: '0.1vh',
            transition: {
                width: { delay: 0.2, duration: 0.3 },
                height: { delay: 0.5, duration: 0.3 }
            }
        },
        visible: {
            width: `${navMenuWidth}`,
            height: `${navMenuHeight}`,
            transition: {
                height: { duration: 0.3 },
                width: { delay: 0.4, duration: 0.3 }
            }
        }


    }

    const menuContentVariants = {

        visible: {
            opacity: 1,
            transition: {
                delay: 0.7
            }
        },
        hidden: {
            opacity: 0
        }
    }

    const [animateBox, setAnimateBox] = useState(false);

    return (
        <div className=' flex justify-end relative ml-[5vw] mt-[5vw] z-1'>
            <motion.div
                animate={animateBox ? "visible" : "hidden"}
                transition={{ duration: 0.5 }}
                variants={menuVariants}
                className='absolute right-0 bottom-0 rounded-2xl bg-[#e2dbc9]  p-30 sm:p-15 lg:p-10  flex flex-col justify-between'>
                <motion.ul variants={menuContentVariants} className=' flex flex-col justify-between h-[40%]'>
                    {
                        links.map((link, index) => {
                            return (
                                <li key={index} className='flex text-[4rem] sm:text-[1.5rem] items-center'>
                                    <img className="mr-5 w-[6vw] sm:w-[3vw] lg:w-[1.5vw]" src={link.icon} />
                                    <a onClick={() => handleMenuEntryClick(link.text)} className={`text-[2rem] md:text-[1rem] hover:font-bold transition-transform duration-300 hover:scale-105 ${navMenuEntrySelected === link.text ? 'font-bold' : 'font-normal'}`} href={link.link}>{link.text}</a>
                                </li>
                            )
                        })
                    }

                </motion.ul>

                <motion.div variants={menuContentVariants} className='flex justify-between mt-15 h-[30%]'>
                    {Array.from({ length: 10 }, (_, indexRow) => (
                        <div className='flex flex-col justify-between' key={indexRow}>
                            {
                                Array.from({ length: 10 }, (_, indexCol) => (
                                    <div key={indexCol} className='w-[0.75vw] h-[0.75vw] bg-[#00000020] rounded-full lg:w-[0.25vw] lg:h-[0.25vw]' />
                                ))
                            }

                        </div>
                    ))}
                </motion.div>



                <motion.h1 variants={menuContentVariants} className='text-[4rem] sm:text-[1.5rem] bg-[#54bf44] text-center self-start  pr-15 pl-15 sm:pr-5 sm:pl-5 rounded-3xl '>Kontakt</motion.h1>
            </motion.div>

            <div className='absolute bottom-15 right-15 sm:bottom-[1.1vw] sm:right-[1.1vw] lg:bottom-[1vw] lg:right-[1vw] w-[7.5vw] h-[7.5vw] sm:w-[5vw] sm:h-[5vw] lg:w-[3vw] lg:h-[3vw] flex  rounded-3xl'>

                <motion.div
                    className='flex flex-col justify-between w-[100%] h-[100%] cursor-pointer'
                    variants={menuBtnVariants}
                    initial="initial"
                    whileHover="hover"
                    onClick={() => setAnimateBox(prev => !prev)}
                    ref={menuBtnRef}
                >
                    <motion.div
                        variants={topDotVariants}
                        className='w-[1vw] h-[1vw] sm:w-[10px] sm:h-[10px] bg-[#000000] self-center rounded-full'
                    />

                    <motion.div className='flex justify-between w-full'>
                        <motion.div
                            variants={leftDotVariants}
                            className='w-[1vw] h-[1vw] sm:w-[10px] sm:h-[10px] bg-[#000000] rounded-full'
                        />
                        <motion.div
                            variants={rightDotVariants}
                            className='w-[1vw] h-[1vw]  sm:w-[10px] sm:h-[10px] bg-[#000000]  rounded-full'
                        />
                    </motion.div>

                    <motion.div
                        variants={bottomDotVariants}
                        className='w-[1vw] h-[1vw] sm:w-[10px] sm:h-[10px] bg-[#000000] self-center rounded-full  '
                    />
                </motion.div>

            </div>
        </div>
    )

}


export default NavMenu
