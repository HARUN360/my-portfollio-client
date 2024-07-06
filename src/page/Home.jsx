import Banner from "../componets/Banner";
import Ido from "../componets/Ido";
import MyEducation from "../componets/MyEducation";
import MyProjct from "../componets/MyProjct";
import MySkills from "../componets/MySkills";

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <MyEducation></MyEducation>
          <Ido></Ido>
          <MySkills></MySkills>
          <MyProjct></MyProjct>
        </div>
    );
};

export default Home;