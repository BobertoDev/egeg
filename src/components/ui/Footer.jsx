import React from 'react'
import FoooterBg from '../../assets/images/FooterImgBg.png'
import Logo from '../../assets/images/nurLogo.png'
import AnimatedText from './AnimatedText'

function Footer({color}) {
  return (
    <div style={{backgroundColor: `${color}`, borderColor: `${color}`}} className=' pt-50 p-5'>
        <div className='relative bg-[#263228] rounded-4xl flex flex-col items-center h-fit  '>
            <a className='absolute left-[10vw] top-[10vw] text-[2rem] text-black bg-white rounded-[5vw] p-2 pr-10 pl-10'>Kontakt</a>
            <img className="w-[95vw] h-[50vh] md:h-[80vh] object-cover rounded-[3vw] mt-20" src={FoooterBg}></img>
            <img src="https://cdn.prod.website-files.com/6733a9fa15c9b31fb9dd058e/673a55d098fc4326f5141ce0_circles-footer-img.png" className='absolute right-5 bottom-5 w-[30%] h-fit opacity-50 z-0'/>
        
            <div className='text-white self-start ml-[2.5vw] mt-[5vw] flex flex-col justify-between sm:flex-row sm:justify-around w-[90vw]'>
                <div className=' text-[2.5rem] sm:text-[1.5rem] flex flex-col '>
                    <img className='w-[10vw]' src={Logo}/>
                    <h2>Info@eco-construct.de</h2>
                    <h2>+4920163268540</h2>
                </div>

                <div className='flex flex-col text-[2.5rem]  sm:text-[1.5rem] mt-15 z-1'>
                    <a href='#'>Unser Vorteil</a>
                    <a href='#'>Unsere Produktel</a>
                    <a href='#'>Information</a>
                    <a href='#'>Kundenplan</a>
                    <a href='#'>Karriere bei uns</a>
                </div>

                
                
                
            </div>
            <AnimatedText  className="text-[#48d533] w-[60vw] text-[6.5rem] md:text-[3.75rem] mt-20" text={"Heute investieren, jahrzehntelang profitieren!"}></AnimatedText>
        </div>

        
    </div>
  )
}

export default Footer   