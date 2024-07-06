import { DiMongodb } from "react-icons/di";
import { FaCss3, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { Typewriter } from "react-simple-typewriter";
import { Fade } from 'react-awesome-reveal';

const MySkills = () => {
    return (
        <div className="mt-6">
            <Fade direction="down">
                <h1 className='text-2xl md:text-5xl text-center font-bold md:mb-4'>
                    {' '}
                    <span className=''>
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={['My Skills!', 'My Skills!', 'My Skills!', 'My Skills!']}
                            loop={5}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}

                        />
                    </span>
                </h1>

                <div className=" text-white">
                    <div className="p-10">


                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:ml-24 gap-10">
                       
                          <span className="text-5xl text-[#F8B90C] my-2"><FaHtml5 /></span>
                            <span className="text-5xl text-[#F8B90C] my-2"><FaCss3 /></span>
                            <span className="text-5xl text-[#F8B90C] my-2"><RiTailwindCssFill /></span>
                            <span className="text-5xl text-[#F8B90C] my-2"><TbBrandJavascript /></span>
                     
                    
                            <span className="text-5xl text-[#F8B90C] my-2"><FaReact /></span>
                            <span className="text-5xl text-[#F8B90C] my-2"><DiMongodb /></span>
                            <span className="text-5xl text-[#F8B90C] my-2"><FaNode /></span>
                            <span className="text-5xl text-[#F8B90C] my-2"><SiExpress /></span>
                     
                        </div>

                   
                    </div>

                </div>
            </Fade>
        </div>
    );
};

export default MySkills;