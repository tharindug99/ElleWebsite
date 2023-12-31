import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {motion} from 'framer-motion';
import LatestUpdates from '../components/home/LatestUpdates';
import ImageSlider from '../components/home/ImageSlider';
import UpcomingTournaments from '../components/home/UpcomingTournaments';


const Home = () => {
  
  return (
    <>
    <ImageSlider/>
    <div>
      <h2
          className="text-center my-10 font-bold"
          style={{ fontSize: '40px' }}>What's New?</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
        <LatestUpdates />
        <UpcomingTournaments/>
      </div>
    </div>
      
    </>
  );
};

export default Home;
