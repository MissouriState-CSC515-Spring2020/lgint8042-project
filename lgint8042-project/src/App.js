import React from 'react';
import Categories from './Categories'; 
import Title from './Title'; 
import './App.css';
import RecentPhotos from './RecentPhotos';

function App() {
  return (
    <div>
      <Title name="Recent Photos" />
      <Categories />
      <RecentPhotos />
    </div>
  );
}

export default App;
