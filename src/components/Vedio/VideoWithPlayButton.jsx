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
    <div className="relative h-[400px] w-full max-w-lg overflow-hidden rounded-xl">
      {/* Video element */}
      <video
        ref={videoRef}
        className={`absolute left-0 top-0 h-full w-full object-cover transition-transform duration-500 ${
          isPlaying ? "z-50 h-auto w-auto max-w-full" : ""
        }`}
        src="EducationVedio.mp4"
        muted={!isPlaying} // Unmute when playing
        loop={isPlaying} // Disable looping in full player mode
        playsInline
      >
        Your browser does not support the video tag.
      </video>

      {/* Conditional Play Button Overlay */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/60 via-black/40 to-black/20">
          <button
            onClick={handlePlayVideo}
            className="flex items-center justify-center rounded-full bg-white/70 p-6 text-black shadow-2xl transition-all duration-300 ease-in-out hover:scale-110 hover:bg-white"
          >
            <FaPlay className="cursor-pointer text-black" size={32} />
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoWithPlayButton;
