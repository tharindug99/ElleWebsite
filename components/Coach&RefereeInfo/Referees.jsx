import React, { useState } from 'react';
import PersonCard from '../PersonCard'; // Update the path based on your project structure

const RefereeInfo = [
  { id: 1, name: "Referee One", refNo: "CR123", contact: "123-456-7890", imageUrl: 'https://www.cjonline.com/gcdn/presto/2022/06/15/NTCJ/9da8184b-9e75-40e1-af1c-972d4a9f3d7d-IMG_0387.jpg?width=660&height=826&fit=crop&format=pjpg&auto=webp' },
  { id: 2, name: "Referee One", refNo: "CR123", contact: "123-456-7890", imageUrl: 'https://www.cjonline.com/gcdn/presto/2022/06/15/NTCJ/9da8184b-9e75-40e1-af1c-972d4a9f3d7d-IMG_0387.jpg?width=660&height=826&fit=crop&format=pjpg&auto=webp' },
  { id: 3, name: "Referee One", refNo: "CR123", contact: "123-456-7890", imageUrl: 'https://www.cjonline.com/gcdn/presto/2022/06/15/NTCJ/9da8184b-9e75-40e1-af1c-972d4a9f3d7d-IMG_0387.jpg?width=660&height=826&fit=crop&format=pjpg&auto=webp' },
  { id: 4, name: "Referee One", refNo: "CR123", contact: "123-456-7890", imageUrl: 'https://www.cjonline.com/gcdn/presto/2022/06/15/NTCJ/9da8184b-9e75-40e1-af1c-972d4a9f3d7d-IMG_0387.jpg?width=660&height=826&fit=crop&format=pjpg&auto=webp' },
  { id: 5, name: "Referee One", refNo: "CR123", contact: "123-456-7890", imageUrl: 'https://www.cjonline.com/gcdn/presto/2022/06/15/NTCJ/9da8184b-9e75-40e1-af1c-972d4a9f3d7d-IMG_0387.jpg?width=660&height=826&fit=crop&format=pjpg&auto=webp' },
  { id: 6, name: "Referee One", refNo: "CR123", contact: "123-456-7890", imageUrl: 'https://www.cjonline.com/gcdn/presto/2022/06/15/NTCJ/9da8184b-9e75-40e1-af1c-972d4a9f3d7d-IMG_0387.jpg?width=660&height=826&fit=crop&format=pjpg&auto=webp' },
  { id: 7, name: "Referee One", refNo: "CR123", contact: "123-456-7890", imageUrl: 'https://www.cjonline.com/gcdn/presto/2022/06/15/NTCJ/9da8184b-9e75-40e1-af1c-972d4a9f3d7d-IMG_0387.jpg?width=660&height=826&fit=crop&format=pjpg&auto=webp' },

];

const Referees = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedReferee, setSelectedReferee] = useState(null);

  const filteredReferees = RefereeInfo;

  const searchedReferees = searchTerm
    ? filteredReferees.filter(referee => referee.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : filteredReferees;

  const handleCardClick = (referee) => {
    setSelectedReferee(referee);
  };

  const closePopup = () => {
    setSelectedReferee(null);
  };

  return (
    <div>
      <div className="container mx-7 bg-teal-700">
        <h1 className="text-5 text-white">Referees</h1>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-3 py-2 border rounded-md mb-4"
        />

        <div className="my-20 gap-x-4 mx-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-center">
          {searchedReferees.map((referee) => (
            <div key={referee.id} onClick={() => handleCardClick(referee)}>
              <PersonCard person={referee} />
            </div>
          ))}
        </div>

        {/* Popup */}
        {selectedReferee && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 gap-5  rounded-md">
              <p>Referee Name: {selectedReferee.name}</p>
              <p>Address: {selectedReferee.name}</p>
              <p>Team Name: {selectedReferee.name}</p>
              <p>Referee Ref No: {selectedReferee.refNo}</p>
              <p>Contact: {selectedReferee.contact}</p>
              <p>Years of Experience: {selectedReferee.name}</p>
              <button className="bg-red-500 p-1 mt-3 rounded-md ml-28 text-white"
                      onClick={closePopup}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Referees;
