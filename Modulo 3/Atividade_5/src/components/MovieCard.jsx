import { saveLocalStorage, getLocalStorage } from "../service/LocalStorageService"
import { useState } from "react"
import { Link } from "react-router-dom"


function MovieCard({ movie }) {

    const [favorites, setFavorites] = useState([])
    const [isFavorite, setIsFavorite] = useState(() => {
        const storage = getLocalStorage({ key: "favoritos" }) || []
        return !storage.find(m => m.id === movie.id)
    })
    const imgMovie = `https://image.tmdb.org/t/p/original/${movie.poster_path}`

    const addFavorite = (movie) => {
        const storage = getLocalStorage({ key: "favoritos" })
        if (!storage || !storage.find(m => m.id === movie.id)) {
            let newFavorites = [...storage, { id: movie.id, title: movie.title, poster_path: movie.poster_path }]
            setFavorites(newFavorites)
            saveLocalStorage({ key: "favoritos", value: newFavorites })
        }

    }

    const removeFavorite = (id) => {
        const storage = getLocalStorage({ key: "favoritos" })
        let newFavorites = storage.filter(movie => movie.id !== id)
        saveLocalStorage({ key: "favoritos", value: newFavorites })
    }

    const toggleFavorites = (movie) => {
        if (isFavorite) {
            addFavorite(movie)
            setIsFavorite(false)
        } else {
            removeFavorite(movie.id)
            setIsFavorite(true)
        }

    }

    return (
        <>
            <div className="card" key={movie.id}>
                <img className="img-movie" src={imgMovie} alt="" />
                <p>{movie.title}</p>
                <p>(
                    {
                        movie.release_date ?
                            (<span> {new Date(movie.release_date).toLocaleDateString('pt-BR')}</span>)
                            : 'N/A'
                    })
                </p>
                <Link to={`/sobre/${movie.id}`}><button>Detalhes</button></Link>
                {isFavorite ? (
                    <button onClick={() => toggleFavorites(movie)}>Adicionar aos Favoritos</button>
                ) : (
                    <button onClick={() => toggleFavorites(movie)}>Remover dos Favoritos</button>
                )}
            </div>
        </>
    )

}

export default MovieCard