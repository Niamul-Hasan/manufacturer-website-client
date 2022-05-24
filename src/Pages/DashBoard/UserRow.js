import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch }) => {
    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`http://localhost:4000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                "authorization": `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => {
            if (res.status === 403) {
                return toast.error('Failed to make Admin');
            }
            return res.json();
        })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Successfully maked Admin');
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'Admin' && <button
                onClick={makeAdmin}
                class="btn btn-xs btn-warning">Make Admin</button>}
                {
                    role === 'Admin' && <p className='text-success font-bold'>ADMIN</p>
                }
            </td>
            <td><button class="btn btn-xs border-0 bg-red-500 text-black">remove user</button></td>
        </tr>
    );
};

export default UserRow;