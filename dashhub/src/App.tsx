import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Sidenav from "./sidenav";
import Home from "./pages/Home";
import About from "./pages/About";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about"  element={<About />}></Route>
          <Route path="/settings"  element={<Settings />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
