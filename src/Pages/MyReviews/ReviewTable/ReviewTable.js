import React from 'react';

const ReviewTable = ({review , handleDelete}) => {
    const {serviceName, feedback, _id} = review;
    
    
    
    return (
        <tr>
        <td className='p-3 text-sm font-semibold'> {serviceName} </td>
        <td className='p-3 text-sm font-semibold'>{feedback}</td>
        <td className='p-3 text-sm font-semibold'><button onClick={()=>handleDelete(_id)} >Delete</button></td>
        <td className='p-3 text-sm font-semibold'><button>Edit</button></td>
    </tr>
    );
};

export default ReviewTable;