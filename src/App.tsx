import { Footer } from './components/shared/Footer'
import { Header } from './components/shared/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Contact } from './components/Contact'
import WhatsAppButton from './components/shared/WhatsAppButton'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Contact />
      <WhatsAppButton />
      <Footer/>
    </>
  )
}

export default App
