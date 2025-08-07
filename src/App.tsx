import { useEffect } from "react";
import { useDictionaryStore } from "../useDictionaryStore";

import Hero from "./components/Hero";
import Results from "./components/Results";

const App = () => {

  const {
    theme,
  } = useDictionaryStore();

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme])

  return (
    <main
      className="
                min-h-dvh w-full flex flex-col items-center justify-start
                bg-background-light dark:bg-background text-text-light dark:text-text font-sans
                px-2 py-6 md:px-8 md:py-8 lg:px-12 lg:py-16 transition-colors duration-200
            "
    >
      <div
        className="
          flex flex-col items-start justfiy-start
          w-full md:w-4/5 lg:w-2/3 xl:w-1/2 gap-16 overflow-x-hidden
        "
      >
        <Hero />
        <Results />
      </div>
    </main>
  );
}

export default App;