import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase';
import useAdmin from '../Hooks/useAdmin';
import Spinner from '../Spinner/Spinner';
import UserTableRow from './UserTableRow';

const ManageUser = () => {
    const [user,loading]=useAuthState(auth)
    // const [isAdmin,adminLoading]=useAdmin(user)

    const { isLoading: userLoading, data: users ,refetch} = useQuery(['usersdata',user], () =>
		fetch(`https://vintagewheels.onrender.com/readUserData`).then(res =>
			res.json()
		)
	)
    if(userLoading || loading)
    {
        return <Spinner></Spinner>
    }


    return (
       <>
          <div className="widget dashboard-container my-adslist">
                <h3 className="widget-header text-center">Total Users {users?.length}</h3>
                <table className="table table-responsive product-dashboard-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                     {users && users?.map(userdata=>{
                         return <UserTableRow refetch={refetch} key={userdata._id} user={userdata}></UserTableRow>
                     })}
                    </tbody>
                </table>

            </div>
       
       </>
    );
};

export default ManageUser;