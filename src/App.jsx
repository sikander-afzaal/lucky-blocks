import Landing from "./pages/landing/landing";
import Wheel from "./pages/Wheel/Wheel";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Wheel />} path="/" />
        <Route element={<Landing />} path="/main" />
      </Routes>
    </>
  );
};

export default App;
