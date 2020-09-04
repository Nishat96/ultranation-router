import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Country = (props) => {
    const {name, capital, region, alpha3Code} = props.country;
    const history = useHistory();
    const handleClick = (countryName) =>{
        const url = `/country/${countryName}`;
        history.push(url);
    }
    const countryStyle = {
        border: '1px solid red',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }
    return (
        <div style={countryStyle}>
            <h2>Name: {name}</h2>
            <h3>Capital: {capital}</h3>
            <h3> Region: {region}</h3>
            <h3> alpha3Code: {alpha3Code} </h3>
            <p><Link to={`/country/${name}`}>Detail of {name} 
            <button onClick={() => handleClick(name)}>Click me</button>
            </Link> </p>
          
          
        </div>
    );
};

export default Country;