import React from 'react';
import { Link } from 'react-router-dom';

const ReviewTable = ({review , handleDelete}) => {
    const {serviceName, feedback, _id} = review;
    
    
    
    return (
            
       
        <tr>
        <td className='p-3 text-sm font-semibold'> {serviceName} </td>
        <td className='p-3 text-sm font-semibold'>{feedback}</td>
        <td className='p-3 text-sm font-semibold'><button onClick={()=>handleDelete(_id)} >X</button></td>
        <td className='p-3 text-sm font-semibold'>
    
                        {/* The button to open modal */}
            <label htmlFor="my-modal-6" className="btn">Edit</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
            <form>
            <div className="modal-box">
                <h3 className="font-bold text-lg">{serviceName}</h3>
                <textarea name='message' className="textarea textarea-primary" defaultValue={feedback} ></textarea>
                <div className="modal-action">
                <label htmlFor="my-modal-6"className="btn">Update</label>
                </div>
            </div>
            </form>
            </div>

            </td>
       </tr>
       
    );
};

export default ReviewTable;