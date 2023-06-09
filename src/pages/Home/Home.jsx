import React from 'react';
import { Helmet } from 'react-helmet';
import TopSlider from '../../components/TopSlider/TopSlider';
import PopularClasses from '../../components/PopularClasses/PopularClasses';
import PopularInstractors from '../../components/PopularInstractors/PopularInstractors';
import SuccessStory from '../../components/SuccessStory/SuccessStory';
import Banner from './Banner';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - Camp All Star</title>
            </Helmet>
            <Banner />
            <TopSlider />
            <PopularClasses />
            <PopularInstractors />
            <SuccessStory />
        </div>
    );
};

export default Home;