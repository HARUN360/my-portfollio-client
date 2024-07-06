import { DiMongodb } from "react-icons/di";
import { FaCss3, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpressvpn } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { Typewriter } from "react-simple-typewriter";
import { Fade } from 'react-awesome-reveal';

const MySkills = () => {
    return (
        <div >
        <Fade direction="up">
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
            </Fade>
         <Fade direction='up'>
        <div className=" text-white"> 
            <div className="p-10">
                <h3 className="text-white font-bold text-3xl">Technical skills</h3>
                <ul className="text-xl">
                    <li className="flex items-center gap-2"> <span className="text-[#F8B90C]"><FaHtml5 /></span> <span>html</span></li>
                    <li className="flex items-center gap-2"> <span className="text-[#F8B90C]"><FaCss3 /></span> <span>css</span></li>
                    <li className="flex items-center gap-2"> <span className="text-[#F8B90C]"><RiTailwindCssFill /></span> <span>tailwindcss</span></li>
                    <li className="flex items-center gap-2"> <span className="text-[#F8B90C]"><TbBrandJavascript /></span> <span>java script</span></li>
                    <li className="flex items-center gap-2"> <span className="text-[#F8B90C]"><FaReact /></span> <span>react</span></li>

                    <li className="flex items-center gap-2"> <span className="text-[#F8B90C]"><DiMongodb /></span> <span>mongodb</span></li>
                    <li className="flex items-center gap-2"> <span className="text-[#F8B90C]"><FaNodeJs /></span> <span>learning node js</span></li>
                    <li className="flex items-center gap-2"> <span className="text-[#F8B90C]"><SiExpressvpn /></span> <span>learning express js</span></li>
                  
                </ul>
            </div>
           
        </div>
        </Fade>
    </div>
    );
};

export default MySkills;