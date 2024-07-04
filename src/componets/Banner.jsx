

const Banner = () => {
    return (
        <div>
            <div className="hero bg-[#111122] min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src="https://i.ibb.co/KhkVwcZ/IMG-20240703-173856-1.jpg"
                        className="max-w-sm  shadow-2xl rounded-full" />
                    <div className="text-white">
                        <h5 className="text-2xl font-bold">HELLO, MY NAME IS</h5>
                        <h3 className="text-5xl  font-bold my-6">MD.HARUN OR ROSHID</h3>
                        <p className="text-xl font-bold text-[#F5B714]">I AM Web Developer</p>
                        <p className="py-6 lg:mr-20">
                        From Dhaka, Bangladesh. I’m a Front End Web developer who is passionate about making error-free websites. I am good at React. I love to talk with you about your unique. 
                        </p>
                        <button className="btn btn-outline bg-[#F8B90C] btn-[#262626] rounded-full text-2xl font-bold">Contact</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;