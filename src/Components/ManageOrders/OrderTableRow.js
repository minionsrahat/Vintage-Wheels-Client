import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase';
import Spinner from '../Spinner/Spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DeleteConfirmation from '../DeleteConfirmation/DeleteConfirmation';

const OrderTableRow = (props) => {
    const [id, setId] = useState(null);
    const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false);
    const [deleteMessage, setDeleteMessage] = useState(null);
    const [user, loading] = useAuthState(auth);
    const email = user?.email
    const token = localStorage.getItem('accessToken')
    const { _id, product_id, quantity, phone, address, name, paid, trid, shipped } = props.order
    const { isLoading: productLoading, data: product } = useQuery(['productdata', product_id], () =>
        fetch(`https://arcane-shore-13420.herokuapp.com/readSingleToolsData/${product_id}`).then(res =>
            res.json()
        )
    )


    const showDeleteModal = (id) => {

        setId(id);
        setDeleteMessage(`Are you sure you want to delete this order?`);
        setDisplayConfirmationModal(true);
    };

    // Hide the modal
    const hideConfirmationModal = () => {
        setDisplayConfirmationModal(false);
    };

    // Handle the actual deletion of the item
    const submitDelete = (id) => {

        console.log(id);
       
        fetch(`https://arcane-shore-13420.herokuapp.com/deleteOrdersData/${id}`, {
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
                    toast("Delete SuccessFull!!")
                    props.refetch()
                }
                else if (error) {
                    toast(error)
                }
            })
        setDisplayConfirmationModal(false);
    };

    const shippedProduct = (id) => {
        fetch(`https://arcane-shore-13420.herokuapp.com/paymentupdate/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                accesstoken: `${email} ${token}`
            },
            body: JSON.stringify({
                shipped: true
            })
        }).then(res => res.json())
            .then(data => {
                const { acknowledged } = data
                if(acknowledged){
                    toast('Product Status Updated to Shipped')
                    props.refetch()
                }
                else
                {
                    toast('Sorry Unexpected Error Occurs')
                }
            })
    }


    if (productLoading) {
        return <Spinner></Spinner>
    }
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
                    <span class="add-id"><strong>Quantity:</strong> {quantity}</span>
                    <span><strong>Phone: </strong>{phone} </span>
                    <span><strong>Price: </strong>${parseInt(product.price) * parseInt(quantity)} </span>
                    <span className='status'><strong>Status</strong>
                        {paid ? <>{shipped ? <span class="d-inline  badge text-success">Shipped</span> : <span class="d-inline  badge text-primary">Pending</span>}</> : <span class="d-inline badge text-danger">Unpaid</span>}
                    </span>
                    <span class="location"><strong>Location</strong>{address}</span>
                </td>
                <td class="product-category"><span class="categories">{name}</span></td>
                <td class="action" data-title="Action">
                    <div class="">
                        <ul class="list-inline justify-content-center d-flex">
                            <button type="button" class="btn btn-success p-1 me-2" disabled={!paid || shipped} onClick={() => shippedProduct(_id)} >Shipped</button>
                            <button type="button" class="btn btn-danger p-1" disabled={paid} onClick={() => showDeleteModal(_id)}>Cancel</button>
                        </ul>
                    </div>
                </td>
            </tr>
            <DeleteConfirmation showModal={displayConfirmationModal} confirmModal={submitDelete}   hideModal={hideConfirmationModal} id={id} message={deleteMessage} />

        </>
    );
};

export default OrderTableRow;