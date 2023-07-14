import { useEffect, useState } from "react"

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    useEffect( () =>{
        const token = localStorage.getItem('accessToken')
        const email = user?.email;
        if(email){
            fetch(`https://vintagewheels.onrender.com/admin/${email}`, {
                method:'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `${user.email} ${token}`
                }
            })
            .then(res=>res.json())
            .then(data => {
                setAdmin(data.isAdmin);
                setAdminLoading(false);
            })
        }
    }, [user])

    return [admin, adminLoading]
}

export default useAdmin;