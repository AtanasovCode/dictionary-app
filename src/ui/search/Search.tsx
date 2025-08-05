import SearchBar from "./SearchBar";
import SubmitButton from "./SubmitButton";
import { useDictionaryStore } from "../../../useDictionaryStore";

const Search = () => {

    const {
        word,
        setDictionary,
        setLoading,
    } = useDictionaryStore();

    const handleGetDictionary = async () => {
        try {
            setLoading(true);

            const trimmedWord = word?.trim(); // trim word to avoid errors with empty spaces
            const data = await fetch(` https://api.dictionaryapi.dev/api/v2/entries/en/${trimmedWord}`);

            if (!data) {
                console.error("Something went wrong");
                return;
            }

            const dictionaryResponse = await data.json();
            setDictionary(dictionaryResponse);


            console.log(dictionaryResponse[0]);
        } catch (error: any) {
            console.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                handleGetDictionary();
            }}
            className="flex items-stretch justify-between w-full p-1 rounded-md bg-secondary-light dark:bg-secondary"
        >
            <SearchBar />
            <SubmitButton />
        </form>
    );
}

export default Search;