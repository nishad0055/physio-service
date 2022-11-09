import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const ServiceDetails = () => {
     const {_id, image, name , description, price} = useLoaderData()
     const {user} = useContext(AuthContext)
     const navigate = useNavigate();
      
     const handleReview = (event) =>{
        event.preventDefault();
        if(!user){
           return navigate('/login')
        }

         const review = {
              service: _id,
              name:event.target.name.value,
              email: user?.email || 'No email found',
              img: user?.photoURL,
              ratings:event.target.option.value,
              feedback:event.target.message.value,
         }
         fetch('http://localhost:5000/reviews',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
         })
         .then(res => res.json())
         .then(data =>{
            console.log(data)
            if(data.acknowledged >0){
                alert('review added succussfull')
            }
            event.target.reset()
         })


     }

    return (
        <div className='container mx-auto my-10' >
            <img src= {image} alt="" />
            <h2 className='text-center md:text-5xl text-3xl font-bold my-3' >{name} </h2>
            <p>{description}</p>
             <div className='md:flex justify-between my-4' >
                 <div>
                     <h2 className='text-3xl font-bold text-blue-700' >Price: ${price}</h2>
                 </div>
                  <button className='btn btn-outline btn-primary' >Book Appointment</button>
             </div>
             
             
             <div>

             </div>

             <div>
                 <h2 className='text-3xl my-3' >Add a review</h2>
                 <form  onSubmit={handleReview} >
                 <span className="label-text">What is your name?</span><br />
                 <input name='name' type="text" placeholder="Type your full name" className="input input-bordered w-full max-w-xs my-2" /><br />
                 <textarea name='message' className="textarea textarea-bordered" placeholder="Review message"></textarea><br />
                 <span className="label-text">Select Ratings:</span><br />
                 <select name='option' className='my-2'>
                    <option value="5">5</option>
                    <option value="4.5">4.5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                </select><br />
                    
                       
                        <input className='btn btn-primary' type="submit" value="Add Review" />:

                    
                 </form>
             </div>


        </div>
    );
};

export default ServiceDetails;