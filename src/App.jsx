import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AllDetails from "./Pages/AllDetails/AllDetails";
import AddDetails from "./Pages/AddDetails/AddDetails";

function App() {
  return (
   
      <Router>
        <Routes>
          <Route path="/" element={<AllDetails/>}></Route>
          <Route path="/add-details" element={<AddDetails/>}></Route>
        </Routes>
      </Router>

  );
}

export default App;
