import React from 'react';
import Navbar from '../components/Navbar';
import BackgroundRandom from '../components/BackgroundRandom';
import SetNewMovies from '../components/SetNewMovies';



const Home = () => (
  <div className='w-full'>
    <Navbar />
    <BackgroundRandom />
    <SetNewMovies />
  </div>
);

export default Home;