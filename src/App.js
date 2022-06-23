import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home";
import Navbar from './components/Navbar';
import Shop from "./components/Shop";
import './styles/App.scss';

function App() {
  return (
      <div>
        <Navbar />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
            </BrowserRouter>
      </div>
  );
}

export default App;
