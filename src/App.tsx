import { Footer, Header } from "./components";
import { GlobalStyles } from "./global";

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="w-full min-h-[100vh] flex flex-col justify-between">
        <Header />
        <Footer />
      </div>
    </>
  );
}

export default App;
