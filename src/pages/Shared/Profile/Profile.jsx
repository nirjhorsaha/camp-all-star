import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProviders';
import { AiFillHome } from 'react-icons/ai'
import { IoMdNotifications } from 'react-icons/io'
import { BiEdit } from 'react-icons/bi'
import { Link } from 'react-router-dom';

const Profile = () => {
    const { role, user } = useContext(AuthContext)

    return (
        <div className="mb-8">
            <div className="p-8 bg-white shadow mt-24">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                        <div>
                            <p className="font-bold text-gray-700 text-xl">22</p>
                            <p className="text-gray-400">Friends</p>
                        </div>
                        <div>
                            <p className="font-bold text-gray-700 text-xl">10</p>
                            <p className="text-gray-400">Photos</p>
                        </div>
                        <div>
                            <p className="font-bold text-gray-700 text-xl">89</p>
                            <p className="text-gray-400">Comments</p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-inorange-500">
                            <img className='rounded-full'
                                src={user?.photoURL} alt="" srcset="" />
                        </div>
                    </div>
                    <div className="space-x-4 flex justify-between mt-32 md:mt-0 md:justify-center">
                        <Link to="/dashboard">
                            <button className="text-white py-2 px-4 uppercase rounded-full bg-blue-400  shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">  <AiFillHome className='h-8' /> </button>
                        </Link>
                        <Link to="">
                            <button className="text-white py-2 px-4 uppercase rounded-full bg-blue-400  shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">  <IoMdNotifications className='h-8' /></button>
                        </Link>
                        <Link to="">
                            <button className="text-white py-2 px-4 uppercase rounded-full bg-blue-400  shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"> <BiEdit className='h-8' /></button>
                        </Link>
                    </div>
                </div>
                <div className="mt-20 text-center border-b pb-12">
                    <h1 className="text-4xl font-medium text-gray-700">{user?.displayName}
                    </h1>
                    <p className="badge badge-lg bg-green-400 border-0 font-bold text-slate-950">{role ? role : 'User'}</p>
                    <p className="font-bold text-gray-600 mt-3">{user?.email}</p>
                    <p className="mt-8 text-orange-500">Solution Manager - Creative Tim Officer</p>
                    <p className="mt-2 text-orange-500">University of Computer Science</p>
                </div>
                <div className="mt-12 flex flex-col justify-center">
                    <p className="text-gray-600 text-center font-light lg:px-16">An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.</p>
                    <button className="text-inorange-500 py-2 px-4  font-medium mt-4">  Show more</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;