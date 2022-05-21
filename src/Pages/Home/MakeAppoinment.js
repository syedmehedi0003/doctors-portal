import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppoinment = () => {
    return (
        <section className='flex justify-center items-center mt-32 mb-[100px]' style={{
            background: `url(${appointment})`
        }}>
            < div className='flex-1 hidden lg:block' >
                <img className='mt-[-120px] ' src={doctor} alt="" />
            </div >
            <div className='flex-1'>
                <div className='py-5 px-5'>
                    <h3 className='text-xl text-primary font-bold py-5'>Appoinment</h3>
                    <h2 className='text-4xl text-white'>Make an appoinment Today</h2>
                    <p className='text-white py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum earum error officiis quam tempora. Officiis ipsum aperiam minus, neque rerum laborum fugit cumque, temporibus fuga vitae consequatur eos, cum voluptate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, sequi.</p>
                    <PrimaryButton>Get started</PrimaryButton>
                </div>

            </div>
        </section >
    );
};

export default MakeAppoinment;