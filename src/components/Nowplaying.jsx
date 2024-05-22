import React, { useState, useRef, useEffect } from 'react';
import  './Nowplaying.css';


const NowPlaying = () => {
  const audioPlayer = useRef(null);

  const tracks = [
    '/audio/victory.mp3',
    '/audio/v2.mp3',
    '/audio/victory.mp3'
  ];

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioPlayer.current;

    const updateProgress = () => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration);
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadedmetadata', updateProgress);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('loadedmetadata', updateProgress);
    };
  }, []);

  const playAudio = () => {
    if (audioPlayer.current) {
      audioPlayer.current.play();
      setIsPlaying(true);
    }
  };

  const pauseAudio = () => {
    if (audioPlayer.current) {
      audioPlayer.current.pause();
      setIsPlaying(false);
    }
  };

  const stopAudio = () => {
    if (audioPlayer.current) {
      audioPlayer.current.pause();
      audioPlayer.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const nextAudio = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);
    setIsPlaying(true);
  };

  const prevAudio = () => {
    setCurrentTrackIndex((prevIndex) =>
      prevIndex === 0 ? tracks.length - 1 : prevIndex - 1
    );
    setIsPlaying(true);
  };

  useEffect(() => {
    if (isPlaying) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  }, [currentTrackIndex, isPlaying]);

  const handleRangeChange = (e) => {
    if (audioPlayer.current) {
      audioPlayer.current.currentTime = e.target.value;
      setCurrentTime(e.target.value);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="mid-right">
      <div id="downloads" className="player-section">
        <div className="player-heading">
          <div className="player-arrow-icon">
           
          </div>
          <div className="now-playing">Now Playing</div>
        </div>
        <div className="music-player">
          <div className="player-inner">
            <div className="about-music-artist">
              <div className="music-img-wrap">
                <img src="/photos/song-icon.png" alt="" className="song-icon" />
              </div>
              <div className="about-artist">
                <div className="artist-name">Artist Name Heading</div>
                <div className="song-sub-heading">
                  Music album subheading title
                </div>
              </div>
            </div>
            <div className="curr-song-n-range-wrapper">
              <div className="name-n-volume">
                <div className="curr-song">
                  Playing: {tracks[currentTrackIndex].split('/').pop()}
                </div>
                <div className="volume-range">
                  <div className="volume-indicator">
                    <div className="volume-dot dot-blue"></div>
                    <div className="volume-dot dot-blue"></div>
                    <div className="volume-dot dot-blue"></div>
                    <div className="volume-dot dot-blue"></div>
                    <div className="volume-dot dot-blue"></div>
                    <div className="volume-dot dot-blue"></div>
                    <div className="volume-dot"></div>
                    <div className="volume-dot"></div>
                    <div className="volume-dot"></div>
                    <div className="volume-dot"></div>
                  </div>
                </div>
              </div>
              <div className="song-time">{formatTime(currentTime)}</div>
              <div className="song-range">
                <input
                  type="range"
                  className="song-skip-range"
                  min="0"
                  max={duration}
                  value={currentTime}
                  onChange={handleRangeChange}
                />
              </div>
            </div>
            <div className="previous-song-info">
              <div className="previous-song-name">
                Previously Played: <span>Song name</span>
              </div>
            </div>
            <div className="player-buttons-wrap">
              <div className="player-button">
                <button className="player-btn" onClick={prevAudio}>
                  Previous
                </button>
                <span className="btn-separator"></span>
                <button className="player-btn" onClick={pauseAudio}>
                  Pause
                </button>
                <span className="btn-separator"></span>
                <button className="player-btn" onClick={playAudio}>
                  Play
                </button>
                <span className="btn-separator"></span>
                <button className="player-btn" onClick={stopAudio}>
                  Stop
                </button>
                <span className="btn-separator"></span>
                <button className="player-btn" onClick={nextAudio}>
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <audio ref={audioPlayer} src={tracks[currentTrackIndex]} />
    </div>
  );
};

export default NowPlaying;