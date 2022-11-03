import { Routes, Route } from "react-router-dom";
import CarDetail from "./pages/CarDetail";

//pages
import MainCar from "./pages/MainCar";

function App() {
  return (
    <Routes>
    <Route path="/" element={<MainCar />} />
    <Route path="/cars/:id" element={<CarDetail />} />
  </Routes>
  );
}

export default App;
