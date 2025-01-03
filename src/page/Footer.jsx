import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="text-2xl"> 
          <footer className="footer bg-neutral text-neutral-content items-center p-4">
  <aside className="grid-flow-col items-center">
  
    <p className="text-[#C75F28]  font-bold text-2xl ">© All Rights Reserved 2020 - 2026 | Md. Harun </p>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-2xl">
     <Link to='https://www.linkedin.com/in/mdharunorroshid332' target="_blank" className="hover:text-[#0865FE]"><FaLinkedin /></Link>
  
                              <Link to='https://web.facebook.com/@md.harun.672707' target="_blank" className="hover:text-[#0865FE]"><FaFacebook /></Link>
                              <Link to='https://github.com/HARUN360?tab=repositories' target="_blank" className="hover:text-[#0865FE]"><FaGithub />
                              </Link> 
  </nav>
</footer>
        </div>
    );
};

export default Footer;