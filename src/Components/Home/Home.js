import React from 'react';
import Banner from '../Banner/Banner';
import BussinessSummary from '../BussinessSummary/BussinessSummary';
import ProductList from '../ProductList/ProductList';

const Home = () => {
    return (
        <>
         <Banner></Banner>
         <BussinessSummary></BussinessSummary>
        <ProductList></ProductList>
        </>
       
    );
};

export default Home;