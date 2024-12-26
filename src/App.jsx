import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AllDetails from "./Pages/AllDetails/AllDetails";
import AddDetails from "./Pages/AddDetails/AddDetails";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Home from "./Pages/Home/Home";
import FormMain from "./Pages/Auth/Form";

function App() {
  return (
   
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/form" element={<FormMain/>}></Route>
          <Route path="/add-details" element={<AddDetails/>}></Route>
        </Routes>
      </Router>

  );
}

export default App;
