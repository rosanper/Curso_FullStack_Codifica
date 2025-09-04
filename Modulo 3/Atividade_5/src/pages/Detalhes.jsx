import { useParams } from "react-router-dom"
import { getOneMovie, getMovieCastAndCrew } from "../service/ApiService"
import { useState, useEffect } from "react"
import "./style/Detalhes.css"
import { Link } from "react-router-dom"

export default function Details() {
  const { movieId } = useParams()
  const [movie, setMovie] = useState({ genres: [] })
  const [cast, setCast] = useState([])
  const [crew, setCrew] = useState([])
  const imgMovie = movie.poster_path
    ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
    : ""

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await getOneMovie(movieId)
        setMovie(data)
      } catch (err) {
        throw new Error("Error loading movie info:", err.message)
      }
    }

    const fetchCastAndCrew = async () => {
      try {
        const data = await getMovieCastAndCrew(movieId)
        setCast(data.cast)
        setCrew(data.crew)
      } catch (err) {
        throw new Error("Error loading cast:", err.message)
      }
    }

    fetchMovie()
    fetchCastAndCrew()
  }, [movieId])

  return (
    <div className="details-container">
      <Link to={'/'}><button>Voltar para Home</button></Link>
      <h1 className="main-title">{movie.title}</h1>
      <div className="details-flex">
        <div className="poster-wrapper">
          {imgMovie && (
            <img
              className="poster-img"
              src={imgMovie}
              alt={`Poster of ${movie.title}`}
            />
          )}
        </div>
        <div className="info-wrapper">
          <h2>
            {movie.title} ({movie.original_title})
          </h2>
          <ul className="info-list">
            <li>Lançamento: 
              {
                movie.release_date ?
                  (<span> {new Date(movie.release_date).toLocaleDateString('pt-BR')}</span>)
                  : 'N/A'
              }
            </li>
            <li>
              Genero: {movie.genres?.map((g) => g.name).join(", ")}
            </li>
            <li>
              Classificação:{" "}
              {movie.adult ? "Para Adultos" : "Todas as Idades"}
            </li>
            <li>
              Avaliação: {movie.vote_average} ({movie.vote_count} votes)
            </li>
          </ul>
          <h3>Direção</h3>
          <ul className="cast-list">
            {crew
              ?.filter((director) => director.job === "Director")
              .slice(0, 10)
              .map((director) => (
                <li key={director.id}>{director.name}</li>
              ))}
          </ul>

          <h3>Atores</h3>
          <ul className="cast-list">
            {cast
              ?.filter((actor) => actor.known_for_department === "Acting")
              .slice(0, 10)
              .map((actor) => (
                <li key={actor.id}>{actor.name}</li>
              ))}
          </ul>
        </div>
      </div>

      <div className="synopsis-wrapper">
        <h3>Sinopse:</h3>
        <br></br>
        <p>{movie.overview}</p>
      </div>
    </div>
  )
}
