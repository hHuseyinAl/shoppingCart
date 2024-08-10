import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Store from "./pages/Store"
import Navbar from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <div className="pb-5 px-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </div>
    </ShoppingCartProvider>
  )
}

export default App