import './App.css'
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'
import LandingPage from './components/LandingPage'
import AboutMe from './components/AboutMe'

function App() {
    return (
        <div className="App">
            <NavigationBar />
            <LandingPage />
            <AboutMe />
            <Footer />
        </div>
    )
}

export default App
