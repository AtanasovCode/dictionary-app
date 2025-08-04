import { useDictionaryStore } from "../../../useDictionaryStore";
import Loading from "./Loading";
import SearchIcon from "../../assets/search-icon.svg";

const SubmitButton = () => {
    return (
        <button type="submit" className="px-6 rounded-md bg-accent hover:bg-blue-500 flex items-center justify-center cursor-pointer">
            <img
                src={SearchIcon}
                alt="search icon"
                className="h-8"
            />
        </button>
    );
}

export default SubmitButton;