import { Fade } from "react-awesome-reveal";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
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


      <Fade direction="up">

        <h3 className="text-center text-4xl font-bold underline text-[#F8B416]">Contact Us  </h3>

        <div className="flex justify-around mt-10">
          <div className="lg:w-1/2 my-14">
            <h3 className="text-3xl text-center font-bold">Name: MD.HARUN OR ROSHID</h3>
            <h4 className="text-2xl text-center my-4 font-bold">+8801317537210</h4>
            <p className="text-2xl text-center font-bold">
              Dhaka, Bangladesh
            </p>
          </div>
          <div className="lg:w-1/2">
            <div>
              <form ref={form} onSubmit={sendEmail} className="mr-6">
                <label className="text-xl font-bold my-4">Name</label>
                <br />
                <input type="text" name="user_name" className="text-black rounded-sm w-full" />
                <br />
                <label className="text-xl font-bold my-4">Email</label>
                <br />
                <input type="email" name="user_email" className="text-black rounded-sm w-full" />
                <br />
                <label className="text-xl font-bold my-4">Message</label>
                <br />
                <textarea name="message" className="text-black rounded-sm w-full pl-2" />
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