import Header from './components/layout/Header'
import Banner from './components/layout/Banner'
import InfoSection from './components/layout/InfoSection'
import Footer from './components/layout/Footer'
import { LanguageProvider } from './context/LanguageContext.tsx'

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <Banner />
        <InfoSection />
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App 