import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase';
import DeleteConfirmation from "../DeleteConfirmation/DeleteConfirmation";
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductTableRow = ({ product ,refetch}) => {
    const [id, setId] = useState(null);
    const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false);
    const [deleteMessage, setDeleteMessage] = useState(null);
    const [user, loading] = useAuthState(auth);
    const email = user?.email

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

        console.log(id);
        const token = localStorage.getItem('accessToken')
        fetch(`https://arcane-shore-13420.herokuapp.com/deleteToolsData/${id}`, {
            method: "DELETE",
            headers: {
                accesstoken: `${email} ${token}`
            }
        })
            .then(res => res.json())
            .then((data) => {
                const { acknowledged, deletedCount } = data
                const { error } = data
                if (acknowledged && deletedCount == 1) {
                    // const newproductlist = product.filter((element) => {
                    //     return element._id !== id;
                    // })
                    // setProduct(newproductlist)
                    toast("Delete SuccessFull!!")
                    refetch()
                }
                else if (error) {
                    toast(error)
                }
            })
        setDisplayConfirmationModal(false);
    };

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
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
                            <button type="button" class="btn btn-danger p-1" onClick={() => showDeleteModal(product._id)} >Delete</button>
                        </ul>
                    </div>

                </td>
            </tr>
            <DeleteConfirmation showModal={displayConfirmationModal} confirmModal={submitDelete} hideModal={hideConfirmationModal} id={id} message={deleteMessage} />
        </>

    );
};

export default ProductTableRow;