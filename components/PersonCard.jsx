import React, { useState } from 'react';


const PersonCard = ({ person }) => {
  const { name, imageUrl, refNo, contact } = person;
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="col-span-1 bg-white rounded-lg my-3 p-2 flex flex-col justify-center items-center">
      <div className="cursor-pointer group perspective">
      <div className={`relative perspective preserve-3d group-hover:-rotate-y-180 w-full h-full duration-1000 ${isFlipped ? 'rotate-y-180' : ''}`}>
      <div style={{ maxWidth: 'auto', height: 'auto' }}>
        <img src={imageUrl} alt={name} style={{ maxWidth: '100%', height: 'auto' }} />
      </div>
      </div>
      <p className="text-center mt-2 text-gray-800">{name}</p>
    </div>
    </div>
  );
};

export default PersonCard;
