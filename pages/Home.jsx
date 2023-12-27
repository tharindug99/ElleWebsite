import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import heroImage from '../src/assets/images/doc.png'; // Replace with the actual path to your image
import img1 from '../src/assets/images/Doctors-rafiki.png'
import img2 from '../src/assets/images/Doctors-pana.png'
import img3 from '../src/assets/images/Doctors-amico.png'
import img4 from '../src/assets/images/services.png'
import About from '../components/about/About';
import DoctorList from '../components/doctors/DoctorList';
import Doctors from './Doctors/Doctors';
import Footer from '../components/footer/Footer';
const Home = () => {

  
  return (
    <>
      {/* Hero Section */}
      <div className="hero__section pt-[36px] 2xl:h-[800px]">
        <div className="container px-10">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* hero content */}
            <div className="flex flex-col lg:flex-row items-center">
            
            </div>
          </div>


          {/* hero counter */}
          <div className="text-start mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-[50px]">
                  <div className="lg:w-1/3 md:w-full text-center">
                    <h2 className="text-start text-[36px] py-5 leading-[56px] lg:text-[44px] lg-leading-[54px] font-[700]">
                      30+
                    </h2>
                      <div>
                        <span className="lg:w-[100px] h-2 bg-yellow-500 rounded-full block mt-[-14px]" />
                        <p className="text-start py-5 text-[40px] font-bold xs:text-[20px]">
                      Years of Experience 
                        </p>
                      </div>
                    
                    
                  </div>

                  <div className="lg:w-1/3 md:w-full text-center">
                    <h2 className="text-start text-[36px] py-5 leading-[56px] lg:text-[44px] lg-leading-[54px] font-[700]">
                      100%
                    </h2>
                    <div>
                        <span className="lg:w-[100px] h-2 bg-teal-500 rounded-full block mt-[-14px]" />
                        <p className="text-start py-5 text-[40px] font-bold xs:text-[20px]">
                      Patient Satisfaction
                        </p>
                      </div>
                  </div>

                  <div className="lg:w-1/3 md:w-full text-center">
                    <h2 className="text-start text-[36px] py-5 leading-[56px] lg:text-[44px] lg-leading-[54px] font-[700]">
                      15+
                    </h2>
                    <div>
                        <span className="lg:w-[100px] sm:w-[600px] h-2 bg-purple-500 rounded-full block mt-[-14px]" />
                        <p className="text-start py-5 text-[40px] font-bold xs:text-[20px]">
                       Clinics Funtioning
                        </p>
                      </div>
                  </div>
                </div>

          {/* hero__section end       */}
          
          <div className="container lg:py-40 sm:py-10">
            <div className="lg:w-[740px] mx-auto ">
                 <h2 className=" heading text-center font-medium text-[50px]">Providing the best medical services in the country</h2> 
                 <p className="pt-6 heading text-center font-medium text-gray-500 text-[20px]">World Class healthcare for all. Our healthcare system offers unmatched health care for everyone...</p>  
            </div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5 pb-20 lg:mt-10">
            <div className="flex p-4 flex-col items-center hover:cursor-pointer hover:border-2 hover:border-cyan-400 rounded-xl shadow-lg">
              <img src={img1} className="h-60 w-60" alt="" />
              <h1 className="text-2xl font-semibold text-center mt-4">Find a Doctor</h1>
              <p className="text-center">Discover expert healthcare professionals to meet your medical needs.</p>
              <FaRegArrowAltCircleRight className="m-5 h-6 w-6"/>
            </div>

            <div className="flex p-4 flex-col items-center hover:cursor-pointer hover:border-2 hover:border-cyan-400 rounded-xl shadow-lg">
              <img src={img4} className="h-60 w-60" alt="" />
              <h1 className="text-2xl font-semibold text-center mt-4">24hr Service</h1>
              <p className="text-center">Access around-the-clock assistance for immediate healthcare support and emergencies.</p>
              <FaRegArrowAltCircleRight className="m-5 h-6 w-6"/>
            </div>

            <div className="flex p-4 flex-col items-center hover:cursor-pointer hover:border-2 hover:border-cyan-400 rounded-xl shadow-lg">
              <img src={img3} className="h-60 w-60" alt="" />
              <h1 className="text-2xl font-semibold text-center mt-4">All under one roof</h1>
              <p className="text-center">Experience comprehensive care with a wide range of medical services conveniently available in one location.</p>
              <FaRegArrowAltCircleRight className="m-5 h-6 w-6"/>
            </div>

            <div className="flex p-4 flex-col items-center hover:cursor-pointer hover:border-2 hover:border-cyan-400 rounded-xl shadow-lg">
              <img src={img2} className="h-60 w-60" alt="" />
              <h1 className="text-2xl font-semibold text-center mt-4">High quality service</h1>
              <p className="text-center">Receive top-notch medical care with a commitment to excellence, ensuring your well-being and satisfaction.</p>
              <FaRegArrowAltCircleRight className="m-5 h-6 w-6"/>
            </div>

          </div>

          

          <About/>


        </div>

        {/* ================feature section end==================== */}
      {/* ===================Our great doctors=================== */}
      <div className="lg:w-[740px] mx-auto ">
                 <h2 className=" heading text-center font-medium text-[50px]">Our great doctors</h2> 
                 <p className="pt-6 heading text-center font-medium text-gray-500 text-[20px]">Providing world class care for all......</p>  
            </div>

            <Doctors/>
            <Footer/>
      </div>

      
    </>
  );
};

export default Home;
