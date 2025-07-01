import { useDictionaryStore } from "../../../useDictionaryStore";

const SearchBar = () => {

    const {
        word,
        setWord,
    } = useDictionaryStore();

    return (
        <input 
            type="text"
            value={word ? word : ""}
            className="w-full px-2 py-3 rounded-md bg-primary text-left"
            onChange={(e) => setWord(e.currentTarget.value)}
        />
    );
}

export default SearchBar;