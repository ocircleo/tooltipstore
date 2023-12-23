import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

function App() {
  const urls = [
    {
      link: "/",
      title: "Home"
    }, {
      link: "/apps",
      title: "Apps"
    }, {
      link: "/games",
      title: "Games"
    }, {
      link: "/discounts",
      title: "Discounts"
    }, {
      link: "/about",
      title: "About"
    }
  ]
  return (
    <>
      <Navbar links={urls}></Navbar>
      <div className='min-h-screen flex flex-col justify-between'>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
