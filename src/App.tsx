import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Sidenav from "./sidenav";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Settings from "./pages/Settings";
import Analytics from "./pages/Analytics";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products"  element={<Products />}></Route>
          <Route path="/analytics"  element={<Analytics />}></Route>
          <Route path="/settings"  element={<Settings />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
