import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Country.css'

const Country = (props) => {
    const { name, capital } = props.country;
    const history = useHistory();

    function handleClick(countryName) {
        const url = `country/${countryName}`
        history.push(url);
      }

    return (
        <div className="country-style">
            <h4>Country Name: {name}</h4>
            <p>Capital: {capital}</p>
            <Link to=  {`/country/${name}`}> Show Details of Country </Link>
            <br/>
            <button onClick={()=>handleClick(name)}>Show Details of Country</button>
        </div>
    );
};

export default Country;