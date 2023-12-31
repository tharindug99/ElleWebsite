import React from 'react';
import { motion } from "framer-motion"
const BestTeamCard = ({ category, teamName, institution, imageUrl }) => (
  <div className="md:w-1/3 p-4">
    <motion.div
      className="box"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 900, damping: 20 }}
      >
    <div className="bg-white shadow-lg p-6 rounded-lg">
      <img
        src={imageUrl}
        alt={`${teamName} - ${category}`}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-lg font-bold mb-2">{teamName}</h2>
      <p className="text-sm text-gray-600 mb-2">{institution}</p>
      <p className="text-sm text-gray-500">{category}</p>
    </div>
    </motion.div>
  </div>
);

const BestTeam = () => {
  return (
    <>
      <h1 className="text-center text-2xl font-bold mb-4 my-20">Best Team of the Week</h1>
      <p className="text-center mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <div className="flex flex-wrap -mx-4 mb-20">
        {/* National level best team */}
        <BestTeamCard
          category="National Level"
          teamName="National Champs"
          institution="National University"
          imageUrl="https://static.wixstatic.com/media/c89508_de205ec3db365597dd2e88ed14ce04e5.jpg/v1/fill/w_864,h_540,al_c,lg_1,q_85,enc_auto/c89508_de205ec3db365597dd2e88ed14ce04e5.jpg"
        />

        {/* University level best team */}
        <BestTeamCard
          category="University Level"
          teamName="University Titans"
          institution="XYZ University"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc45N8YJ8vvoZu3fB8Wp4MJN9SgZqgPIAtOhz4AyWF8WirLyHWPc4zlReSTnJwuNxwbkA&usqp=CAU"
        />

        {/* School level best team */}
        <BestTeamCard
          category="School Level"
          teamName="School Stars"
          institution="ABC School"
          imageUrl="https://royalcollege.lk/wp-content/uploads/2021/07/Elle-Main.jpg"
        />
      </div>
    </>
  );
};

export default BestTeam;
