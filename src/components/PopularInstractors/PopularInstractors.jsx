import React from 'react';

const PopularInstractors = () => {
    return (
        <>
            <h1 className='text-center text-4xl font-bold text-orange-500 my-10'> Our Popular Instructors</h1>
            {/* <h1 className='text-center text-3xl font-bold text-orange-500 my-10 border-y-8 w-96 mx-auto p-3'> Our Popular Instractors</h1> */}
            <div className="grid md:grid-cols-3 gap-4">

                <div className="card card-side bg-base-100 shadow-xl">
                    <figure>
                        <img src="https://img.freepik.com/free-photo/portrait-caucasian-content-teacher-with-folded-hands_74855-10318.jpg?w=360&t=st=1686285360~exp=1686285960~hmac=a54208256511599e422bdd871c923b771b1775d75861dd0d2251f1141b5d2a99" alt="Teacher" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Teacher</h2>
                        <p>Click the button to watch on Jetflix app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Watch</button>
                        </div>
                    </div>
                </div>
                

            </div>
        </ >
    );
};

export default PopularInstractors;