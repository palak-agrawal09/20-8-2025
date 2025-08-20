import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Button from '@mui/material/Button';
import BusinessCategory from './pages/BusinessCategory';
import Businesslisting from './pages/BusinessListing';
import BusinessDetail from './pages/BusinessDetail';
function App() {


  return (
    <>
      <BrowserRouter>
        <h1>WELCOME</h1>
        <Routes>
          <Route path="/" element={<BusinessCategory />}></Route>
          <Route path="/buisness-listing" element={<Businesslisting />}></Route>
          <Route path="/buisness-detail" element={<BusinessDetail />}></Route>

        </Routes >
      </BrowserRouter >
    </>
  )
}

export default App
