// Importamos algunas funciones y componentes necesarios desde librerías externas.
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../data/httpClient";
import { getMovieImg } from "../utils/getMovieImg";
import "../pages/MovieDetails.css"

// Creamos un nuevo componente llamado MovieDetails.
export function MovieDetails() {
  // Usamos el hook useParams para obtener el parámetro "movieId" de la URL.
  const { movieId } = useParams();

  // Definimos dos estados: uno para almacenar la información de la película y otro para los géneros de la película.
  const [movie, setMovie] = useState([]);
  const [generos, setGeneros] = useState([]);

  // Utilizamos useEffect para cargar la información de la película y los géneros cuando el componente se monta o cuando el parámetro "movieId" cambia.
  useEffect(() => {
    // Hacemos una llamada a la función get, que se comunica con un servidor y obtiene la información de la película utilizando el "movieId".
    get("/movie/" + movieId).then((data) => {
      // Una vez que recibimos la información de la película, la almacenamos en el estado "movie".
      setMovie(data);
      // Además, tomamos el primer género de la película y lo almacenamos en el estado "generos".
      setGeneros(data.genres[0]);
    });
  }, [movieId]);

  // Utilizamos una función llamada getMovieImg para obtener la URL de la imagen de la película en base al poster_path y un tamaño de 500px.
  const imageUrl = getMovieImg(movie.poster_path, 500);

  // Finalmente, renderizamos la información de la película en la página.
  return (
    <div className="detailsContainer">
      {/* Mostramos la imagen de la película utilizando la URL que obtuvimos anteriormente. */}
      <img src={imageUrl} alt={movie.title} className="col movieImage" />
      <div className="col movieDetails">
        {/* Mostramos el título de la película. */}
        <p className="title">
          <strong>Título: </strong>
          {movie.title}
        </p>
        {/* Mostramos el género de la película. */}
        <p>
          <strong>Género: </strong>
          {generos.name}
        </p>
        {/* Mostramos la descripción de la película. */}
        <p>
          <strong>Descripción: </strong>
          {movie.overview}
        </p>
      </div>
    </div>
  );
}

