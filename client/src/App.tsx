import './App.css'
import Navbar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import CookieConsent from './components/coockiesConsent/CookiesConsent'
import './i18n.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PrivacyPolicy from './pages/privacy-policy/PrivacyPolicy.tsx'
import CookiesPolicy from './pages/cookies-policy/CookiesPolicy.tsx'
import TermsConditions from './pages/terms-conditions/TermsConditions.tsx'
import AboutUs from "./components/AboutUs/AboutUs.tsx";
import MainBaner  from "./components/MainBanner/MainBaner.tsx";

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={
                    <>
                        <CookieConsent />
                        <MainBaner />
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


            <Route path="/about_us" element={
                    <>
                        <AboutUs />
                    </>
                } />

            </Routes>

            <Footer />
        </BrowserRouter>
    )
}

export default App
