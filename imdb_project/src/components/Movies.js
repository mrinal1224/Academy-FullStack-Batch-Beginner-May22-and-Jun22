import React, { useEffect, useState } from "react";

import axios from "axios";

import Pagination from "./Pagination";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [watchList, setWatchList] = useState([]);
  const [hovered , setHovered] = useState('')



  // Pagination handlers
  const onNext = () => {
    setPageNum(pageNum + 1);
  };

  const onPrev = () => {
    if (pageNum > 1) {
      setPageNum(pageNum - 1);
    }
  };

  // WatchList Handlers

  const addToWatchList = (movie) => {
    const newWatchList = [...watchList, movie];
    setWatchList(newWatchList);
    localStorage.setItem('imdb' , JSON.stringify(newWatchList) )

  };

  const removeFromWatchList = (movie) => {
    const filteredWatchList = watchList.filter((m) => {
      return (m.id!= movie.id);
    });

    setWatchList(filteredWatchList);
    localStorage.setItem('imdb' , JSON.stringify(filteredWatchList))
  };

 // Hovering on movie cards
  const showButton = (id)=>{
      setHovered(id) // 2
  }

  const hideButton = ()=>{
     setHovered('')
  }


  //console.log(watchList)

  useEffect(() => {


    (function () {

      let moviesFromLS = localStorage.getItem('imdb')
      moviesFromLS = JSON.parse(moviesFromLS) || []
      setWatchList(moviesFromLS)

      axios
        .get(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=ed9945885ba0c6f7a7edc57b379191ae&page=${pageNum}`
        )
        .then((res) => {
          setMovies(res.data.results);
          console.log(res.data.results)
        });
    })();
  }, [pageNum]);

  return (
    <div>
      <div className="text-2xl mb-8 font-bold text-center">Trending Movies</div>

      <div className="flex flex-wrap">
        {movies.map((movie) => {
          return (
            <div

              onMouseOver={()=> showButton(movie.id)}
              onMouseLeave={()=> hideButton()}
              key={movie.id}
              className="w-[200px] h-[35vh] bg-center bg-cover rounded-xl m-4 md:h[40vh] md:w[200px] hover:scale-110 duration-300 relative flex items-end"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/t/p/w500/${movie.poster_path})`,
              }}


            >
              <div className="text-2xl p-2 bg-gray-900 rounded-2xl absolute right-2 top-2"
               style={{display : hovered == movie.id ? 'block' : 'none'}}
              >
                {watchList.includes(movie) == false ? (
                  <div onClick={() => addToWatchList(movie)}> 😍 </div>
                ) : (
                  <div onClick={() => removeFromWatchList(movie)}>❌</div>
                )}
              </div>

              <div className="text-white font-bold text-center w-full bg-gray-900 bg-opacity-60">
                {movie.title}
              </div>
            </div>
          );
        })}
      </div>

      <Pagination
        pageNumProp={pageNum}
        onNextProp={onNext}
        onPrevProp={onPrev}
      ></Pagination>
    </div>
  );
}

export default Movies;
