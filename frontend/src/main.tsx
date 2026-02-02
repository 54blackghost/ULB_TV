import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom' //permet la navigation
import { AuthProvider } from './context/AuthContext.tsx'; // New import


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <AuthProvider> {/* New wrapper */}
      <App />
    </AuthProvider>
  </BrowserRouter>,
);
