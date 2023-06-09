import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';


const SignUpPage = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");
    const [password, setPassword] = useState("");
    // console.log(password.length);

    const [error, setError] = useState("");
    const handleRegistration = (event) => {
        event.preventDefault();

        if (!(name && password && email && photoUrl)) {
            setError("Fill all required fields.!")
        }
        else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
            setError("Password must be at least 8 characters");
            return;
        }

        if ((name, email, password, photoUrl)) {
            createUser(email, password)
                .then((result) => {
                    console.log(result.user);
                    navigate("/");
                })
                .catch((err) => {
                    setError(err.message);
                });
        }
    };
        return (
            <div>
                <Helmet>
                    <title>Sign UPp - Camp All Star</title>
                </Helmet>
                <section className="dark:bg-gray-900  mb-10">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Create account
                                </h1>
                                <form className="space-y-4 md:space-y-6" action="#">
                                    <div>
                                        <label for="text" className="custom_label_field">Your Name</label>
                                        <input
                                            onChange={(e) => setName(e.target.value)}
                                            type="text" name="text" id="name" placeholder="name" className="custom_input_field dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                    </div>
                                    <div>
                                        <label for="email" className="custom_label_field">Your email</label>
                                        <input
                                            onChange={(e) => setEmail(e.target.value)}
                                            type="email" name="email" id="email" className="custom_input_field dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                    </div>
                                    <div>
                                        <label for="email" className="custom_label_field">Your Photo URL</label>
                                        <input
                                            onChange={(e) => setPhotoUrl(e.target.value)} type="url" name="homepage" id="homepage" className="custom_input_field dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="photo url" required="" />

                                    </div>
                                    <div>
                                        <label for="password" className="custom_label_field">Password</label>
                                        <input
                                            onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" className="custom_input_field dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label for="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                        </div>
                                    </div>
                                    <button
                                        onClick={handleRegistration}
                                        type="submit" className="w-full text-white bg-orange-400 hover:bg-orange-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                        Already have an account? <Link className=' text-primary-600 hover:underline dark:text-primary-500 italic font-bold' to='/login'>Login</Link>
                                    </p>
                                    <p className='italic text-red-500 text-center'>{error}</p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    };

export default SignUpPage;