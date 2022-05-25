import React from 'react';
import Banner from '../Banner/Banner';
import BussinessSummary from '../BussinessSummary/BussinessSummary';
import ProductList from '../ProductList/ProductList';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <>
         <Banner></Banner>
         <BussinessSummary></BussinessSummary>
         <ProductList></ProductList>
         <Reviews></Reviews>
        </>
       
    );
};

export default Home;