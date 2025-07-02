import { useDictionaryStore } from "../../../useDictionaryStore";
import Loading from "./Loading";

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
        <div className="bg-accent rounded-md text-center text-text py-3 px-10 hover:cursor-pointer hover:bg-blue-500">
            {
                loading ? (
                    <Loading />
                ) : (
                    <input
                        type="button"
                        value={"Submit"}
                        className="w-full"
                        onClick={() => handleGetDictionary()}
                    />
                )
            }
        </div>
    );
}

export default SubmitButton;