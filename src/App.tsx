import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LandingPage from './pages/LandingPage';
import MainLayout from './components/layout/MainLayout';

import Marketplace from './pages/Marketplace';
import Meditation from './pages/Meditation';
import Astrology from './pages/Astrology';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import ProductDetail from './pages/ProductDetail';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/meditation" element={<Meditation />} />
            <Route path="/astrology" element={<Astrology />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </MainLayout>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
