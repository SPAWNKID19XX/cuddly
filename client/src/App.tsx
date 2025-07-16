import './App.css'
import Navbar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import CookieConsent from './components/coockiesConsent/CookiesConsent'
import './i18n.js'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// import PrivacyPolicy from './components/privacyPolicy/PrivacyPolicy.tsx'
import CookiesPolicy from './components/cookiesPolicy/CookiesPolicy.tsx'
import TermsConditions from './components/termsConditions/TermsConditions.tsx'

import PP from './components/pp/PP.tsx'

import AboutUs from "./components/AboutUs/AboutUs.tsx";
import MainBaner from "./components/MainBanner/MainBaner.tsx";
import Products from "./components/Products/Product.tsx";
import HairCare from "./components/HairCare/HairCare.tsx";
import FaceBodyCare from "./components/FaceBodyCare/FaceBodyCare.tsx";
import HealthBalance from "./components/HealthBalance/HealthBalance.tsx"
import ContactForm from "./components/ContactForm/ContactForm.tsx";
import Services from './components/Services/Services.tsx'
import ServicesProd from './components/ServiceProd/ServiceProd.tsx'
import ServicesLab from './components/ServiceLab/ServiceLab.tsx'
import ScrollToTop from './components/ScrollToTop/ScrollToTop.tsx'


function App() {
    return (
        <BrowserRouter>
            <ScrollToTop/>

            <Navbar/>

            <Routes>
                <Route path="/" element={
                    <>
                        <MainBaner/>
                    </>
                }/>

                <Route path="/products" element={
                    <>
                        <Products/>
                    </>
                }/>

                <Route path="/products/hair-care" element={
                    <>
                        <HairCare/>
                    </>
                }/>

                <Route path="/products/face-body-care" element={
                    <>
                        <FaceBodyCare/>
                    </>
                }/>
                <Route path="/products/health-balance" element={
                    <>
                        <HealthBalance/>
                    </>
                }/>

                <Route path="/contact" element={
                    <>
                        <ContactForm/>
                    </>
                }/>

                <Route path="/privacy_policy" element={
                    <>
                        <PP/>
                    </>
                }/>

                <Route path="/cookie-policy" element={
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

                <Route path="/services" element={
                    <>
                        <Services/>
                    </>
                }/>

                <Route path="/services/lab" element={
                    <>
                        <ServicesLab/>
                    </>
                }/>

                <Route path="/services/products" element={
                    <>
                        <ServicesProd/>
                    </>
                }/>

            </Routes>
            <CookieConsent/>

            <Footer/>
        </BrowserRouter>
    )
}

export default App
