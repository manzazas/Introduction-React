import React from 'react'
import Zach from './zach.jsx'
// import Ye from './ye.jsx'
// import Saj from './saj.jsx'
import Home from './components/Home.jsx'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const App = () => {
    return (
    <Router>
    <div className="app">
      <Home />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/zach' element={<Zach />} />
        {/* <Route path='/ye' element={<Ye />} />
        <Route path='/Saj' element={<Saj />} /> */}
      </Routes>
     
    </div>
    </Router>
    );
}

export default App;
