import React from 'react'
import { delay, hover, motion } from 'framer-motion';
const containerParentVariants = {

    initial: {},
    hover: {},

}


const containerVariants = {
    initial: {
        y: 0
    },


    hover: {

        y: [0, -50, 50, 0],
        transition: {
            duration: 0.7,
            times: [0, 0.35, 0.35, 0.7]
        }
    }

}

function AnimatedIcon({ src, alt, className }) {
    return (
        <motion.div className=' cursor-pointer w-fit h-fit overflow-hidden' variants={containerParentVariants} initial="initial" whileHover="hover" >
            <motion.img
                src={src}
                alt={alt}
                className={` ${className}`}
                variants={containerVariants}
            />
        </motion.div>
    )
}

export default AnimatedIcon