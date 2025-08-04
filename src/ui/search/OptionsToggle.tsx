import { useDictionaryStore } from "../../../useDictionaryStore";

type OptionTypes = {
    icons: string[];
    option: string;
    options: string[];
    toggleOption: (option: string) => void;
}

export default function OptionsToggle({
    icons,
    option,
    options,
    toggleOption,
}: OptionTypes) {


    return (
        <button
            onClick={() => options.indexOf(option) === 0 ? toggleOption(options[1]) : toggleOption(options[0])}
            className="
                w-12 max-w-12 aspect-square rounded-full bg-secondary 
                flex items-center justify-center cursor-pointer"
        >
            <img
                src={icons[options.indexOf(option)]}
                className="w-1/2"
            />
        </button>
    );
}