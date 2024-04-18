import './App.css'
import NavigationBar from './components/NavigationBar'
import LandingPage from './components/LandingPage'
import Footer from './components/Footer'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'
import StorySlider from './components/StorySlider'
import Pics from './components/Pics'

function App() {
    return (
        <>
            <NavigationBar />
            <LandingPage />
            <StorySlider />
            <Projects />
            <ContactMe />
            <Pics />
            <Footer />
        </>
    )
}

export default App
