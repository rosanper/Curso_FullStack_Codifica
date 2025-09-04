import { useContext, useEffect, useState } from 'react'
import './App.css'
import { ThemeContext } from './context/ThemeContext'
import {getMovies,getOneMovie} from './service/ApiService'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { saveLocalStorage, getLocalStorage } from "./service/LocalStorageService"
import MovieCard from './components/MovieCard';

function App() {

  const [movies, setMovies] = useState([])
  const { theme } = useContext(ThemeContext)
  const [page, setPage] = useState(1)
  const [favorites, setFavorites] = useState([])
  const [favoriteFilter, setFavoriteFilter] = useState(false)
  const [search, setSearch] = useState('')

  const moviesFilter = movies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()))
  const favoritesFilter = favorites
    ? favorites.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()))
    : []

  const fetchMovies = async () => {
    try {
      const data = await getMovies(page)
      setMovies(data)
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    fetchMovies()
  }, [page])

  const changeNextPage = async () => {
    setPage(page + 1)
  }

  const changePreviousPage = async () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }


  const getFavorites = () => {
    const obj = { 'key': 'favoritos' }
    const storage = getLocalStorage(obj)
    setFavorites(storage)
    setFavoriteFilter(true)
  }

  const toggleFavoritesBtn = () => {
    if (favoriteFilter) {
      setFavoriteFilter(false)
    } else {
      getFavorites()
      setFavoriteFilter(true)
    }
  }

  return (
    <>
      <div className={theme === 'dark' ? 'dark-theme' : ''}>
        <div className='flex-row'>
          <h1>Filmes</h1>
          <div className='flex-row'>
            <input
              type="text"
              placeholder="Buscar"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              required
            />
            {
              !favoriteFilter ? (
                <button onClick={toggleFavoritesBtn}>Favoritos</button>
              ) : (
                <button onClick={toggleFavoritesBtn}>Todos</button>
              )
            }
          </div>
        </div>
        <div className='cards-box'>
          {favoriteFilter ? (
            favoritesFilter.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))
          ) : (
            moviesFilter.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))
          )}
        </div>
        <div className='flex-row'>
          {!favoriteFilter && (
            <>
              <button onClick={changePreviousPage}><FaChevronLeft size={18} /></button>
              <p className='page'>{page}</p>
              <button onClick={changeNextPage}><FaChevronRight size={18} /></button>
            </>
          )
          }

        </div>

      </div>

    </>
  )
}

export default App
