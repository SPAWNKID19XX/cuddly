import './App.css'
import Navbar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import CookieConsent from './components/coockiesConsent/CookiesConsent'
import './i18n.js'


function App() {
    return (
        <>
            <Navbar/>
            <CookieConsent/>

            <Footer/>
        </>
    )
}

export default App
