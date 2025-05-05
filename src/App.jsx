import { motion, useScroll, useTransform } from "framer-motion";
import AboutPage from "./components/pages/AboutPage";
import HeroPage from "./components/pages/HeroPage";
import OurFeatures from "./components/pages/OurFeatures";
import Test from "./components/pages/Test";
import InfoPage from "./components/pages/InfoPage";
import HowItWorksPage from "./components/pages/HowItWorksPage";
import InfiniteScroller from "./components/ui/InfiniteScroller";
import NavMenu from "./components/ui/NavMenu";

import AboutUsIcon from './assets/images/Über uns.png' 
import StarIcon from './assets/images/Unser Vorteil.png'
import InfoIcon from './assets/images/Information.png'
import GearIcon from './assets/images/Wie es funktioniert.png'
import CareerIcon from './assets/images/Karriere bei uns.png'
import HouseIcon from './assets/images/Sanierung.png'
import RocketIcon from './assets/images/Startup.png'


const navMenuLinks = [
  {
    icon: AboutUsIcon,
    text: "Über uns",
    link: "#"
  },
  {
    icon: StarIcon,
    text: "Unsere Vorteile",
    link: "#"
  },
  {
    icon: InfoIcon,
    text: "Information",
    link: "#"
  },
  {
    icon: GearIcon,
    text: "Wie es funktioniert",
    link: "#"
  },
  {
    icon: CareerIcon,
    text: "Karriere",
    link: "#"
  },
  {
    icon: HouseIcon,
    text: "Sanierung360",
    link: "#"
  },
  {
    icon: RocketIcon,
    text: "Startup",
    link: "#"
  }
]

export default function App() {
  const { scrollYProgress } = useScroll();


  const heroOpacity = useTransform(scrollYProgress, [0, 0.025], [1, 0]);
  const aboutOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const aboutY = useTransform(scrollYProgress, [0, 0.1], [0, 0]);

  return (
    <div>
      <div className="relative" >

        {/* <div className="bg-[#263228] h-[100vh]">
          <motion.div
            id={"hero"}
            style={{ opacity: heroOpacity }}
            className="absolute top-0 left-0 w-full h-screen z-1 "

          >
            <HeroPage />
          </motion.div>

        </div>
        <motion.div

          style={{  y: aboutY }}
          className=" z-2"
        >
          <AboutPage />

        </motion.div>
        <div className="bg-[#c9bca6]">
          <OurFeatures />
          <InfoPage />
        </div>

        <HowItWorksPage /> */}


        <NavMenu links={navMenuLinks}/>

      </div>



    </div>

  );
}
