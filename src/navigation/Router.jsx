import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Components/Header";
import Content from "../Components/Content";
import HikeCalculator from "../Components/Calculators_SubComponent/HikeCalculator";
import WorkExperienceCalculator from "../Components/Calculators_SubComponent/WorkExperienceCalculator";
import pages from "./pages";
import FindAge from "../Components/Calculators_SubComponent/FindAge";

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
      <Routes>
        <Route path={pages.WORK_EXPERIENCE_CALCULATOR} element={<WorkExperienceCalculator />} />
      </Routes>
      <Routes>
        <Route path={pages.FIND_AGE} element={<FindAge />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
