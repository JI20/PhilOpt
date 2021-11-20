import { AnimatePresence } from 'framer-motion';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './components';
import About from './components/about/About';

function App() {
  return (
      <>
        <BrowserRouter>
          <AnimatePresence exitBeforeEnter>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
            </Routes>
          </AnimatePresence>
        </BrowserRouter>
      </>
  );
}

export default App;
