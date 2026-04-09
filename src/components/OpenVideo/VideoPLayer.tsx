import React from 'react';
import YouTube from 'react-youtube';

interface YouTubePlayerProps {
  videoId: string;
}

const YouTubePlayerS: React.FC<YouTubePlayerProps> = ({ videoId }) => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="flex justify-center items-center p-4">
      <YouTube videoId={videoId} opts={opts} className="rounded-lg shadow-lg" />
    </div>
  );
};

export default YouTubePlayerS;
