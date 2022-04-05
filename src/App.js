import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Homepage from './pages/homepage';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import PrivacyPolicy from './pages/privacy';
import ScrollToTop from './components/scrolltotop';

function App() {
  return (
    <BrowserRouter basename='triples-paywall'>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="*" element={<Homepage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
