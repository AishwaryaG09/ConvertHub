import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Components/Header";
import Content from "../Components/Content";
import HikeCalculator from "../Components/Calculators_SubComponent/HikeCalculator";
import pages from "./pages";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={pages.HOME} element={<Content />} />
      </Routes>
      <Routes>
        <Route path={pages.HIKE_CALCULATOR} element={<HikeCalculator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
