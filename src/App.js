import SelectAccount from "./pages/selectAccount";
import Home from "./pages/home";
import {
  BrowserRouter as Router,
  Routes,
  Route
 } from "react-router-dom";

 const App = () => {
  return (
    <Router>
      <Routes>
        <Route index path="selectAccount" element={<selectAccount />} />
        <Route path="home" element={<home />} />
      </Routes>
    </Router>
  );
}

export default App;

