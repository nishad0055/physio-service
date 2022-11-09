import React from 'react';
import banner from '../../../assets/account/banner.jpg'

const Booking = () => {
    return (
        <div>

            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content container mx-auto">
                    <div className="w-1/2 shadow-md bg-base-100">
                    <div className="card-body">
                    <h1 className='md:text-5xl text-2xl font-bold text-center mt-' >BOOK ONLINE</h1>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input type="text" placeholder="Full Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input type="text" placeholder="+880" className="input input-bordered" />
                        </div>
                        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900">Select a programm</label>
                        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        <option selected>Choose a Programm</option>
                        <option value="ct">Couple Theraphy</option>
                        <option value="gt">Group Theraphy</option>
                        <option value="it">Invididual Theraphy</option>
                        <option value="ct">Children Theraphy</option>
                        </select>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Pick a Date</span>
                        </label>
                        <input type="date"  className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">BOOK ONLINE NOW</button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                

        </div>
    );
};

export default Booking;