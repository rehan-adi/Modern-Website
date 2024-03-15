import './App.css'
import Navbar from './Components/Navbar'
import MAinsection from './Components/MAinsection'
import Secondsection from './Components/Secondsection'
import Thirdsection from './Components/Thirdsection'
import ROundedsection from './Components/ROundedsection'
import Animatedcursor from './Components/Animatedcursor'
import { HoverImageLinks } from './Components/HoverImageLinks'
import About from './Components/About'
import Company from './Components/Company'
import Service from './Components/Service'
import Contact from './Components/Contact'
import Recognition from './Components/Recognition'
import Footer from './Components/Footer'
import Cursor from './Components/Cursor'

function App() {

  return (
    <div>
      <Navbar />
      {/* <Cursor/> */}
      <MAinsection />
      <Secondsection /> /
      <Thirdsection /> 
      {/* <ROundedsection />
      <HoverImageLinks />
      <About />
      <Company/>
      <Service/>
      <Recognition/>
      <Contact />
      <Footer /> */}
    </div>
  )
}

export default App
