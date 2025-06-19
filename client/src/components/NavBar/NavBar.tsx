import {useState, useEffect, useCallback} from 'react';
import './NavBar.css';
import logo from "../../assets/img/logo.jpg"
import LanguageSelector from "../LanguageSelector/LanguageSelector.tsx";
import {useTranslation} from "react-i18next";
import { Link } from 'react-router-dom';

// Nav item interface
interface NavItem {
    id: number;
    name: string;
    link: string;
}


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const {t} = useTranslation();
    // Navigation items
    const navItems: NavItem[] = [
        {id: 1, name: t("navbar.0"), link: '/about_us/'},
        {id: 2, name: t("navbar.1"), link: '/services/'},
        {id: 3, name: t("navbar.2"), link: '/products/'},
        {id: 4, name: t("navbar.3"), link: '/contact/'}
    ];

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Disable body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    // Toggle mobile menu
    const toggleMenu = useCallback(() => {
        setIsMenuOpen(prev => !prev);
    }, []);

    // Close the menu
    const closeMenu = useCallback(() => {
        setIsMenuOpen(false);
    }, []);

    // Change language

    return (
        <>
            <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
                <div className="navbar-background-blur"></div>
                <div className="navbar-container">
                    {/* Logo */}
                    <div className="navbar-logo">
                        <a href="/">
                            <div className="logo-container">
                                <img src={logo} alt="logo"/>
                            </div>
                        </a>
                    </div>

                    {/* Mobile Language Selector - всегда видимый */}
                    <div className="mobile-visible-language">
                        <div className="language-selector">
                            <LanguageSelector/>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="desktop-links navbar-links">
                        <ul>
                            {navItems.map(item => (
                                <li key={item.id}>
                                    <a href={item.link}>{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Desktop Actions */}
                    <div className="desktop-actions navbar-actions">
                        <div className="language-selector">
                            <LanguageSelector/>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="mobile-menu-button"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </button>
                </div>

            </header>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
                <div className="mobile-menu-container">
                    <div className="mobile-menu-header">
                        <div className="navbar-logo">

                            <a href="/">
                                <div className="logo-container">
                                    <img src={logo} alt="logo"/>
                                </div>
                            </a>
                        </div>

                        <button
                            className="mobile-menu-close"
                            onClick={closeMenu}
                            aria-label="Close menu"
                        >
                            ✕
                        </button>
                    </div>
                    <nav className="mobile-nav">
                        <ul>
                            {navItems.map(item => (
                                <li key={item.id}>
                                    <Link
                                        to={item.link}
                                        onClick={closeMenu}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                    </nav>


                </div>
            </div>
        </>
    );
};

export default Navbar;