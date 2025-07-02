import Search from "../ui/search/Search";

const Hero = () => {
    return (
        <div className="w-full min-h-dvh flex items-center justify-center">
            <div className="flex flex-col items-center justify-center w-full md:max-w-2/3 lg:max-w-1/3 gap-6 lg:gap-10">
                <div className="font-bold text-2xl md:text-3xl lg:text-4xl">
                    AnyWord Dictionary
                </div>
                <Search />
            </div>
        </div>
    );
}

export default Hero;