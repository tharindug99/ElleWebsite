import React from 'react';
import Home from '../pages/Home';
import OfficialInfo from '../pages/OfficialInfo';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import TeamInfo from '../pages/TeamInfo';
import Doctors from '../pages/Doctors/Doctors';
import DoctorDetails from '../pages/Doctors/DoctorDetails';

import {  Routes, Route } from 'react-router-dom';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/MediFlex_frontEnd" element={<Home/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/doctors" element={<Doctors/>}></Route>
      <Route path="/doctors/:id" element={<DoctorDetails/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/register" element={<SignUp/>}></Route>
      <Route path="/Official_Info" element={<OfficialInfo/>}></Route>
      <Route path="/TeamInfo" element={<TeamInfo/>}></Route>  
    </Routes>
  )
}

export default Routers