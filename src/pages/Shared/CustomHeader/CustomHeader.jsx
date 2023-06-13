import React from 'react';

const CustomHeader = ({title}) => {
    return (
        <div>
            <h1 className='text-center text-4xl font-bold text-orange-500 my-6 border-y-4 w-96 p-4 mx-auto'>{title}</h1>
        </div>
    );
};

export default CustomHeader;