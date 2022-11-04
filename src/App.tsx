import { Footer, Header, Hero, ModalForm } from "./components";
import { GlobalStyles } from "./global";
import { useFormModal } from "./hooks";

function App() {
  const { open, onClose } = useFormModal();

  return (
    <>
      <ModalForm open={open} onClose={onClose} />
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
