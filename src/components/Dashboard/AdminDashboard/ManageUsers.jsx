import React, { useState } from 'react';
import CustomHeader from '../../../pages/Shared/CustomHeader/CustomHeader';
import { useQuery } from '@tanstack/react-query';
import { becomeAdmin, becomeInstructor } from '../../../api/auth';
import { toast } from 'react-hot-toast';
// import { becomeInstructor } from '../../../api/auth';

const ManageUsers = () => {

    // const [disabled, setDisbled] = useState('');

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/users`)
        // console.log(users);
        return res.json();
    })

    // make admin
    const handleMakeAdmin = email => {
        becomeAdmin(email);
        refetch()
        toast.success('Assigned as Admin Successfully.!');
    }

    // make instructor by admin
    const handleMakeInstructor = email => {
        becomeInstructor(email)
        refetch()
        toast.success('Assigned as Instructor Successfully.!');
    }

    return (
        <div>
            {/* <h1 className='text-center text-4xl font-bold text-orange-500 my-6'>Manage Users</h1> */}
            <CustomHeader title='Manage Users'></CustomHeader>
            <div className='badge badge-outline font-extrabold mx-auto flex btn-sm px-6 border-orange-400 mb-4'>Total Users: {users.length }</div>
            <div className="overflow-x-auto px-6">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map(user => (
                                <tr>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={user?.pURL} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{user?.name}</div>
                                                {/* <div className="text-sm opacity-50">United States</div> */}
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {user?.email}
                                        <br />
                                        {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
                                    </td>
                                    <td>{user && user?.role? user?.role: 'User' }</td>
                                    <th>
                                        <div className="sm:flex gap-4 mx-auto">
                                            {
                                                // user?.role === 'Admin' &&
                                                    <button
                                                        onClick={() => handleMakeAdmin(user?.email)}
                                                        className="btn btn-ghost btn-xs border-orange-400 ">Make Admin</button>
                                            }
                                            <button
                                                onClick={() => handleMakeInstructor(user?.email)}
                                                className="btn btn-ghost btn-xs border-orange-400">Make Instructor</button>
                                        </div>
                                    </th>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;