import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Automoveis, Hero } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Hero />
        </div>
        <Routes>
          <Route path="/" element={<Automoveis />} />
          {/* <Route path="/details/:id" element={<Details />} /> */}
          {/* <Route path="/maps/:storeName" element={} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
