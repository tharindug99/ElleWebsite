import React from 'react';
import moment from 'moment';
import upcomingTournamentsData from '../../src/data/UpcomingTournaments';
import { MdOutlineDateRange } from 'react-icons/md';
import { MdOutlineLocationOn } from "react-icons/md";

const UpcomingTournaments = () => (
  <div>
    <h2 className="text-center my-10 font-bold" style={{ fontSize: '30px' }}>
      Upcoming Tournaments
    </h2>
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {upcomingTournamentsData.map((tournament, index) => (
        <li key={tournament.id} style={{ marginBottom: '20px' }}>
          <div className='bg-white shadow-lg p-10 grid grid-cols-2'>
            <div className='col-span-1'>
              <strong>{tournament.name}</strong>
              <div className="flex items-center my-4">
                <p className="mr-2">
                  <MdOutlineDateRange/>
                </p>
                <p> {moment(tournament.date).format('MMMM D, YYYY')}</p>
              </div>

              <div className="flex items-center my-4">
                <p className="mr-2">
                  <MdOutlineLocationOn />
                </p>
                <p>{tournament.location}</p>
              </div>

              <div className='mt-4'>
                <button className=' border-2 border-blue-950 bg-blue-950 text-white p-2 rounded-xl'>
                  See more
                </button>
              </div>
            </div>
            <div className='col-span-1'>
              <img
                src={tournament.image}
                alt=""
                className='rounded-lg bg-white shadow-lg'
                style={{ maxWidth: '300px', maxHeight: '300px' }}
              />
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default UpcomingTournaments;
