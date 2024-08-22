import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Login from "./page/Login";
import ProducAll from "./page/ProducAll";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./components/Navbar";
import { useState } from "react";
import PrivateRoute from "./route/PrivateRoute";

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  return (
    <>
      <Navbar authenticate={authenticate} />
      <Routes>
        <Route path="/" element={<ProducAll />} />
        <Route
          path="/detail/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
      </Routes>
    </>
  );
}

export default App;
