import { useEffect, useState } from 'react'

import MovieCard from './MovieCard';
import './App.css';
import searchIcon from './search.svg';


const apiURL = 'http://www.omdbapi.com?apikey=bea81990'


const App = () => {

    const [movies, setMovies] = useState([]);

    const [searchTerm, setSearchTerm] = useState();

    const searchMovies = async (title) => {
        const response = await fetch(`${apiURL}&s=${title}`);
        const data = await response.json();
		            
        setMovies(data.Search);
    }
