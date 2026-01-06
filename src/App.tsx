import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { LanguageProvider } from "./context/LanguageContext.tsx";

import Home from "./pages/Home";
import DoctorDetails from "./pages/DoctorDetails";
import About from "./pages/About";

import NotFound from "./pages/NotFound";

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <div className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/doctors/:id" element={<DoctorDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
