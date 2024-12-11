import { HashRouter, Route, Routes } from "react-router-dom";
import { AcademicTracker } from "../pages/AcademicTracker";
import { FeePayment } from "../pages/FeePayment";
import { Admissions } from "../pages/Admissions";
import { Layout } from "../components/Layout";

export default function AppRouter() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<AcademicTracker />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/fee-payment" element={<FeePayment />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}
