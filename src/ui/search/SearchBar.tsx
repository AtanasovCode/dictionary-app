import { useDictionaryStore } from "../../../useDictionaryStore";

const SearchBar = () => {

    const {
        wordInput,
        setWordInput,
    } = useDictionaryStore();

    return (
        <input 
            type="text"
            value={wordInput ? wordInput : ""}
            className="w-full text-left p-3 outline-none rounded-md text-text-light dark:text-text" 
            placeholder="Hello"
            onChange={(e) => setWordInput(e.currentTarget.value)}
        />
    );
}

export default SearchBar;