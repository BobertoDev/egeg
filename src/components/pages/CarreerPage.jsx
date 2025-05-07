import React, { useRef } from 'react'
import ScrollingCards from '../ui/ScrollingCards'

import EffizienzIcon from '../../assets/images/Effizienz.png';
import UmweltfreundlichIcon from '../../assets/images/Umweltfreundlich.png';
import Wirtschaftlich from '../../assets/images/Wirtschaftlich.png';
import SolarPanelsIcon from '../../assets/images/solarPanels.png'

const cards = [
    {
        title: 'SHK-Meister',
        description: "Als SHK-Meister leiten Sie Projekte im Bereich Sanitär, Heizung und Klimatechnik. Sie übernehmen die Planung, Organisation und Ausführung.",
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



function CarreerPage() {
    const CareerScrollRef = useRef(null);
    return (
        <div ref={CareerScrollRef} className='h-[100vh] mt-500 mb-500 border-1'>

            <ScrollingCards scrollTargetRef={CareerScrollRef} cards={cards} />
        </div>
    )
}

export default CarreerPage