import { useDictionaryStore } from "../../../useDictionaryStore";

const SubmitButton = () => {

    const {
        word,
        setDictionary,
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
        <input
            type="button"
            value="Submit"
            className="bg-accent rounded-md text-center text-text py-3 px-10 hover:cursor-pointer hover:bg-blue-500"
            onClick={() => handleGetDictionary()}
        />
    );
}

export default SubmitButton;