import { Footer, Header, Hero } from "./components";
import { GlobalStyles } from "./global";

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="w-full min-h-[100vh] flex flex-col justify-between">
        <Header />
        <Hero />
        <Footer />
      </div>
    </>
  );
}

export default App;
