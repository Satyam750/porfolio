import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import Footer from './components/Footer'
import EmailSection from './components/EmailSection'



export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212] overflow-hidden' >
    <Navbar/>
    <div className='container mt-6 mx-auto px-12 py-4'>
    <HeroSection/>
    <AboutSection/>
    <ProjectsSection/>
    <EmailSection/>
    </div>
    <Footer/>
    </main>
  )
}
