import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if(document.getElementById("name").value == ""){
      toast.error('Please enter your Name', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
    else if(document.getElementById("email").value == ""){
      toast.error('Please enter your Email', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
    else if(document.getElementById("message").value == ""){
      toast.error('Please enter your Message', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
    else{
      document.getElementById("sendBtn").disabled = true;
      emailjs.sendForm('service_zasipxy', 'template_f0lg3a8', form.current, 'wJbcKHrIJ7GsLc50B')
      .then((result) => {
        toast.success('Your email has been submitted', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
          document.getElementById("sentMessage").reset();
          document.getElementById("sendBtn").disabled = false;
      }, (error) => {
          console.log(error.text);
      });
    }
  };
  return (
    <div name='contact' className='w-full bg-[#0a192f] flex justify-center items-center'>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col max-w-[600px] w-full mt-[120px]' id='sentMessage'>
            <div className='pb-3'>
                <p className='text-4xl font-bold inline border-b-4 border-[#f2763a] text-gray-300'>Contact</p>
                  </div>
                  <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                  />
            <input className='bg-[#ccd6f6] p-2' type="text" id='name' placeholder='Name' name='user_name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" id='email' placeholder='Email' name='user_email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" id='message' placeholder='Message'></textarea>
            <button type='submit' className='text-white border-2 hover:bg-[#f2763a] hover:border-[#f2763a] px-4 py-3 my-8 mx-auto flex items-center' id='sendBtn'>Send</button>
        </form>
    </div>
  )
}

export default Contact