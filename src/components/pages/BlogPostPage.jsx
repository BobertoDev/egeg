import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getPostById } from '../../services/blogServices'
import ReactMarkdown from "react-markdown";
import NavMenu from '../ui/NavMenu';
import AboutUsIcon from '../../assets/images/Über uns.png'
import StarIcon from '../../assets/images/Unser Vorteil.png'
import InfoIcon from '../../assets/images/Information.png'
import GearIcon from '../../assets/images/Wie es funktioniert.png'
import CareerIcon from '../../assets/images/Karriere bei uns.png'
import HouseIcon from '../../assets/images/Sanierung.png'
import RocketIcon from '../../assets/images/Startup.png'
import LogoWithText from '../../assets/images/logoWithText.png'
import Footer from '../ui/Footer';
import BlogIocn from "../../assets/images/blogIcon.svg";
import './BlogPostPage.css';

function BlogPostPage() {

    const { id } = useParams();
    const [blogPostData, setBlogPostData] = useState({});

    useEffect(() => {
        async function fetchBlogPost(blogId) {
            const blogPostJson = await getPostById(blogId);
            setBlogPostData(blogPostJson);
        }

        fetchBlogPost(id)
    }, [])

    return (
        <div>
            {
                Object.keys(blogPostData).length > 0 ? (<BlogPostPagePresent blogPostData={blogPostData} />) : <div>Loading Data</div>
            }
        </div>
    )
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

function BlogPostPagePresent({ blogPostData }) {
    return (
        <div className='bg-[#c9bca6] w-[100vw] pt-30'>
            <div className='bg-[#f1e3ca] flex flex-col items-center  m-auto m-w-[100%]  rounded-[5vw] w-[97vw] sm:w-[90vw] mb-30 '>
                <div className='flex justify-around w-[90%] mb-10 pb-10 mt-20 border-b-2'>
                    <h1 className='text-[6rem] sm:text-[4.5rem] text-[#1f3b32]'>EcoConstruct Blog</h1>
                    <img className='w-[7.5vw]' alt='Logo' src={LogoWithText} />
                </div>

                <div className='flex flex-col'>
                    <h1 className='self-center  text-[#1f3b32] text-[4rem] sm:text-[4.5rem]'>{blogPostData.title}</h1>
                    <div className='flex justify-around mb-20 mt-10 '>
                        <p className='text-[1.25rem]'>Erstellt am <span className='text-[#336252]'>{new Date(blogPostData.createdAt).toLocaleString()}</span></p>
                        <p className='text-[1.25rem]'>Von: <span className='text-[#336252]'>{blogPostData.author}</span></p>
                        <p className='text-[1.25rem]'>Lesezeit: <span className='text-[#336252]'>{blogPostData.read_time} Min.</span> </p>
                    </div>
                </div>
            </div>

            <div className='w-[97%] sm:w-[90%] m-auto m-w-[90%] flex flex-col '>
                <div className='fixed bottom-5 right-5 z-1'>
                    <NavMenu links={navMenuLinks} />
                </div>

                <ReactMarkdown>
                    {
                        blogPostData.content_md
                    }
                </ReactMarkdown>

                <div className='bg-[#00000020] p-10 pt-15 pb-15 flex justify-between rounded-[3vw] mt-30'>
                    <buton className="flex items-center cursor-pointer text-[3rem] sm:text-[2rem] bg-[#ffffff30] transition-colors duration-200 hover:bg-[#ffffff] p-5 pl-15 pr-15 rounded-[2vw]">
                        {"Vorheriger Artikel"}
                    </buton>

                    <buton className="flex items-center cursor-pointer text-[3rem] sm:text-[2rem] bg-[#ffffff30] transition-colors duration-200 hover:bg-[#ffffff] p-5 pl-15 pr-15 rounded-[2vw]">
                        {"Nächster Artikel"}
                    </buton>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default BlogPostPage