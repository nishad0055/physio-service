import React from 'react';
import BenifitsCard from './BenifitsCard';
import './Benifits.css'


import doctors from '../../../assets/account/doctors.svg'
import theraphy from '../../../assets/account/theraphy.svg'
import graduates from '../../../assets/account/graduates.svg'
import home from '../../../assets/account/p.svg'
import charge from '../../../assets/account/doctors.svg'
import peace from '../../../assets/account/hand-peace-solid.svg'

const Benifits = () => {

    const benifitData = [
        {
            id: 1,
            name: '100% Professionals Physiotherapist',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, enim.',
           img: graduates
            
        },
        {
            id: 2,
            name: 'Experienced & Skilled Team',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, enim.',
           img: doctors
            
        },
        {
            id: 3,
            name: 'Manual Therapy',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, enim.',
          img: theraphy
            
        },
        {
            id: 4,
            name: 'Comfortable Environment',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, enim.',
           img: charge
            
        },
        {
            id: 5,
            name: 'Affordable Charges',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, enim.',
            img: home
            
        },
        {
            id: 6,
            name: 'Quick & Maximum Outcome',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, enim.',
          img: peace
            
        },

    ]


    return (
        <div className='my-20 p-4 bg-cover overlay text-white' >
            <h2 className='text-center text-4xl font-sans font-bold my-10'   >CLIENTS BENIFITS</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 container mx-auto gap-8 mb-10' >
            {
                benifitData.map(benifits => <BenifitsCard
                key={benifits.id}
                benifits = {benifits}
                ></BenifitsCard>)
            }
            </div>
        </div>
    );
};

export default Benifits;