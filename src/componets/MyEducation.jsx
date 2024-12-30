
import { Fade } from "react-awesome-reveal";
import { FaInternetExplorer, FaSchool } from "react-icons/fa";
import { GiDiploma } from "react-icons/gi";
import { MdOutlineCastForEducation } from "react-icons/md";

const MyEducation = () => {
    return (
        <div> 
              <Fade direction="down">
            <div className="flex flex-col lg:flex-row gap-10">
                <div className="ml-6 lg:w-1/2">
                    <h3 className="text-4xl font-bold flex items-center gap-4 text-[#F8B416]"><MdOutlineCastForEducation></MdOutlineCastForEducation> <span>Education</span></h3>
                    <div className="ml-6 mt-3">
                        <p className="text-xl font-bold flex items-center gap-4"> <span><FaSchool /></span> <span>SSC</span></p>
                        <p>January 2018 - December 2020</p>
                        <p>KamarChar Public High School,sherpur Sodor, Sherpur</p>
                        <p className="text-xl font-bold flex items-center gap-4"> <span><GiDiploma /></span> <span>Diploma In Engineering</span></p>
                        <p>Excepted Graduation 2024</p>
                        <h3 className="text-2xl font-bold">Sherpur Polytechnic Institute <br /> Sherpur</h3>
                        <p>I am a Computer Technology Student Here. Now 8th Semester Running. I accepted Graduation in 2024.</p>
                    </div>

                </div>
          
                    <div className="lg:w-1/2">
                        <h3 className="text-4xl font-bold flex items-center gap-4 text-[#F8B416]"> <FaInternetExplorer /> <span>Experience</span></h3>
                   
   
                       <div className="ml-6 mt-3">
                       <h4 className="text-3xl  font-bold">Jr. Web Development</h4>
                     
                     <br />
                     <p>Self-Employed / Freelance </p> 
                   
                     <br />
                     <p> April 2023 - Present </p>
                     <br />
                    
                     <p > Developed web applications using MongoDB, Express.js, React, Node.js, and Next.js. Built responsive UIs with React and Tailwind CSS. Created RESTful APIs and managed databases. Collaborated with clients, solved complex problems, and stayed updated with industry trends.</p>
                     <br />
                       </div>
                  
                    </div>
             
            </div>
            </Fade>
        </div>
    );
};

export default MyEducation;