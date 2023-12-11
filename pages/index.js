import React from 'react';
import Header from '../components/Header';
import CalculateTollButton from '../components/CalculateTollButton';
import LeafletMap from '../components/LeafletMap';

function Home() {
  return (
    <div>
      <Header />
      <CalculateTollButton />
      <LeafletMap />
    </div>
  );
}

export default Home;
