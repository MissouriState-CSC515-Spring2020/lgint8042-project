import './App.css';
import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

const Home = React.lazy(() => import('./Home'));
const Categories = React.lazy(() => import('./Categories'));
const Album = React.lazy(() => import('./Album'));
const Image = React.lazy(() => import('./Image'));

function App() {
  return (
      <HashRouter>
        <div>
          <React.Suspense fallback={<h1>Loading...</h1>}>
            <Route exact path="/" component={Home} />
            <Route path="/playlists" component={Categories} />
            <Route path="/playlist/:playlistID/:title" component={Album} />
            <Route path="/video/:videoID" component={Image} />
          </React.Suspense>
        </div>
      </HashRouter>
  );
}

export default App;
