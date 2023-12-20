import React from 'react'
import RuleVideo from './RuleVideo'
import TechniqueVideo from './TechniqueVideo'

const Videos = () => {
  return (
    <div>
        <h2 className="text-center mt-10">Rules and Regulations</h2>
        <div class="flex flex-wrap -mx-4 justify-around items-start">
            <div class="w-full md:w-1/3 px-4 my-6">
                <RuleVideo />
            </div>
            <div class="w-full md:w-1/3 px-4 my-6">
                <TechniqueVideo />
            </div>
        </div>
    </div>
  )
}

export default Videos