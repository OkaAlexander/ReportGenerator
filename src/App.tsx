import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./views/ThemeProvider";
import { Layout } from "./components/Layout";
import { AcademicTracker } from "./pages/AcademicTracker";
import { Admissions } from "./pages/Admissions";
import { FeePayment } from "./pages/FeePayment";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<AcademicTracker />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/fee-payment" element={<FeePayment />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
