import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../Spinner/Spinner';

const MyOrderRow = (props) => {
    const { product_id, quantity, phone, address } = props.order
    const { isLoading: productLoading, data: product } = useQuery(['productdata',product_id], () =>
        fetch(`http://localhost:5000/readSingleToolsData/${product_id}`).then(res =>
            res.json()
        )
    )
    if (productLoading) {
		return <Spinner></Spinner>
	}
    return (
        <>
            <tr>
                <td class="product-thumb">
                    <img width="80px" height="auto" src={product.img} alt="" /></td>
                <td class="product-details">
                    <h3 class="title">{product.name}</h3>
                    <span class="add-id"><strong>Quantity:</strong> {quantity}</span>
                    <span><strong>Phone: </strong>{phone} </span>
                    <span><strong>Price: </strong>${parseInt(product.price)*parseInt(quantity)} </span>
                    <span class="status active"><strong>Status</strong>Active</span>
                    <span class="location"><strong>Location</strong>{address}</span>
                </td>
                <td class="product-category"><span class="categories">Auto mobile Parts</span></td>
                <td class="action" data-title="Action">
                    <div class="">
                        <ul class="list-inline justify-content-center d-flex">
                            <button type="button" class="btn btn-success p-1 me-2">Payment</button>
                            <button type="button" class="btn btn-danger p-1">Cancel</button>
                        </ul>
                    </div>
                </td>
            </tr>
        </>
    );
};

export default MyOrderRow;