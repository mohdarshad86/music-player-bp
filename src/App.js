import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { songs } from './songs';
import './App.css'

function App() {
  const [currentSong, setCurrentSong] = useState(songs[0]);
  return (
    <div className="App">
      <ul>
        {songs.map((song, index) => (
          <li key={index}>
            <img src={song.cover} alt="Album cover" />
            <div>
              <h3>{song.title}</h3>
              <p>{song.artist}</p>
              <p>{song.album}</p>
            </div>
            <button onClick={() => setCurrentSong(song)}>Play</button>
          </li>
        ))}
      </ul>
      <div className='player'>
        <ReactAudioPlayer src={currentSong.url} autoPlay />
        <h2>{currentSong.title}</h2>
        <p>{currentSong.artist}</p>
        <p>{currentSong.album}</p>
        <button onClick={() => setCurrentSong(songs[(songs.indexOf(currentSong) + songs.length - 1) % songs.length])}>Previous</button>
        <button onClick={() => setCurrentSong(songs[(songs.indexOf(currentSong) + 1) % songs.length])}>Next</button>
      </div>

    </div>
  );
}

export default App;
