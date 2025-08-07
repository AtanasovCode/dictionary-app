import clsx from "clsx";
import { useDictionaryStore } from "../../useDictionaryStore";
import WordWithSound from "../ui/results/WordWithSound";


export default function Results() {

    const { fontStyle } = useDictionaryStore();

    return (
        <div className={clsx(
            "w-full flex flex-col items-start justify-start transition-all duration-200",
            {
                "font-serif": fontStyle === "serif",
                "font-sans": fontStyle === "sans"
            }
        )}>
            <WordWithSound />
        </div>
    );
}