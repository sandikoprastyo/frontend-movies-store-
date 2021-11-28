import React from 'react';
import '../../src/assets/App.scss';
import { Header } from '../components';

function Cart(props) {
  return (
    <React.Fragment>
      <Header />
      <div className='wrapper-home'>
        Cart { props.name}
        <button onClick={() => props.setCart(false)}>Back</button>
      </div>
    </React.Fragment>
  );
}

export default Cart;
