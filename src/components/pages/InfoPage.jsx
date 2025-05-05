import React from 'react'
import SolarPanelImage from "../../assets/images/agaga.png"
import MaxEnergyIcon from "../../assets/images/maximaleEnergIcon.png"
import StaatlicheIcon from "../../assets/images/StaatlicheIcon.png"
import BestSolutionIcon from "../../assets/images/DieBesteLosungIcon.png"
import FutureIcon from "../../assets/images/zukunftssIcon.png"
import AnimatedText from '../ui/AnimatedText';

function InfoPage() {
    return (
        <div className='bg-[#263228] rounded-tl-3xl rounded-tr-3xl flex flex-col items-center '>
            <div className='flex justify-center w-[95vw]'>
                <div className='flex justify-between w-[100%]'>
                    <div className='flex flex-col text-white w-[95%] items-center'>
                        <h1 className='text-[7rem] sm:text-[3rem] w-[90%] sm:w-[40%] '>Effizienz, die Sie brauchen.</h1>
                        <div className='sm:grid grid-cols-2 gap-8  '>
                            <div className='flex flex-col w-[80vw] sm:w-[25vw] mt-20'>
                                <img className='w-[5vw] sm:w-[2vw]' src={MaxEnergyIcon}></img>
                                <AnimatedText className="uppercase text-[4rem] sm:text-[1.5rem] mb-5" text={"MAXIMALE ENERGIEEFFIZIENZ"} delay={0} stagger={0.01} initial_y={5}/>
                                <p className='text-[2.5rem] sm:text-[1rem] w-[65%]'>Unsere Wärmepumpen reduzieren den Energieverbrauch um bis zu 80 %, indem sie Umweltwärme optimal nutzen.</p>
                            </div>
                            <div className='flex flex-col w-[80vw] sm:w-[25vw] mt-20'>
                                <img className='w-[5vw] sm:w-[2vw]' src={StaatlicheIcon}></img>
                                <AnimatedText className="uppercase text-[4rem] sm:text-[1.5rem] mb-5" text={"Staatliche Förderungen"} delay={0} stagger={0.01} initial_y={5}/>
                                <p className='text-[2.5rem] sm:text-[1rem] w-[65%]'>Profitieren Sie von attraktiven Zuschüssen und senken Sie Ihre Investitionskosten erheblich.</p>
                            </div>
                            <div className='flex flex-col w-[80vw] sm:w-[25vw] mt-20'>
                                <img className='w-[5vw] sm:w-[2vw]' src={BestSolutionIcon}></img>
                                <AnimatedText className="uppercase text-[4rem] sm:text-[1.5rem] mb-5" text={"Die beste Lösung am Markt"} delay={0} stagger={0.01} initial_y={5}/>
                                <p className='text-[2.5rem] sm:text-[1rem] w-[65%]'>Genießen Sie umweltfreundliches Heizen und senken Sie gleichzeitig Ihre Energiekosten.</p>
                            </div>
                            <div className='flex flex-col w-[80vw] sm:w-[25vw] mt-20'>
                                <img className='w-[5vw] sm:w-[2vw]' src={FutureIcon}></img>
                                <AnimatedText className="uppercase text-[4rem] sm:text-[1.5rem] mb-5" text={"Zukunftssichere Technologie"} delay={0} stagger={0.01} initial_y={5}/>
                                <p className='text-[2.5rem] sm:text-[1rem] w-[65%]'>Unsere Lösungen steigern den Wert Ihrer Immobilie und sorgen für jahrzehntelange Einsparungen bei den Heizkosten.</p>
                            </div>
                        </div>


                    </div>
                    <img src={SolarPanelImage} alt='Solar Panel' className='hidden sm:flex w-[40%]'></img>
                
                </div>
                
            </div>
            <div className='w-[95vw] bg-[#ffffff10] flex flex-col sm:flex-row justify-between p-10 rounded-4xl text-white mt-15'>
                <h2 className=' text-[5rem] sm:text-[2rem] sm:w-[40%]'>Bereit für Ihre Energiewende? Kontaktieren Sie uns!</h2>
                <div className='flex'>
                    <button className='bg-white text-black h-fit pt-2.5 pb-2.5 pl-10 pr-10 rounded-[5vw] self-end sm:text-[1rem] text-[4rem] sm:mt-0 mt-30'>Kontakt</button>
                </div>
            </div>
        </div>
    )
}

export default InfoPage