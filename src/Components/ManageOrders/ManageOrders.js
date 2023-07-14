import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import Spinner from '../Spinner/Spinner';
import OrderTableRow from './OrderTableRow';

const ManageOrders = () => {
    const { isLoading, error, data: orders ,refetch} = useQuery('ordersdata', () =>
    fetch('https://vintagewheels.onrender.com/readorders').then(res =>
        res.json()
    )
)






if (isLoading) {
    return <Spinner></Spinner>
}
return (
  <>
    <div className="widget dashboard-container my-adslist">
            <h3 className="widget-header text-center">Total Orders : {orders?.length}</h3>
            <div className="table-responsive ">
            <table className="table product-dashboard-table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Product Information</th>
                        <th className="text-center">Customer Information</th>
                        <th className="text-center">Action</th>
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