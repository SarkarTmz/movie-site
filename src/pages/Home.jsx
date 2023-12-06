import React, {  useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../styles/Home.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import axios from "axios"
import MovieList from '../components/MovieList';

const Home = () => {

  const [popularMovies,setPopularMovies] = useState([])

  const fetchBlogs = async()=>{
    const response = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=dee7f825f4673a8a246b83aaa3cdbf86")
    if(response.status == 200){
      // console.log(response.data)

      const { results } = response.data;
        if (Array.isArray(results)) {
          setPopularMovies(results);
        } else {
          console.error('Unexpected API response format. Results is not an array:', results);
        }
    }
}

useEffect(()=>{
fetchBlogs()
},[])

  return (
   <>
    <div className="poster">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
       >
   
        {
          popularMovies.map((movie, index) => (
            <>
              <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`}>
                <div className="posterImage">
                  <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                </div>
                <div className="posterImage__overlay">
                  <div className="posterImage__title">{movie ? movie.original_title : ""}</div>
                  <div className="posterImage__runtime">
                    {movie ? movie.release_date : ""}
                    <span className="posterImage__rating">
                      {movie ? movie.vote_average :""}
                    <i className="fas fa-star" />{" "}
                    </span>
                  </div>
                  <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                </div>
              </Link>
            </>
          ))
        }

     </Carousel>
     <MovieList/>
    </div>
   </>
  )
}

export default Home