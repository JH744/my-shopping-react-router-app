import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./page/Login";
import ProducAll from "./page/ProducAll";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProducAll />} />
        <Route path="/detail/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
