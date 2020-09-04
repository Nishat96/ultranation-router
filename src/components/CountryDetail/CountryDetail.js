import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const CountryDetail = () => {
    let {countryName} = useParams();
    const [country, setCountry] = useState([]);
    useEffect (() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
        .then(res => res.json())
        .then (data => setCountry(data[0]));
    }, [])
    // const {name, capital, region} = country
    return (
        
        <div>
            
            <h4>This is detail of: {countryName}</h4>
            <p>Name: {country.name}</p>
            <p>Capital: {country.capital}</p>
            <p>Region: {country.region}</p>
           

        </div>
    );
};

export default CountryDetail;