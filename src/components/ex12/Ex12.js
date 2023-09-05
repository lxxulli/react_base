import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Banner } from "./components/Banner";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Menu01 } from "./pages/Menu01";
import { Menu02 } from "./pages/Menu02";

export const Ex12 = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/menu01" element={<Menu01 />}></Route>
          <Route path="/menu02" element={<Menu02 />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
