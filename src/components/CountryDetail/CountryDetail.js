import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './CountryDetail.css';

const CountryDetail = () => {
    const { countryName } = useParams();
    const [country, setCountry] = useState([]);

    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
            .then(response => response.json())
            // .then(data =>console.log(data[0]))
            .then(data => setCountry(data[0]))
    }, [])

    const { capital, flag, population, region, area, timezones, callingCodes } = country;
    return (
        <div className="country-background">
            <div className="country-detail">
                <h2>Country Detail of {countryName}</h2>
                <img src={flag} />
                <h3>Capital:&#8594; {capital}</h3>
                <h3>Population:&#8594; {population}</h3>
                <h3>Region:&#8594; {region}</h3>
                <h3>Area:&#8594; {area}</h3>
                <h3>Timezones:&#8594; {timezones}</h3>
                <h3>Calling Codes:&#8594; {callingCodes}</h3>
            </div>
        </div>
    );
};

export default CountryDetail;