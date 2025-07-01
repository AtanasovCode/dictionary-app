import { useDictionaryStore } from "../useDictionaryStore";

const App = () => {

  const { bears } = useDictionaryStore();

  return (
    <div>
      {bears}
    </div>
  );
}

export default App;