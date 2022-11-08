import React from 'react';

const AllServiceCard = ({service}) => {
    const {name, price, image,description} = service
    return (
        <div>
            <div className="card w-96 h-full bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src= {image} alt="/" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name} </h2>
    <p>{description.slice(0,100)}...</p>
    <div className="badge badge-secondary badge-outline text-md font-bold">Price: ${price}</div>
    <div className="card-actions">
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default AllServiceCard;