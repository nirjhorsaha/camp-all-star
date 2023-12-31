import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../providers/AuthProviders';
import { Link } from 'react-router-dom';
import { addCourse } from '../../api/classes';
import { toast } from 'react-hot-toast';
import { set } from 'react-hook-form';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Classes = () => {
    // aos animation
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])


    const { role, user } = useContext(AuthContext)
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/classes`)
        // console.log(classes);
        return res.json();
    })

    const findApprovedClass = classes.filter(approveClass => approveClass?.status === 'Approve')
    refetch()
    // console.log(findApprovedClass);

    const [course, setCourse] = useState();
    // console.log(course);

    const users = {
        name: user?.displayName,
        email: user?.email
    }

    const handleClassAndUserData = async (data) => {
        setCourse({ classData: data, userData: users })
        await addCourse(course)
            .then(data => {
                console.log(data)
                toast.success('Course Selected.!')
            })
            .catch(err => console.log(err))
        // console.log(course);
    }

    return (
        <div>
            <Helmet>
                <title>Class - Camp All Star</title>
            </Helmet>

            <h1 className='text-center text-3xl font-bold text-orange-500 mb-10'>All Classes</h1>
            <div className='grid md:grid-cols-3 gap-2'>
                {
                    findApprovedClass.map(singleClass => (
                        <div data-aos="zoom-out">
                            <section className="text-gray-600 body-font">
                                <div className="container mx-auto flex pb-10 items-center justify-center flex-col group">
                                    <img className="w-5/6 h-72 mb-6 object-cover object-center rounded group-hover:scale-110 transition" alt="hero" src={singleClass?.classImg} />
                                    <div className="text-center w-5/6">
                                        <h1 className="title-font text-4xl md:text-2xl mb-4 font-medium text-gray-900">{singleClass?.className} </h1>

                                        <div className="card-actions justify-center mb-4 ">
                                            <div className="badge badge-outline text-lg p-4">Instructor : {singleClass?.instructor?.name}</div>
                                        </div>
                                        <div className="card-actions justify-center mb-4">
                                            <div className="badge badge-outline p-3">Available Seats: {singleClass.avSeats} </div>
                                            <div className="badge badge-outline p-3">Price: {singleClass?.price}$ </div>
                                        </div>

                                        <p className="mb-4 leading-relaxed text-left">
                                            <span className='font-bold'>Learning Objectives:</span>
                                            <li>Master lighting techniques for different scenarios.</li>
                                            <li>Learn basic photo editing skills to enhance their images.</li>
                                            <li>Develop a personal style and vision as a photographer.</li>
                                        </p>

                                        {
                                            role === 'Admin' ?
                                                <> </>
                                                : role === 'Instructor' ?
                                                    <></>
                                                    : <div className="flex justify-center">
                                                        {
                                                            user ?
                                                                <button
                                                                    onClick={() => handleClassAndUserData(singleClass)}
                                                                    // disabled={}
                                                                    className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Select Class</button>
                                                                : <Link to='/login'>
                                                                    <button
                                                                        className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Select Class</button>
                                                                </Link>
                                                        }
                                                    </div>
                                        }
                                    </div>
                                </div>
                            </section>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Classes;