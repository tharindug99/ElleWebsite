import React, { useState } from 'react';
import Footer from '../components/footer/Footer';
import TechniqueVideo from '../components/ElleVideos/TechniqueVideo';
import RuleVideo from '../components/ElleVideos/RuleVideo';
import Videos from '../components/ElleVideos/Videos'

const OfficialInfo = () => {

  const [activeTab, setActiveTab] = useState('work');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


  return (
    <div className="m-0">
      
      <div className="bg-slate-600 bg-opacity-100 w-full h-20">
        <div className="block-tabs grid md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2">
          <div
            className={`tabs flex flex-col items-center justify-center px-5 pt-7 pb-7 mb-0 cursor-pointer ${
              activeTab === 'work'
                ? 'text-black bg-white'
                : 'text-blue-50 hover:bg-white hover:text-black'
            }`}
            onClick={() => handleTabClick('work')}
          >
            Videos
          </div>
          <div
            className={`tabs flex flex-col items-center justify-center px-5 pt-7 pb-7 cursor-pointer ${
              activeTab === 'volunteer'
                ? 'text-black bg-white'
                : 'text-blue-50 hover:bg-white hover:text-black'
            }`}
            onClick={() => handleTabClick('volunteer')}
          >
            Coaches and Referee Info
          </div>
        </div>
      </div>

      {/* Corresponding content for each tab */}
      {activeTab === 'work' && (
        <div>
          <Videos />
        </div>
      )}
      {activeTab === 'volunteer' && (
        <div>
          <RuleVideo />
        </div>
      )}

      <Footer/>
    </div>



    
  )
}

export default OfficialInfo