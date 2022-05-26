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
        fetch(`https://arcane-shore-13420.herokuapp.com/readmyorders?email=${user?.email}`).then(res =>
            res.json()
        )
    )
    if (isLoading || isLoading) {
        return <Spinner></Spinner>
    }



    return (
        <>
            <div class="widget dashboard-container my-adslist">
                <div class="row">
                    <div class="col-md-12">
                        <div class="section-title">
                            <h2>My Orders: {orders?.length}</h2>

                        </div>
                    </div>
                </div>

                <table class="table table-responsive product-dashboard-table">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product Title</th>
                            <th class="text-center">TRID</th>
                            <th class="text-center">Action</th>
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