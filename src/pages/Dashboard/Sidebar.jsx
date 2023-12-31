import React, { useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProviders';
import { AiOutlineBars, AiOutlineHome, AiOutlineLogout } from 'react-icons/ai'
import { SiGoogleclassroom } from 'react-icons/si'
import { FaMoneyCheckAlt, FaUserFriends, FaRegAddressCard } from 'react-icons/fa'


const Sidebar = () => {
    const navigate = useNavigate()
    const { user, logout, role } = useContext(AuthContext)
    // console.log(role);

    const [isActive, setActive] = useState('false')

    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }
    const handleLogout = () => {
        logout()
            .then()
            .catch(error => console.log(error))
        navigate('/')
    }
    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        {/* <Logo /> */}
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
                >
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>
            {/* Sidebar */}
            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}
            >
                <div>
                    {
                        role === 'Admin' ?
                            // isAdmin
                            <>
                                <h1 className='text-2xl font-bold px-2'>Welcome To <br /> Admin Dashboard</h1>
                            </>
                            : role === 'Instructor' ?
                                // : isInstructor ?
                                <>
                                    <h1 className='text-2xl font-bold px-1'>Welcome To <br /> Instructor Dashboard</h1>
                                </>
                                : <>
                                    <h1 className='text-2xl font-bold px-2'>Welcome To <br /> User Dashboard</h1>
                                </>
                    }
                    
                    <div className='flex flex-col items-center mt-6 -mx-2'>
                        <Link to='/dashboard'>
                            <img
                                className='object-cover w-24 h-24 mx-2 rounded-full'
                                src={user?.photoURL}
                                alt='avatar'
                                referrerPolicy='no-referrer'
                            />
                        </Link>
                        <Link to='/dashboard'>
                            <h4 className='mx-2 mt-2 font-medium text-gray-800  hover:underline'>
                                {user?.displayName}
                            </h4>
                        </Link>
                        <Link to='/dashboard'>
                            <p className='mx-2 mt-1 text-sm font-medium text-gray-600  hover:underline'>
                                {user?.email}
                            </p>
                        </Link>
                    </div>
                    <div className="card-actions justify-center">
                        <p className='text-center badge badge-md bg-green-400 border-0 text-black font-bold '>{role? role: 'User'}</p>
                    </div>


                    {/* Nav Items */}
                    <div className='flex flex-col justify-between flex-1 mt-6'>
                        <hr />
                        <nav>
                            {
                                role === 'Admin' ?
                                    <>
                                        <NavLink
                                            to='/dashboard/manageClass'
                                            className={({ isActive }) =>
                                                `flex  px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                                }`
                                            }
                                        >
                                            <FaRegAddressCard className='w-5 h-5' />

                                            <span className='mx-4 font-medium'>Manage Class</span>
                                        </NavLink>

                                        <NavLink
                                            to='/dashboard/manageUsers'
                                            className={({ isActive }) =>
                                                `flex  px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                                }`
                                            }
                                        >
                                            <FaUserFriends className='w-5 h-5' />

                                            <span className='mx-4 font-medium'>Manage User</span>
                                        </NavLink>

                                    </>
                                    : role === 'Instructor' ?
                                        <>
                                            <NavLink
                                                to='addClass'
                                                className={({ isActive }) =>
                                                    `flex  px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                                    }`
                                                }
                                            >
                                                <FaRegAddressCard className='w-5 h-5' />

                                                <span className='mx-4 font-medium'>Add Class</span>
                                            </NavLink>

                                            <NavLink
                                                to='myClass'
                                                className={({ isActive }) =>
                                                    `flex  px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                                    }`
                                                }
                                            >
                                                <SiGoogleclassroom className='w-5 h-5' />

                                                <span className='mx-4 font-medium'>My Class</span>
                                            </NavLink>
                                        </>
                                        : <>
                                            <NavLink
                                                to='/dashboard/selectedClass'
                                                className={({ isActive }) =>
                                                    `flex  px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                                    }`
                                                }
                                            >
                                                <FaRegAddressCard className='w-5 h-5' />

                                                <span className='mx-4 font-medium'>My Selected Class</span>
                                            </NavLink>

                                            <NavLink
                                                to='/dashboard/enrolledClass'
                                                className={({ isActive }) =>
                                                    `flex  px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                                    }`
                                                }
                                            >
                                                <SiGoogleclassroom className='w-5 h-5' />

                                                <span className='mx-4 font-medium'>My Enrolled Class</span>
                                            </NavLink>
                                            <NavLink
                                                to='/dashboard/payment'
                                                className={({ isActive }) =>
                                                    `flex  px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                                    }`
                                                }
                                            >
                                                <FaMoneyCheckAlt className='w-5 h-5' />

                                                <span className='mx-4 font-medium'>Payment History</span>
                                            </NavLink>
                                        </>
                            }
                        </nav>
                    </div>
                </div>

                <div>
                    <hr />
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                            }`
                        }
                    >
                        <AiOutlineHome className='w-5 h-5' />
                        <span className='mx-4'>Home</span>
                    </NavLink>
                    <button
                        onClick={handleLogout}
                        className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'>
                        <AiOutlineLogout className='w-5 h-5' />
                        <span className='mx-4 font-bold'>Logout</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Sidebar;