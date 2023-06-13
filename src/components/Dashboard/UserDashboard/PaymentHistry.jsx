import React from 'react';
import CustomHeader from '../../../pages/Shared/CustomHeader/CustomHeader';

const PaymentHistry = () => {
    return (
        <div>
            <CustomHeader title='Payment History'></CustomHeader>
            <div className="overflow-x-auto px-6">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            {/* <th></th> */}
                            <th>Course Name</th>
                            <th>Instructor Name</th>
                            <th>Total ($)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            {/* <th>1</th> */}
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            {/* <th>2</th> */}
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            {/* <th>3</th> */}
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistry;