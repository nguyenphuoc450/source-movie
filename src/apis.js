import axios from 'axios'

const apiKey = 'ca9db50ca2980c6fdb17c30c80d5008b'
const originalPathImage = 'https://image.tmdb.org/t/p/original/'
const pathImageSmall = 'https://image.tmdb.org/t/p/w220_and_h330_face/'
const pathImageMedium = 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/'
const pathYoutube = 'https://www.youtube.com/embed/'

const apiConfig = {
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'Content-Type': 'application/json',
        // 'x-apikey': 'ca9db50ca2980c6fdb17c30c80d5008b',
    }
}
const movie = axios.create(apiConfig)

const getMovieList = movie.get(`list/1?page=1&api_key=${apiKey}`)

const getMoviePopular = movie.get(`movie/popular?api_key=${apiKey}`)

const getMovieTrending = (page = 1) =>
    movie.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}&page=${page}`)

const getMovieUpComming = (page = 1) =>
    movie.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&page=${page}`)

const getMovieDetailById = (id) =>
    movie.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)

const getMovieVideoById = (id) =>
    movie.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`)

const getMovieCreditById = (id) =>
    movie.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`)

const getMovieSimilarById = (id) =>
    movie.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apiKey}`)

const getMovieSearch = (text) =>
    movie.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${text}&page=1`)




export {
    originalPathImage,
    pathImageSmall,
    pathImageMedium,
    pathYoutube,
    getMovieList,
    getMoviePopular,
    getMovieTrending,
    getMovieUpComming,
    getMovieDetailById,
    getMovieVideoById,
    getMovieCreditById,
    getMovieSimilarById,
    getMovieSearch
}