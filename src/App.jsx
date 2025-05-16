import { motion, useScroll, useTransform } from "framer-motion";
import AboutPage from "./components/pages/AboutPage";
import HeroPage from "./components/pages/HeroPage";
import OurFeatures from "./components/pages/OurFeatures";
import Test from "./components/pages/Test";
import InfoPage from "./components/pages/InfoPage";
import HowItWorksPage from "./components/pages/HowItWorksPage";
import InfiniteScroller from "./components/ui/InfiniteScroller";
import NavMenu from "./components/ui/NavMenu";
import Footer from "./components/ui/Footer";
import AboutUsIcon from './assets/images/Über uns.png' 
import StarIcon from './assets/images/Unser Vorteil.png'
import InfoIcon from './assets/images/Information.png'
import GearIcon from './assets/images/Wie es funktioniert.png'
import CareerIcon from './assets/images/Karriere bei uns.png'
import HouseIcon from './assets/images/Sanierung.png'
import RocketIcon from './assets/images/Startup.png'
import CareerPage from "./components/pages/CareerPage";
import BlogPage from "./components/pages/BlogPage";
import BlogPostPage from "./components/pages/BlogPostPage";
import BlogIocn from "./assets/images/blogIcon.svg";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";

import StartupPage from "./components/pages/StartupPage";

import { useRef } from "react";

const navMenuLinks = [
  {
    icon: AboutUsIcon,
    text: "Über uns",
    link: "#about"
  },
  {
    icon: StarIcon,
    text: "Unsere Vorteile",
    link: "#features"
  },
  {
    icon: InfoIcon,
    text: "Information",
    link: "#info"
  },
  {
    icon: GearIcon,
    text: "Wie es funktioniert",
    link: "#howitworks"
  },
  {
    icon: CareerIcon,
    text: "Karriere",
    link: "career"
  },
  {
    icon: HouseIcon,
    text: "Sanierung360",
    link: "career"
  },
  {
    icon: RocketIcon,
    text: "Startup",
    link: "startup"
  },
  {
    icon: BlogIocn,
    text: "Blog",
    link: "/blog"
  }
]


const MainPage = () => {

  const { scrollYProgress } = useScroll();
  const CareerScrollRef = useRef(null);

  const heroOpacity = useTransform(scrollYProgress, [0, 0.025], [1, 0]);
  const aboutOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const aboutY = useTransform(scrollYProgress, [0, 0.1], [0, 0]);


  return (
    <div>

      <div className="relative" >

        <div className="bg-[#263228] h-[100vh]">
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
        <div className="bg-[#c9bca6]" id="features">
          <OurFeatures />
          <InfoPage />
        </div>

        <HowItWorksPage />


        <div className="fixed bottom-10 right-10 z-2">
          <NavMenu links={navMenuLinks} />
        </div>

        
      </div>

      <Footer color="#c9bca6"/>
    </div>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />
  },
  {
    path: "/startup",
    element: <StartupPage />
  },
  {
    path: "/career",
    element: <CareerPage />
  },
  {
    path: "/blog",
    element: <BlogPage/>
  },
    {
    path: "/blog/:id",
    element: <BlogPostPage/>
  }

]);

export default function App() {

  return (
    <div>

      <RouterProvider router={router} />  


    </div>

  );
}
