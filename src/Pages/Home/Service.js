import React from 'react';

const Service = ({ service }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img style={{ height: '115px', width: '117px' }} src={service.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{service.name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>

            </div>

            <div>

            </div>
        </div>
    );
};

export default Service;