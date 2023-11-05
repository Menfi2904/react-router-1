import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Menu from "./components/Menu";

const Home = lazy(() => import("./components/Home"));
const SobreNosotros = lazy(() => import("./components/SobreNosotros"));
const Tareas = lazy(() => import("./components/Tareas"));

function App() {
  return (
    <Suspense fallback={<h2>Cargando ...</h2>}>
      <div>
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobrenosotros" element={<SobreNosotros />} />
            <Route path="/tareas" element={<Tareas />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Suspense>
  );
}

export default App;
