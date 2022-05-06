import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import DownloadPage from './pages/DownloadPage';
import Home from './pages/Home';

export default function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/download' element={<DownloadPage />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
