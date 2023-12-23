import React, {useEffect, useState} from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Footer() {


  
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const controls5 = useAnimation();
  const controls6 = useAnimation();
  const controls7 = useAnimation();

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-50px 0px',
  });

  useEffect(() => {
    if (inView) {
      controls1.start({ y: 0, opacity: 1, transition: { duration: 3, delay: 0.40 } });
      controls2.start({ y: 0, opacity: 1, transition: { duration: 3, delay: 0.80 } });
      controls3.start({ y: 0, opacity: 1, transition: { duration: 3, delay: 1.20 } });
      controls4.start({ y: 0, opacity: 1, transition: { duration: 3, delay: 1.60 } });
      controls5.start({ y: 0, opacity: 1, transition: { duration: 3, delay: 2 } });
      controls6.start({ y: 0, opacity: 1, transition: { duration: 3, delay: 2.40 } });
      controls7.start({ y: 0, opacity: 1, transition: { duration: 3, delay: 2.80 } });
    }
  }, [inView, controls1, controls2, controls3, controls4]);

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
  
    return () => clearInterval(intervalId);
  }, []);
  
  const formattedIST = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Kolkata',
    hour: 'numeric',
    minute: 'numeric',
  }).format(currentTime);
  


  return (
    <div className='bg-black flex justify-between px-36 items-center text-white w-auto h-[15vh]'>
           <div className='flex gap-16'>
              <h1 className='relative group'>
                <motion.span
                initial={{ opacity:0}}
                animate={controls1}
                ref={ref}
                 className='group-hover:underline cursor-pointer underline-offset-[6px] group-hover:mt-1'>@2023 Edision</motion.span>
              </h1>
              <h1 className='relative group'>
                <motion.span 
                 initial={{ opacity: 0}}
                 animate={controls2}
                 ref={ref}
                className='group-hover:underline cursor-pointer underline-offset-[6px] group-hover:mt-1'>{formattedIST} IST</motion.span>
              </h1>
           </div>
           <div className='flex  gap-16'>
            <h1 className='relative group'>
                <motion.a href="https://www.linkedin.com/in/md-rehan-89030b289/"
                 initial={{ opacity: 0}}
                 animate={controls3}
                 ref={ref}
                 className='group-hover:underline cursor-pointer underline-offset-[6px] group-hover:mt-1'>Linkdin</motion.a>
            </h1>
            <h1 className='relative group'>
                <motion.a href="https://github.com/"
                initial={{ opacity: 0}}
                animate={controls4}
                ref={ref}
                className='group-hover:underline cursor-pointer underline-offset-[6px] group-hover:mt-1'>GitHub</motion.a>
            </h1>
            <h1 className='relative group'>
                <motion.a href="https://www.instagram.com/aadeel_rehan03/"
                initial={{ opacity: 0}}
                animate={controls5}
                ref={ref}
                className='group-hover:underline cursor-pointer underline-offset-[6px] group-hover:mt-1'>Instagram</motion.a>
            </h1>
            <h1 className='relative group'>
                <motion.a href=""
                  initial={{ opacity: 0}}
                  animate={controls6}
                  ref={ref}
                className='group-hover:underline cursor-pointer underline-offset-[6px] group-hover:mt-1'>Twiter</motion.a>
            </h1>
           </div>
    </div>
  )
}

export default Footer