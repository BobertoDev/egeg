import React, { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import GreenHouseIcon from "../../assets/images/dots.svg"
import Ellipse_1 from '../../assets/images/Ellipse_30.webp'
import Ellipse_2 from '../../assets/images/Ellipse_29.webp'
import InfiniteScroller from '../ui/InfiniteScroller'
import InfiniteSlider from '../ui/InfiniteSlider'
import SliderImg1 from "../../assets/images/ImgLine1R.png"
import SliderImg2 from "../../assets/images/ImgLine2R.png"
import SliderImg3 from "../../assets/images/ImgLine3R.png"
import SliderImg4 from "../../assets/images/ImgLine4R.png"

function SlidingText({ text, id }) {
    return (
        <div>
            <motion.div className='flex w-[45vw]' >
                <h2 className='text-[3rem]  sm:text-[2rem] self-end mr-10 opacity-30'>{id}</h2>
                <p className='text-[3rem] sm:text-[2rem] '>
                    {text}
                </p>
            </motion.div>
        </div>
    )
}

function getXOffset(ref, s) {
    const rect = ref.current.getBoundingClientRect();
    const elemCenterX = rect.left + rect.width / 2;
    const viewportCenterX = window.innerWidth / 2;
    s(viewportCenterX - elemCenterX);
}

function HowItWorksPage() {
    const divRef = useRef(null);
    const houseRef = useRef(null);
    const leafRef = useRef(null);

    const [contentWidth, setContentWidth] = useState(0);
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    const [houseOffsetX, setHouseOffsetX] = useState(0);
    const [leafOffsetX, setLeafOffsetX] = useState(0);

    useEffect(() => {
        const updateSize = () => {
            if (divRef.current) {
                setViewportWidth(window.innerWidth);
                setContentWidth(divRef.current.scrollWidth);
            }
            if (houseRef.current)
                getXOffset(houseRef, setHouseOffsetX)
            if (leafRef.current)
                getXOffset(leafRef, setLeafOffsetX)
        };

        updateSize();

        window.addEventListener('resize', updateSize);

        return () => {
            window.removeEventListener('resize', updateSize);
        };
    }, []);

    const { scrollYProgress } = useScroll({
        target: divRef,
        offset: ['start center', 'end start']
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 10,
        mass: 0.5
    });

    const xPos = useTransform(smoothProgress, [0, 1], [0, -contentWidth]);
    const headingAnimation = useTransform(smoothProgress, [0.1, 0.4], [0, -viewportWidth - 50]);

    const houseXAnimation = useTransform(smoothProgress,
        [0.1, 0.2],
        [0, houseOffsetX]);

    const leafColorAnimation = useTransform(smoothProgress,
        [0.2, 0.4, 0.9, 1],
        ["#54bf44", "#ffffff10", "#ffffff10", "#52bf44"]
    )

    const leafXAnimation = useTransform(smoothProgress,
        [0.1, 0.2, 0.4, 0.45],
        [0, houseOffsetX, houseOffsetX, leafOffsetX]);

    const leafScaleAnimation = useTransform(smoothProgress,
        [0.45, 0.5],
        [1, 3]
    );

    const ellipseFirstOpacity = useTransform(smoothProgress,
        [0.5, 0.6, 0.7, 0.8],
        [0, 1, 1, 0]
    )

    const ellipseFirstScale = useTransform(smoothProgress,
        [0.5, 0.6],
        [0, 3]
    )

    const ellipseSecondOpacity = useTransform(smoothProgress,
        [0.6, 0.7, 0.7, 0.8],
        [0, 1, 1, 0]
    )

    const ellipseSecondScale = useTransform(smoothProgress,
        [0.6, 0.7],
        [0, 2]
    )

    const houseOpacity = useTransform(smoothProgress,
        [0.7, 0.8, 0.85, 0.9],
        [1, 0.3, 0.3, 0]
    )

    const figureColor = useTransform(smoothProgress,
        [0.9, 1],
        ["#52b843", "#263228"]
    )

    const figureScale = useTransform(smoothProgress,
        [0, 0.75, 0.9, 1],
        [0, 0, 1, 5.5]
    )

    return (
        <div className='overflow-hidden'>
            {/* Scroll/Sticky Section */}
            <div className='bg-[#263228] h-[600vh] pt-50 relative'>
                <div ref={divRef} className='h-[300vh] w-full  absolute'></div>

                <div className='sticky flex flex-col h-[75vh]  top-[20vh] md:top-[0] md:h-[100vh] overflow-x-hidden justify-around overflow-hidden'>
                    <div className='sm:self-end mr-[27.5vw] flex items-center mt-10'>
                        <motion.h1 style={{ x: headingAnimation }} className='text-white text-[15rem] sm:text-[7rem] font-bold'>
                            Super <br />Plan
                        </motion.h1>

                        <motion.img src={Ellipse_1} style={{ scale: ellipseFirstScale, opacity: ellipseFirstOpacity }} className='absolute left-[50%] -translate-x-1/2 w-[20vw] sm:w-[10vw] lg:w-[8vw] z-5' />
                        <motion.img src={Ellipse_2} style={{ scale: ellipseSecondScale, opacity: ellipseSecondOpacity }} className='absolute left-[50%] -translate-x-1/2 w-[20vw] sm:w-[10vw] lg:w-[8vw] z-5' />

                        <motion.div className='absolute left-[50%] -translate-x-1/2 w-[7vw] sm:w-[3vw] z-5'>
                            <motion.svg className="opacity-100" style={{ scale: figureScale }} width="100%" height="100%" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <motion.path style={{ fill: figureColor }} fillRule="evenodd" clipRule="evenodd"
                                    d="M0.363279 21.7099L0.363279 21.7419L21.3633 21.7419L21.3633 0.741945L21.3313 0.741945C20.7278 12.0466 11.6681 21.1065 0.363279 21.7099Z"
                                />
                                <motion.path style={{ fill: figureColor }} fillRule="evenodd" clipRule="evenodd"
                                    d="M42.3633 21.774V21.7419L21.3633 21.7419L21.3633 42.7419H21.3953C21.9988 31.4373 31.0584 22.3774 42.3633 21.774Z"
                                />
                            </motion.svg>
                        </motion.div>

                        <motion.img ref={houseRef} style={{ x: houseXAnimation, opacity: houseOpacity }} className='w-[15vw] sm:w-[5vw] h-auto' src={GreenHouseIcon} />
                        <motion.div ref={leafRef} style={{ x: leafXAnimation, scale: leafScaleAnimation }} className='w-[15vw] sm:w-[5vw] mr-5 z-1'>
                            <motion.svg width="100%" height="100%" viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <motion.path style={{ fill: leafColorAnimation }}
                                    d="M0 0.999999C0 0.447715 0.447715 0 1 0H42C64.6437 0 83 18.3563 83 41V82C83 82.5523 82.5523 83 82 83H41C18.3563 83 0 64.6437 0 42V0.999999Z"
                                    fill="#54bf44" />
                            </motion.svg>
                        </motion.div>
                    </div>

                    <div className='flex flex-col'>
                        <motion.div style={{ x: xPos }} className='flex w-[250vw] justify-between text-[#def3c6]'>
                            <SlidingText id={1} text={"Lassen Sie sich von unseren Experten kostenlos und unverbindlich beraten – telefonisch, per E-Mail oder vor Ort."} />
                            <SlidingText id={3} text={"Wir unterstützen Sie bei der Beantragung staatlicher Förderungen und zeigen Ihnen, wie Sie Kosten sparen können."} />
                            <SlidingText id={5} text={"Nach der Installation nehmen wir Ihr System in Betrieb und erklären Ihnen die optimale Nutzung für maximale Effizienz."} />
                        </motion.div>
                        <motion.div style={{ x: xPos }} className='flex w-[250vw] justify-between text-[#def3c6] ml-200'>
                            <SlidingText id={2} text={"Wir analysieren Ihre Bedürfnisse und erstellen eine maßgeschneiderte Lösung für Ihr Zuhause oder Unternehmen."} />
                            <SlidingText id={4} text={"Unsere zertifizierten Fachkräfte installieren Ihre Wärmepumpe oder PV-anlage zuverlässig und termingerecht."} />
                            <SlidingText id={6} text={"Auch nach der Installation sind wir für Sie da – mit Wartung, Support und möglichen Erweiterungen Ihres Systems."} />
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className='bg-[#c9bca6] flex flex-col sm:flex-row sm:justify-between relative pb-50 pt-50 max-[500px]:h-[100vh]'>
                <img src='https://cdn.prod.website-files.com/6733a9fa15c9b31fb9dd058e/673a3c5500a0d08adf931c9e_light-circles.avif' className='absolute top-25 w-[40vw]'></img>
                <h1 className=" text-[8rem] sm:text-[4rem] text-[#322d24]  ml-10">Weshalb wir die beste sind</h1>
                <div className='flex flex-col sm:w-[55vw] pr-5 pl-5'>
                    <InfiniteScroller />
                </div>


            </div>
            <div className='bg-[#c9bca6] flex justify-center'>
                <div className="w-[100vw]  flex justify-center items-center">
                    <div className='w-[100%]'>
                        <InfiniteSlider items={[SliderImg1, SliderImg2, SliderImg3, SliderImg4]}></InfiniteSlider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorksPage
