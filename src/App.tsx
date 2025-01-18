import Header from "./components/Header";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="w-screen h-screen p-2 space-y-2 bg-black">
      <Header />

      {/* <p>APP.tsx</p> */}
      <HomePage />
    </div>
  );
}

export default App;
