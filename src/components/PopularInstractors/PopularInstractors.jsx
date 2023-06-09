import React from 'react';

const PopularInstractors = () => {
    return (
        <>
            <h1 className='text-center text-3xl font-bold text-orange-500 my-10'>Our Popular Instractors</h1>
            <div class="grid md:grid-cols-3 gap-4">

                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src="https://img.freepik.com/free-photo/portrait-caucasian-content-teacher-with-folded-hands_74855-10318.jpg?w=360&t=st=1686285360~exp=1686285960~hmac=a54208256511599e422bdd871c923b771b1775d75861dd0d2251f1141b5d2a99" alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">New movie is released!</h2>
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