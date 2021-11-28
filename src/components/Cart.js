import React from 'react';
import '../../src/assets/App.scss';
import movies from '../../src/assets/dummy/movies.json';

function Cart(props) {
  const [cart, setCart] = React.useState();
  const [payment, setPayment] = React.useState(false);

  //payment process
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState('');
  const [card, setCard] = React.useState('');

  React.useEffect(() => {
    let data = movies.find((element) => element.id === props.idMovie);
    setCart(data);
  }, [props.idMovie]);

  const handlePaymentProcess = () => {
    if (name !== '' && email !== '' && card !== '') {
      alert('Payement succes');
    }
    console.log({ name, email, card });
  };

  const handlePayment = (val) => {
    setPayment(val);
  };

  const CartCard = () => {
    return (
      <React.Fragment>
        {!payment ? (
          <div className='wrapper-card'>
            <div className='wrapper-card-left'>
              <img src={cart.posterurl} alt='img' />
            </div>
            <div className='wrapper-card-right'>
              <div>
                <b>Title</b> {cart.title}
              </div>
              <div>
                <b>Actors</b> {cart.actors.toString()}
              </div>
              <div>
                <b>Rating</b> {cart.contentRating}
              </div>
              <div>
                <b>Genres</b> {cart.genres.toString()}
              </div>
              <div>
                <b>Year</b> {cart.year}
              </div>
              <div>
                <b>Story Line</b> {cart.storyline}
              </div>
              <div>
                <b>Release Date</b> {cart.releaseDate}
              </div>
              <br />
              <div className='action-button'>
                <button onClick={() => props.setIsCart(false)}>Back</button>
                <button onClick={() => handlePayment(true)}>Payment</button>
              </div>
            </div>
          </div>
        ) : (
          <Payment />
        )}
      </React.Fragment>
    );
  };

  const Payment = () => {
    return (
      <div className='wrapper-payment'>
        <input
          type='text'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='text'
          placeholder='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='text'
          placeholder='Credit Card or Debit'
          value={card}
          onChange={(e) => setCard(e.target.value)}
        />
        <button onClick={() => handlePayment(false)}>Back</button>
        <button onClick={handlePaymentProcess}>Payment</button>
      </div>
    );
  };

  return (
    <React.Fragment>
      <div className='wrapper-home'>
        <div className='title'>
          <h1>{!payment ? 'Cart' : 'Payment'}</h1>
        </div>
        {cart === undefined ? 'loading..' : <CartCard />}
      </div>
    </React.Fragment>
  );
}

export default Cart;
