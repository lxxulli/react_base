import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Menu01 } from "./pages/Menu01";
import { Menu02 } from "./pages/Menu02";

export const Ex122 = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu/:id" element={<Menu01 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

// :변수명
