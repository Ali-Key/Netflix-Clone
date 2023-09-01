import React from 'react'

import FeatureData from "../../content/features.json"

import Feature from './Feature'

const Features = () => {
  return (
    <div  className='bg-black text-white'>
     
    {
        FeatureData.map((feature) => (
            <Feature key={feature.id}  feature={feature} />))
            // <Feature key={feature.id}  {...feature} />))
    }
    
    
    
    </div>
  )
}

export default Features