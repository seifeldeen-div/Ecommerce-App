import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home/Home'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  )
}

export default App
