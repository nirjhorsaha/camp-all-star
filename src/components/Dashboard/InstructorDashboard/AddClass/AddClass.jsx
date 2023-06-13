import React, { useContext } from 'react';
import { AuthContext } from '../../../../providers/AuthProviders';
import { useState } from 'react';
import { imageUpload } from '../../../../api/utils';
import CustomHeader from '../../../../pages/Shared/CustomHeader/CustomHeader';

const AddClass = () => {
    const { user, logOut, role } = useContext(AuthContext);
    // const [uploadButtonText, setUploadButtonText] = useState('Upload Image')
    
    const [loading, setLoading] = useState(false)

    const handleSubmit = (event) => {
        setLoading(true);
        event.preventDefault();
        const form= event.target
        const className = form.cName.value;
        const classImg = form.image.files[0];
        const insName = form.iName.value;
        const insEmail = form.iEmail.value;
        const avSeats = form.aSeats.value;
        const price = form.price.value;
        // console.log(className,classImg, insEmail, avSeats, price,insName);
        imageUpload(classImg)
            .then(data => { 
                console.log(data);
            })
            .catch(err => console.log(err))
    }
    // const handleImageChange = image => {
    //     console.log(image)
    //     setUploadButtonText(image.name)
    // }
    return (
        <div className='w-full min-h-[calc(100vh-60px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50 p-4'>
            {/* <h1 className='text-center text-4xl font-bold text-orange-500 border-y-4 w-96 p-4'>Add Class</h1> */}
            <CustomHeader title='Add Class'></CustomHeader>
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    <div className='space-y-6'>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='Class Name' className='block text-gray-600'>
                                Class Name
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-dark focus:outline-orange-400 rounded-md '
                                name='cName'
                                id='cName'
                                type='text'
                                placeholder='Class Name'
                                required
                            />
                        </div>
                        
                        

                        <div className='space-y-1 text-sm'>
                            <label htmlFor='category' className='block text-gray-600'>
                                Class Image
                            </label>
                            <div className=' p-4 bg-white w-full  m-auto rounded-lg'>
                                <div className='file_upload px-5 py-3 relative border-4 rounded-lg'>
                                    <div className='flex flex-col w-max mx-auto text-center'>
                                        <label>
                                            <input
                                                className='text-sm cursor-pointer w-36 hidden focus:outline-orange-400'
                                                type='file'
                                                name='image'
                                                id='image'
                                                accept='image/*'
                                                hidden
                                            />
                                            <div className='bg-orange-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 '>
                                                Upload Image
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='space-y-6'>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='Instructor-Name' className='block text-gray-600'>
                                Instructor Name
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-dark focus:outline-orange-400 rounded-md '
                                name='iName'
                                id='iName'
                                type='text'
                                placeholder='Instructor Name'
                                value={user?.displayName}
                                required
                            />
                        </div>

                        <div className='space-y-1 text-sm'>
                            <label htmlFor='Instructor-Email' className='block text-gray-600'>
                                Instructor Email
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-dark focus:outline-orange-400 rounded-md '
                                name='iEmail'
                                id='iEmail'
                                type='email'
                                value={user?.email}
                                placeholder='Instructor Email'
                                required
                            />
                        </div>

                        

                        <div className='flex justify-between gap-2'>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='Available Seats' className='block text-gray-600'>
                                    Available Seats
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-dark focus:outline-orange-400 rounded-md '
                                    name='aSeats'
                                    id='aSeats'
                                    type='number'
                                    placeholder='Available Seats'
                                    required
                                />
                            </div>

                            <div className='space-y-1 text-sm'>
                                <label htmlFor='Price' className='block text-gray-600'>
                                    Price
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-dark focus:outline-orange-400 rounded-md '
                                    name='price'
                                    id='price'
                                    type='number'
                                    placeholder='Price'
                                    required
                                />
                            </div>
                        </div>

                        {/* <div className='space-y-1 text-sm'>
                            <label htmlFor='description' className='block text-gray-600'>
                                Description
                            </label>

                            <textarea
                                id='description'
                                className='block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-dark focus:outline-orange-400 '
                                name='description'
                            ></textarea>
                        </div> */}
                    </div>
                </div>

                <button
                    type='submit'
                    className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-orange-400'
                >Add Class
                    {/* {loading ? (
                        <TbFidgetSpinner className='m-auto animate-spin' size={24} />
                    ) : (
                        'Add Class'
                    )} */}
                </button>
            </form>
        </div>
    );
};

export default AddClass;