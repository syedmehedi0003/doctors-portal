import React from 'react';
import bgimg from '../../assets/images/appointment.png';

const ContactUs = () => {
    return (
        <section style={{
            background: `url(${bgimg})`,
            backgroundSize: 'cover'
        }} >

            <div>
                <form className='text-center p-5'>
                    <input type="email" name="email" placeholder='Email' />
                    <br />
                    <input type="email" name="email" placeholder='Email' />

                </form>
            </div>

        </section >
    );
};

export default ContactUs;
