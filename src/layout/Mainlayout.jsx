import { Outlet } from "react-router-dom";
import Navbar from "../componets/Navbar";
import Footer from "../page/Footer";


const Mainlayout = () => {
    return (
        <div className="bg-[#2B2C2F] text-white">
             <div className="container mx-auto">
                <Navbar></Navbar>
                <div className="min-h-[calc(100vh-150px)]">
                 <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;