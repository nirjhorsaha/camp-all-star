import React, { useEffect, useState } from 'react';
import CustomHeader from '../../../pages/Shared/CustomHeader/CustomHeader';
import { approvedPost, denyPost, getAllClasses } from '../../../api/classes';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

const ManageClass = () => {
    // const [classes, setClasses] = useState([])

    // useEffect(() => {
    //     getAllClasses()
    //         .then(data => setClasses(data))
    //         .catch(err => console.log(err))
    // }, [])

    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/classes`)
        // console.log(classes);
        return res.json();
    })

    // const [status, setStatus] = useState(false);

    const handleApprovedClass = (user) => {
        // console.log(user);
        approvedPost(user?._id);
        refetch();
        toast.success(`${user?.className} approved`);
    }

    const handleDenyClass = (user) => {
        // console.log(id);
        denyPost(user?._id);
        refetch();
        toast.error(`${user?.className} denied.!`);
    }

    return (
        <div>
            {/* <h1 className='text-center text-4xl font-bold text-orange-500 my-6 border-y-4 w-96 p-4 mx-auto'>Manage Class</h1> */}
            <CustomHeader title='Manage Class'></CustomHeader>

            <div className="grid md:grid-cols-3 gap-4 p-4">
                {
                    classes.map(singleClass => (
                        <div className="card md:w-80 bg-base-100 shadow-xl group">
                            <figure>
                                <img className='object-cover h-64 group-hover:scale-110 transition' src={singleClass?.classImg} alt="Class" />
                            </figure>
                            <div className="card-body p-6">
                                <h2 className="card-title">
                                    {singleClass?.className}
                                    {/* <div className="badge badge-secondary">NEW</div> */}
                                </h2>
                                <p>Instructor: <span>{singleClass?.instructor?.name} </span></p>
                                <p>Email: <span>{singleClass?.instructor?.email} </span></p>
                                <p>Available Seats: <span>{singleClass?.avSeats}</span></p>
                                <p>Price: $<span>{singleClass?.price}</span></p>
                                <div className="card-actions justify-end">
                                    <button
                                        onClick={() => handleApprovedClass(singleClass)} 
                                        className={`btn btn-ghost btn-xs border-2 border-green-400 `}>Approve</button>
                                    <button
                                        onClick={() => handleDenyClass(singleClass)}
                                        className="btn btn-ghost btn-xs border-2 border-red-500">Deny</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ManageClass;