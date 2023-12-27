import React, { useState } from 'react';
import PersonCard from '../PersonCard'; // Update the path based on your project structure

const CoachInfo = [
  { id: 1, name: "Coach One", refNo: "CR123", contact: "123-456-7890", imageUrl: 'https://www.cjonline.com/gcdn/presto/2022/06/15/NTCJ/9da8184b-9e75-40e1-af1c-972d4a9f3d7d-IMG_0387.jpg?width=660&height=826&fit=crop&format=pjpg&auto=webp' },
  { id: 2, name: "Coach One", refNo: "CR123", contact: "123-456-7890", imageUrl: 'https://www.cjonline.com/gcdn/presto/2022/06/15/NTCJ/9da8184b-9e75-40e1-af1c-972d4a9f3d7d-IMG_0387.jpg?width=660&height=826&fit=crop&format=pjpg&auto=webp' },
  { id: 3, name: "Coach One", refNo: "CR123", contact: "123-456-7890", imageUrl: 'https://www.cjonline.com/gcdn/presto/2022/06/15/NTCJ/9da8184b-9e75-40e1-af1c-972d4a9f3d7d-IMG_0387.jpg?width=660&height=826&fit=crop&format=pjpg&auto=webp' },
  { id: 4, name: "Coach One", refNo: "CR123", contact: "123-456-7890", imageUrl: 'https://www.cjonline.com/gcdn/presto/2022/06/15/NTCJ/9da8184b-9e75-40e1-af1c-972d4a9f3d7d-IMG_0387.jpg?width=660&height=826&fit=crop&format=pjpg&auto=webp' },
  { id: 5, name: "Coach One", refNo: "CR123", contact: "123-456-7890", imageUrl: 'https://www.cjonline.com/gcdn/presto/2022/06/15/NTCJ/9da8184b-9e75-40e1-af1c-972d4a9f3d7d-IMG_0387.jpg?width=660&height=826&fit=crop&format=pjpg&auto=webp' },
  { id: 6, name: "Coach One", refNo: "CR123", contact: "123-456-7890", imageUrl: 'https://www.cjonline.com/gcdn/presto/2022/06/15/NTCJ/9da8184b-9e75-40e1-af1c-972d4a9f3d7d-IMG_0387.jpg?width=660&height=826&fit=crop&format=pjpg&auto=webp' },
  { id: 7, name: "Coach One", refNo: "CR123", contact: "123-456-7890", imageUrl: 'https://www.cjonline.com/gcdn/presto/2022/06/15/NTCJ/9da8184b-9e75-40e1-af1c-972d4a9f3d7d-IMG_0387.jpg?width=660&height=826&fit=crop&format=pjpg&auto=webp' },
  { id: 8, name: "Coach One", refNo: "CR123", contact: "123-456-7890", imageUrl: 'https://www.cjonline.com/gcdn/presto/2022/06/15/NTCJ/9da8184b-9e75-40e1-af1c-972d4a9f3d7d-IMG_0387.jpg?width=660&height=826&fit=crop&format=pjpg&auto=webp' },

];

const Coaches = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCoach, setSelectedCoach] = useState(null);

  const filteredCoaches = CoachInfo;

  const searchedCoaches = searchTerm
    ? filteredCoaches.filter(coach => coach.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : filteredCoaches;

  const handleCardClick = (coach) => {
    setSelectedCoach(coach);
  };

  const closePopup = () => {
    setSelectedCoach(null);
  };

  return (
    <div>
      <div className="container mx-7 bg-teal-700">
        <h1 className="text-5 text-white">Coaches</h1>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-3 py-2 border rounded-md mb-4"
        />

        <div className="my-20 gap-x-4 mx-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-center">
          {searchedCoaches.map((coach) => (
            <div key={coach.id} onClick={() => handleCardClick(coach)}>
              <PersonCard person={coach} />
            </div>
          ))}
        </div>

        {/* Popup */}
        {selectedCoach && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 gap-5  rounded-md">
              <p>Coach Name: {selectedCoach.name}</p>
              <p>Address: {selectedCoach.name}</p>
              <p>Team Name: {selectedCoach.name}</p>
              <p>Coach Ref No: {selectedCoach.refNo}</p>
              <p>Contact: {selectedCoach.contact}</p>
              <p>Years of Experience: {selectedCoach.name}</p>
              <button className="bg-red-500 p-1 mt-3 rounded-md ml-28 text-white"
                      onClick={closePopup}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Coaches;
