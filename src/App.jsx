// Import modules
import { useEffect, useState } from 'react';

// Import Components
import Landing from './components/Landing.jsx';

// Import App.css for tailwind
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Landing isLoading={isLoading} setIsLoading={setIsLoading}/>
    </>
  )
}

export default App;
