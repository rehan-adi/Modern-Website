import React from 'react'
import AnimatedCursor from "react-animated-cursor"

function Animatedcursor() {
  return (
    <div>
    <AnimatedCursor
      innerSize={25}
      outerSize={55}
      color='0, 0, 0'
      outerAlpha={0.5}
      innerScale={0.2}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}

     />
  </div>
  )
}

export default Animatedcursor