import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Components/Header";
import Content from "../Components/Content";
import HikeCalculator from "../Components/Calculators_SubComponent/HikeCalculator";
import WorkExperienceCalculator from "../Components/Calculators_SubComponent/WorkExperienceCalculator";
import pages from "./pages";
import FindAge from "../Components/Calculators_SubComponent/FindAge";
import GratuityCalculator from "../Components/Calculators_SubComponent/GratuityCalculator";
import EMICalculator from "../Components/Calculators_SubComponent/EMICalculator";
import JsonFormatter from "../Components/Calculators_SubComponent/JsonFormatter";
import XmlFormatter from "../Components/Calculators_SubComponent/XmlFormatter";
import { lazy, Suspense } from "react";
import ToDoList from "../Components/Calculators_SubComponent/ToDoList";

const ROI_Loans = lazy(() =>
  import("../Components/Calculators_SubComponent/ROILoans")
);

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={pages.HOME} element={<Content />} />
        </Routes>
        <Routes>
          <Route path={pages.HIKE_CALCULATOR} element={<HikeCalculator />} />
        </Routes>
        <Routes>
          <Route
            path={pages.WORK_EXPERIENCE_CALCULATOR}
            element={<WorkExperienceCalculator />}
          />
        </Routes>
        <Routes>
          <Route path={pages.FIND_AGE} element={<FindAge />} />
        </Routes>
        <Routes>
          <Route
            path={pages.GRATUATY_CALCULATOR}
            element={<GratuityCalculator />}
          />
        </Routes>
        <Routes>
          <Route path={pages.EMI_CALCULATOR} element={<EMICalculator />} />
        </Routes>
        <Routes>
          <Route path={pages.JSON_FORMATTER} element={<JsonFormatter />} />
        </Routes>
        <Routes>
          <Route path={pages.XML_FORMATTER} element={<XmlFormatter />} />
        </Routes>

        <Routes>
          <Route path={pages.ROI_Loans} element={<ROI_Loans />} />
        </Routes>

        <Routes>
          <Route path={pages.ToDoList} element={<ToDoList />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default Router;
