import SoundIcon from "../../assets/sound.svg";

export default function WordWithSound() {
    return (
        <div className="w-full flex items-center justify-between flex-wrap text-text-light dark:text-text gap-4">
            <div className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                Transneptunianasdfsadfsfa
            </div>
            <button
                className="
                    w-14 md:w-16 lg:w-18 aspect-square rounded-full 
                    bg-accent-light dark:bg-accent flex items-center justify-center
                "
            >
                <img
                    src={SoundIcon}
                    alt="play sound icon"
                    className="w-1/2"
                />
            </button>
        </div>
    );
}