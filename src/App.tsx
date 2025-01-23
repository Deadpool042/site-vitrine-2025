import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainLayout from "./components/MainLayout";
import AppRouter from "./components/Router";
import Backup from "./components/ui/Backup";
import { NavigationProvider } from "./lib/NavigationContext";

function App() {
  return (
    <div className="w-screen h-screen space-y-2 text-grey-text">
      {/* <p>APP.tsx</p> */}
      <Router>
        <NavigationProvider>
          <Header />

          <MainLayout>
            <AppRouter />
          </MainLayout>
        </NavigationProvider>
        <Backup />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
