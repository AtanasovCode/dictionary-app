import { useDictionaryStore } from "../../../useDictionaryStore";
import Loading from "./Loading";
import SearchIcon from "../../assets/search-icon.svg";

const SubmitButton = () => {

    const {
        word,
        setDictionary,
        loading,
        setLoading,
    } = useDictionaryStore();

    const handleGetDictionary = async () => {
        try {
            setLoading(true);

            const data = await fetch(` https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

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
        <button
            className="px-6 rounded-md bg-accent hover:bg-blue-500 flex items-center justify-center cursor-pointer"
            onClick={() => handleGetDictionary()}
        >
            {
                loading ? (
                    <Loading />
                ) : (
                    <img
                        src={SearchIcon}
                        alt="search icon"
                        className="h-8"
                    />
                )
            }
        </button>
    );
}

export default SubmitButton;