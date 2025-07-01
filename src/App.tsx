import { useDictionaryStore } from "../useDictionaryStore";

const App = () => {

  const { bears } = useDictionaryStore();

  return (
    <div className="w-full min-h-dvh flex items-center justify-center bg-slate-900 text-white">
      {bears}
    </div>
  );
}

export default App;