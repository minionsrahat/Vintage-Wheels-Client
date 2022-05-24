import React from 'react';

const ProductTableRow = ({product}) => {
    return (
        <>
        <tr>
            <td class="product-thumb">
                <img width="80px" height="auto" src={product.img} alt="" /></td>
            <td class="product-details">
                <h3 class="title">{product.name}</h3>
                <span class="add-id"><strong>Available Quantity:</strong> {product.quantity}</span>
                <span><strong>Min Order Quantity: </strong>{product.min_quantity} </span>
                <span><strong>Price: </strong>${parseInt(product.price)} </span>
                <span class="status active"><strong>Status</strong>Active</span>
            </td>
            <td class="product-category"><span class="categories">Auto mobile Parts</span></td>
            <td class="action" data-title="Action">
                <div class="">
                    <ul class="list-inline justify-content-center d-flex">
                        <button type="button" class="btn btn-danger p-1">Delete</button>
                    </ul>
                </div>
            </td>
        </tr>
    </>
    );
};

export default ProductTableRow;