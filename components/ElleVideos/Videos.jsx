import React from 'react'
import RuleVideo from './RuleVideo'
import TechniqueVideo from './TechniqueVideo'

const Videos = () => {
  return (
    <div>
        <h2 className="text-center mt-10">Rules and Regulations</h2>
        <div class="flex flex-wrap ">
            
                <RuleVideo />
                <TechniqueVideo />
            
        </div>
    </div>
  )
}

export default Videos