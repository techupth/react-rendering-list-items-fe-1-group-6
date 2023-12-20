import "./App.css";
import movies from "./data/movies";


function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        <h1>Movie List Section</h1>
        {
        movies.map((movie , index) => {
          return  <div key={index} className="movies-card">
                    <div className="movies-img">
                      <img src={movie.image} alt="movie image" width={102} height={100} />
                    </div>
                    <div className="movies-details">
                      <h4>{movie.title}</h4>  
                      <p>Year: {movie.year}</p>
                      <p>Runtime: {movie.runtime} Mins</p>
                      <p>Genres: {movie.genres.map((genres)=> <span>{genres}</span>)}</p>
                      <p>IMDB Rating: {movie.imdbRating} </p>
                      <p>IMDB Votes: {movie.imdbVotes}</p>
                    </div>
                  </div>
        })
        }

      </section>
    </div>
  );
}

export default App;
