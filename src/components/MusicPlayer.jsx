import React from "react";

const MusicPlayer = () => {
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.load();
    setCurrentTime(0);
    setDuration(0);
  }, [currentTrack, setCurrentTime, setDuration]);

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;
  return <div>MusicPlayer</div>;
};

export default MusicPlayer;
