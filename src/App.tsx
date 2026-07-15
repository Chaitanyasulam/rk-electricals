import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Licenses from './components/Licenses'
import Gallery from './components/Gallery'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Licenses />
        <Gallery />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
