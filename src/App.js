import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './components';
import About from './components/about/About';

function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
