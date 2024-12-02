import { useState, useRef } from "react";
import { FaPlay } from "react-icons/fa";

const VideoWithPlayButton = () => {
  const videoRef = useRef(null); // Reference to the video element
  const [isPlaying, setIsPlaying] = useState(false); // State to toggle video player view

  const handlePlayVideo = () => {
    const video = videoRef.current;

    if (video) {
      setIsPlaying(true); // Switch to full video player mode
      video.controls = true; // Show controls
      video.play(); // Play the video
    }
  };

  return (
    <div className="relative h-[400px] w-full max-w-lg rounded-xl overflow-hidden">
      {/* Video element */}
      <video
        ref={videoRef}
        className={`absolute top-0 left-0 h-full w-full object-cover transition-transform duration-500 ${
          isPlaying ? "z-50 h-auto w-auto max-w-full" : ""
        }`}
        src="EducationVedio.mp4"
        muted={!isPlaying} // Unmute when playing
        loop={!isPlaying} // Disable looping in full player mode
        playsInline
      >
        Your browser does not support the video tag.
      </video>

      {/* Conditional Play Button Overlay */}
      {!isPlaying && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/20 flex items-center justify-center">
        <button
          onClick={handlePlayVideo}
          className="bg-white/70 text-black rounded-full p-6 shadow-2xl hover:scale-110 hover:bg-white transition-all duration-300 ease-in-out flex items-center justify-center"
        >
          <FaPlay className="text-black cursor-pointer" size={32} />
        </button>
      </div>
      
      )}
    </div>
  );
};

export default VideoWithPlayButton;
