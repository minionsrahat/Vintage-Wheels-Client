import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Product from '../Product/Product';
import './ProductList.css'
import Spinner from '../Spinner/Spinner';
import { useQuery } from 'react-query';

const ProductList = () => {
    // const [product, setProduct] = useState([]);
    const { isLoading, error, data: products } = useQuery('productsData', () =>
        fetch('https://vintagewheels.onrender.com/readtoolsData?limit=6').then(res =>
            res.json()
        )
    )
    if (isLoading)
    {
        return <Spinner></Spinner>
    }  
    return (
        <>
            <section className="popular-deals section bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title">
                                <h2>Trending Products</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                        {
                            products.map((product)=>{
                               return <Product key={product._id} product={product}></Product>
                            })
                        }



                    </div>
                </div>
            </section>

        </>
    );
};

export default ProductList;