import React, { useContext } from 'react';
import CustomHeader from '../../../../pages/Shared/CustomHeader/CustomHeader';
import { BiEdit } from 'react-icons/bi'
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../../providers/AuthProviders';

const MyClass = () => {
    const { user } = useContext(AuthContext)
    // console.log(user.email);
    const { data: usersClass = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/classes`)
        return res.json();
    })

    const findUserSingleClass = usersClass.filter(userClass => userClass?.instructor?.email === user?.email)
    console.log(findUserSingleClass);
    return (
        <div>
            <CustomHeader title='My Class'></CustomHeader>
            <div className="grid md:grid-cols-3 gap-4 p-4">
                {
                    findUserSingleClass.map((singleClass) =>
                        <>
                            <div className="card md:w-80 bg-base-100 shadow-xl group">
                                <figure>
                                    <img className='object-cover group-hover:scale-110 transition' src={singleClass?.classImg} alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="flex justify-between gap-2">
                                        <p className='card-title'>{singleClass?.className }</p>
                                        <button><BiEdit className='w-6 h-6'></BiEdit></button>
                                        {/* <div className="badge badge-secondary">NEW</div> */}
                                    </h2>
                                    <p>Total Students: <span>0</span></p>
                                    {/* <p>Ins Name: <span> </span></p>
                        <p>Ins Email: <span> </span></p> */}
                                    <p>Available Seats: <span>{singleClass.avSeats}</span></p>
                                    <p>Price: $ <span>{singleClass.price}</span></p>
                                    <div className="card-actions justify-end">
                                        <button className="badge badge-outline font-extrabold btn-xs border-2 border-green-400">Status</button>
                                        {/* <button className="btn btn-ghost btn-xs border-2 border-red-500">Deny </button> */}
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default MyClass;