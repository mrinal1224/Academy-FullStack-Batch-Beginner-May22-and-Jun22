import logo from './logo.svg';
import './App.css';
import {useState} from 'react'



function App() {

  const [movies , setMovies] = useState([])

  const getMovies = ()=>{
     import('./data').then((module)=>{
      console.log(module.moviesData)
      setMovies(module.moviesData)
     }) // Dynamic Import
      
  }
  return (
    <div className="App">
      <h1>These are the Movies</h1>
      <button onClick={getMovies}>Show Movies</button>
      <p>{movies.length>0 ? JSON.stringify(movies) : ''}</p>

      
    </div>
  );
}

export default App;
