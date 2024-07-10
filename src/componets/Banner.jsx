import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";


const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen lg:mb-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                <Fade direction="down">
                    <img
                        src="https://i.ibb.co/KhkVwcZ/IMG-20240703-173856-1.jpg"
                        className=" w-[300px] md:w-[400px] lg:w-[600px]  shadow-2xl rounded-full" />
                         </Fade>
                        <Fade direction="up">
                    <div className="text-white">
                        <h5 className="text-2xl font-bold">HELLO, MY NAME IS</h5>
                        <h3 className="text-5xl  font-bold my-6">MD.HARUN OR ROSHID</h3>

                        <h1 className='text-xl font-bold text-[#F5B714]'>
                            {' '}
                            <span className=''>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['I AM Web Developer!', 'I AM Web Developer!', 'I AM Web Developer!', 'I AM Web Developer!']}
                                    loop={5}
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
                        <Link to='https://drive.google.com/u/0/uc?id=1_Omek-Xy7GtZqqQ0eQUf0XVVty1pd249&export=download' className="btn bg-[#f86f03] rounded-3xl mr-3" >Dawnlode Resume</Link>
                    </div>
                        </Fade>
                </div>
            </div>
        </div>
    );
};

export default Banner;
