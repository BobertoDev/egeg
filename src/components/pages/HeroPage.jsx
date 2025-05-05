import React from 'react'
import { delay, hover, motion, useScroll, useTransform } from 'framer-motion';
import AnimatedText from '../ui/AnimatedText';
import EcoGif from '../../assets/images/213.gif'
import LogoWithText from '../../assets/images/logoWithText.png'
import ArrowDown from '../../assets/images/arrow-down.svg'
import LinkedInIcon from '../../assets/images/ln.svg'
import AnimatedIcon from '../ui/AnimatedIcon';
import PhoneIcon from '../../assets/images/phone.svg';
import MailIcon from '../../assets/images/mail.svg';
const text = "EcoConstruct";



function HeroPage() {


    const { scrollYProgress } = useScroll();
    const logoOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <div className=' bg-[#e2dbc9] flex items-center justify-center '>
            <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className='h-[100vh] w-[98vw] sm:  rounded-4xl bg-[radial-gradient(circle,_#b1b1b1,_#646464)] flex flex-col justify-between mt-[2.5vh] mb-[2.5vh]'
            >

                <div className='flex justify-between items-center '>

                    <AnimatedText text={text} className=" text-[#e2dbc9] ml-[30px] xl:text-[8rem] sm:text-[6rem] sm:mt-[10vh] mt-[20vh] text-[12rem] leading-0" ></AnimatedText>
                    <motion.img
                        style={{ opacity: logoOpacity }}
                        src={LogoWithText}
                        alt="Logo"
                        className='w-[15vw] absolute sm:w-[7.5vw] h-fit sm:top-[3vw] top-[10vw] right-15'
                    />
                </div>
                <div className="absolute items-center justify-center mt-[22vh] sm:mt-[10vh] self-center">
                    <motion.img
                        src={EcoGif}
                        alt="EcoGif"
                        className='xl:w-[45vw] lg:w-[50vw] md:w-[70vw] sm:w-[80vw] h-fit rounded-4xl object-cover'
                    />
                    <div className='flex flex-col justify-center items-center'>

                        <AnimatedText className={"text-center text-white xl:text-[1.5rem] lg:text-[1.5rem] md:text-[1.5rem] sm:text-[1.5rem] text-[4rem]"} initial_y={10} text={"Revolutionäre Lösungen"} />
                        <AnimatedText className={"text-center text-white xl:text-[1.5rem] lg:text-[1.5rem] md:text-[1.5rem] sm:text-[1.5rem] text-[4rem]"} initial_y={10} text={"für eine nachhaltige Zukunft!"} />
                        <AnimatedText className={"mt-5 text-center opacity-[0.5] text-white xl:text-[1.2rem] lg:text-[1.2rem] md:text-[1.2rem] sm:text-[1.2rem] text-[3rem]"} initial_y={10} text={"scroll down!"} />

                        <img src={ArrowDown} alt="ArrowDown" className=' w-[15px] opacity-[0.5] mt-2.5 animate-bounce' />
                        <img src={ArrowDown} alt="ArrowDown" className=' w-[15px] opacity-[0.5] animate-bounce' />
                    </div>
                </div>

                <div className="hidden sm:flex self-en ml-5 justify-between w-[10vw] mb-5">
                    <AnimatedIcon className="w-[25px]" src={LinkedInIcon} alt="LinkedIn Icon" />
                    <AnimatedIcon className="w-[25px]" src={PhoneIcon} alt="Phone Icon" />
                    <AnimatedIcon className="w-[30px]" src={MailIcon} alt="Mail Icon" />

                </div>

            </motion.div>






        </div>
    );
}

export default HeroPage;
