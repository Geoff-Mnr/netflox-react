import React from 'react';
import Navbar from '../components/Navbar';
import BackgroundRandom from '../components/BackgroundRandom';
import SetNewMovies from '../components/ListNewMovies';
import SetComedyMovies from '../components/ListComedyMovies';



const Home = () => (
  <div className='w-full'>
    <Navbar />
    <BackgroundRandom />
    <SetNewMovies />
    <SetComedyMovies />
  </div>
);

export default Home;