import React from 'react';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import Header from '../components/Header';

function BeerDetailsPage(props) {
    const { beerId } = useParams();

    const [beer, setBeer] = useState([]);

    useEffect(() => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then((response) => {
                console.log("response.data", response.data);
                setBeer(response.data);
            });
    }, [beerId]);

    return (
        <div>
            <Header />
            <img src={beer.image_url} style={{ width: 200 }} alt={beer.name} />
            <p>{beer.name}</p>
            <p>{beer.tagline}</p>
            <p>{beer.first_brewed}</p>
            <p>{beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
        </div>
    );
}

export default BeerDetailsPage;