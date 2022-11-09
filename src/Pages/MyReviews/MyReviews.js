import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewTable from './ReviewTable/ReviewTable';

const MyReviews = () => {
    const {user} = useContext(AuthContext)
    const [myreveiws, setMyreviews] = useState([])

    const handleDelete =(_id) =>{
        const agree = window.confirm("Are you sure wanto delete");
        if(agree){
            fetch(`http://localhost:5000/reviews/${_id}`,{
                method: 'DELETE',
               
            })
            .then(res=>res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount >0){
                    alert('deleted successfull')
                    const remaining = myreveiws.filter(rev=> rev._id !== _id)
                    setMyreviews(remaining)
                }
            })
        }
  }
    
    useEffect(()=>{
           fetch(`http://localhost:5000/reviews?email=${user?.email}`)
           .then(res=> res.json())
           .then(data=> setMyreviews(data))
    }, [user?.email])

    

    return (
         
        <div className='overflow-auto rounded-lg' >
            <table className='w-full' >
                 <thead>
                     <tr>
                         <th className='w-40 p-3 text-sm font-bold tracking-wide text-left'>Service Name</th>
                         <th className='p-3 text-sm font-bold tracking-wide text-left'>Review Message</th>
                         <th className='w-24 p-3 text-sm font-bold tracking-wide text-left'>Edit</th>
                         <th className='w-24 p-3 text-sm font-bold tracking-wide text-left'>Delete</th>
                     </tr>
                 </thead>
                 <tbody>
                 {
            myreveiws.map(review =><ReviewTable
            key={review._id}
            review={review}
            handleDelete= {handleDelete}
            ></ReviewTable>)
        }
                 </tbody>
            </table>
             
        </div>
    );
};

export default MyReviews;