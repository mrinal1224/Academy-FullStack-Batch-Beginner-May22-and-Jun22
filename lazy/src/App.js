import logo from './logo.svg';
import './App.css';
import {useState , lazy , Suspense} from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Navbar from './components/Navbar';



const Home = lazy(()=> import('./pages/Home'))
const Products = lazy(()=> import('./pages/Products'))
const Testimonials = lazy(()=> import('./pages/Testimonials'))
const About = lazy(()=> import('./pages/About'))





function App() {

  // const [movies , setMovies] = useState([])

  // const getMovies = ()=>{
  //    import('./data').then((module)=>{
  //     console.log(module.moviesData)
  //     setMovies(module.moviesData)
  //    }) // Dynamic Importing
      
  // }



  return (
    <div className="App">
      {/* <h1>These are the Movies</h1>
      <button onClick={getMovies}>Show Movies</button>
      <p>{movies.length>0 ? JSON.stringify(movies) : ''}</p> */}
   <Suspense fallback={<h2>Loading....</h2>}>
      
       <BrowserRouter>

        <Navbar/>
    
       <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/testimonials' element={<Testimonials/>}/>
       </Routes>
     
       
       </BrowserRouter>
       </Suspense>

      
    </div>
  );
}

export default App;
