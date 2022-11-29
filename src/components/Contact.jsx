import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zasipxy', 'template_f0lg3a8', form.current, 'wJbcKHrIJ7GsLc50B')
      .then((result) => {
            toast("Your email has been submitted");
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div name='contact' className='w-full bg-[#0a192f] flex justify-center items-center'>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col max-w-[600px] w-full mt-[300px]'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#f2763a] text-gray-300'>Contact</p>
                  </div>
                  <ToastContainer />
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='user_name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='user_email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button type='submit' className='text-white border-2 hover:bg-[#f2763a] hover:border-[#f2763a] px-4 py-3 my-8 mx-auto flex items-center'>Send</button>
        </form>
    </div>
  )
}

export default Contact