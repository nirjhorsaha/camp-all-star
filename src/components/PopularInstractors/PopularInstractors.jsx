import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { allUsers } from '../../api/utils';

const PopularInstractors = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/users`)
        console.log(users);
        return res.json();
    })

    const inst = users.filter(user => user?.role === 'Instructor')

    return (
        <>
            <h1 className='text-center text-4xl font-bold text-orange-500 my-16'> Our Popular Instructors</h1>
            {/* <h1 className='text-center text-3xl font-bold text-orange-500 my-10 border-y-8 w-96 mx-auto p-3'> Our Popular Instractors</h1> */}
            <div className="grid md:grid-cols-3 gap-4">
                {
                    inst.slice(0,6).map(pInstructor => (
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure>
                                <img className='h-60'
                                    src={pInstructor?.pURL} alt="Teacher" />
                            </figure>
                            <div className="card-body  px-2">
                                <h2 className="card-title">{pInstructor?.name }</h2>
                                <p> Highly skilled and passionate instructor dedicated to empowering learners through education.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary btn-sm">Follow</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </ >
    );
};

export default PopularInstractors;