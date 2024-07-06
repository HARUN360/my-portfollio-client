import { FaArtstation, FaLongArrowAltRight } from "react-icons/fa";
import { MdScreenshotMonitor } from "react-icons/md";
import { SiBackendless } from "react-icons/si";

const Ido = () => {
    return (
        <div className="my-12">
            <div>
                <h3 className="text-4xl text-center font-bold">WHAT I DO</h3>
                <p className="text-xl text-center font-bold text-[#F8B90C] my-2">My Services</p>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6 mx-4">
                    <div className="bg-[#1C222A] p-10 rounded-xl">
                        <h5 className="text-5xl text-[#F8B90C] my-4"><FaArtstation /></h5>
                        <h5 className="text-2xl font-bold mb-2">DESIGN SKILLS</h5>
                        <p className="mb-6 text-sm">Proficient in Figma design, creating sleek user interfaces and intuitive user experiences with a strong eye for aesthetics and usability.</p>
                        <a href="#" className="text-white hover:text-[#F8B90C] font-bold flex items-center gap-2"><span>Say Hello</span> <span><FaLongArrowAltRight className="mt-1"/></span>
                        </a>
                    </div>
                    <div className="bg-[#1C222A] p-10 rounded-xl">
                        <h5 className="text-5xl text-[#F8B90C] my-4"><MdScreenshotMonitor /></h5>
                        <h5 className="text-2xl font-bold mb-2">FRONT-END DEVELOPER</h5>
                        <p className="mb-6 text-sm">I’m a Front End Web developer who is passionate about making error-free websites with 100% client satisfaction.</p>
                        <a href="#" className="text-white hover:text-[#F8B90C] font-bold flex items-center gap-2"><span>Say Hello</span> <span><FaLongArrowAltRight className="mt-1"/></span>
                        </a>
                    </div>
                    <div className="bg-[#1C222A] p-10 rounded-xl">
                        <h5 className="text-5xl text-[#F8B90C] my-4"><SiBackendless /></h5>
                        <h5 className="text-2xl font-bold mb-2">Back-End Development</h5>
                        <p className="mb-6 text-sm">I deliver expert backend development services, creating robust and scalable server-side applications with Node.js and Express.js.</p>
                        <a href="#" className="text-white hover:text-[#F8B90C] font-bold flex items-center gap-2"><span>Say Hello</span> <span><FaLongArrowAltRight className="mt-1"/></span>
                        </a>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Ido;