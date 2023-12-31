import React from 'react'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import img1 from '../src/assets/images/online-medical-support.png'
import img2 from '../src/assets/images/ambulance.png'
import img3 from '../src/assets/images/quickResponse.png'
import img4 from '../src/assets/images/AllinOne.png'
import Footer from '../components/footer/Footer';
import BestTeam from '../components/team/BestTeam';
import BestPlayer from '../components/team/BestPlayer';

import { motion, useScroll } from "framer-motion"

const TeamInfo = () => {

  const { scrollYProgress } = useScroll();
  
  return (
    <>
    
    <div className="container">
          <BestPlayer/>
          <BestTeam/>
    </div>
    
    </>
  )
}

export default TeamInfo