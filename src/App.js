import "./App.css";
import LocalityLanding from "./components/LocalityLanding";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import RecentProject from "./components/RecentProject";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/localities" element={<LocalityLanding/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
