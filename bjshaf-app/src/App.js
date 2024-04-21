import './App.css'
import NavigationBar from './components/NavigationBar'
import LandingPage from './components/LandingPage'
import Footer from './components/Footer'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'
import StorySlider from './components/StorySlider'
import Pics from './components/Pics'
import { register } from 'swiper/element/bundle'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

register()

const App = () => {
    const [sliderRef, instanceRef] = useKeenSlider({
        slideChanged() {
            console.log('slide changed')
        },
        slidesPerView: 1,
        mode: 'snap',
        spacing: 0,
        orientation: 'vertical',
        vertical: true,
        loop: true,
        dragSpeed: 0.8,
        duration: 2000, // Transition duration in ms
        created: (instance) => {
            // Attach event listener for mousewheel scroll
            instance.container.addEventListener('wheel', (event) => {
                event.preventDefault()
                if (event.deltaY > 0) {
                    instance.next()
                } else {
                    instance.prev()
                }
            })
        },
        destroyed: (instance) => {
            // Remove event listener when the component is unmounted
            instance.container.removeEventListener('wheel', (event) => {})
        },
    })

    return (
        <>
            <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide">
                    <NavigationBar />
                    <LandingPage />
                </div>
                <div className="keen-slider__slide">
                    <StorySlider />
                </div>
            </div>
        </>
    )
}

export default App
