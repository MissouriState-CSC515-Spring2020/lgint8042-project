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
          <Route path="/categories" component={Categories} />
          <Route path="/album" component={() => <Album title="Trip to Austria"/>} />
          <Route path="/image" component={() => <Image number="4817" date="March 13, 2016" location="Salzburg Cathedral" dimensions="3264x2448" type="JPEG"/>} />
        </div>
      </HashRouter>
  );
}

export default App;
