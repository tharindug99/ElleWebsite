import React, { useState } from 'react';
import Footer from '../components/footer/Footer';
import RefereeSignup from '../components/signup/RefereeSignup';
import CoachSignup from '../components/signup/CoachSignup';
import PlayerSignup from '../components/signup/PlayerSignup';
import axios from 'axios';

const SignUp = () => {
  const [tab, setTab] = useState('referee');
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle signup based on the selected tab (referee, coach, or player)
    let signupData;
    switch (tab) {
      case 'referee':
        signupData = { FirstName, LastName, email, password, role: 'referee' };
        break;
      case 'coach':
        signupData = { FirstName, LastName, email, password, role: 'coach' };
        break;
      case 'player':
        signupData = { FirstName, LastName, email, password, role: 'player' };
        break;
      default:
        break;
    }

    axios.post('http://localhost:5173/register', signupData)
      .then(result => console.log(result))
      .catch(err => console.log(err));
  };

  const renderSignupComponent = () => {
    switch (tab) {
      case 'referee':
        return <RefereeSignup setFirstName={setFirstName} setLastName={setLastName} setEmail={setEmail} setPassword={setPassword} />;
      case 'coach':
        return <CoachSignup setFirstName={setFirstName} setLastName={setLastName} setEmail={setEmail} setPassword={setPassword} />;
      case 'player':
        return <PlayerSignup setFirstName={setFirstName} setLastName={setLastName} setEmail={setEmail} setPassword={setPassword} />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300">
        <div className="bg-white p-8 rounded shadow-md max-w-xs w-full">
          <div className="text-center">
            {/* Your SVG and heading */}
          </div>
          {/* Tabs for Referee, Coach, and Player */}
          <div className="flex justify-between mb-4">
            <button className={`tab ${tab === 'referee' && 'active-tab'}`} onClick={() => setTab('referee')}>Referee</button>
            <button className={`tab ${tab === 'coach' && 'active-tab'}`} onClick={() => setTab('coach')}>Coach</button>
            <button className={`tab ${tab === 'player' && 'active-tab'}`} onClick={() => setTab('player')}>Player</button>
          </div>
          {/* Render the appropriate signup component based on the selected tab */}
          {renderSignupComponent()}

          

        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
