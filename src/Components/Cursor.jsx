import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const controls = useAnimation();

  const mouse = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', mouse);
    return () => {
      window.removeEventListener('mousemove', mouse);
    };
  }, []);

  const cursorSize = 70;

  return (
    <motion.div
    className='flex justify-center items-center font-semibold text-sm'
      style={{
        width: `${cursorSize}px`,
        height: `${cursorSize}px`,
        borderRadius: '50%',
        border: '1px solid #ccc',
        position: 'fixed',
        top: `${position.y - cursorSize / 2}px`,
        left: `${position.x - cursorSize / 2}px`,
        pointerEvents: 'none',
      }}
    >Scroll</motion.div>
  );
}

export default Cursor;
