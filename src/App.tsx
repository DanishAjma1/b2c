import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home/home";
import { DesignHome } from "./pages/design/DesignHome";

function App() {
  return (
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/design" element={<DesignHome/>} />
  </Routes>
  )
}

export default App;
