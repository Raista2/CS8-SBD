import { useState, useEffect } from 'react'
import './App.css'
import NavBar from './NavBar'
import Carousel from './Carousel'
import EAServices from './EAServices'
import AboutUs from './AboutUs'

function App() {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen w-full bg-gray-900">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full min-h-screen overflow-x-hidden">
      <NavBar />
      <main className="flex flex-col flex-grow">
        <Carousel/>
        <EAServices />
        <AboutUs />
      </main>
      <footer className="bg-gray-900 text-gray-400 text-center py-4 text-xs md:text-sm">
        <p>&copy; {new Date().getFullYear()} Electronic Arts Inc. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default App