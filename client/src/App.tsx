import './App.css'
import Navbar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import CookieConsent from './components/coockiesConsent/CookiesConsent'
import './i18n.js'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PrivacyPolicy from './pages/privacy-policy/PrivacyPolicy.tsx'
import CookiesPolicy from './pages/cookies-policy/CookiesPolicy.tsx'
import TermsConditions from './pages/terms-conditions/TermsConditions.tsx'
import AboutUs from "./components/AboutUs/AboutUs.tsx";
import MainBaner from "./components/MainBanner/MainBaner.tsx";
import Products from "./components/Products/Product.tsx";
import HairCare from "./components/HairCare/HairCare.tsx";
import FaceBodyCare from "./components/FaceBodyCare/FaceBodyCare.tsx";
import ContactForm from "./components/ContactForm/ContactForm.tsx";


function App() {
    return (
        <BrowserRouter>
            <Navbar/>

            <Routes>
                <Route path="/" element={
                    <>
                        <MainBaner/>
                    </>
                }/>

                <Route path="/products" element={
                    <>
                        <Products />
                    </>
                }/>

                <Route path="/products/hair-care" element={
                    <>
                        <HairCare />
                    </>
                }/>

                <Route path="/products/face-body-care" element={
                    <>
                        <FaceBodyCare />
                    </>
                }/>

                <Route path="/contact" element={
                    <>
                        <ContactForm />
                    </>
                }/>

                <Route path="/privacy-policy" element={
                    <>
                        <PrivacyPolicy/>
                    </>
                }/>

                <Route path="/cookies-policy" element={
                    <>
                        <CookiesPolicy/>
                    </>
                }/>


                <Route path="/terms-conditions" element={
                    <>
                        <TermsConditions/>
                    </>
                }/>


                <Route path="/about_us" element={
                    <>
                        <AboutUs/>
                    </>
                }/>

            </Routes>
            <CookieConsent/>
            <Footer/>
        </BrowserRouter>
    )
}

export default App
