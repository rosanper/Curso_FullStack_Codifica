import axios from "axios"

const apiKey = import.meta.env.VITE_TMDB_API_KEY

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiKey}` 
    }
}

export async function getMovies(page) {
    try {
        let url = `https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=${page}`
        const response = await axios.get(url, options)
        return response.data.results
    } catch (err) {
        throw new Error('Erro ao carregar filmes: ' + err.message)
    }
}

export async function getOneMovie(movie_id) {
    try {
        console.log(movie_id)
        let url = `https://api.themoviedb.org/3/movie/${movie_id}?language=pt-BR`
        const response = await axios.get(url, options)
        return response.data
    } catch (err) {
        throw new Error('Erro ao carregar filmes: ' + err.message)
    }
}

export async function getMovieCastAndCrew(movie_id) {
    try {
        console.log(movie_id)
        let url = `https://api.themoviedb.org/3/movie/${movie_id}/credits?language=pt-BR`
        const response = await axios.get(url, options)
        return response.data
    } catch (err) {
        throw new Error('Erro ao carregar filmes: ' + err.message)
    }
}