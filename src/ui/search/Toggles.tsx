import OptionsToggle from "./OptionsToggle";
import Logo from "../../assets/book.svg";
import { useDictionaryStore } from "../../../useDictionaryStore";
import SansIcon from "../../assets/sans.svg";
import SerifIcon from "../../assets/serif.svg";
import NightIcon from "../../assets/moon.svg";
import DayIcon from "../../assets/sun.svg";

export default function Toggles() {

    const {
        theme, setTheme,
        fontStyle, setFontStyle
    } = useDictionaryStore();

    return (
        <div className="w-full flex items-center justify-between gap-4 text-text-light dark:text-text">
            <img
                src={Logo}
                alt="Logo"
                className="w-16 invert dark:filter-none"
            />
            <div className="flex items-center justify-center gap-4">
                <OptionsToggle
                    icons={[DayIcon, NightIcon]}
                    option={theme}
                    options={["dark", "light"]}
                    toggleOption={setTheme}
                />
                <OptionsToggle
                    icons={[SerifIcon, SansIcon]}
                    option={fontStyle}
                    options={["serif", "sans"]}
                    toggleOption={setFontStyle}
                />
            </div>
        </div>
    );
}