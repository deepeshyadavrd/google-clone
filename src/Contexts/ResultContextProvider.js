import React, { createContext, useContext, useState } from 'react';

const resultContext = createContext();
const baseUrl = 'https://google-search74.p.rapidapi.com/';

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    // /videos, /search, /images
    const getResults = async(type) => {
        setIsLoading(true);

        const response = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headers: {
                'x-user-agent': 'desktop',
                'x-rapidapi-host': 'google-search74.p.rapidapi.com',
                'x-rapidapi-key': '537ce21098msh727b0e12555e9f5p16991ejsncbeb99969277'
            }
        });

        const data = await response.json();

        setResults(data);
        setIsLoading(false);
    }
}