import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Product from '../Product/Product';
import './ProductList.css'
import Spinner from '../Spinner/Spinner';
import { useQuery } from 'react-query';

const ProductList = () => {
    // const [product, setProduct] = useState([]);
    const { isLoading, error, data: products } = useQuery('repoData', () =>
        fetch('http://localhost:5000/readtoolsData?limit=6').then(res =>
            res.json()
        )
    )
    if (isLoading)
    {
        return <Spinner></Spinner>
    }  
    return (
        <>
            <section class="popular-deals section bg-gray">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="section-title">
                                <h2>Trending Ads</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas,
                                    magnam.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="row">

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