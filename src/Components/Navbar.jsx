import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-scroll'

function Navbar() {
    return (
        <motion.div 
        initial={{opacity: 0, y: 30}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.22}}
        className=' h-[95px] flex items-center justify-evenly text-[#000000]'>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" className='cursor-pointer' width="55" height="45" viewBox="0 0 40 40" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20 39.2273C31.0457 39.2273 40 30.446 40 19.6137C40 8.78134 31.0457 0 20 0C8.9543 0 0 8.78134 0 19.6137C0 30.446 8.9543 39.2273 20 39.2273ZM31.5152 19.6137C31.5152 25.8505 26.3596 30.9064 20 30.9064C13.6404 30.9064 8.48485 25.8505 8.48485 19.6137C8.48485 13.3769 13.6404 8.32095 20 8.32095C26.3596 8.32095 31.5152 13.3769 31.5152 19.6137ZM11.4888 19.6137C11.4888 24.2235 15.2994 27.9605 20 27.9605C24.7006 27.9605 28.5112 24.2235 28.5112 19.6137C28.5112 15.0039 24.7006 11.2669 20 11.2669C15.2994 11.2669 11.4888 15.0039 11.4888 19.6137Z" fill="black" />
                </svg>
            </div>
            <ul className='flex gap-20 pr-60'>
                <Link to='about' spy={true} smooth={true} offset={10} duration={3000} >
                <li className='relative group'>
                <span className='group-hover:underline cursor-pointer underline-offset-[6px] group-hover:mt-1'>About Us</span>
                </li>
                </Link>
                <Link to='service' spy={true} smooth={true} offset={10} duration={3000} >
                <li className='relative group'>
                <span className='group-hover:underline cursor-pointer underline-offset-[6px] '>Services</span>
                </li>
                </Link>
                <Link to='contact' spy={true} smooth={true} offset={10} duration={3000} >
                <li className='relative group'>
                <span className='group-hover:underline cursor-pointer underline-offset-[6px] '>Contacts</span>
                </li>
                </Link>
            </ul>
            <div className='flex items-center '>
                <div className='h-11 z-10 w-11 inline-block absolute bg-[#D9DDDC] rounded-full'>

                </div>
                <a className='z-40 ml-4 bg-transparent ' href="">Start a Project</a>
            </div>
        </motion.div>
    )
}

export default Navbar