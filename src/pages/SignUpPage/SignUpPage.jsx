import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast'
import { saveUser } from '../../api/auth';


const SignUpPage = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  
    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log('user profile info updated')
                        
                        // save user to database
                        saveUser(loggedUser)
                        reset();
                        toast.success('User Create successfully.!');
                        navigate('/');
                        // navigate(from, { replace: true });

                    })
                    .catch(error => console.log(error))
            })
    };
    return (
        <div>
            <Helmet>
                <title>Sign UPp - Camp All Star</title>
            </Helmet>

            <section className="dark:bg-gray-900 mb-10">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Create account
                            </h1>
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label for="text" className="custom_label_field">Your Name</label>
                                    {/* <input
                                            onChange={(e) => setName(e.target.value)}
                                            type="text" name="text" id="name" placeholder="name" className="custom_input_field dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" /> */}
                                    <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered custom_input_field dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    {errors.name && <span className="text-red-600">Name is required</span>}
                                </div>
                                <div>
                                    <label for="email" className="custom_label_field">Your Email</label>
                                    {/* <input
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email" name="email" id="email" className="custom_input_field dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" /> */}
                                    <input type="email"  {...register("email", { required: true })} name="email" placeholder="Email" className="input input-bordered custom_input_field dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    {errors.email && <span className="text-red-600">Email is required</span>}
                                </div>

                                <div>
                                    <label for="Photo" className="custom_label_field">Your Photo URL</label>
                                    {/* <input
                                            onChange={(e) => setPhotoUrl(e.target.value)} type="url" name="homepage" id="homepage" className="custom_input_field dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="photo url" required="" /> */}
                                    <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered custom_input_field dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                                </div>

                                <div>
                                    <label for="password" className="custom_label_field">Password</label>
                                    {/* <input
                                        onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" className="custom_input_field dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" /> */}
                                    <input type="password"  {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })} placeholder="••••••••" className="input input-bordered custom_input_field dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                    {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                    {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                    {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}

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
                                    // onClick={handleRegistration}
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