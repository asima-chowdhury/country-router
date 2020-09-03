import React, { useState, useEffect } from 'react';
import Country from '../Country/Country';
import './Home.css';
const Home = () => {

    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <div className="home-style">
            <h2>Total Country: {countries.length}</h2>
            {
                countries.map(country => <Country country={country} key={country.alpha3Code}></Country>)
            }
        </div>
    );
};

export default Home;