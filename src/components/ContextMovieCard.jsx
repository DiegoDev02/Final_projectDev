import { useEffect, useState } from "react";
import { get } from "../data/httpClient";
import { MovieCard } from "../components/MovieCard";
import "../components/ContextMovieCard.css";
export function ContextMovieCard() {
  const [movies, SetMovies] = useState([]);
  useEffect(() => { //useEffect es un hook que se ejecuta cuando el componente se monta en el DOM y se ejecuta una sola vez  
    get("/discover/movie").then((data) => {  //get es una funcion que se encuentra en httpClient.js y se le pasa como parametro la ruta de la api que se quiere consumir 
      SetMovies(data.results); //SetMovies es una funcion que se encarga de actualizar el estado de la variable movies y se le pasa como parametro el resultado de la peticion a la api
      
    });
  }, []);

  return (
    <ul className="container">
      {movies.map((movie) => (
        <MovieCard key={movie.id}  movie={movie} />
      ))}
    </ul>
  );
}
