import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
