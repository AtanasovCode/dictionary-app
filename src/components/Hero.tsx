import Toggles from "../ui/search/Toggles";
import Search from "../ui/search/Search";

const Hero = () => {
    return (
        <div className="w-full flex flex-col items-start justify-center gap-8">
            <Toggles />
            <Search />
        </div>
    );
}

export default Hero;