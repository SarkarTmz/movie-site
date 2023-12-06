import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../styles/MovieList.css'
import Card from '../components/Card'
import { useParams } from 'react-router-dom'

const MovieList = () => {
    
    const [movieList, setMovieList] = useState([])
    const {type} = useParams()

    useEffect(()=>{
        getData()
    }, [])

    useEffect(()=>{
        getData()
    }, [type])

        const fetchBlogs = async()=>{
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=dee7f825f4673a8a246b83aaa3cdbf86`)
            if(response.status == 200){
              // console.log(response.data)
        
              const { results } = response.data;
                if (Array.isArray(results)) {
                    setMovieList(results);
                } else {
                  console.error('Unexpected API response format. Results is not an array:', results);
                }
            }
        }


    const getData = () => {
        fetchBlogs(); // Invoke fetchBlogs here
      };

    useEffect(()=>{
        fetchBlogs()
        },[])

   
  return (
    <>
        <div className="movie__list">
            <h2 className='list__title'>{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    movieList.map(movie =>(
                        <Card movie={movie}/>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default MovieList