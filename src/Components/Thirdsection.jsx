import React, {useEffect} from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Thirdsection() {


    const controls1 = useAnimation();
    const controls2 = useAnimation();
  
    const [ref, inView] = useInView({
      triggerOnce: true,
      rootMargin: '50px -50px',
    });
  
    useEffect(() => {
      if (inView) {
        controls1.start({ y: 0, opacity: 1, transition: { duration: 1, delay: 0.3 } });
        controls2.start({ y: 0, opacity: 1, transition: { duration: 1.1, delay: 0.8} });
      }
    }, [inView, controls1, controls2]);


    return (

        <div className='lg:h-[100vh] max-h-fit py-7 mt-8 lg:mr-36 w-auto flex flex-col items-end justify-start  '>
            <motion.img
            initial={{opacity: 0, y : 25}}
            animate={controls1}
            ref={ref}
             src="https://jacoblund.com/cdn/shop/products/799440d8fa9c308f47e950dde7468329_79c08657-93e7-464c-b860-5c8005bbd8ff_grande.jpg?v=1674565673" width={777} alt="" />
            <motion.h1 
            initial={{opacity: 0, y: 33}}
            animate={controls2}
            className='text-[#000000] mt-8 px-3 lg:px-0 lg:mr-[350px] text-xl'>Website for IT company based on WEB 3.O</motion.h1>
        </div>

    )
}

export default Thirdsection