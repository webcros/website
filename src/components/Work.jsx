import React from 'react'
import PortfolioGrid from './PortfolioGrid'
import { useEffect } from 'react'

function Work() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top on page load or refresh
  }, []);

  return (
    <div className='mt-10'>
        <PortfolioGrid/>
    </div>
  )
}

export default Work