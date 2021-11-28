import React from 'react';
import '../../src/assets/App.scss';
import { Movies, Header, Cart } from '../components';

function Home(props) {
  const [isCart, setIsCart] = React.useState(false);
  const [idMovie, setIdMovie] = React.useState(null);

  const [subscribe, setSubscribe] = React.useState(0);

  const Handlesubscribe = () => {
    setSubscribe(
      subscribe + 1
    )
  }
  
  return (
    <React.Fragment>
      <Header subscribe={subscribe}/>
      <div className='wrapper-home'>
        {isCart ? (
          <Cart setIsCart={setIsCart} idMovie={idMovie}/>
        ) : (
            <Movies setIsCart={setIsCart} setIdMovie={setIdMovie} Handlesubscribe={Handlesubscribe}/>
        )}
      </div>
    </React.Fragment>
  );
}

export default Home;
