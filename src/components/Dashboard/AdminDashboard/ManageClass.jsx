import React from 'react';
import CustomHeader from '../../../pages/Shared/CustomHeader/CustomHeader';

const ManageClass = () => {
    return (
        <div>
            {/* <h1 className='text-center text-4xl font-bold text-orange-500 my-6 border-y-4 w-96 p-4 mx-auto'>Manage Class</h1> */}
            <CustomHeader title='Manage Class'></CustomHeader>
            <div className="grid md:grid-cols-3 gap-4 p-4">
                <div className="card md:w-80 bg-base-100 shadow-xl group">
                    <figure>
                        <img className='object-cover group-hover:scale-110 transition' src="https://img.freepik.com/free-photo/coworkers-office-with-photo-cameras-computer_329181-12002.jpg?w=740&t=st=1686285576~exp=1686286176~hmac=89646c0bccb5ba973f398442c1e908939d76eac4908bd7b4f7721aca536bf611" alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Class name
                            {/* <div className="badge badge-secondary">NEW</div> */}
                        </h2>
                        <p>Ins Name: <span> </span></p>
                        <p>Ins Email: <span> </span></p>
                        <p>Available Seats: <span>100</span></p>
                        <p>Price: $ <span>50</span></p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-ghost btn-xs border-2 border-green-400">Approve</button>
                            <button className="btn btn-ghost btn-xs border-2 border-red-500">Deny </button>
                        </div>
                    </div>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl group">
                    <figure>
                        <img className='object-cover group-hover:scale-110 transition' src="https://img.freepik.com/free-photo/coworkers-office-with-photo-cameras-computer_329181-12002.jpg?w=740&t=st=1686285576~exp=1686286176~hmac=89646c0bccb5ba973f398442c1e908939d76eac4908bd7b4f7721aca536bf611" alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Event Photography
                            {/* <div className="badge badge-secondary">NEW</div> */}
                        </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, obcaecati?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-ghost btn-xs border-orange-400">Make Instructor</button>
                        </div>
                    </div>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl group">
                    <figure>
                        <img className='object-cover group-hover:scale-110 transition' src="https://img.freepik.com/free-photo/coworkers-office-with-photo-cameras-computer_329181-12002.jpg?w=740&t=st=1686285576~exp=1686286176~hmac=89646c0bccb5ba973f398442c1e908939d76eac4908bd7b4f7721aca536bf611" alt="Shoes" />
                    </figure>
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

export default ManageClass;