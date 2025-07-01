import Hero from "./components/Hero";

const App = () => {
  return (
    <main
      className="
                min-h-dvh w-full flex flex-col items-start justify-start 
                bg-background text-text font-sans p-6
            ">
      <Hero />
    </main>
  );
}

export default App;