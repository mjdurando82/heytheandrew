import React, { useEffect, useState } from 'react'
import './FlipPage.css'

const FlipPage = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    // Start the animation after a delay
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 1000); // Delay in milliseconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`flip-page-wrapper ${startAnimation ? 'start-animation' : ''}`}>
      <div className="flip-page-inner">
        <div
          className="flip-page-front bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/front-image.jpg)' }}
        ></div>
        <div
          className="flip-page-back bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/back-image.jpg)' }}
        ></div>
      </div>
    </div>
  )
}

export default FlipPage
