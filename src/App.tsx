import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AppRouter from "./components/Router";
import Backup from "./components/ui/Backup";
import { NavigationProvider } from "./lib/NavigationContext";
import HeaderComponent from "./components/ui/layout/HeaderComponent";

function App() {
  return (
    <div className="space-y-10 text-grey-text">
      {/* <p>APP.tsx</p> */}
      <Router>
        <NavigationProvider>
          {/* <Header /> */}
          <HeaderComponent />
          <AppRouter />
        </NavigationProvider>
        <Backup />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
