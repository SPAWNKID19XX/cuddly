import './App.css'
import Navbar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import CookieConsent from './components/coockiesConsent/CookiesConsent'
import './i18n.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PrivacyPolicy from './pages/privacy-policy/PrivacyPolicy.tsx'
import CookiesPolicy from './pages/cookies-policy/CookiesPolicy.tsx'
import TermsConditions from './pages/terms-conditions/TermsConditions.tsx'

function Home() {
    return <div>Home page content</div>
}

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={
                    <>
                        <CookieConsent />
                        <Home />
                    </>
                } />

                <Route path="/privacy-policy" element={
                    <>
                        <CookieConsent />
                        <PrivacyPolicy />
                    </>
                } />

                <Route path="/cookies-policy" element={
                    <>
                        <CookieConsent />
                        <CookiesPolicy />
                    </>
                } />


                <Route path="/terms-conditions" element={
                    <>
                        <TermsConditions />
                        <CookiesPolicy />
                    </>
                } />
            </Routes>

            <Footer />
        </BrowserRouter>
    )
}

export default App
