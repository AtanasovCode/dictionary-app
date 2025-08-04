import Hero from "./components/Hero";

const App = () => {
  return (
    <main
      className="
                min-h-dvh w-full flex flex-col items-center justify-start
                bg-background text-text font-sans
                px-4 py-6 md:px-8 md:py-8 lg:px-12 lg:py-16
            "
    >
      <div 
        className="
          flex flex-col items-start justfiy-start
          w-full md:w-4/5 lg:w-2/3 xl:w-1/2
        "
      >
        <Hero />
      </div>
    </main>
  );
}

export default App;