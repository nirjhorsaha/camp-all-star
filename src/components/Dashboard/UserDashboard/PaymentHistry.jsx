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
                            <th>Transactions ID</th>
                            <th>Total ($)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {/* <th>1</th> */}
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Qebr2f4w6usb65dhi77</td>
                            <td>Blue</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistry;