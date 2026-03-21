import { motion } from 'framer-motion'
import React, { ReactElement } from 'react'

interface Props {
    
}

function BackgroundCircles({}: Props){
    return (
        <motion.div
            initial={{
            opacity:0,
            }}
            animate={{
                scale: [1, 2, 2, 3, 1],
                opacity: [0.1, 0.2, 0.4, 0.0, 0.1, 1.0],
                borderRadius:["20%","20%","50%","80%","20%"],
            }}
            transition={{
             duration: 2.5,
            }}
            className='relative flex justify-center items-center'>
            <div className='border #3333331 rounded-full h-[200px] w-[200px] animate-ping mt-52 absolute '/>
            <div className='border border-[#3333331] rounded-full h-[200px] w-[200px] animate-ping mt-52 absolute ' />
            <div className='border border-[#3333331] rounded-full h-[200px] w-[200px] animate-ping mt-52 absolute ' />
            <div className='border border-[#5317ba] rounded-full h-[650px] w-[650px] animate-pulse mt-52 absolute ' />
             <div className='border border-[#333333] rounded-full h-[100px] w-[100px]   mt-52 absolute ' />
        </motion.div>
    )
}

export default BackgroundCircles
