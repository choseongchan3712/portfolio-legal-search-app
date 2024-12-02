import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Law from "./pages/Law";
import Precedent from "./pages/Precedent";
import Interpretation from "./pages/Interpretation";
import Search from "./pages/Search";
import Detail from "./pages/detail/Detail";
import PrecDetail from "./pages/detail/PrecDetail";

const Router = (): JSX.Element => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to={"/law"} replace />} />
        <Route path="/law" element={<Law />} />
        <Route path="/precedent" element={<Precedent />} />
        <Route path="/interpretation" element={<Interpretation />} />
        <Route path="/search" element={<Search />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/prec_detail/:id" element={<PrecDetail />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
