// src/components/LatestUpdates.js
import React from 'react';
import latestUpdatesData from '../../src/data/LatestUpdates';

const LatestUpdates = () => (
  <div>
    <h2 className="text-center my-10 font-bold" style={{ fontSize: '30px' }}>
      Latest Updates
    </h2>
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {latestUpdatesData.map((update, index) => (
        <li key={index} style={{ marginBottom: '20px' }}>
          <div className='bg-white shadow-lg p-10 m-5'>
            <div className=''>
              <p>{update}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default LatestUpdates;
