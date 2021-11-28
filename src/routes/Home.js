import React from 'react';
import '../../src/assets/App.scss';
import { Header } from '../components';
import Movies from '../components/Movies';

function Home() {

  return (
    <React.Fragment>
      <Header/>
      <div className='wrapper-home'>
        <Movies/>
      </div>
    </React.Fragment>
  );
}

export default Home;
