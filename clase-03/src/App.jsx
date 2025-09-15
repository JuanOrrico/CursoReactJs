import Navigation from "./components/Nav"
import Gallery from "./components/Gallery"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./components/Main"

import "bootstrap/dist/css/bootstrap.min.css"



function App() {
 

  return (
    <>
      <Header/>
      <Navigation/>
      <Main/>
      <Gallery/>
      <Footer/>
    </>
  )
}

export default App
