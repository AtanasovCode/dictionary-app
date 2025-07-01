import { useDictionaryStore } from "../useDictionaryStore";

const App = () => {

  const { bears } = useDictionaryStore();

  return (
    <div className="w-full min-h-dvh flex items-center justify-center bg-background text-text">
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="font-sans">
          Sans Serif Text
        </div>
        <div className="font-serif text-5xl">
          Serif Text
        </div>
      </div>
    </div>
  );
}

export default App;