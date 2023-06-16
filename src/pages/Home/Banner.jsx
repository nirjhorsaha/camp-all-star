import React from 'react';
import { Fade, Zoom } from "react-awesome-reveal";
import bannerImage from '../../assets/bannerImg.jpg'

const Banner = () => {

    return (
        <div className="relative flex flex-col-reverse py-16 lg:flex-col lg:pb-0">
            <div className="inset-y-0 top-0 right-0 z-0 w-full mx-auto md:px-0 lg:mt-10 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
                <svg
                    className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
                    viewBox="0 0 100 100"
                    fill="currentColor"
                    preserveAspectRatio="none slice"
                >
                    <path d="M40 0H100L50 100H0L50 0Z" />
                </svg>
                <img 
                    className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96"
                    src={bannerImage}
                    alt=""
                />
            </div>
            <div className="relative flex flex-col items-start w-full mx-auto md:px-0 lg:max-w-screen-xl">
                <div className="mb-16  lg:max-w-lg lg:pr-5">
                    {/* <p className="inline-block px-4 py-2 mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-orange-400">
                        Brand new
                    </p> */}
                    <Zoom>
                        <h2 className="mb-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            Getting Best
                            <br className="hidden md:block" />
                            Quality Education {' '}
                            <span className="inline-block text-deep-purple-accent-400">
                                Is Now More Easier
                            </span>
                        </h2>
                    </Zoom>

                    <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg ">
                        Join us this summer and embark on an unforgettable journey through the lens. Discover the world of photography, unleash your creativity, and create memories that will last a lifetime. <br />
                        <Fade delay={1e3} cascade damping={1e-1}>
                            <span className='font-bold tracking-tight '> Enroll today and let your imagination click!</span>
                        </Fade>
                            
                    </p>
                    <div className="flex items-center">
                        <a
                            href="/"
                            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-bold tracking-wide text-dark transition duration-200 rounded-xl shadow-lg bg-orange-400 ">
                            Join Course
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;