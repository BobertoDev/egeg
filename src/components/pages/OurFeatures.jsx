import React, { useRef } from 'react'
import AnimatedText from '../ui/AnimatedText';
import ScrollingCards from '../ui/ScrollingCards';
import EffizienzIcon from '../../assets/images/Effizienz.png';
import UmweltfreundlichIcon from '../../assets/images/Umweltfreundlich.png';
import Wirtschaftlich from '../../assets/images/Wirtschaftlich.png';
import SolarPanelsIcon from '../../assets/images/solarPanels.png'

const cards = [
  {
    title: 'Effizienz',
    description: "Unsere innovativen Solarpanels und Wärmepumpen nutzen die Kraft der Sonne und die kostenlose Umgebungswärme. \
                        Reduzieren Sie Ihre Energiekosten um bis zu 80 % und profitieren Sie von emissionsfreier Energie.\
                        Die ideale Lösung für eine nachhaltige und kosteneffiziente Energieversorgung.",
    color: "#e9e0d0",
    icon: EffizienzIcon

  },
  {
    title: 'Umweltfreundlich',
    description: "100 % erneuerbare Energie – senken Sie Ihren CO₂-Fußabdruck mit unseren Lösungen. \
                        Unsere Produkte schützen die Umwelt und tragen aktiv zum Klimaschutz bei.\
                        Genießen Sie emissionsfreie Wärme und Strom aus nachhaltigen Quellen.",
    color: "#d9cdb7",
    icon: UmweltfreundlichIcon

  },

  {
    title: 'Wirtschaftlich',
    description: "Attraktive Förderungen machen den Einstieg in erneuerbare Energien erschwinglich. \
                  Steigern Sie den Wert Ihrer Immobilie mit zukunftssicheren Energielösungen.",
    color: "#c4b497",
    icon: Wirtschaftlich

  }
];


function OurFeatures() {

  const scrollingCardRef = useRef(null);

  return (
    <div className='bg-[#c9bca6]'>


      <div className='h-[300vh] relative'>
        <div
          ref={scrollingCardRef}
          className='h-[100vh] w-full  absolute mt-100'
        ></div>
        <div className='sticky top-10'>
          <AnimatedText initial_y={15} stagger={0.015} delay={0} text={"Revolutionäre Lösungen "} className="text-[7rem] sm:text-[4rem] ml-5" ></AnimatedText>
          <AnimatedText initial_y={15} stagger={0.015} delay={0} text={"für eine nachhaltige Zukunft!"} className="text-[7rem] sm:text-[4rem] ml-5" ></AnimatedText>
          <ScrollingCards scrollTargetRef={scrollingCardRef} cards={cards}></ScrollingCards>
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <h1 className='text-[10rem] sm:text-[5rem]'>Wärmepumpen und Solarenergie</h1>
        <p className='text-[4rem] sm:text-[1.5rem] mb-15 '>Effizient & nachhaltig</p>
        
        <div className='flex sm:flex-row flex-col justify-between w-[95%] '>
          <div className='flex flex-col  bg-[#d9cdb7] p-[5vw] sm:p-[1vw] rounded-4x w-[90vw] sm:w-[30vw] rounded-3xl mb-20'>
            <p className='text-[5rem] sm:text-[1.9rem] rounded-full bg-[#1f3b32] w-[13vw] h-[13vw] sm:w-[5vw] sm:h-[5vw] flex items-center justify-center text-[#e2dbc9] mb-5'>60%</p>
            <div className=''>
              <h2 className='text-[6rem] sm:text-[2.5rem] text-[#1f3b32]'>Energieeinsparung</h2>
              <p className='text-[3rem] sm:text-[1vw] text-[#1f3b32]'>Maximale Reduzierung Ihrer Stromkosten durch hocheffiziente Solartechnologie.</p>
            </div>
          </div>
          
          <div className='flex flex-col  bg-[#d9cdb7] p-[5vw] sm:p-[1vw] rounded-4x w-[90vw] sm:w-[30vw] rounded-3xl mb-20'>
            <p className='text-[5rem] sm:text-[1.9rem] rounded-full bg-[#1f3b32] w-[13vw] h-[13vw] sm:w-[5vw] sm:h-[5vw] flex items-center justify-center text-[#e2dbc9] mb-5'>90%</p>
            <div className=''>
              <h2 className='text-[6rem] sm:text-[2.5rem] text-[#1f3b32]'>Eigenverbrauch</h2>
              <p className='text-[3rem] sm:text-[1vw] text-[#1f3b32]'>Nutzen Sie Ihren selbst erzeugten Solarstrom direkt und reduzieren Sie Ihre Abhängigkeit vom Netz.              </p>
            </div>
          </div>

          <div className='flex flex-col  bg-[#d9cdb7] p-[5vw] sm:p-[1vw] rounded-4x w-[90vw] sm:w-[30vw] rounded-3xl mb-20'>
            <p className='text-[5rem] sm:text-[1.9rem] rounded-full bg-[#1f3b32] w-[13vw] h-[13vw] sm:w-[5vw] sm:h-[5vw] flex items-center justify-center text-[#e2dbc9] mb-5'>100%</p>
            <div className=''>
              <h2 className='text-[6rem] sm:text-[2.5rem] text-[#1f3b32]'>Beste Investitionen</h2>
              <p className='text-[3rem] sm:text-[1vw] text-[#1f3b32]'>Mehr als 90 % Leistung auch nach 25 Jahren – eine langfristige Investition in nachhaltige Energie</p>
            </div>
          </div>
        </div>
        <img src={SolarPanelsIcon} alt='Solar Panel' className='w-[90vw] sm:w-[50vw]'></img>
      </div>
    </div>
  )
}

export default OurFeatures