import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_r1sddel', 'template_583r90d', form.current, 'I5BnTsg8zMiHM2a5X')
            .then((result) => {
                toast.success('Successfully send mail!')  
              
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div id='contact' className='lg:mx-20 mt-4'>
            <h1 className='text-2xl font-bold text-[#00df9a]'>Contact</h1>
            <div className='hero mt-4'>
                <form className='card-body card flex-shrink-0  w-full max-w-sm shadow-2xl shadow-[#00df9a] bg-base-100' ref={form} onSubmit={sendEmail}>

                    <label>Name</label>
                    <input type="text" name="user_name" className="lg:w-80 input input-bordered " />
                    <label>Email</label>
                    <input type="email" name="user_email" className="lg:w-80 input input-bordered " />
                    <label>Message</label>
                    <textarea className='p-8 ' name="message" />
                    <button type="submit"  className="lg:w-80  input input-bordered " >Send</button>
                </form>
            </div>
        </div>

    );
};

export default Contact;