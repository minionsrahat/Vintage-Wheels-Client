import React, { useEffect, useRef, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth)

    const { isLoading: userloading, data: userData ,refetch} = useQuery(['userprofiledata', user], () =>
        fetch(`https://arcane-shore-13420.herokuapp.com/readUserData?email=${user?.email}`).then(res =>
            res.json()
        )
    )
   
    const [name, setName] = useState('');
    const [img, setImg] = useState(userData?.img || '');
    const [phone, setPhone] = useState(userData?.phone || '');
    const [age, setAge] = useState(userData?.age || '');
    const [address, setAddress] = useState(userData?.address || '');
    const [education, setEducation] = useState(userData?.education || '');
    const [linkedinprofile, setLinkedinprofile] = useState(userData?.linkedinprofile || '');

    useEffect(()=>{
        setName(userData?.name || '')
        setImg(userData?.img || '')
        setPhone(userData?.phone || '')
        setAge(userData?.age || '')
        setAddress(userData?.address || '')
        setEducation(userData?.education || '')
        setLinkedinprofile(userData?.linkedinprofile || '')
    },[userData])

    const handleFormsubmit = (e) => {
        const token = localStorage.getItem('accessToken')
        const updateuser = {
            name: name,
            img: img,
            age: age,
            phone: phone,
            address: address,
            education:education,
            linkedinprofile:linkedinprofile

        }
        e.preventDefault();
        console.log(updateuser);
        fetch(`https://arcane-shore-13420.herokuapp.com/updateuserprofile/${userData._id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                accesstoken: `${userData.email} ${token}`
            },
            body: JSON.stringify(updateuser)
        }).then(res => res.json())
            .then((data) => {
                const { acknowledged } = data;
                const { error } = data

                if (acknowledged) {
                    toast('Your Information Updated Successfully')
                    refetch()
                }
                else {
                    toast("Unexpected Error Occured!! Please Fill Up form carefully")
                }
            })
    }

    if (userloading || loading) {
        return <Spinner></Spinner>
    }
    
    return (
        <>
            <div>
                <div class="container widget dashboard-container ">
                <div class="row">
                    <div class="col-md-12">
                        <div class="section-title">
                            <h2>Update Your Profile</h2>

                        </div>
                    </div>
                </div>
                    <ToastContainer></ToastContainer>
                    <div class="row">
                        <div class="col-md-8 mx-auto">
                            <div class="wow fadeInUp" data-wow-delay="0.2s">
                                <form onSubmit={handleFormsubmit} id="review-form">
                                    <div class="row g-3">

                                        <div class="col-md-6">
                                            <div class="form-floating">
                                                <input type="text" class="form-control" onChange={(e) => setName(e.target.value)} readOnly value={name} id="name" />
                                                <label for="name">Your Name</label>
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="form-floating">
                                                <input type="email" readOnly class="form-control" value={userData.email} id="email" />
                                                <label for="email">Your Email</label>
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <div class="form-floating">
                                                <input type="text" class="form-control"  id="subject" onChange={(e) => setImg(e.target.value)} value={img} placeholder="Image URL" />
                                                <label for="subject">Image URL</label>
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <div class="form-floating">
                                                <input type="text" class="form-control" onChange={(e) => setAddress(e.target.value)} value={address}  id="subject" placeholder="Your Address" />
                                                <label for="subject">Your Address</label>
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="form-floating">
                                                <input type="text" class="form-control" readOnly value={userData.role ? 'Admin' : 'User'} required id="name" placeholder="Role" />
                                                <label for="name">Role</label>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-floating">
                                                <input type="number" class="form-control" onChange={(e) => setAge(e.target.value)} value={age}  id="email" placeholder="Your Age" />
                                                <label for="email">Your Age</label>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-floating">
                                                <input type="text" onChange={(e) => setPhone(e.target.value)} value={phone} class="form-control"  id="subject" placeholder="Your Phone Number" />
                                                <label for="subject">Your Phone Number</label>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-floating">
                                                <input type="text" onChange={(e) => setEducation(e.target.value)} value={education} class="form-control"  id="subject" placeholder="Your Education Details" />
                                                <label for="subject">Your Education Details</label>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-floating">
                                                <input type="text" onChange={(e) => setLinkedinprofile(e.target.value)} value={linkedinprofile} class="form-control"  id="subject" placeholder="Your Linkedin Profile Link" />
                                                <label for="subject">Your Linkedin Profile Link</label>
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <button class="btn btn-success w-100 py-3" type="submit">Save</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </>
    );
};

export default MyProfile;