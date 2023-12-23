import React from 'react'

function Recognition() {
  return (
    <div className='h-[50vh] flex flex-col justify-center mb-5 items-start w-auto'>
        <h1 className='mb-16 ml-48 text-black font-medium '>Recognition</h1>
          <marquee className='bokachoda text-[140px] font-semibold' behavior="scroll"   loop="-1" scrollamount="15" direction="left">
            AWWWARDS X6 BEHANCE X17 CSS DESIGN AWARDS X7
          </marquee>
    </div>
  )
}

export default Recognition;