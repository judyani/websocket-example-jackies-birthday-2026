import{ useState }
import './App.css'
import MovieDisplay from "./components?MovieDisplay.jsx";
function App() {
  const movies = ["Saw", "Jurassic Park", "Matrix", "Good Boy", "Coraline"];
  return (
    <>
      <h1>Movie Page</h1>
      {movies.map((movie)) => (
      <MovieDisplay movieTitle={ } movieDirector={ }></MovieDisplay>
       
      ;
    </>
  )
};

export default App;
             