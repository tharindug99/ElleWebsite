import React from 'react';
import coachImage from '../../src/assets/images/SLUG23_elle/1.jpeg'; // Import your image

const CoachSignup = () => {
  return (
    <div className="flex">
      {/* Image on the left */}
      <div className="w-1/2">
        <img
          src={coachImage}
          alt="Coach Image"
          className="object-cover h-full w-full"
        />
      </div>

      {/* Form on the right */}
      <div className="w-1/2 p-8">
        <h1 className="text-2xl font-semibold mb-4">Coach Signup</h1>
        <form className="flex flex-col">
          <label htmlFor='name' className="mb-2 text-sm">Name:</label>
          <input type='text' name='name' id='name' className="p-2 border rounded-md mb-4" />

          <label htmlFor='email' className="mb-2 text-sm">Email:</label>
          <input type='email' name='email' id='email' className="p-2 border rounded-md mb-4" required />

          <label htmlFor='password' className="mb-2 text-sm">Password:</label>
          <input type='password' name='password' id='password' className="p-2 border rounded-md mb-4" required />

          <button type='submit' className="bg-blue-500 text-white py-2 rounded-md">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CoachSignup;
