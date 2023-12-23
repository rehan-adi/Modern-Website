import { motion } from 'framer-motion'
import React from 'react'

function MAinsection() {
    return (
        <div className='text-black flex flex-col justify-center items-center h-[195vh] w-auto'>
            <motion.h1
            initial={{opacity: 0, y : 30}}
            animate={{opacity: 1, y : 0}}
            transition={{duration: 0.80}}
             className=' bokachoda text-[140px] mt-3 font-semibold'>CIRCLE</motion.h1>
                <motion.h1
                initial={{opacity: 0, y : 30}}
                animate={{opacity: 1, y : 0}}
                transition={{duration: 0.80, delay: 0.30}}
                 className=' bokachoda text-[140px] pr-36 font-semibold'>DIGITAL</motion.h1>
                <motion.h1 
                 initial={{opacity: 0, y : 30}}
                 animate={{opacity: 1, y : 0}}
                 transition={{duration: 0.80, delay: 0.60}}
                className=' bokachoda text-[140px] ml-16 font-semibold'>AGENCY</motion.h1>
                <motion.h1 
                 initial={{opacity: 0, y : 30}}
                 animate={{opacity: 1, y : 0}}
                 transition={{duration: 0.80, delay: 0.90}}
                className=' bokachoda text-[140px] ml-10 font-semibold'>NEW YORK</motion.h1>
                <motion.img
                 initial={{opacity: 0, y:100}}
                 animate={{opacity: 1, y: 0}}
                 transition={{duration:1, delay: 1 }}
        src="https://assets.website-files.com/5fbe1531537bc33c350b7439/5fc792e9d6e4cd45775cfd14_Playd%202-min.png" alt="" width={999} />
      <h1 className='text-[#000000] mt-8 mr-[490px] text-xl'> Web and App landing page for education platform</h1>
        </div>
    )
}

export default MAinsection