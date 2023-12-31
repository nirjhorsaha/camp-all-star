import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';

const PopularClasses = () => {
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/classes`)
        // console.log(classes);
        return res.json();
    })

    // aos animation
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <div>
            <h1 className='text-center text-4xl font-bold text-orange-500 my-16'>=== Our Popular Classes ===</h1>
            <div className="grid md:grid-cols-3 gap-4">
                {
                    classes.slice(0,6).map(pClass => (
                        <div data-aos="zoom-in"
                            className="card bg-white-100 shadow-xl group">
                            <figure>
                                <img className='object-cover group-hover:scale-110 h-60 w-full transition' src={pClass?.classImg} alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {pClass?.className}
                                    {/* <div className="badge badge-secondary">NEW</div> */}
                                </h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, obcaecati?</p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">Photography</div>
                                    {/* <div className="badge badge-outline">Event</div> */}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PopularClasses;