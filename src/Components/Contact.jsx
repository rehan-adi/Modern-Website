import React, {useEffect} from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Contact() {

  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-50px 0px',
  });

  useEffect(() => {
    if (inView) {
      controls1.start({ y: 0, opacity: 1, transition: { duration: 1, delay: 0.30 } });
      controls2.start({ y: 0, opacity: 1, transition: { duration: 1, delay: 0.60 } });
      controls3.start({ y: 0, opacity: 1, transition: { duration: 1, delay: 0.90 } });
      controls4.start({ y: 0, opacity: 1, transition: { duration: 1, delay: 0.99 } });
    }
  }, [inView, controls1, controls2, controls3, controls4]);

  return (
    <div id='contact' className='bg-black text-white flex-col flex justify-center items-center lg:py-0 py-32 max-h-fit lg:h-[90vh] w-auto '>
          <div className='flex justify-center flex-col lg:px-0 px-3 gap-14 w-full lg:w-auto lg:flex-row lg:gap-[444px] items-start'>
            <motion.h1 
             initial={{ opacity: 0, y: 100}}
             animate={controls1}
             ref={ref}
            className='font-semibold'>Contacts</motion.h1>
            <div className='flex flex-col'>
            <motion.span 
            initial={{ opacity: 0, y: 100 }}
            animate={controls1}
            ref={ref}
            className='bokachoda lg:text-[140px] text-7xl font-semibold'>SEND</motion.span>
            <motion.span 
            initial={{ opacity: 0, y: 100 }}
            animate={controls2}
            className='mr-44 bokachoda lg:text-[140px] text-7xl  font-semibold '>YOUR</motion.span>
             <motion.span 
             initial={{ opacity: 0, y: 100 }}
             animate={controls3}
             className='bokachoda lg:text-[140px] text-7xl  font-semibold'>REQUEST</motion.span>
            </div>
          </div>
          <div className='w-[100vw] lg:px-0 px-3 lg:w-auto'>
             <motion.p 
             initial={{opacity: 0, y: 100}}
             animate={controls4}
             className='text-style lg:ml-52 mt-10 lg:mt-7 text-base lg:text-xl'>At  rehanalire52@gmail.com</motion.p>
          </div>
    </div>
  )
}

export default Contact