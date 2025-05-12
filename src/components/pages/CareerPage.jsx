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

function CareerPage() {

  const scrollRef = useRef(null);

  return (
    <div className='bg-[#c9bca6] '>
      <div className='max-w-[98vw] m-auto relative' >
        <div className=' text-[#322d24]' >
          <AnimatedText className="text-[8rem] sm:text-[4.5rem] font-bold" text={"Werde Teil von EcoConstruct"} />
          <AnimatedText className="text-[3.5rem] sm:text-[1.1rem] font-bold" text={"Deine Zukunft in der nachhaltigen Bauwirtschaft!"} />
        </div>


        <div
          ref={scrollRef}
          className='h-[100vh] w-full absolute mt-0 border-1'
        ></div>


        <div className='h-[300vh] pt-10' >
          <div className='h-[100vh] sticky top-50'>

            <ScrollingCards scrollTargetRef={scrollRef} cards={cards} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default CareerPage   