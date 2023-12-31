import React from 'react';
import YouTube from 'react-youtube';

const Videos = [
  { id: 1, title: "Video Title One", videoId: 'dQw4w9WgXcQ' },
  { id: 2, title: "Video Title Two", videoId: 'dQw4w9WgXcQ' },
  { id: 3, title: "Video Title Two", videoId: 'dQw4w9WgXcQ' },
  { id: 4, title: "Video Title One", videoId: 'dQw4w9WgXcQ' },
  { id: 5, title: "Video Title Two", videoId: 'dQw4w9WgXcQ' },
  { id: 6, title: "Video Title Two", videoId: 'dQw4w9WgXcQ' },
];

const TechniqueVideo = () => {
  const opts = {
    width: '100%', // Set the initial width
    height: '200px', // Set the height to a specific value, adjust as needed
    playerVars: {
      // Add any other playerVars as needed
      autoplay: 0,
    },
  };

  return (
    <div>
      <div className="container mx-7 bg-white rounded-sm shadow-lg">
      <h1 className="text-[36px] text-black p-5 leading-[46px] font-[700] md:text-[60px] md:leading-[70px]">
                  Elle Techniques
                </h1>

        <div className="my-20 gap-x-4 mx-5 mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-center">
          {Videos.map((video) => (
            <div key={video.id} className="col-span-1 bg-white shadow-xl rounded-lg my-3 p-2 flex flex-col justify-center items-center">
              
              <div style={{ maxWidth: 'auto', height: 'auto' }}>
                <YouTube videoId={video.videoId} opts={opts} />
              </div>

              <p className="text-center mt-2 text-gray-800">{video.title}</p>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechniqueVideo;
