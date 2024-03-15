import React from 'react'

function Recognition() {
  return (
    <div className='lg:h-[50vh] max-h-fit lg:py-0 py-16 flex flex-col justify-center lg:mb-5 items-start w-auto'>
        <h1 className='mb-16 lg:px-0 px-3 lg:ml-48 text-black font-semibold '>Recognition</h1>
          <marquee className='bokachoda text-[140px] font-semibold' behavior="scroll"   loop="-1" scrollamount="15" direction="left">
            AWWWARDS X6 BEHANCE X17 CSS DESIGN AWARDS X7
          </marquee>
    </div>
  )
}

export default Recognition;