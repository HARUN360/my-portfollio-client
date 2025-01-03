import { Fade } from "react-awesome-reveal";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
const Contact = () => {
  const navigate = useNavigate();
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_50c335v', 'template_7wb4ytv', form.current, {
        publicKey: '_qc9CaI2njb0XB923',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Message Send Succesfull",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/')
        },
        (error) => {
          console.log('FAILED...', error.text);
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Your Message Send Faild",
            showConfirmButton: false,
            timer: 1500
          });
        },
      );
  };


  return (
    <div>


      <Fade direction="down">

        <h3 className="text-center text-4xl mb-10 font-bold underline text-[#F8B416]">Contact Us  </h3>
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-3 max-w-[1000px] mx-auto">
          <div className="max-w-[300px] bg-[#181818]  shadow-[#363636]  rounded-lg text-center  py-6 m-4">
             <span className="flex items-center justify-center text-[#F5B714] text-2xl"><FaPhone /></span>
             <h3 className="my-3">Phone</h3>
             <h3>+8801317537210</h3>
          </div>
          <div className="max-w-[300px] bg-[#181818]  shadow-[#363636]  rounded-lg text-center  py-6 m-4">
             <span className="flex items-center justify-center text-[#F5B714] text-2xl"><MdEmail /></span>
             <h3 className="my-3">Email</h3>
             <h3>mdharunorroshid301204@gmail.com</h3>
          </div>
          <div className="max-w-[300px] bg-[#181818]  shadow-[#363636]  rounded-lg text-center  py-6 m-4">
             <span className="flex items-center justify-center text-[#F5B714] text-2xl"><IoLocationOutline /></span>
             <h3 className="my-3">Address</h3>
             <h3>Dhaka, Bangladesh</h3>
          </div>
        </div>
        <div className=" my-10">
        
          <div className="">
            <div className="bg-[#2B2C2F] shadow-2xl border-2 border-[#363636] p-10 rounded-xl h-[350px] flex justify-center mx-10 lg:mx-20">
              <form ref={form} onSubmit={sendEmail} className="mr-6">
                <label className="text-xl font-bold my-4">Name</label>
                <br />
                <input type="text" name="user_name" placeholder="Name" className="text-black rounded-sm w-full lg:w-[500px] bg-gray-500" />
                <br />
                <label className="text-xl font-bold my-4">Email</label>
                <br />
                <input type="email" name="user_email" placeholder="email" className="text-black rounded-sm w-full lg:w-[500px] bg-gray-500" />
                <br />
                <label className="text-xl font-bold my-4">Message</label>
                <br />
                <textarea name="message" placeholder="Your Message" className="text-black bg-gray-500 rounded-sm pl-2 w-full lg:w-[500px]" />
                <br />
                <input type="submit" value="Send" className="text-black font-bold text-2xl btn" />
              </form>
            </div>

          </div>
        </div>
      </Fade>



    </div>
  );
};

export default Contact;