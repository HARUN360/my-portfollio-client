import { Outlet } from "react-router-dom";
import Navbar from "../componets/Navbar";
import Footer from "../page/Footer";


const Mainlayout = () => {
    return (
        <div className="bg-[#111122] text-white">
             <div className="container mx-auto">
                <Navbar></Navbar>
                <div className="min-h-[calc(100vh-380px)]">
                 <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;