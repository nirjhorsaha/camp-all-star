import React, { useContext } from 'react';
import CustomHeader from '../../../pages/Shared/CustomHeader/CustomHeader';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../providers/AuthProviders';

const SelectedClass = () => {
    const { user } = useContext(AuthContext)

    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/selectedClass`)
        // console.log(classes);
        return res.json();
    })

    const findUserSelectedCourse = classes.filter(UserSelectedCourse => UserSelectedCourse?.userData?.email === user?.email)
    refetch()
    console.log(findUserSelectedCourse);

    return (
        <div>
            {/* <h1 className='text-center text-4xl font-bold text-orange-500 my-6 border-y-4 w-96 p-4 mx-auto'>Manage Class</h1> */}
            <CustomHeader title='My Selected Class'></CustomHeader>

            <div className="grid md:grid-cols-3 gap-4 p-4">
                {
                    findUserSelectedCourse.map(userCourses => 
                        <>
                            <div className="card md:w-80 bg-base-100 shadow-xl group">
                                <figure>
                                    <img className='object-cover group-hover:scale-110 h-52 transition' src={userCourses?.classData?.classImg} alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {userCourses?.classData?.className}
                                        {/* <div className="badge badge-secondary">NEW</div> */}
                                    </h2>
                                    <p>Ins Name: <span>{userCourses?.classData?.instructor?.name}</span></p>
                                    <p>Ins Email: <span>{userCourses?.classData?.instructor?.email}</span></p>
                                    <p>Available Seats: <span>{ userCourses?.classData?.avSeats}</span></p>
                                    <p>Price: $ <span>{userCourses?.classData?.price}</span></p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-ghost btn-xs border-2 border-green-400">Payment</button>
                                        <button className="btn btn-ghost btn-xs border-2 border-red-500">Remove </button>
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

export default SelectedClass;