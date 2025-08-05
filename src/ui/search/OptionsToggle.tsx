import clsx from "clsx";

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

    const currentIndex = options.indexOf(option);
    const nextIndex = currentIndex === 0 ? 1 : 0;

    return (
        <button
            onClick={() => options.indexOf(option) === 0 ? toggleOption(options[1]) : toggleOption(options[0])}
            className="
                w-12 max-w-12 aspect-square rounded-full bg-secondary-light dark:bg-secondary relative
                flex items-center justify-center cursor-pointer overflow-hidden transition-all"
        >
            <img
                src={icons[0]}
                className={clsx(
                    "w-1/2 absolute top-1/2 left-1/2 -translate-x-1/2 transition-all duration-500 invert dark:filter-none",
                    {
                        "-translate-y-1/2 opacity-100": currentIndex === 0,  // active
                        "translate-y-[200%] opacity-0": currentIndex !== 0, // sliding down
                    }
                )}
            />
            <img
                src={icons[1]}
                className={clsx(
                    "w-1/2 absolute top-1/2 left-1/2 -translate-x-1/2 transition-all duration-500 invert dark:filter-none",
                    {
                        "-translate-y-1/2 opacity-100": currentIndex === 1,  // active
                        "-translate-y-[200%] opacity-0": currentIndex !== 1, // sliding up
                    }
                )}
            />
        </button>
    );
}