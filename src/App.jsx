import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

function App() {
  const urls = [
    {
      link: "/",
      title: "Apps"
    }, {
      link: "/games",
      title: "Games"
    }, {
      link: "/events",
      title: "Events"
    }, {
      link: "/about",
      title: "About"
    }, {
      link: "/contact",
      title: "Contact"
    }, {
      link: "/profile",
      title: "Dashboard"
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
