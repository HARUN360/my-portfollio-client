import { Fade } from "react-awesome-reveal";

const MyProjct = () => {
    return (
        <div>
            <Fade direction="left">
            <h3 className="text-4xl text-center font-bold underline">Project</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-10">
               <div className="bg-[#1C222A] p-10 rounded-xl">
                   <h3 className="text-3xl font-bold my-4">Hockey-s</h3>
                   <p>project simulates a dynamic hockey game, focusing on realistic player movements, strategies, and team dynamics. Ideal for sports enthusiasts and developers, it combines excitement with technical challenge.</p>
                   <p className="flex items-center gap-2 my-2">
                     <span> <a href="https://harun360.github.io/MH-Hockey-s-play/" target="_blank" className="text-red-500 btn">live link</a></span>
                     <span> <a href="https://github.com/HARUN360/MH-Hockey-s-play" target="_blank" className="text-red-500 btn">Github code</a></span>
                   </p>
               </div>
               <div className="bg-[#1C222A] p-10 rounded-xl">
                   <h3 className="text-3xl font-bold my-4">Smart Bus ticket</h3>
                   <p>The Smart Bus Ticket project is an advanced system for booking and managing bus tickets, featuring real-time seat availability, digital payments, and user-friendly interfaces for both passengers and operators.</p>
                   <p className="flex items-center gap-2 my-2">
                     <span> <a href="https://harun360.github.io/AH5-smart-ticketing/" target="_blank" className="text-red-500 btn">live link</a></span>
                     <span> <a href="https://github.com/HARUN360/AH5-smart-ticketing" target="_blank" className="text-red-500 btn">Github code</a></span>
                   </p>
               </div>
               <div className="bg-[#1C222A] p-10 rounded-xl">
                   <h3 className="text-3xl font-bold my-4">Holiday Travels</h3>
                   <p>Tours provide a unique opportunity to explore diverse cultures,transforming historical sites into immersive lessons about the past.</p>
                   <p className="flex items-center gap-2 my-2">
                     <span> <a href="https://harun360.github.io/Holiday-Travel/" target="_blank" className="text-red-500 btn">live link</a></span>
                     <span> <a href="https://github.com/HARUN360/Holiday-Travel" target="_blank" className="text-red-500 btn">Github code</a></span>
                   </p>
               </div>
             
            </div>
               </Fade>
        </div>
    );
};

export default MyProjct;

// about Smart Bus ticket preject overviwe 30 word