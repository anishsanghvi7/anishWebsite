// Import modules
import { useEffect, useState } from 'react';

// Import Components
import Landing from './components/Landing.jsx';
import Navbar from './components/Navbar.jsx';
import Intro from './components/Intro.jsx';

// Import App.css for tailwind
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Navbar isLoading={isLoading} />
      <Landing isLoading={isLoading} setIsLoading={setIsLoading}/>
      <Intro />
    </>
  )
}

export default App;
