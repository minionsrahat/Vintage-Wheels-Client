import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import Spinner from '../Spinner/Spinner';
import OrderTableRow from './OrderTableRow';

const ManageOrders = () => {
    const { isLoading, error, data: orders ,refetch} = useQuery('ordersdata', () =>
    fetch('http://localhost:5000/readorders').then(res =>
        res.json()
    )
)






if (isLoading) {
    return <Spinner></Spinner>
}
return (
  <>
    <div class="widget dashboard-container my-adslist">
            <h3 class="widget-header text-center">Total Orders : {orders?.length}</h3>
            <div className="table-responsive ">
            <table class="table product-dashboard-table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Product Information</th>
                        <th class="text-center">Customer Information</th>
                        <th class="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                 {orders.map(order=>{
                     return <OrderTableRow refetch={refetch} key={order._id} order={order}></OrderTableRow>
                 })}
                </tbody>
            </table>
            </div>
           

        </div>
    
   
  </>
);
};

export default ManageOrders;