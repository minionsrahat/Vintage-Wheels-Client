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
        fetch(`https://vintagewheels.onrender.com/deleteToolsData/${id}`, {
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
                else  {
                    toast('Sorry Unexpected Error occured!! Unauthorize Access')
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
                <td className="product-thumb">
                    <img width="80px" height="auto" src={product.img} alt="" /></td>
                <td className="product-details">
                    <h3 className="title">{product.name}</h3>
                    <span className="add-id"><strong>Available Quantity:</strong> {product.quantity}</span>
                    <span><strong>Min Order Quantity: </strong>{product.min_quantity} </span>
                    <span><strong>Price: </strong>${parseInt(product.price)} </span>
                    <span className="status active"><strong>Status</strong>Active</span>
                </td>
                <td className="product-category"><span className="categories">Auto mobile Parts</span></td>
                <td className="action" data-title="Action">
                    <div className="">
                        <ul className="list-inline justify-content-center d-flex">
                            <button type="button" className="btn btn-danger p-1" onClick={() => showDeleteModal(product._id)} >Delete</button>
                        </ul>
                    </div>

                </td>
            </tr>
            <DeleteConfirmation showModal={displayConfirmationModal} confirmModal={submitDelete} hideModal={hideConfirmationModal} id={id} message={deleteMessage} />
        </>

    );
};

export default ProductTableRow;