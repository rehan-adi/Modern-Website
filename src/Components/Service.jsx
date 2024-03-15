import React, {useEffect} from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Service() {


  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const controls5 = useAnimation();

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
    }
  }, [inView, controls1, controls2, controls3, controls4, controls5 ]);

  return (
    <div id='service' className='lg:h-[65vh] px-3 max-h-fit lg:pt-24 flex flex-col lg:flex-row justify-between lg:px-48 w-auto py-10 text-black '>
    <h1 className='text-black font-semibold'>Services</h1>
    <p className=' about-text font-normal lg:mt-0 mt-10 text-3xl lg:text-6xl '>
    <motion.span 
    initial={{opacity: 0, y : 230}}
    animate={controls1}
    ref={ref}
    className='lg:ml-32' >We
know
it
is
quite </motion.span> <br className='lg:flex hidden'/>
<motion.span
 initial={{opacity: 0, y : 230}}
 animate={controls2}
 ref={ref}
>challenging
to
find
a </motion.span><br className='lg:flex hidden'/>
<motion.span
 initial={{opacity: 0, y : 230}}
 animate={controls3}
 ref={ref}
>good
team
to
do
great </motion.span><br className='lg:flex hidden'/>
<motion.span
 initial={{opacity: 0, y : 230}}
 animate={controls4}
 ref={ref}
>things.
But
we
managed </motion.span><br className='lg:flex hidden'/>
<motion.span
initial={{opacity: 0, y : 230}}
animate={controls5}
ref={ref}
>to
do
it.</motion.span></p>
</div>
  )
}

export default Service