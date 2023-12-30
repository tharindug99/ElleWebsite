// src/components/LatestUpdates.js
import React from 'react';
import latestUpdatesData from '../../src/data/LatestUpdates';

const LatestUpdates = () => (
  <div>
    <h2 className="text-center my-10 font-bold"
          style={{ fontSize: '30px' }}>Latest Updates</h2>
    <ul>
      {latestUpdatesData.map((update, index) => (
        <li key={index}>{update}</li>
      ))}
    </ul>
  </div>
);

export default LatestUpdates;
