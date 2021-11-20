import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './components';

function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/about" element={"Test"}/>
            <Route path="/donate" element={"Test"}/>
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
