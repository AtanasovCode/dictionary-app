import SearchBar from "./SearchBar";
import SubmitButton from "./SubmitButton";

const Search = () => {
    return (
        <div className="flex items-stretch justify-between w-full p-1 rounded-md bg-secondary">
            <SearchBar />
            <SubmitButton />
        </div>
    );
}

export default Search;