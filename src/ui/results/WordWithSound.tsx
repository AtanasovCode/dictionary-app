import clsx from "clsx";
import SoundIcon from "../../assets/sound.svg";
import { useDictionaryStore } from "../../../useDictionaryStore";
import { useEffect } from "react";

export default function WordWithSound() {

    const {
        dictionary,
        loading,
    } = useDictionaryStore();

    const getLetterCount = (word: string) => {
        return word.replace(/\s+/g, '').length;
    }

   useEffect(() => {
    console.log(dictionary[0]?.word);
   }, [dictionary])

    return (
        <div className="w-full flex items-center justify-between flex-wrap text-text-light dark:text-text gap-4">
            <div className={clsx(
                "font-bold md:text-3xl lg:text-4xl xl:text-5xl",
                {
                    "text-md": getLetterCount("Hello") > 20,
                    "text-lg": getLetterCount("Hello") > 14 && getLetterCount("Hello") <= 20,
                    "text-3xl": getLetterCount("Hello") >= 6 && getLetterCount("Hello") <= 14,
                    "text-5xl": getLetterCount("Hello") < 6
                }
            )}>
                Hello
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