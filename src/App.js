import "./App.css";
import LocalityLanding from "./components/LocalityLanding";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import RecentProject from "./components/RecentProject";
import Login from "./components/Login";
// import Help from "./components/Help";
// import Signup from "./components/Signup";
// import Info from "./components/Info";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="/help" element={<Help />}></Route> */}
          <Route path="/localities" element={<LocalityLanding />}></Route>
          <Route path="/login" element={<Login />}></Route>
          {/* <Route path="/signup" element={<Signup />}></Route>
          <Route path="/info" element={<Info />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
