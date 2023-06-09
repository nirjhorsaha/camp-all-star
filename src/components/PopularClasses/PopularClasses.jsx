import React from 'react';

const PopularClasses = () => {
    return (
        <div>
            <h1 className='text-center text-3xl font-bold text-orange-500 my-10'>Our Popular Classes</h1>
            <div className="grid md:grid-cols-3 gap-4">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://img.freepik.com/free-photo/coworkers-office-with-photo-cameras-computer_329181-12002.jpg?w=740&t=st=1686285576~exp=1686286176~hmac=89646c0bccb5ba973f398442c1e908939d76eac4908bd7b4f7721aca536bf611" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Event Photography
                            {/* <div className="badge badge-secondary">NEW</div> */}
                        </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, obcaecati?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Photography</div>
                            <div className="badge badge-outline">Event</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PopularClasses;