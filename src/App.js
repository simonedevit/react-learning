import './App.css';
import Movie from './example/Movie';

const movies = [
  { title: 'Prey', year: 2022, rating: 4, liked: true },
  { title: 'Daredevil', year: 2019, rating: 5, liked: false },
  { title: 'Luna', year: 2000, rating: 1, liked: false },
  { title: 'Test', year: 1999, rating: 10, }
]

function App() {

  return (
    <div className="App">
      {movies.filter(item => item.rating >= 4 ).map(item => <Movie movie={item} />)}
    </div>
  );
}

export default App;
