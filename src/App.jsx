import { useEffect } from "react"
import Header from "./components/Header"
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Services from "./pages/Services";

function App() {

  useEffect(() => {
    document.title = "Excellence Taxi"
  }, []);

  return (
    <>
      <Header />
      <Routes>
        {/* Route page d'acceuil Home*/}
        <Route path="/" element={<Home />} />
        {/* Route page d'acceuil Services*/}
        <Route path="/Services" element={<Services />} />
      </Routes>
    </>
  )
}

export default App