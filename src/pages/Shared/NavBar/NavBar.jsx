import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import navLogo from '../../../assets/navLogo-png-removebg-preview.png'
import avatarImg from '../../../assets/placeholder.jpg'

const NavBar = () => {
    const navOptions = <>
        <li className='md:text-lg'>
            <NavLink to="/"
                className={({ isActive }) => (isActive ? 'text-red-500 underline font-extrabold ' : 'default')}>
                Home
            </NavLink>
        </li>
        <li className='md:text-lg'>
            <NavLink to="/instractors"
                className={({ isActive }) => (isActive ? 'text-red-500 underline font-extrabold' : 'default')}>
                Instractors
            </NavLink>
        </li>
        {
            // user &&
            <li className='md:text-lg'>
                <NavLink to="/mytoys"
                    className={({ isActive }) => (isActive ? 'text-red-500 underline font-extrabold' : 'default')}>
                    Classes
                </NavLink>
            </li>
        }
        {
            // user &&
            <li className='md:text-lg'>
                <NavLink to="/addtoys"
                    className={({ isActive }) => (isActive ? 'text-red-500 underline font-extrabold' : 'default')}>
                    Dashboard
                </NavLink>
            </li>
        }
        {/* <li>
                            <NavLink to="/blog"
                                className={({ isActive }) => (isActive ? 'text-red-500 underline' : 'default')}>
                                Blogs
                            </NavLink>
                        </li> */}
        {/* <li>
            <NavLink to="/"
                className={({ isActive }) => (isActive ? 'text-yellow-600 underline' : 'default')}>
                Home
            </NavLink>
        </li>
        <li>
            <NavLink to="/alltoys"
                className={({ isActive }) => (isActive ? 'text-yellow-600 underline' : 'default')}>
                All Toys
            </NavLink>
        </li>
        {
            // user &&
            <li>
                <NavLink to="/mytoys"
                    className={({ isActive }) => (isActive ? 'text-red-500 underline' : 'default')}>
                    My Toys
                </NavLink>
            </li>
        }
        {
            // user &&
            <li>
                <NavLink to="/addtoys"
                    className={({ isActive }) => (isActive ? 'text-red-500 underline' : 'default')}>
                    Add Toys
                </NavLink>
            </li>
        } */}
        {/* <li>
                                <NavLink to="/blog"
                                    className={({ isActive }) => (isActive ? 'text-red-500 underline' : 'default')}>
                                    Blogs
                                </NavLink>
                            </li> */}
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                            {navOptions}
                        </ul>
                    </div>
                    <Link to="/" className='normal-case text-5xl custom-text font-bold'>
                        <img src={navLogo} className='w-28' alt="" srcset="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 tracking-wider font-medium">
                        {/* <li>
                            <NavLink to="/"
                                className={({ isActive }) => (isActive ? 'text-red-500 underline' : 'default')}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/alltoys"
                                className={({ isActive }) => (isActive ? 'text-red-500 underline' : 'default')}>
                                All Toys
                            </NavLink>
                        </li>
                        {
                            // user &&
                            <li>
                                <NavLink to="/mytoys"
                                    className={({ isActive }) => (isActive ? 'text-red-500 underline' : 'default')}>
                                    My Toys
                                </NavLink>
                            </li>
                        }
                        {
                            // user &&
                            <li>
                                <NavLink to="/addtoys"
                                    className={({ isActive }) => (isActive ? 'text-red-500 underline' : 'default')}>
                                    Add Toys
                                </NavLink>
                            </li>
                        } */}
                        {/* <li>
                            <NavLink to="/blog"
                                className={({ isActive }) => (isActive ? 'text-red-500 underline' : 'default')}>
                                Blogs
                            </NavLink>
                        </li> */}
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <a className="custom-btn">Start Applying</a> */}
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            {
                                // user &&
                                <div id="app-title" className="w-10 rounded-full">
                                    <img src={avatarImg} />
                                </div>
                            }
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                </a>
                            </li>
                            {/* <li><a>Dashboard</a></li> */}
                        </ul>
                    </div>
                    {/* {
                        user ?
                            <div>
                                <button onClick={handleLogout} className="btn btn-warning btn-outline ms-4">Logout</button>
                            </div>

                            : <Link to='/login'>
                                <button className="btn btn-warning btn-outline ms-4">login</button>
                            </Link>
                    } */}
                </div>
            </div>
        </div>
    );
};

export default NavBar;