import { useState } from 'react'
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';

import './App.css'
import Banner from './components/Banner';
import Experties from './components/Experties';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Header />
<Banner />
<About />
<Services />
<Experties />
<Footer />
    </>
  )
}

export default App
