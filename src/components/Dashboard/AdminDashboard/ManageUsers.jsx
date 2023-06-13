import React from 'react';
import CustomHeader from '../../../pages/Shared/CustomHeader/CustomHeader';

const ManageUsers = () => {
    return (
        <div>
            {/* <h1 className='text-center text-4xl font-bold text-orange-500 my-6'>Manage Users</h1> */}
            <CustomHeader title='Manage Users'></CustomHeader>
            <div className='badge badge-outline font-extrabold mx-auto flex btn-sm px-6 border-orange-400 mb-4'>Total Users: </div>
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
                        <tr>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        {/* <div className="text-sm opacity-50">United States</div> */}
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
                            </td>
                            <td>Purple</td>
                            <th>
                                <div className="sm:flex gap-4 mx-auto">
                                    <button className="btn btn-ghost btn-xs border-orange-400">Make Admin</button>
                                    <button className="btn btn-ghost btn-xs border-orange-400">Make Instructor</button>
                               </div>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;