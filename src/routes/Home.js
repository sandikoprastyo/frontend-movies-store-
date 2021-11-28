import React from 'react';
import '../../src/assets/App.scss';
import { Movies, Header, Cart } from '../components';

function Home(props) {
  const [isCart, setIsCart] = React.useState(false);
  const [idMovie, setIdMovie] = React.useState(null);

  return (
    <React.Fragment>
      <Header />
      <div className='wrapper-home'>
        {isCart ? (
          <Cart setIsCart={setIsCart} idMovie={idMovie}/>
        ) : (
            <Movies setIsCart={setIsCart} setIdMovie={ setIdMovie}/>
        )}
      </div>
    </React.Fragment>
  );
}

export default Home;
