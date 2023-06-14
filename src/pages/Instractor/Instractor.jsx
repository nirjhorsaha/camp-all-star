import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const Instractor = () => {

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/users`)
        return res.json();
    })

    const inst = users.filter(user => user?.role === 'Instructor')
    return (
        <div>
            <Helmet>
                <title>Instractors - Camp All Star</title>
            </Helmet>
            <h1 className='text-center text-3xl font-bold text-orange-500 mb-10'>Our Instructors</h1>

            <div className='grid md:grid-cols-3 gap-2'>
                {
                    inst.map((sInstructor) => (
                        <><section className="text-gray-600 body-font">
                            <div className="container mx-auto flex pb-10 items-center justify-center flex-col">
                                <img className="w-4/6 mb-6 object-cover object-center rounded" alt="hero" src={sInstructor.pURL} />
                                <div className="text-center w-4/6">
                                    <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-gray-900">{sInstructor.name}</h1>

                                    <div className="card-actions justify-center mb-4">
                                        <div className="badge badge-outline">{sInstructor.email}</div>
                                        {/* <div className="badge badge-outline">019xxxxxxxx</div> */}
                                    </div>

                                    <p className="mb-8 text-sm text-left">{sInstructor.name} is an experienced and dedicated instructor With 5 years of teaching experience, has a deep understanding of effective instructional strategies and pedagogical techniques.  </p>
                                    <div className="flex justify-center">
                                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">See Classes</button>
                                        {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
                                    </div>
                                </div>
                            </div>
                        </section>
                        </>
                    ))
                }
            </div>
        </div>
    );
};

export default Instractor;