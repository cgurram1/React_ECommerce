import './App.css'
import { Routes, Route } from 'react-router'
import { HomePage } from './pages/HomePage'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="checkout" element={<div> Checkout </div>}></Route>
    </Routes>
    </>
  )
}

export default App
