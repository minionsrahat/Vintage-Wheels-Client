import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Modal from '../Modal/Modal';
import Spinner from '../Spinner/Spinner';
import ProductTableRow from './ProductTableRow';

const ManageProducts = () => {
    const { isLoading, error, data: products,refetch } = useQuery('productsData', () =>
        fetch('https://vintagewheels.onrender.com/readtoolsData').then(res =>
            res.json()
        )
    )



    
    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
      <>
        <div className="widget dashboard-container my-adslist">
                <h3 className="widget-header text-center">Total Products : {products?.length}</h3>
                <table className="table table-responsive product-dashboard-table">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product Information</th>
                            <th className="text-center">Category</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                     {products.map(product=>{
                         return <ProductTableRow refetch={refetch}  key={product._id} product={product}></ProductTableRow>
                     })}
                    </tbody>
                </table>
            </div>
      </>
    );
};

export default ManageProducts;