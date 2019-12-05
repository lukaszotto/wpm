import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <section>
            <h1 className="center">404</h1>
            <p className="center">Go back <Link to={'/'}>home</Link></p>
        </section>

    )
}

export default Error;