import './App.css';
import React from 'react';
import Home from './Home'; 
import { HashRouter, Route } from 'react-router-dom';
import Album from './Album';
import Image from './Image';
import Categories from './Categories';

function App() {
  return (
      <HashRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/playlists" component={Categories} />
          <Route path="/playlist/:playlistID/:title" component={Album} />
          <Route path="/video/:videoID" component={Image} />
        </div>
      </HashRouter>
  );
}

export default App;
