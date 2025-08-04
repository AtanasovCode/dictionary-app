import ThemeToggle from "./ThemeToggle";
import FontStyleToggle from "./FontStyleToggle";
import Logo from "../../assets/book.svg";

export default function Toggles() {
    return (
        <div className="w-full flex items-center justify-between gap-4 text-text">
            <img 
                src={Logo}
                alt="Logo"
                className="w-16"
            />
            <div className="flex items-center justify-center gap-4">
                <FontStyleToggle />
                <ThemeToggle />
            </div>
        </div>
    );
}