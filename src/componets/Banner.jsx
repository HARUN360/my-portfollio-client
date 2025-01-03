import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import Myimg from '../assets/me1.png'
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Banner = () => {
    return (
        <div>
            <div className="my-6 lg:my-6">
                <div className="hero-content flex-col lg:flex-row-reverse items-center justify-between">
                 <div>                        <img
                            src={Myimg}
                            className=" w-[300px] md:w-[400px] lg:w-[600px] h-[340px] rounded-[200px] border-4 border-[#25272A] p-4 shadow-2xl" />
          </div>

                        <div className="text-white">
                            <h5 className="text-2xl font-bold">HELLO, MY NAME IS</h5>
                            <h3 className="text-5xl  font-bold my-6">MD.HARUN OR ROSHID</h3>

                            <h1 className='text-xl font-bold text-[#F5B714]'>
                                {' '}
                                <span className=''>
                                    {/* Style will be inherited from the parent element */}
                                    <Typewriter
                                        words={['I AM Web Developer!', 'I AM Web Developer!', 'I AM Web Developer!', 'I AM Web Developer!']}
                                        loop={Infinity}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}

                                    />
                                </span>
                            </h1>

                            <p className="py-6 lg:mr-20">
                                From Dhaka, Bangladesh. I’m a Front End Web developer who is passionate about making error-free websites. I am good at React. I love to talk with you about your unique.
                            </p>
                            {/* <button className="btn btn-outline bg-[#F8B90C] btn-[#262626] rounded-full text-2xl font-bold">Download CV</button> */}
                            <div className="flex">
                            <div>
                            <Link to='https://drive.google.com/uc?id=1eTkI60dyn-kwFvS2dqK6QfFqn43aEWWa&export=download' className="btn bg-[#181818] btn-neutral shadow-[#363636] text-[#F5B714] rounded-xl mr-3 " >My Resume</Link>
                            </div>
                           <div>
                           <Link to='https://drive.google.com/uc?id=1xub4VCpvmrXHBUWgWS15hgt-EM0FR_u4&export=download' className="btn bg-[#181818] btn-neutral shadow-[#363636] text-[#F5B714] rounded-xl mr-3 " >My CV</Link>
                           </div>
                           <div>
                           <div className="btn bg-[#181818] btn-neutral shadow-[#363636] text-[26px] text-[#F5B714] rounded-xl mr-3 " >
                           

                            <Link to='https://www.linkedin.com/in/mdharunorroshid332' target="_blank" className="hover:text-[#0865FE]"><FaLinkedin /></Link>

                            <Link to='https://web.facebook.com/@md.harun.672707' target="_blank" className="hover:text-[#0865FE]"><FaFacebook /></Link>
                            <Link to='https://github.com/HARUN360?tab=repositories' target="_blank" className="hover:text-[#0865FE]"><FaGithub />
                            </Link> 
                           </div>
                           </div>
                           
                           </div>
                        </div>
          
                </div>
            </div>
        </div>
    );
};

export default Banner;
