import { useEffect, useState } from 'react'
import {Container} from 'react-bootstrap'


const ShowDetails = ({match, history})=>{
const [movies, setMovies]= useState([])
useEffect (()=> {
    console.log(match.params.movieId)
fetchMovies()

}, []
)

const fetchMovies = async () => {
    let response = await fetch(
      `http://www.omdbapi.com/?apikey=a0871843&i=${match.params.movieId}`
    );
    let movies_json = await response.json();
    setMovies (movies_json)
  };

return (
    <Container>
        <h1>{movies.Title}</h1>
    </Container>
)
}


export default ShowDetails