import './App.css'
import { Routes, Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/CheckoutPage'
import { Orders } from './pages/Orders'
import { Tracking } from './pages/Tracking'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="checkout" element={<CheckoutPage/>}></Route>
      <Route path="orders" element={<Orders></Orders>}></Route>
      <Route path="tracking" element={<Tracking></Tracking>}></Route>
    </Routes>
    </>
  )
}

export default App
