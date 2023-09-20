import './App.css';
import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import SEO from './components/Seo';
import ChatBot from './components/ChatBot';
import { useState, useEffect } from 'react';


function App() {
  const [showChatBot, setShowChatBot] = useState(false);

  useEffect(() => {
    let scrollPos = 700;
    let runCounts = 0;
    function checkPosition() {
      let windowY = window.scrollY;
      if (runCounts === 0 ) {
        setShowChatBot(true)
        runCounts++
      } 
      scrollPos = windowY;
    }
    window.addEventListener('scroll', checkPosition);
  },[]);

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
        {showChatBot && <ChatBot className="chat-bot" setShowChatBot={setShowChatBot}/>}
        <Footer />
      </HelmetProvider>
    </div>
  );
}

export default App;
