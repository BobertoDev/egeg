import React from 'react'
import AnimatedTextScroll from '../ui/AnimatedTextScroll';
import AnimatedText from '../ui/AnimatedText';
import SolarCounterIcon from '../../assets/images/solarCounter.gif';
import WPCounterIcon from '../../assets/images/wpCounter.gif';
import TaskCounterIcon from '../../assets/images/taskCounter.gif';
import Brown1Icon from '../../assets/images/brown-1.svg';
import Brown2Icon from '../../assets/images/brown-2.svg';
import ImmoIcon from '../../assets/images/gifImmo.gif';

import { motion } from 'framer-motion';
import { useRef } from 'react';

const text =
    "Willkommen bei der EcoConstruct GmbH – Ihrem zuverlässigen Partner für " +
    "nachhaltige und innovative Bau- und Sanierungslösungen. " +
    "Seit unserer Gründung setzen wir auf modernste Technologien und umweltfreundliche Praktiken, " +
    "um Bauprojekte effizient und nachhaltig zu gestalten.";

function AboutPage() {
    const aboutRef = useRef(null);

    return (
        <div ref={aboutRef} className='bg-[#263228] flex flex-col overflow-x-hidden overflow-y-hidden '>
            <div id={"about"}>
                <AnimatedTextScroll text={text} color={"#def3c6"} />
            </div>
            <AnimatedText stagger={0.025} delay={0} className="mt-[25vh] mb-[15vh] text-white text-[8rem] self-center" text={"Auftrage"} initial_y={50} />
            <div className='flex flex-col min-[768px]:flex-row max-[768px]:items-center justify-between self-center w-[95vw] mb-[20vh] lg:w-[80vw] xl:w-[55vw]'>
                <motion.div className='bg-[#ffffff15] w-[250px]  rounded-3xl pl-10 pr-10 flex flex-col items-center shadow-[0_0_10px_rgba(0,0,0,0.15)] mb-15 ' style={{ backgroundOpacity: 0 }}

                    initial={{ opacity: 0, x: -150 }}
                    whileInView={{ opacity: 1, x: 0 }}
                >
                    <img src={SolarCounterIcon} alt="Solar Counter" className="h-auto  mt-5 self-start" />
                    <h2 className='text-white text-[18px] '>PV-Anlagen</h2>
                    <h2 className='text-[2rem] text-[#f5bf42]'>573</h2>
                    <h2 className='text-white text-[16px] mb-2 '>Installationen</h2>
                </motion.div>


                <motion.div className='bg-[#ffffff15] w-[250px] rounded-3xl pl-10 pr-10 flex flex-col items-center shadow-[0_0_10px_rgba(0,0,0,0.15)] mb-15' style={{ backgroundOpacity: 0 }}
                    initial={{ opacity: 0, y: -150 }}
                    whileInView={{ opacity: 1, y: 0 }}
                >
                    <img src={WPCounterIcon} alt="WP Counter" className="h-auto  mt-5 self-start" />
                    <h2 className='text-white text-[18px] '>Wärmepumpe</h2>
                    <h2 className='text-[2rem] text-[#f5bf42]'>533</h2>
                    <h2 className='text-white text-[16px] mb-2 '>Installationen</h2>
                </motion.div>

                <motion.div className='bg-[#ffffff15] w-[250px] rounded-3xl pl-10 pr-10 flex flex-col items-center shadow-[0_0_10px_rgba(0,0,0,0.15)] text-center mb-15' style={{ backgroundOpacity: 0 }}

                    initial={{ opacity: 0, x: 150 }}
                    whileInView={{ opacity: 1, x: 0 }}

                >
                    <img src={TaskCounterIcon} alt="Task Counter" className="h-auto  mt-5 self-start" />
                    <h2 className='text-white text-[18px] '>Vorbereitende Arbeiten</h2>
                    <h2 className='text-[2rem] text-[#f5bf42]'>573</h2>
                    <h2 className='text-white text-[16px] mb-2 '>Termine</h2>
                </motion.div>
            </div>

            <div className='bg-[#c9bca6] rounded-tl-3xl rounded-tr-3xl flex flex-col items-center pb-[50px]'>
                <div className='flex justify-around mt-5 items-center max-[600px]:flex-col '>

                    <div className='flex  max-[600px]:justify-between w-[90%] max-[600px]:mb-50'>
                        <AnimatedText className="text-[11rem]  max-[600px]:text-[14rem] text-[#3e3628] leading-40 " text={"IMMO360"}></AnimatedText>
                        <div className='flex'>
                            <img src={Brown1Icon} alt="Brown 1" className='w-[5vw] max-[600px]:w-[10vw] h-fit self-end' />
                            <img src={Brown2Icon} alt="Brown 2" className='w-[5vw] max-[600px]:w-[10vw] h-fit self-end' />
                        </div>
                    </div>
                    <p className='w-[50%] text-[1rem] max-[600px]:text-[3rem] max-[600px]:w-[90%]'>
                        EcoConstruct bietet mit IMMO360 ein umfassendes Rundum-Sorglos-Paket für Ihre Immobilie. Unser Service umfasst die vollständige Instandhaltung, Pflege, Verwaltung und Modernisierung Ihrer Liegenschaften. Wir kümmern uns um regelmäßige Wartungsarbeiten, Reparaturen, Energiemanagement sowie Mieterbetreuung und Buchhaltung. Mit unserem ganzheitlichen Ansatz stellen wir sicher, dass Ihre Immobilien effizient verwaltet und gepflegt werden, sodass Sie sich um nichts kümmern müssen.
                    </p>
                </div>
                <img src={ImmoIcon} alt="IMMO360" className='w-[40vw] h-fit rounded-3xl object-cover mt-15' />
            </div>
        </div>
    );
}

export default AboutPage