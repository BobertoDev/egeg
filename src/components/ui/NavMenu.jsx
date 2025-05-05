import React, { useState } from 'react'
import { delay, motion, scale } from 'framer-motion'

function NavMenu({ links }) {


    const menuBtnVariants = {
        hover: {
            transition: {
                staggerChildren: 0.05,
            },
        },
    };

    const leftDotVariants = {
        hover: { x: 5 },
        initial: { x: 0 }
    };

    const rightDotVariants = {
        hover: { x: -5 },
        initial: { x: 0 }
    };

    const topDotVariants = {
        hover: { y: 5 },
        initial: { y: 0 }
    };

    const bottomDotVariants = {
        hover: { y: -5 },
        initial: { y: 0 }
    };


    const menuVariants = {
        hidden: {
            scaleX: 0.2,
            scaleY: 0.075,
            transition: {
                scaleX: { delay: 0.3, duration: 0.3 },
                scaleY: { delay: 0.6, duration: 0.3 }
            }
        },

        visible: { 
            scaleX: 1, 
            scaleY: 1,
            transition: {
                scaleY: {duration: 0.3},
                scaleX: {delay: 0.3, duration: 0.6}
            }
        },
    }

    const menuContentVariants = {

        visible: {
            opacity: 1,
            transition: {
                delay: 0.3
            }
        },
        hidden: {
            opacity: 0
        }
    }

    const [animateBox, setAnimateBox] = useState(false);

    return (
        <div className='w-[55vw] sm:w-[30vw] relative'>
            <motion.div
                animate={animateBox ? "hidden" : "visible"}
                transition={{ duration: 0.5 }}
                variants={menuVariants}
                className='origin-bottom-right h-[150vw] min-[500px]:h-[90vh] rounded-[3vw] w-[55vw] sm:w-[30vw] border-1 bg-[#e2dbc9] p-15 flex flex-col justify-between  '>
                <motion.ul variants={menuContentVariants} className='h-[40%] flex flex-col justify-between'>
                    {
                        links.map((link, index) => {
                            return (
                                <li key={index} className='flex text-[4rem] sm:text-[1.5rem] items-center'>
                                    <img className="mr-5 w-[6vw] sm:w-[3vw]" src={link.icon} />
                                    <a href={link.link}>{link.text}</a>
                                </li>
                            )
                        })
                    }

                </motion.ul>

                <motion.div variants={menuContentVariants} className='flex justify-between h-[40%] mt-15'>
                    {Array.from({ length: 10 }, (_, indexRow) => (
                        <div className='flex flex-col justify-between' key={indexRow}>
                            {
                                Array.from({ length: 10 }, (_, indexCol) => (
                                    <div key={indexCol} className='w-[0.75vw] h-[0.75vw] bg-[#00000020] rounded-full' />
                                ))
                            }

                        </div>
                    ))}
                </motion.div>



                <motion.h1 variants={menuContentVariants} className='text-[4rem] bg-[#54bf44] text-center self-start '>Kontakt</motion.h1>
            </motion.div>

            <div className='flex justify-between absolute bottom-10 right-10  '>
                    
                    <motion.div
                        className='flex flex-col justify-between w-[7vw] h-[7vw] cursor-pointer'
                        variants={menuBtnVariants}
                        initial="initial"
                        whileHover="hover"
                        onClick={() => setAnimateBox(prev => !prev)}
                    >
                        <motion.div
                            variants={topDotVariants}
                            className='w-[1vw] h-[1vw] bg-[#00000070] self-center rounded-full'
                        />

                        <motion.div className='flex justify-between w-full'>
                            <motion.div
                                variants={leftDotVariants}
                                className='w-[1vw] h-[1vw] bg-[#00000070] rounded-full'
                            />
                            <motion.div
                                variants={rightDotVariants}
                                className='w-[1vw] h-[1vw] bg-[#00000070]  rounded-full'
                            />
                        </motion.div>

                        <motion.div
                            variants={bottomDotVariants}
                            className='w-[1vw] h-[1vw] bg-[#00000070] self-center rounded-full  '
                        />
                    </motion.div>

                </div>
        </div>
    )

}


export default NavMenu
