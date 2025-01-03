// Import Swiper React components


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules

// end----------------------------------------------

import { Fade } from "react-awesome-reveal";
import hoky from '../assets/hoky.jpg'
import food from '../assets/foodsharing.jpg'
import contest from '../assets/contest.jpg'
const MyProjct = () => {
  return (
    <div>
      <Fade direction="left">
        <h3 className="text-4xl text-center font-bold underline">My Project</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-10">

         



         

       

         
          <div className="bg-[#1C222A] p-10 rounded-xl">
  <h3 className="text-3xl font-bold my-4">ContestHub</h3>
  <img src={contest} alt="" />
  <p className="flex items-center gap-2 my-2">
    <span> <a href="https://assignment12-client-site.web.app/" target="_blank" className="text-red-500 btn">live</a></span>
    <span> <a href="https://github.com/HARUN360/contestHub-client?tab=readme-ov-file" target="_blank" className="text-red-500 btn">Github client-code</a></span>
    <span> <a href="https://github.com/HARUN360/contestHub-server" target="_blank" className="text-red-500 btn">Github server-code</a></span>
    {/* You can open the modal using document.getElementById('ID').showModal() method */}
    <button className="btn" onClick={() => document.getElementById('my_modal_4').showModal()}>Show Details</button>
    <dialog id="my_modal_4" className="modal ">
      <div className="modal-box w-11/12 max-w-5xl bg-[#1C222A] p-10 rounded-xl">
        <h3 className="text-2xl font-bold text-[#F8B90C] my-6">Project Name: ContestHub</h3>

        <p className="text-lg font-bold">Welcome to ContestHub, the ultimate platform for launching and managing creative contests. Whether it is a design competition or coding challenge, ContestHub streamlines contest creation and winner selection, fostering creativity and celebrating excellence</p>
        <p className="font-bold  text-lg">It is primarily designed for various users to participate in contests, and a winner will be selected from those contests. The winner will receive a significant prize, which could be money or an item. This project applies three types of roles: user, creator, and admin. Users can only participate in various contests and can apply for the creator role if they want to create contests. Creators can create contests and declare winners, but they cannot participate in their own contests. The admin controls the entire system, with the ability to promote a user to a creator or a creator to an admin. Your self</p>







        <h3 className="text-xl text-[#F8B90C]">Home Page</h3>

        <p>  Navbar: Features logo, website name, Home, Login, All Contests, and additional routes.
          Banner with Search Bar: Backend search functionality based on contest tags using MongoDB.
          Popular Contests: Displays at least 5 popular contests with details.</p>

        <h3 className="text-xl text-[#F8B90c]">
          Contest Pages
        </h3>

        <p>  All Contests Page: Lists all contests with filters based on tags or types.
          Contest Details Page (Private): Detailed view with registration button, dynamic timer, and participation details.</p>
        <h3 className="text-xl text-[#F8B90c]">
          User Dashboard (Private)
        </h3>

        <p>   My Participated Contests: Lists contests the user has completed payment for. <br />
          My Winning Contests: Showcases contests the user has won.</p>

        <h3 className="text-xl text-[#F8B90c]">
          Creator Dashboard (Private)
        </h3>

        <p>Add Contest: Form to add new contests with necessary fields. <br />
          My Created Contests: List of contests created by the user with options to edit, delete, and view submissions.</p>

        <h3 className="text-xl text-[#F8B90c]">
          Admin Dashboard (Private)
        </h3>

        <p> Manage Users: View and manage user roles and access. <br />
          Manage Contests: View, confirm, comment, and delete contests.</p>


        <h3 className="text-xl text-[#F8B90c]">
          Technologies Used=
        </h3>
        <h3 className="text-xl text-[#F8B90c]">
          Frontend
        </h3>


        <p>Tailwind CSS: For styling and layout.</p>
        <p>React Router: For navigation and routing.</p>
        <p>React Hook Form: For form handling.</p>
        <p>Tanstack Query: For data fetching and state management.</p>
        <p>Axios: For API requests, including Axios interceptor.</p>

        <h3 className="text-xl text-[#F8B90c]">
          Backend
        </h3>

        <p>Node.js: Runtime environment.</p>
        <p>Express.js: For building the server and RESTful APIs.</p>
        <p>MongoDB: Database for storing contest data and user information.</p>
        <p>Firebase Authentication: For managing user authentication.</p>

        <h3 className="text-xl text-[#F8B90c]">
          Deployment
        </h3>

        <p>Firebase : For deploying the front end.</p>
        <p>Vercel: For deploying the backend.</p>

















        {/* --------------------------------------------------------- */}
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  </p>
</div>
<div className="bg-[#1C222A] p-10 rounded-xl max-h-[500px]">
  <h3 className="text-3xl font-bold my-4">FoodSharing</h3>
  <img src={food} alt="" />
  <p className="flex items-center gap-2 my-4">
    <span> <a href="https://assignment11-client-site-4d4ce.web.app/" target="_blank" className="text-red-500 btn">live</a></span>
    <span> <a href="https://github.com/HARUN360/FoodSharing-client" target="_blank" className="text-red-500 btn">Github client-code</a></span>
    <span> <a href="https://github.com/HARUN360/FoodSharing-server" target="_blank" className="text-red-500 btn">Github server-code</a></span>
    {/* You can open the modal using document.getElementById('ID').showModal() method */}
    <button className="btn" onClick={() => document.getElementById('food').showModal()}>Show Detailss</button>
    <dialog id="food" className="modal ">
      <div className="modal-box w-11/12 max-w-5xl bg-[#1C222A] p-10 rounded-xl">
        <h3 className="text-2xl font-bold text-[#F8B90C] my-6">Project Name: FoodSharing</h3>

        <p className="text-lg font-bold"><p className='text-lg text-yellow-700 font-bold'>Overview:</p> This project is mainly about food sharing. From here different people can request food.
And can add her flowers. He can see how many photos have been added or requested.
</p>
        







        <h3 className="text-xl text-[#F8B90C]">Features:
        </h3>

        <p> 
        <p className='text-[#F8B90C]'>Add Food Page(Private): </p>
        Form to add details.Which then appear on the available food page.


        </p>
        <p> 
        <p className='text-[#F8B90C]'>Available Foods Page:  </p>
        Show the foods where the food status is available


        </p>

        

       

       

       
        <h3 className="text-xl text-[#F8B90c]">
        Technology:
        </h3>
          <p>
           HTML, Tailwind CSS, JavaScript, React.Js, MongoDB, Node.Js, Express.Js, Firebase.

          </p>

       
       

        

        <h3 className="text-xl text-[#F8B90c]">
          Deployment
        </h3>

        <p>Firebase : For deploying the front end.</p>
        <p>Vercel: For deploying the backend.</p>

















        {/* --------------------------------------------------------- */}
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  </p>
</div>
<div className="bg-[#1C222A] p-10 rounded-xl max-h-[500px]">
  <h3 className="text-3xl font-bold my-4">Hockey-s</h3>
  <img src={hoky} alt="" />
  <p className="flex items-center gap-2 my-2">
    <span> <a href="https://harun360.github.io/MH-Hockey-s-play/" target="_blank" className="text-red-500 btn">live</a></span>
 
    <span> <a href="https://github.com/HARUN360/MH-Hockey-s-play" target="_blank" className="text-red-500 btn">Github code</a></span>
    {/* You can open the modal using document.getElementById('ID').showModal() method */}
    <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>Show Details</button>
    <dialog id="my_modal_5" className="modal ">
      <div className="modal-box w-11/12 max-w-5xl bg-[#1C222A] p-10 rounded-xl">
        <h3 className="text-2xl font-bold text-[#F8B90C] my-6">Project Name: Hockey-s</h3>

        <p className="text-lg font-bold">project simulates a dynamic hockey game, focusing on realistic player movements, strategies, and team dynamics. Ideal for sports enthusiasts and developers, it combines excitement with technical challenge.</p>








  

        <h3 className="text-xl text-[#F8B90c]">
          Technologies Used=
        </h3>
     


        <p>Html</p>
        <p>css</p>
        


        <h3 className="text-xl text-[#F8B90c]">
          Deployment: github
        </h3>

     

















        {/* --------------------------------------------------------- */}
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button, it will close the modal */}
            <button className="btn">close</button>
          </form>
        </div>
      </div>
    </dialog>
  </p>
</div>

        </div>
      </Fade>
      <div className='my-20'>

      


      </div>

    </div>
  );
};

export default MyProjct;

// about Smart Bus ticket preject overviwe 30 word