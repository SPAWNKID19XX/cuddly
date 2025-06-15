import { useState, useEffect } from 'react';
import { FaCookieBite } from 'react-icons/fa';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookieConsent');
    if (hasConsent) {
      setIsVisible(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#f8f9fa',
      padding: '1rem',
      boxShadow: '0 -2px 5px rgba(0,0,0,0.1)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <FaCookieBite size={24} />
        <p style={{ margin: 0 }}>
          We use cookies to improve the site's functionality. By continuing to use the site, you agree to the use of cookies.
        </p>
      </div>
      <button
        onClick={handleAccept}
        style={{
          padding: '8px 16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Accept
      </button>
    </div>
  );
};

export default CookieConsent;