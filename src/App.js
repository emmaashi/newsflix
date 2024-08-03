import SelectAccount from "./pages/selectAccount"
import Home from "./pages/home"
import Results from "./pages/results";
import './styles/index.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
 } from "react-router-dom"

 export default function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<SelectAccount />} />
        <Route path="/selectAccount" element={<SelectAccount />} />
        <Route path="/home" element={<Home />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
}



