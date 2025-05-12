import React, { useEffect, useRef, useState } from "react";
import InnovationIcon from "../../assets/images/InovativeIcon.png"
import KundeIcon from "../../assets/images/ErskassigerKundIcon.png"
import NachhalitgIcon from "../../assets/images/NachhaltigeLosungenIcon.png"
import ForderungenIcon from "../../assets/images/AttraktiveIcon.png"
import ZufriedeneKundenIcon from "../../assets/images/Zufridene KundenIcon.png"
import { motion } from "framer-motion";

const cards = [
    {
        id: 1,
        icon: InnovationIcon,
        heading: "Innovative Technologien",
        description: "Wir setzen auf modernste Technologien, um höchste Effizienz und Nachhaltigkeit für Ihre Energiebedürfnisse zu bieten."
    },
    {
        id: 2,
        icon: KundeIcon,
        heading: "Erstklassiger Kundenservice",
        description: "Unser engagiertes Team bietet persönliche Beratung und Unterstützung, um die beste Lösung für Ihr Zuhause zu finden."
    },
    {
        id: 3,
        icon: NachhalitgIcon,
        heading: "Nachhaltige Lösungen",
        description: "Unsere Produkte helfen Ihnen, den CO₂-Fußabdruck zu reduzieren und umweltfreundlich zu heizen, ohne Kompromisse einzugehen."
    },
    {
        id: 4,
        icon: ForderungenIcon,
        heading: "Attraktive Förderungen",
        description: "Profitieren Sie von staatlichen Zuschüssen und Einspeisevergütungen, die Ihre Investitionskosten erheblich senken können."
    },
    {
        id: 5,
        icon: ZufriedeneKundenIcon,
        heading: "Zufriedene Kunden",
        description: "Tausende zufriedene Kunden vertrauen auf unsere Lösungen. Unsere Ergebnisse und positive Rückmeldungen sprechen für sich."
    },
]

const rArrowVariant = {
    hover: {x: 10}
}

const lArrowVariant = {
    hover: {x: -10}
}

export default function InfiniteScroller() {
    const [xOffset, setXOffset] = useState(0);
    const [scrollerWidth, setScrollerWidth] = useState(0);
    const [scrollerWidthOuter, setScrollerWidthOuter] = useState(0);
    const scrollerRef = useRef(null);
    const scrollerRefOuter = useRef(null);
    const [transitionEnabled, setTransitionEnabled] = useState(true);

    const onRightClick = () => {
        const singleItemWidth = scrollerWidth / (cards.length * 2);
        setXOffset((prev) => {
            const next = prev - singleItemWidth;
            console.log(next);
            if (Math.abs(next) >= ((scrollerWidth/2)-scrollerWidthOuter)) {
                setTransitionEnabled(false);
                

                const resetX = (scrollerWidth/2)+xOffset;
                setXOffset(resetX);


                setTimeout(() => {
                    setTransitionEnabled(true);
                    setXOffset(resetX - singleItemWidth);
                }, 20); 
                return resetX;
            }

            setTransitionEnabled(true);
            return next;
        });
    };

    const onLeftClick = () => {
        const singleItemWidth = scrollerWidth / (cards.length * 2);
        setXOffset((prev) => {
            const next = prev + singleItemWidth;
            if (next > singleItemWidth * cards.length) {
                setTransitionEnabled(false);
                const resetX = 0;
                
                
                
                setXOffset(resetX);
                
                setTimeout(() => {
                    setTransitionEnabled(true);
                    setXOffset(resetX + singleItemWidth);
                }, 20);
                return resetX;
            }

            setTransitionEnabled(true);
            return next;
        });
    };


    useEffect(() => {
        const updateScollerSize = () => {
            if (scrollerRef.current) {
                console.log(scrollerRef.current.offsetWidth);
                setScrollerWidth(scrollerRef.current.offsetWidth);
            }
            if(scrollerRefOuter.current)
            {
                setScrollerWidthOuter(scrollerRefOuter.current.offsetWidth)
            }
        }

        updateScollerSize();
        window.addEventListener('resize', updateScollerSize);

        return () => {
            window.removeEventListener('resize', updateScollerSize);
        }
    }, [])

    return (
        <div className="">
            <div ref={scrollerRefOuter} className="w-[100%] h-[50vh] sm:h-[25vw] flex overflow-x-hidden" >
                <div ref={scrollerRef} className="flex " style={{
                    transform: `translateX(${xOffset - (scrollerWidth / (cards.length * 2)) * 5}px)`,
                    transition: transitionEnabled ? "transform 0.25s ease-in-out" : "none"
                }}>
                    {
                        [...cards, ...cards].map((card, index) => {
                            return (
                                <div key={index} className="flex flex-col mr-10 bg-[#e2dbc9] justify-between p-5 rounded-3xl w-[70vw] sm:w-[18vw] flex-shrink-0 text-[#322d24]">

                                    <p className=" text-[4rem] sm:text-[0.75rem]">{`00${card.id}`}</p>
                                    <img src={card.icon} className="w-[10vw] sm:w-[2.5vw]"></img>
                                    <div className="flex flex-col ">
                                        <h2 className="text-[7rem] sm:text-[2rem]">{card.heading}</h2>
                                        <p className="text-[3rem] sm:text-[0.9rem]">{card.description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="flex w-[60vw] sm:w-[10.5vw] justify-between mt-10 z-1">
                <motion.div onClick={onLeftClick} whileHover="hover" className=" w-[15vw] sm:w-[3.5vw] cursor-pointer rounded-[10px] pl-2 sm:pt-2 sm:pb-2  bg-[#409133] hover:bg-[#17ad00] flex justify-center sm:justify-start z-1">
                    <motion.img  variants={lArrowVariant} className=" w-[10vw] sm:w-[1.5vw] " src="https://cdn.prod.website-files.com/6733a9fa15c9b31fb9dd058e/673a42776117c3cdcc4acdc7_arrow%20left.svg" alt="arrow previous"/>
                </motion.div>
                <motion.div onClick={onRightClick} whileHover="hover" className=" w-[30vw] sm:w-[5vw] cursor-pointer rounded-[10px]  sm:pt-2 sm:pb-2 pr-2 bg-[#54bf44] hover:bg-[#17ad00] flex justify-end z-1">
                    <motion.img  variants={rArrowVariant} className=" w-[10vw] sm:w-[1.5vw] " src="https://cdn.prod.website-files.com/6733a9fa15c9b31fb9dd058e/673a43379820f5ce5a843d98_arrow%20right.svg" alt="arrow previous"/>
                </motion.div>
            </div>
        </div>
    );
}
