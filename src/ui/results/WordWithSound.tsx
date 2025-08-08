import clsx from "clsx";
import SoundIcon from "../../assets/sound.svg";
import { useDictionaryStore } from "../../../useDictionaryStore";
import { useEffect } from "react";

export default function WordWithSound() {

    const {
        dictionary,
        soundID,
        loading,
        word,
    } = useDictionaryStore();

    const getLetterCount = (word: string) => {
        return word.replace(/\s+/g, '').length;
    }

    useEffect(() => {
        console.log(dictionary[0]?.word);
    }, [dictionary])

    const letterCount = getLetterCount(word ? word : "");

    async function playAudio() {
        var audio = new Audio(soundID);

        try {
            await audio.play();
            console.log('Playing...');
        } catch (err) {
            console.log('Failed to play...' + err);
        }
    }

    return (
        <div className="w-full flex items-center justify-between flex-wrap text-text-light dark:text-text gap-4">
            <div className={clsx(
                "font-bold",
                {
                    "text-md md:text-lg lg:text-2xl xl:text-3xl": letterCount > 20,
                    "text-lg md:text-xl lg:text-2xl xl:text-4xl": letterCount > 14 && letterCount <= 20,
                    "text-3xl md:text-4xl lg:text-5xl xl:text-6l": letterCount >= 6 && letterCount <= 14,
                    "text-4xl md:text-5xl lg:text-6xl xl:text-7xl": letterCount < 6
                }
            )}>
                {word ? word : ""}
            </div>
            <button
                className="
                    w-14 md:w-16 lg:w-18 aspect-square rounded-full 
                    bg-accent-light dark:bg-accent flex items-center justify-center
                    cursor-pointer hover:bg-blue-500
                "
                onClick={() => playAudio()}
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