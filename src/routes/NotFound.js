import React from 'react';
import '../../src/assets/App.scss';
import { Header } from '../components';

function NotFound() {

  return (
      <React.Fragment>
          <Header/>
      <div className='wrapper-home'>404 page not found</div>
    </React.Fragment>
  );
}

export default NotFound;
