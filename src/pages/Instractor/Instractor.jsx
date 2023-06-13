import React from 'react';
import { Helmet } from 'react-helmet-async';

const Instractor = () => {
    return (
        <div>
            <Helmet>
                <title>Instractors - Camp All Star</title>
            </Helmet>
            <h1 className='text-center text-3xl font-bold text-orange-500 mb-10'>Our Instructors</h1>

            <div className='grid md:grid-cols-3 gap-2'>

                <section className="text-gray-600 body-font">
                    <div className="container mx-auto flex pb-10 items-center justify-center flex-col">
                        <img className="w-4/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                        <div className="text-center w-4/6">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Microdosing synth </h1>

                            <div className="card-actions justify-center mb-4">
                                <div className="badge badge-outline">teacher@school.com</div>
                                <div className="badge badge-outline">019xxxxxxxx</div>
                            </div>

                            <p className="mb-8 leading-relaxed text-left">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon </p>
                            <div className="flex justify-center">
                                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">See Classes</button>
                                {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="text-gray-600 body-font">
                    <div className="container mx-auto flex pb-10 items-center justify-center flex-col">
                        <img className="w-4/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                        <div className="text-center w-4/6">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Microdosing synth </h1>

                            <div className="card-actions justify-center mb-4">
                                <div className="badge badge-outline">teacher@school.com</div>
                                <div className="badge badge-outline">019xxxxxxxx</div>
                            </div>

                            <p className="mb-8 leading-relaxed text-left">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon </p>
                            <div className="flex justify-center">
                                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">See Classes</button>
                                {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="text-gray-600 body-font">
                    <div className="container mx-auto flex pb-10 items-center justify-center flex-col">
                        <img className="w-4/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                        <div className="text-center w-4/6">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Microdosing synth </h1>

                            <div className="card-actions justify-center mb-4">
                                <div className="badge badge-outline">teacher@school.com</div>
                                <div className="badge badge-outline">019xxxxxxxx</div>
                            </div>

                            <p className="mb-8 leading-relaxed text-left">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon </p>
                            <div className="flex justify-center">
                                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">See Classes</button>
                                {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
                            </div>
                        </div>
                    </div>
                </section>



            </div>
        </div>
    );
};

export default Instractor;