import SearchBar from "./SearchBar";
import SubmitButton from "./SubmitButton";

const Search = () => {
    return (
        <div className="flex items-center justify-between w-full p-1 rounded-md bg-primary">
            <SearchBar />
            <SubmitButton />
        </div>
    );
}

export default Search;