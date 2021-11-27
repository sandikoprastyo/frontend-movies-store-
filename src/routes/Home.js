import React from 'react';
import '../../src/assets/App.scss';
import { Header } from '../components';

function Home() {

  return (
    <React.Fragment>
      <Header/>
      <div className='wrapper-home'>Home</div>
    </React.Fragment>
  );
}

export default Home;
