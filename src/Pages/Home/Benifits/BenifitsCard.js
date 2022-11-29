import React from "react";
import './Benifits.css'
const BenifitsCard = ({benifits}) => {
    const {name, description, img} = benifits;
  return (
    <div className="card card-compact p-3">
      
      <div className="lg:flex items-center gap-5 p-5 cursor-pointer" data-aos="zoom-in-up">
       <div>
       <img src={img} alt="" className="w-14 hover:p-2 "  
     
     />  
       </div>
        <h2 className="text-2xl font-bold font-sans ">{name}</h2>
        
        
      </div>
    </div>
  );
};

export default BenifitsCard;
