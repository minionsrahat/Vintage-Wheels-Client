import React from 'react';

const UserTableRow = ({user}) => {
    return (
        <>
            <tr>
                <td>
                    {user.name}
                </td>
                <td>
                    {
                        user.email
                    }

                </td>
                <td class="action" data-title="Action">
                    <div class="">
                        <ul class="list-inline justify-content-center d-flex">
                            <button type="button" disabled={user?.role==='admin'} class="btn btn-success p-1 me-2">Make Admin</button>
                            <button type="button" class="btn btn-danger p-1">Delete</button>
                        </ul>
                    </div>
                </td>
            </tr>
        </>
    );
};

export default UserTableRow;