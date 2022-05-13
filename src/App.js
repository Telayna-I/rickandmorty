import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home'
import Characters from './components/Characters/Characters'


function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/characters/:id" element={<Characters/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
