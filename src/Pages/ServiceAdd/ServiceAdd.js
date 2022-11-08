import React from 'react';

const ServiceAdd = () => {
   
    const handleSubmit = (event) =>{
      event.preventDefault();
      
      const product = {
        name: event.target.product.value,
        price: parseInt(event.target.price.value),
        image: event.target.image.value,
        description: event.target.description.value,
      }

      fetch('http://localhost:5000/services',{
        
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(product)

      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        event.target.reset();
      })

    }

    return (
        <div className='container mx-auto w-1/2 my-10' >
            <form onSubmit={handleSubmit}>
            <label htmlFor="">Product Name:</label><br />
            <input type="text" name='product' placeholder="Type here" className="input input-bordered w-full max-w-xs" /><br />
                <label htmlFor="">Price:</label><br />
                <input type="text" name='price' placeholder="Type here" className="input input-bordered w-full max-w-xs" /><br /><br />
                <label htmlFor="">Image URL:</label><br />
                <input type="text" name='image' placeholder="Type here" className="input input-bordered w-full max-w-xs" /><br /><br />
                <label htmlFor="">Description:</label><br />
                <textarea name='description' className="textarea textarea-bordered" rows={5} cols={50} placeholder="desc"></textarea><br />
               <button className='btn btn-ghost'> <input type="submit" value="Add Service" /></button>
            </form>
        </div>
    );
};

export default ServiceAdd;