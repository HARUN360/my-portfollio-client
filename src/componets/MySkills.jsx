import { DiMongodb } from "react-icons/di";
import { FaCss3, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpressvpn } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";

const MySkills = () => {
    return (
        <div >
        <h3 className="text-4xl text-center font-bold my-6">MY SKILLS</h3>
        <div className="bg-[#1C2229] text-white"> 
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
    </div>
    );
};

export default MySkills;