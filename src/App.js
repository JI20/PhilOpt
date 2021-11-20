import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './components';

function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/about" element={"We are a Team of Students participating in HackaTUM 21"}/>
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
