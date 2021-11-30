import React from 'react';
// import movies from '../../src/assets/dummy/movies.json';
import '../assets/movies.scss';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const Movies = (props) => {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies();

  const [movies, setMovies] = React.useState([]);
  const [isLogin, setIsLogin] = React.useState(true);


  const handleMembership = (e) => {
    if (isLogin) {
      navigate('/login')
    } else {
       props.setIsCart(true);
       props.setIdMovie(e);
    }
  }
 
  React.useEffect(() => {
    if (cookies.token !== undefined) {
      setIsLogin(false)
    } else {
      setIsLogin(true)
    }
    
    axios.get('http://localhost:5000/movies').then((res) => {
      if (res.data.status === 200) {
        setMovies(res.data.data);
      }
    });
  }, [cookies.token]);
  
  
  return (
    <React.Fragment>
      {movies.map((element, index) => {
        return (
          <div key={index}>
            <div className='wrapper-card'>
              <div className='wrapper-card-left'>
                <img src={element.posterurl} alt='img' />
              </div>
              <div className='wrapper-card-right'>
                <div>
                  <b>Title</b> {element.title}
                </div>
                <div>
                  <b>Actors</b> {element.actors.toString()}
                </div>
                <div>
                  <b>Rating</b> {element.contentRating}
                </div>
                <div>
                  <b>Genres</b> {element.genres.toString()}
                </div>
                <div>
                  <b>Year</b> {element.year}
                </div>
                <div>
                  <b>Story Line</b> {element.storyline}
                </div>
                <div>
                  <b>Release Date</b> {element.releaseDate}
                </div>
                <br />
                <div className='action-button'>
                  <button onClick={() => handleMembership(element._id)}>
                    Membership
                  </button>
                  <button onClick={props.Handlesubscribe}>Subscribe</button>
                </div>
              </div>
            </div>
            <br />
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Movies;
