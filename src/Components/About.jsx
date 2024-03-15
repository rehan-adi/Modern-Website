import React, {useEffect} from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function About() {
        
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const controls5 = useAnimation();
  const controls6 = useAnimation();
  const controls7 = useAnimation();
  const controls8 = useAnimation();
  const controls9 = useAnimation();
  const controls10 = useAnimation();

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '50px -50px',
  });

  useEffect(() => {
    if (inView) {
      controls1.start({ y: 0, opacity: 1, transition: { duration: 1, delay: 0.1 } });
      controls2.start({ y: 0, opacity: 1, transition: { duration: 1, delay: 0.3 } });
      controls3.start({ y: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } });
      controls4.start({ y: 0, opacity: 1, transition: { duration: 1, delay: 0.7 } });
      controls5.start({ y: 0, opacity: 1, transition: { duration: 1, delay: 0.9 } });
      controls6.start({ y: 0, opacity: 1, transition: { duration: 1, delay: 1.1 } });
      controls7.start({ y: 0, opacity: 1, transition: { duration: 1, delay: 1.3 } });
      controls8.start({ y: 0, opacity: 1, transition: { duration: 1, delay: 1.5 } });
      controls9.start({ y: 0, opacity: 1, transition: { duration: 1, delay: 1.7 } });
      controls10.start({ y: 0, opacity: 1, transition: { duration: 1, delay: 1.9 } });
    }
  }, [inView, controls1, controls2, controls3, controls4, controls5 ]);

  return (
    <div id='about' className='lg:h-[100vh] max-h-fit py-14 lg:pt-24 flex flex-col lg:flex-row justify-between px-3 lg:px-48 w-auto text-black '>
      <h1 className='text-black font-semibold'>About Us</h1>
      <p className=' about-text font-normal text-3xl mt-10 lg:mt-0 lg:text-6xl '> <motion.span
      initial={{opacity: 0, y : 230}}
      animate={controls1}
      ref={ref}
       className='lg:ml-24'>We
        help
        businesses </motion.span> <br className='lg:flex hidden'/>
        <motion.span 
        initial={{opacity: 0, y : 200}}
        animate={controls2}
        ref={ref}
        >to
        re-evaluate
        their </motion.span> <br className='lg:flex hidden'/>
        <motion.span
        initial={{opacity: 0, y : 180}}
        animate={controls3}
        ref={ref}
        >digital
        potential
        and </motion.span><br className='lg:flex hidden'/>
        <motion.span
         initial={{opacity: 0, y : 180}}
         animate={controls4}
         ref={ref}
        >achieve
        greater
        results. </motion.span> <br className='lg:flex hidden'/>
        <motion.span
         initial={{opacity: 0, y : 180}}
         animate={controls5}
         ref={ref}
        >Corporate
        level </motion.span> <br className='lg:flex hidden'/>
        <motion.span
         initial={{opacity: 0, y : 180}}
         animate={controls6}
         ref={ref}
        >companies
        trust
        us
        to </motion.span><br className='lg:flex hidden'/>
        <motion.span
         initial={{opacity: 0, y : 180}}
         animate={controls7}
         ref={ref}
        >refresh
        and
        improve
        their</motion.span> <br className='lg:flex hidden'/>
       <motion.span
        initial={{opacity: 0, y : 180}}
        animate={controls8}
        ref={ref}
       >brands
        online.
        Start-ups </motion.span><br className='lg:flex hidden'/>
       <motion.span
        initial={{opacity: 0, y : 180}}
        animate={controls9}
        ref={ref}
       >to
        launch
        and
        set a </motion.span><br className='lg:flex hidden'/>
        <motion.span
        initial={{opacity: 0, y : 180}}
        animate={controls10}
        ref={ref}
        >visual tone. </motion.span></p>
    </div>
  )
}

export default About