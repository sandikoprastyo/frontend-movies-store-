import React from 'react';
import movies from '../../src/assets/dummy/movies.json';
import '../assets/movies.scss';
import { Link } from 'react-router-dom';

const Movies = () => {
  console.log(movies);
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
                  <Link to='/cart'>
                    <button>Membership</button>
                  </Link>

                  <button>Subscribe</button>
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
