import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase';
import Spinner from '../Spinner/Spinner';
import MyOrderRow from './MyOrderRow';

const MyOrders = () => {

    const [user, loading] = useAuthState(auth)
    const token = localStorage.getItem('accessToken')



    const { isLoading, error, data: orders, refetch } = useQuery(['myordersdata', user], () =>
        fetch(`https://vintagewheels.onrender.com/readmyorders?email=${user?.email}`).then(res =>
            res.json()
        )
    )
    if (isLoading || isLoading) {
        return <Spinner></Spinner>
    }



    return (
        <>
            <div className="widget dashboard-container my-adslist">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h2>My Orders: {orders?.length}</h2>

                        </div>
                    </div>
                </div>

                <table className="table table-responsive product-dashboard-table">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product Title</th>
                            <th className="text-center">TRID</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => {
                            return <MyOrderRow refetch={refetch} key={order._id} order={order}></MyOrderRow>
                        })}
                    </tbody>
                </table>

            </div>

        </>
    );
};

export default MyOrders;