import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import { LanguageProvider } from './context/LanguageContext.tsx'

// Pages
import Home from './pages/Home'
import DoctorDetails from './pages/DoctorDetails'
import About from './pages/About'

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <div className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/haqqimizda" element={<About />} />
            <Route path="/doctors/:id" element={<DoctorDetails />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App 