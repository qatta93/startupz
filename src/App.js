import './App.css';
import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import SEO from './components/Seo';

function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <SEO
          title="Startupz - we create startups."
          description="We are startup studio that develops and launches new companies."
          name="Startupz"
          type="article"
          keywords="create startups, new companies, innovation, technology"/>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </HelmetProvider>
    </div>
  );
}

export default App;
