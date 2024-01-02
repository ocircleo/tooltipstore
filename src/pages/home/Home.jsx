import AllAps from "../../components/allaps/AllAps";
import AreYou from "../../components/areyou/AreYou";
import toTop from "../../hooks/toTop";
import EducationalApps from "./sections/EducationalApps";
import GraphicAndAnimation from "./sections/GraphicAndAnimation";
import PopularApps from "./sections/PopularApps";
import PopularGames from "./sections/PopularGames";
import TopCatagories from "./sections/TopCatagories";

const Home = () => {
    toTop()
    return (
        <div className="w-full md:w-5/6  mx-auto px-2">
            {/* <TopCatagories></TopCatagories> */}
            <PopularApps></PopularApps>
            <PopularGames></PopularGames>
            <EducationalApps></EducationalApps>
            <GraphicAndAnimation></GraphicAndAnimation>
            <AllAps></AllAps>

        </div>
    );
};

export default Home;