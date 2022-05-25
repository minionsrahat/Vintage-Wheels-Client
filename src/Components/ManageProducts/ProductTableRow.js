import React, { useState } from 'react';
import DeleteConfirmation from "../DeleteConfirmation/DeleteConfirmation";

const ProductTableRow = ({ product }) => {
    const [id, setId] = useState(null);
    const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false);
    const [deleteMessage, setDeleteMessage] = useState(null);

    const showDeleteModal = (id) => {
       
        setId(id);
        setDeleteMessage(`Are you sure you want to delete the product?`);
        setDisplayConfirmationModal(true);
    };

    // Hide the modal
    const hideConfirmationModal = () => {
        setDisplayConfirmationModal(false);
    };

    // Handle the actual deletion of the item
    const submitDelete = (id) => {
      
        setDisplayConfirmationModal(false);
    };

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
                            <button type="button" class="btn btn-danger p-1"onClick={() => showDeleteModal(product._id)} >Delete</button>
                        </ul>
                    </div>

                </td>
            </tr>
            <DeleteConfirmation showModal={displayConfirmationModal} confirmModal={submitDelete} hideModal={hideConfirmationModal} id={id} message={deleteMessage}  />
        </>

    );
};

export default ProductTableRow;