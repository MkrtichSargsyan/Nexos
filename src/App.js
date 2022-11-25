import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer/Footer';
import WhyNexosPage from './pages/WhyNexosPage';
import HowItWorks from './pages/HowItWorks';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/why-nexos" element={<WhyNexosPage />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
