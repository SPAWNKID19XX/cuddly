import { useAuth } from '../../hooks/useAuth';
import axios from 'axios';
import './AccountAreaNavBar.css';

interface AuthResponse {
  access: string;
  refresh: string;
}

const AccountArea = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  const handleLogin = async (credentials: { username: string; password: string }) => {
    try {
      const response = await axios.post<AuthResponse>(
        'http://localhost:8000/api/token/',
        credentials
      );

      localStorage.setItem('accessToken', response.data.access);
      localStorage.setItem('refreshToken', response.data.refresh);
      setIsLoggedIn(true); // Update login state after successful login
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleLogout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevent default anchor behavior
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setIsLoggedIn(false); // Update login state after logout
  };

  return (
    <div className="account-area-navbar">
      {!isLoggedIn ? (
        <>
          <a href="/login" onClick={(e) => {
            e.preventDefault();
            handleLogin({ username: 'test', password: 'test' }); // Replace with actual login form
          }}>Login</a>
          <a href="/signup">SignUp</a>
        </>
      ) : (
        <a href="#" onClick={handleLogout}>Logout</a>
      )}
    </div>
  );
};

export default AccountArea;