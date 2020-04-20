import React from 'react';
import { useSelector } from 'react-redux';

// eslint-disable-next-line import/no-unresolved
import './Home.style.scss';

const Home = () => {
  const title = useSelector((state) => state.home.title);

  return (
    <div className='home-container'>
      <h1>{title}</h1>
    </div>
  );
};

export default Home;
