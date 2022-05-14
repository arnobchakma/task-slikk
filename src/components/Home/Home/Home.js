import React from 'react';
import Faq from '../Faq/Faq';
import Features from '../Features/Features';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Review from '../Review/Review';
import Service from '../Service/Service';
import Teams from '../Teams/Teams';

const Home = () => {
    return (
        <div>
            <Header />
            <Service />
            <Features />
            <Teams />
            <Review />
            <Faq />
            <Footer />
        </div>
    );
};

export default Home;