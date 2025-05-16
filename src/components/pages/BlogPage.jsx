import React, { useEffect, useState } from 'react'
import { getAllPosts } from '../../services/blogServices'
import ReactMarkdown from "react-markdown";
import AnimatedText from '../ui/AnimatedText';
import LogoWithText from '../../assets/images/logoWithText.png'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Footer from '../ui/Footer';
import NavMenu from '../ui/NavMenu';
import './BlogPage.css'
import AboutUsIcon from '../../assets/images/Über uns.png'
import StarIcon from '../../assets/images/Unser Vorteil.png'
import InfoIcon from '../../assets/images/Information.png'
import GearIcon from '../../assets/images/Wie es funktioniert.png'
import CareerIcon from '../../assets/images/Karriere bei uns.png'
import HouseIcon from '../../assets/images/Sanierung.png'
import RocketIcon from '../../assets/images/Startup.png'
import BlogIocn from "../../assets/images/blogIcon.svg";

function timeout(delay) {
    return new Promise(res => setTimeout(res, delay));
}

const navMenuLinks = [
    {
        icon: AboutUsIcon,
        text: "Über uns",
        link: "/#about"
    },
    {
        icon: StarIcon,
        text: "Unsere Vorteile",
        link: "/#features"
    },
    {
        icon: InfoIcon,
        text: "Information",
        link: "/#info"
    },
    {
        icon: GearIcon,
        text: "Wie es funktioniert",
        link: "/#howitworks"
    },
    {
        icon: CareerIcon,
        text: "Karriere",
        link: "/career"
    },
    {
        icon: HouseIcon,
        text: "Sanierung360",
        link: "/career"
    },
    {
        icon: RocketIcon,
        text: "Startup",
        link: "/startup"
    },
      {
        icon: BlogIocn,
        text: "Blog",
        link: "/blog"
      }
]

function BlogPage() {

    const [blogData, setBlogData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        async function fetchBlogData() {
            const blogDataJson = await getAllPosts(currentPage, 9);
            await timeout(100);
            setBlogData(blogDataJson);
            setTotalPages(Math.ceil(parseInt(blogDataJson.amount) / 9));

        }

        fetchBlogData();
    }, [currentPage]);

    return (
        <div>
            {
                Object.keys(blogData).length > 0 ? (
                    <BlogPagePresent blogData={blogData} currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
                ) : (
                    <span class="loader"></span>
                )
            }
        </div>
    )
}


function BlogPagePresent({ blogData, currentPage, setCurrentPage, totalPages }) {
    const navigate = useNavigate();

    const onPostClick = (index) => {
        navigate(`/blog/${index}`);
    }

    return (
        <div className='bg-[#c9bca6]'>
            <div className='fixed bottom-5 right-5 z-500'>
                <NavMenu standardSelected={"Blog"} links={navMenuLinks}></NavMenu>
            </div>
            <div className='w-[95vw]  flex flex-col items-center'>
                <div className='flex justify-between w-[90%] mb-50 mt-20'>
                    <h1 className='text-[8rem] sm:text-[4.5rem] text-[#1f3b32]'> EcoConstruct Blog</h1>
                    <img className='w-[7.5vw]' alt='Logo' src={LogoWithText} />
                </div>
                <motion.div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-32 p-4 justify-around w-[90%]'>
                    {
                        blogData.blogs.map((entry, index) => {
                            return (

                                <motion.div onClick={() => onPostClick(entry.id)} key={index} initial={{ y: 100 }} whileInView={{ y: 0 }} transition={{ duration: 0.25 }} style={{ zIndex: index }} className='group w-[100%] flex flex-col overflow-hidden cursor-pointer hover:text-[#315c4e]'>
                                    <div className='overflow-hidden'>
                                        <motion.img draggable={false} className=' transition-transform duration-300  w-[100%] group-hover:scale-110' alt={entry.title} src="http://localhost:3000/images/placeholder.jpg" />
                                    </div>
                                    <motion.h1 initial={{ x: 20 }} whileInView={{ x: 0 }} className='text-[4rem] sm:text-[2rem] lg:text-[1.5rem]'>{entry.title} | {entry.author}</motion.h1>
                                    <motion.p className='text-[2rem] sm:text-[1rem]'>{entry.summary}</motion.p>
                                </motion.div>
                            )
                        })
                    }
                </motion.div>

                <div className="flex justify-center items-center mt-10 gap-2 flex-wrap">
                    <button className='cursor-pointer' onClick={() => {
                        if (currentPage != 1)
                        {
                            setCurrentPage(prev => prev - 1);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                    }}>
                        {"<<"}
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                setCurrentPage(i + 1);
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className={`px-4 py-2 rounded-lg border  cursor-pointer
        ${currentPage === i + 1 ? 'bg-[#1f3b32] text-white' : 'bg-white text-[#1f3b32] hover:bg-[#e0dcd4]'}`}
                        >
                            {i + 1}
                        </button>
                    ))}

                    <button className='cursor-pointer' onClick={() => {
                        if (currentPage != totalPages)
                        {
                            setCurrentPage(prev => prev + 1);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                    }}>
                        {">>"}
                    </button>
                </div>


            </div>
            <Footer></Footer>
        </div>
    )
}

export default BlogPage