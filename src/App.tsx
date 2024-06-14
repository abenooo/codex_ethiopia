import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { NavigationMenuDemo } from "./components/Navbar";

function App() {
  return (
    <>
    <NavigationMenuDemo />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
