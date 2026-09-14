import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import TechnologiesSection from './components/TechnologiesSection.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechnologiesSection />
      </main>
      <Footer />
      <ToastContainer position="top-right" autoClose={2600} newestOnTop />
    </>
  )
}
