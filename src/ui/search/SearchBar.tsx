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
            className="w-full text-left p-3 outline-none rounded-md text-background" 
            onChange={(e) => setWord(e.currentTarget.value)}
        />
    );
}

export default SearchBar;