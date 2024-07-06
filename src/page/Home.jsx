import Banner from "../componets/Banner";
import Ido from "../componets/Ido";
import MyEducation from "../componets/MyEducation";
import MySkills from "../componets/MySkills";

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <MyEducation></MyEducation>
          <Ido></Ido>
          <MySkills></MySkills>
        </div>
    );
};

export default Home;