import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Import pages

import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Home from './pages/Home.jsx'
import StockMetrics from './pages/StockMetrics.jsx'
import Watchlist from './pages/Watchlist.jsx';

// Import Components
import Header from './components/Header.jsx';
// React toastify
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/eightpillars' element={<StockMetrics />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/watchlist' element={<Watchlist />} />



          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
