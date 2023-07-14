import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase';
import DeleteConfirmation from '../DeleteConfirmation/DeleteConfirmation';
import Spinner from '../Spinner/Spinner';

const MyOrderRow = (props) => {
    const [id, setId] = useState(null);
    const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false);
    const [deleteMessage, setDeleteMessage] = useState(null);
    const [user, loading] = useAuthState(auth);
    const email = user?.email
    const navigate=useNavigate('');

    const { _id,product_id, quantity, phone, address,price ,paid,trid} = props.order
    const { isLoading: productLoading, data: product } = useQuery(['productdata', product_id], () =>
        fetch(`https://vintagewheels.onrender.com/readSingleToolsData/${product_id}`).then(res =>
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
        const token = localStorage.getItem('accessToken')
        fetch(`https://vintagewheels.onrender.com/deleteuserorder/${id}`, {
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
                    toast('Sorry Unexpected Error occur or Unauthorize access ')
                }
            })
        setDisplayConfirmationModal(false);
    };

    const goPaymentPage=(id)=>{
        navigate(`payment/${id}`)
    }

    if (productLoading|| loading) {
        return <Spinner></Spinner>
    }
    return (
        <>
            <tr>
                <td className="product-thumb">
                    <img width="80px" height="auto" src={product.img} alt="" /></td>
                <td className="product-details">
                    <h3 className="title">{product.name}</h3>
                    <span className="add-id"><strong>Quantity:</strong> {quantity}</span>
                    <span><strong>Phone: </strong>{phone} </span>
                    <span><strong>Price: </strong>${parseInt(product.price) * parseInt(quantity)} </span>
                   
                    <span className='status'><strong>Status</strong>{paid ?<span className="d-inline  badge text-success">Paid</span>: <span className="d-inline badge text-danger">Pending</span>}</span>
                    <span className="location"><strong>Location</strong>{address}</span>
                </td>
                <td className="product-category"><span className="categories">{paid ? trid : 'Payment Pending'}</span></td>
                <td className="action" data-title="Action">
                    <div className="">
                        <ul className="list-inline justify-content-center d-flex">

                            <button type="button" disabled={paid==true} className="btn btn-success p-1 me-2" onClick={()=>goPaymentPage(_id)}>{paid?'Paid':'Payment'}</button>
                            <button type="button"disabled={paid==true} className="btn btn-danger p-1"onClick={() => showDeleteModal(_id)}>Cancel</button>
                        </ul>
                    </div>
                </td>
            </tr>
            <DeleteConfirmation showModal={displayConfirmationModal} confirmModal={submitDelete} hideModal={hideConfirmationModal} id={id} message={deleteMessage} />

        </>
    );
};

export default MyOrderRow;