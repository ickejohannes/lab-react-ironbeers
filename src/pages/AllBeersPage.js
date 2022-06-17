import React from 'react';
import Header from '../components/Header';
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

function AllBeers(props) {
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        axios
            .get("https://ih-beers-api2.herokuapp.com/beers")
            .then((response) => {
                console.log("response.data", response.data);
                setBeers(response.data);
            });
    }, []);

    return (
        <div>
            <Header/>
            <h3>All the beers</h3>
            {beers.map((beer) => (
                <div key={beer._id} className="card">
                    <img src={beer.image_url} style={{ width: 10 }} alt={beer.name} />
                    {beer.name}
                    {beer.tagline}
                    {beer.contributed_by}
                    <Link to="/beers/:beerId">Go to beer</Link>
                </div>
            ))}
        </div>
    );
}

export default AllBeers;