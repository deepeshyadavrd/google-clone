import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseUrl = 'https://api.serpstack.com/search?access_key=ac186cad2817d317200a4b98f4eaf58f';

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('javascript mastery');

    const getResults = async(type) => {
        setIsLoading(true);

        const response = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headers: {
                'x-user-agent': 'desktop',
                // 'x-rapidapi-host': 'google-search74.p.rapidapi.com',
                // 'access_key': 'ac186cad2817d317200a4b98f4eaf58f'
            }
        });

        const data = await response.json();

        console.log(data);
        
        setResults(data);
        setIsLoading(false);
        
    }

    return (
        <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading}}>
            {children}
        </ResultContext.Provider>
    )

}

export const useResultContext = () => useContext(ResultContext);