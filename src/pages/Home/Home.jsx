import React from 'react';
import { Helmet } from 'react-helmet';
// import { Helmet, HelmetProvider } from 'react-helmet-async';


const Home = () => {
    return (

        <div>
            <Helmet>
                <title>Home - Camp All Star</title>
            </Helmet>
            <h1>home page</h1>

        </div>
    );
};

export default Home;