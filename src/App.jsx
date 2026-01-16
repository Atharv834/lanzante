import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import History from './pages/History';
import ProjectDetail from './pages/ProjectDetail';
import LeMans95 from './pages/LeMans95';
import HistoricMotorsport from './pages/HistoricMotorsport';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import SmoothScroll from './components/premium/SmoothScroll';
import CustomCursor from './components/premium/CustomCursor';
import NoiseOverlay from './components/premium/NoiseOverlay';

function App() {
  return (
    <Router>
      <SmoothScroll>
        <div className="app">
          <CustomCursor />
          <NoiseOverlay />
          <ScrollToTop />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/history" element={<History />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/95-59" element={<LeMans95 />} />
              <Route path="/historic-motorsport" element={<HistoricMotorsport />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </SmoothScroll>
    </Router>
  );
}

export default App;
