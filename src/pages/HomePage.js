import React from 'react';
import { Link } from 'react-router-dom';

function Homepage(props) {
    return (
        <div>
            <div>
                <Link to="/beers"> All beers</Link>
            </div>
            <div>
                <Link to="/random-beer"> Random beer</Link>
            </div>
            <div>
                <Link to="/new-beer"> Add new beer</Link>
            </div>
        </div>
    );
}

export default Homepage;