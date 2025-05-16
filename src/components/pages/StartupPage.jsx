import React from 'react'
import StartupLogo from '../../assets/images/StartupLogo.png'
import AnimatedText from '../ui/AnimatedText'
import SolarPanelImage from "../../assets/images/agaga.png"
import InfiniteScroller from '../ui/InfiniteScroller'
import Footer from '../ui/Footer'
import LogoWithText from '../../assets/images/logoWithText.png'
import { delay, hover, motion, useScroll, useTransform } from 'framer-motion';

const cards = [
    {
        id: 1,
        icon: "https://cdn.prod.website-files.com/6733a9fa15c9b31fb9dd058e/6769537c94360f4b4ca884fb_gov-icon.webp",
        heading: "Innovative Partnerschaft",
        description: "Starten Sie gemeinsam mit einem starken Partner. Wir bieten Ihnen die Unterstützung, die Sie für den Erfolg brauchen."
    },
    {
        id: 2,
        icon: "https://cdn.prod.website-files.com/6733a9fa15c9b31fb9dd058e/676953f873a0aa4faf4e0816_dev-icon.webp",
        heading: "Starke Netzwerke",
        description: "Profitieren Sie von wertvollen Kontakten. Unser Netzwerk unterstützt Ihr Wachstum."
    },
    // {
    //     id: 3,
    //     icon: NachhalitgIcon,
    //     heading: "Nachhaltige Lösungen",
    //     description: "Unsere Produkte helfen Ihnen, den CO₂-Fußabdruck zu reduzieren und umweltfreundlich zu heizen, ohne Kompromisse einzugehen."
    // },
    // {
    //     id: 4,
    //     icon: ForderungenIcon,
    //     heading: "Attraktive Förderungen",
    //     description: "Profitieren Sie von staatlichen Zuschüssen und Einspeisevergütungen, die Ihre Investitionskosten erheblich senken können."
    // },
    // {
    //     id: 5,
    //     icon: ZufriedeneKundenIcon,
    //     heading: "Zufriedene Kunden",
    //     description: "Tausende zufriedene Kunden vertrauen auf unsere Lösungen. Unsere Ergebnisse und positive Rückmeldungen sprechen für sich."
    // },
]


const featuresCards = [
    {
        percentage: "150%",
        heading: "Kapitalwachstum",
        description: "Sichern Sie sich Finanzierung und skalieren Sie Ihr Geschäft schneller.",
    },
    {
        percentage: "30%",
        heading: "Einsparungen",
        description: "Reduzieren Sie Ausgaben ohne Qualitätsverlust.",
    },
    {
        percentage: "100%",
        heading: "Conversion",
        description: "Gewinnen Sie mehr Kunden mit effektivem Marketing.",
    },
]


function StartupPage() {
    return (
        <div className='bg-[#c9bca6] overflow-hidden'>

            <motion.img
                src={LogoWithText}
                alt="Logo"
                className='w-[15vw] sm:w-[7.5vw] h-fit sm:top-[3vw] absolute top-[10vw] right-15'
            />
            <div className='flex flex-col items-center text-[#322d24] sm:pt-25 pt-100 '>
                <div className='flex flex-col items-center'>
                    <AnimatedText className="text-[8rem] sm:text-[4.5rem] font-bold" text={"StartUP: Ihr Weg zum Erfolg!"} initial_y={40}  />
                    <AnimatedText className="text-[3.5rem] sm:text-[1rem] mt-10" text={"Innovativ & skalierbar!"} />
                </div>

                <div className='w-[95vw] flex items-center mt-15'>
                    <div className='flex sm:flex-row flex-col justify-between w-[100%] '>

                        {
                            featuresCards.map((card, index) => {
                                return (
                                    <motion.div transition={{duration: 0.5, delay: index*0.1}} initial={{y: 100, opacity: 0}} whileInView={{y: 0, opacity: 1}} key={index} className='flex flex-col  bg-[#d9cdb7] p-[5vw] sm:p-[1vw] rounded-4x w-[90vw] sm:w-[30vw] rounded-3xl mb-20'>
                                        <p className='text-[5rem] sm:text-[1.9rem] rounded-full bg-[#1f3b32] w-[13vw] h-[13vw] sm:w-[5vw] sm:h-[5vw] flex items-center justify-center text-[#e2dbc9] mb-5'>{card.percentage}</p>
                                        <div className=''>
                                            <h2 className='text-[6rem] sm:text-[2.5rem] text-[#1f3b32]'>{card.heading}</h2>
                                            <p className='text-[3rem] sm:text-[1vw] text-[#1f3b32]'>{card.description}</p>
                                        </div>
                                    </motion.div>
                                )
                            })
                        }
                    </div>
                </div>

                <motion.img initial={{y: 50}} whileInView={{y: 0}} transition={{duration: 1}} alt='Startup Logo' className='w-[90vw] sm:w-[60vw]' src={StartupLogo} />

                <div className='bg-[#263228] rounded-tl-3xl rounded-tr-3xl flex flex-col items-center  overflow-hidden '>
                    <div className='flex justify-center w-[99vw]'>
                        <div className='flex justify-between w-[100%]'>
                            <div className='flex flex-col text-white w-[95%] items-center'>

                                <AnimatedText className='text-[7rem] sm:text-[3rem] w-[95%] sm:w-[65%] self-start ml-[5vw] sm:ml-[2.5vw] pt-10' text={"Warum bei EcoConstruct GmbH arbeiten?"} />
                                {/* <h1 className='text-[7rem] sm:text-[3rem] w-[90%] sm:w-[40%] self-start ml-[5vw] sm:ml-[2.5vw] '>Warum bei EcoConstruct GmbH arbeiten?</h1> */}
                                <div className='sm:grid grid-cols-2 gap-8  '>
                                    <div className='flex flex-col w-[80vw] sm:w-[25vw] mt-20'>
                                        <img className='w-[5vw] sm:w-[2vw]' src="https://cdn.prod.website-files.com/6733a9fa15c9b31fb9dd058e/673a1508187d0e541515adf3_Polygon%201.svg"></img>
                                        <AnimatedText className="uppercase text-[4rem] sm:text-[1.5rem] mb-5" text={"Nachhaltige Innovationen"} delay={0} stagger={0.01} initial_y={5} />
                                        <p className='text-[2.5rem] sm:text-[1rem] w-[65%]'>Entwickeln Sie umweltfreundliche Lösungen mit unserer Unterstützung. Wir helfen Startups, nachhaltige Technologien zu entwickeln und am Markt zu etablieren.</p>
                                    </div>
                                    <div className='flex flex-col w-[80vw] sm:w-[25vw] mt-20'>
                                        <img className='w-[5vw] sm:w-[2vw]' src="https://cdn.prod.website-files.com/6733a9fa15c9b31fb9dd058e/673a15abb29e9dbe8d9b4041_water%201.svg"></img>
                                        <AnimatedText className="uppercase text-[4rem] sm:text-[1.5rem] mb-5" text={"Starke Finanzierung"} delay={0} stagger={0.01} initial_y={5} />
                                        <p className='text-[2.5rem] sm:text-[1rem] w-[65%]'>Sichern Sie sich Kapital für schnelles Wachstum. Wir bieten Zugang zu Investoren und Förderprogrammen, um Ihre Ideen zu verwirklichen.</p>
                                    </div>
                                    <div className='flex flex-col w-[80vw] sm:w-[25vw] mt-20'>
                                        <img className='w-[5vw] sm:w-[2vw]' src="https://cdn.prod.website-files.com/6733a9fa15c9b31fb9dd058e/673a15b420d7a9f8ed0709f0_cloud%20(2)%201.svg"></img>
                                        <AnimatedText className="uppercase text-[4rem] sm:text-[1.5rem] mb-5" text={"Branchenexpertise"} delay={0} stagger={0.01} initial_y={5} />
                                        <p className='text-[2.5rem] sm:text-[1rem] w-[65%]'>Profitieren Sie von unserem Know-how im Bausektor. Unsere Experten begleiten Sie mit Erfahrung und Netzwerken für Ihren Erfolg.</p>
                                    </div>
                                    <div className='flex flex-col w-[80vw] sm:w-[25vw] mt-20'>
                                        <img className='w-[5vw] sm:w-[2vw]' src="https://cdn.prod.website-files.com/6733a9fa15c9b31fb9dd058e/673a15a2e7df6842870412b3_Group%20126.svg"></img>
                                        <AnimatedText className="uppercase text-[4rem] sm:text-[1.5rem] mb-5" text={"Skalierbare Lösungen"} delay={0} stagger={0.01} initial_y={5} />
                                        <p className='text-[2.5rem] sm:text-[1rem] w-[65%]'>Wachsen Sie mit innovativen Strategien. Wir unterstützen Sie mit Ressourcen und Tools, um Ihr Startup langfristig erfolgreich zu machen.</p>
                                    </div>
                                </div>


                            </div>
                            <img src={SolarPanelImage} alt='Solar Panel' className='hidden sm:flex w-[40%]'></img>

                        </div>

                    </div>
                    <motion.div initial={{y: 50}} whileInView={{y: 0}} transition={{duration: 0.5}} className='w-[95%] bg-[#ffffff10] flex flex-col sm:flex-row justify-between p-10 rounded-4xl text-white mt-15 mb-5'>
                        <h2 className=' text-[5rem] sm:text-[2rem] sm:w-[40%]'>Werden Sie teil unseres Teams!</h2>
                        <div className='flex'>
                            <button className='bg-white text-black h-fit pt-2.5 pb-2.5 pl-10 pr-10 rounded-[5vw] self-end sm:text-[1rem] text-[4rem] sm:mt-0 mt-30'>Kontakt</button>
                        </div>
                    </motion.div>
                </div>



                <div className='flex justify-between text-[8rem] sm:text-[4rem]  pr-[2.5vw] pl-[2.5vw] items-center w-[100vw] sm:flex-row flex-col mt-20'>
                    <h1 className=''>Warum bei uns arbeiten?</h1>
                    <div className='w-[100vw] sm:w-[50vw] '>
                        <InfiniteScroller cards={cards} />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default StartupPage