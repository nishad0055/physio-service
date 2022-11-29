import React from "react";

const TestimonicalCard = ({testimonial}) => {
    const {name, description, img, location} = testimonial;
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <div className="card-body">
          <p>{description}</p>
          <div className="card-actions flex items-center">
             <div>
                <img  className="w-12" src= {img} alt="" />
             </div>
             <div>
                <h2>{name}</h2>
                <p>{location}</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonicalCard;
