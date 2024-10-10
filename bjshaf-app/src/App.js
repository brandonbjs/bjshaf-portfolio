import './App.css'
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Project1 from './components/Project1'
import Project2 from './components/Project2'
import Project3 from './components/Project3'
import Project4 from './components/Project4'
import Project5 from './components/Project5'
import ContactMe from './components/ContactMe'
import StorySlider from './components/StorySlider'
import TravelGlobe from './components/TravelGlobe'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

const buttonStyles = [
    { buttonColor: '#e76f51', textColor: '#FFFFFF' }, // LandingPage
    { buttonColor: '#264653', textColor: '#FFFFFF' }, // StorySlider
    { buttonColor: '#264653', textColor: '#FFFFFF' }, // Project1
    { buttonColor: '#283618', textColor: '#FFFFFF' }, // Project2
    { buttonColor: '#c1121f', textColor: '#FFFFFF' }, // Project3
    { buttonColor: '#ff006e', textColor: '#FFFFFF' }, // Project4
    { buttonColor: '#00bbf9', textColor: '#FFFFFF' }, // Project5
    { buttonColor: '#e76f51', textColor: '#FFFFFF' }, // Travel Globe
    { buttonColor: '#e76f51', textColor: '#FFFFFF' }, // ContactMe
]

const locations = [
    {
        lat: 41.9028,
        lng: 12.4964,
        name: 'Rome, Italy',
        images: [
            {
                src: 'images/IMG_9341.JPEG',
                caption:
                    'Arch of Constantine; erected in the year 315 in commemoration of the victory of Constantine I the Great in the Battle of Milvian Bridge. It is located between the Colosseum and the Palatine Hill.',
            },
            {
                src: 'images/IMG_9342.JPEG',
                caption: 'Arch of Constantine.',
            },
            {
                src: 'images/IMG_9346.JPEG',
                caption: 'Inner wall of Colosseum.',
            },
            {
                src: 'images/IMG_9352.JPEG',
                caption: 'Inner wall of Colosseum.',
            },
            {
                src: 'images/IMG_9353.JPEG',
                caption: 'Inner wall of Colosseum.',
            },
            {
                src: 'images/IMG_9356.JPEG',
                caption: 'Inner wall of Colosseum, with view of Outer Wall.',
            },
            {
                src: 'images/IMG_9611.JPEG',
                caption: 'Within the Colosseum.',
            },
            {
                src: 'images/IMG_9612.JPEG',
                caption: 'Within the Colosseum, second angle.',
            },
            {
                src: 'images/IMG_9615.JPEG',
                caption: 'Within the Colosseum, center view.',
            },
            {
                src: 'images/IMG_9626.JPEG',
                caption: 'Within the Colosseum, center view, second angle.',
            },
            {
                src: 'images/IMG_9639.JPEG',
                caption: 'Cheeeeeese',
            },
            {
                src: 'images/IMG_9643.JPEG',
                caption: 'Sis!',
            },
        ],
    },
    {
        lat: 43.0575,
        lng: 11.4896,
        name: 'Montalcino, Italy',
        images: [
            {
                src: 'images/sick_tripod.jpg',
                caption: 'Me rippin a sweet tripod!',
            },
        ],
    },
    {
        lat: 43.7696,
        lng: 11.2558,
        name: 'Florence, Italy',
        images: [
            {
                src: 'images/sick_tripod.jpg',
                caption: 'Me rippin a sweet tripod!',
            },
        ],
    },
    {
        lat: 45.4408,
        lng: 12.3155,
        name: 'Venice, Italy',
        images: [
            {
                src: 'images/sick_tripod.jpg',
                caption: 'Me rippin a sweet tripod!',
            },
        ],
    },
    {
        lat: 45.6495,
        lng: 13.7768,
        name: 'Trieste, Italy',
        images: [
            {
                src: 'images/sick_tripod.jpg',
                caption: 'Me rippin a sweet tripod!',
            },
        ],
    },
    {
        lat: 42.9606,
        lng: 17.1351,
        name: 'Korčula, Croatia',
        images: [
            {
                src: 'images/sick_tripod.jpg',
                caption: 'Me rippin a sweet tripod!',
            },
        ],
    },
    {
        lat: 37.9838,
        lng: 23.7275,
        name: 'Athens, Greece',
        images: [
            {
                src: 'images/sick_tripod.jpg',
                caption: 'Me rippin a sweet tripod!',
            },
        ],
    },
    {
        lat: 37.637,
        lng: 21.6307,
        name: 'Olympia, Greece',
        images: [
            {
                src: 'images/sick_tripod.jpg',
                caption: 'Me rippin a sweet tripod!',
            },
        ],
    },
    {
        lat: 37.4467,
        lng: 25.3289,
        name: 'Mykonos, Greece',
        images: [
            {
                src: 'images/sick_tripod.jpg',
                caption: 'Me rippin a sweet tripod!',
            },
        ],
    },
    {
        lat: 35.5138,
        lng: 24.018,
        name: 'Chania, Crete, Greece',
        images: [
            {
                src: 'images/sick_tripod.jpg',
                caption: 'Me rippin a sweet tripod!',
            },
        ],
    },
    {
        lat: 37.8617,
        lng: 27.2566,
        name: 'Kusadasi, Turkey',
        images: [
            {
                src: 'images/sick_tripod.jpg',
                caption: 'Me rippin a sweet tripod!',
            },
        ],
    },
    {
        lat: 37.939,
        lng: 27.341,
        name: 'Ephesus Ruins, Turkey',
        images: [
            {
                src: 'images/sick_tripod.jpg',
                caption: 'Me rippin a sweet tripod!',
            },
        ],
    },
    {
        lat: 41.0082,
        lng: 28.9784,
        name: 'Istanbul, Turkey',
        images: [
            {
                src: 'images/sick_tripod.jpg',
                caption: 'Me rippin a sweet tripod!',
            },
        ],
    },
    {
        lat: 9.9281,
        lng: -84.0907,
        name: 'San José, Costa Rica',
        images: [
            {
                src: 'images/IMG_3292.JPG',
                caption: 'Alajuela, Costa Rica: La Fortuna Waterfall!',
            },
            {
                src: 'images/IMG_3293.JPG',
                caption: 'Couple of Green Iguanas I saw while in San Carlos.',
            },
            {
                src: 'images/IMG_3295.JPG',
                caption: 'A lone Green Iguana, basking in the sunlight.',
            },
            {
                src: 'images/IMG_3299.JPG',
                caption:
                    'A cacao pod in San Carlos, ripening. We had some of the best chocolate ever on this tour!',
            },
            {
                src: 'images/IMG_3301.JPG',
                caption: 'Multiple unripe cacao pods.',
            },
            {
                src: 'images/IMG_3327.JPG',
                caption: 'A Panamanian white-faced capuchin.',
            },
            {
                src: 'images/IMG_3382.JPG',
                caption:
                    'My zip line guide that I talked quite a bit with in Spanish. Really cool gentleman.',
            },
            {
                src: 'images/IMG_3387.JPG',
                caption: 'Young Brandon posted with another Green Iguana.',
            },
            {
                src: 'images/IMG_3406.JPG',
                caption:
                    'A beautifully painted ox cart, AKA carretas in Spanish.',
            },
        ],
    },
    {
        lat: -0.1807,
        lng: -78.4678,
        name: 'Quito, Ecuador',
        images: [
            {
                src: 'images/sick_tripod.jpg',
                caption: 'Me rippin a sweet tripod!',
            },
        ],
    },
    {
        lat: 39.502,
        lng: -106.1496,
        name: 'Copper Mountain, Colorado',
        images: [
            {
                src: 'images/sick_tripod.jpg',
                caption:
                    'My buddy was trying to take a pic of the mountain backdrop, and I ended up rippin a sweet tripod right through his picture. Unintentionally the best photo of the trip.',
            },
            {
                src: 'images/IMG_1298.JPEG',
                caption: 'First run; backwards view from the lift.',
            },
            {
                src: 'images/IMG_1299.JPEG',
                caption: 'First run selfie on the lift. Wear your helmet kids!',
            },
            {
                src: 'images/IMG_1301.JPEG',
                caption: 'Lift pic with my homies Dalton and Dax!',
            },
            {
                src: 'images/IMG_1302.JPEG',
                caption: 'Mountain View #1',
            },
            {
                src: 'images/IMG_1304.JPEG',
                caption: 'Mountain View #2',
            },
        ],
    },
    {
        lat: 58.3019,
        lng: -134.4197,
        name: 'Juneau, Alaska',
        images: [
            {
                src: 'images/IMG_1449.JPEG',
                caption: 'Juneau Welcome Sign!',
            },
            {
                src: 'images/IMG_1445.JPEG',
                caption: `Shangukeidí Kooteéyaa: The Shangukeidí, who are the Eagle moiety, are 
                    identified as the Thunderbird clan. The designs on the Shangukeidí totem 
                    pole include four of their crests. The Thunderbird, White Bear, and House 
                    Lowered from the Sun were obtained through supernatural encounters. The 
                    bottom crest reprsents a historical encounter with a US military officer 
                    who failed to adequately compensate the Shangukeidí. As payment for this 
                    debt, they took his name and the military uniform.`,
            },
            {
                src: 'images/IMG_1430.JPEG',
                caption:
                    'Glacierita: Margarita made with Glacier ice from the Tracy Arm Fjord. Might have ingested an ice worm from this drink :)',
            },
            {
                src: 'images/IMG_1450.JPEG',
                caption:
                    'Alaska King Crab: the best + largest crab I have ever enjoyed in my life.',
            },
            {
                src: 'images/IMG_1454.JPEG',
                caption: 'Fog with a cool little waterfall hiding behind it.',
            },
            {
                src: 'images/IMG_1467.JPEG',
                caption: 'Our view on the way out of Juneau.',
            },
        ],
    },
    {
        lat: 55.3422,
        lng: -131.6461,
        name: 'Ketchikan, Alaska',
        images: [
            {
                src: 'images/sick_tripod.jpg',
                caption: 'Me rippin a sweet tripod!',
            },
        ],
    },
    {
        lat: 59.4583,
        lng: -135.3139,
        name: 'Skagway, Alaska',
        images: [
            {
                src: 'images/sick_tripod.jpg',
                caption: 'Me rippin a sweet tripod!',
            },
        ],
    },
    {
        lat: 49.2827,
        lng: -123.1207,
        name: 'Vancouver, British Columbia, Canada',
        images: [
            {
                src: 'images/sick_tripod.jpg',
                caption: 'Me rippin a sweet tripod!',
            },
        ],
    },
    {
        lat: 4.711,
        lng: -74.0721,
        name: 'Bogotá, Colombia',
        images: [
            {
                src: 'images/sick_tripod.jpg',
                caption: 'Me rippin a sweet tripod!',
            },
        ],
    },
    {
        lat: 10.391,
        lng: -75.4794,
        name: 'Cartagena, Colombia',
        images: [
            {
                src: 'images/sick_tripod.jpg',
                caption: 'Me rippin a sweet tripod!',
            },
        ],
    },
    // Will add more locations later...
]

const App = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [hoveredButton, setHoveredButton] = useState(null)

    const [sliderRef, slider] = useKeenSlider({
        slidesPerView: 1,
        mode: 'snap',
        spacing: 10,
        vertical: true,
        loop: true,
        dragSpeed: 0.8,
        duration: 2000,
        created: (instance) => {
            instance.container.addEventListener('wheel', (event) => {
                event.preventDefault()
                if (event.deltaY > 0) {
                    instance.next()
                } else {
                    instance.prev()
                }
            })
        },
        slideChanged: (instance) => {
            const currentSlideIndex = instance.track.details.rel
            setCurrentSlide(currentSlideIndex)
        },
    })

    const goToSlide = (index) => {
        slider.current?.moveToIdx(index)
    }

    // Get styles for all buttons based on the current active slide
    const getButtonStyle = (isActive, isHovered) => {
        const currentStyle = buttonStyles[currentSlide] // Get current slide style
        if (isActive || isHovered) {
            // Show button color on active or hover
            return {
                backgroundColor: currentStyle.buttonColor,
                color: currentStyle.textColor,
            }
        }
        // Default style (transparent)
        return {
            backgroundColor: 'transparent',
            color: currentStyle.buttonColor, // Text color matches the button color for consistency
        }
    }

    return (
        <Router>
            <Routes>
                {/* Main Portfolio Route */}
                <Route
                    path="/"
                    element={
                        <>
                            {/* Render Navbar only on non-TravelGlobe routes */}
                            <div className="navbar">
                                {/* Home Button */}
                                <button
                                    className={
                                        currentSlide === 0 ? 'active' : ''
                                    }
                                    onClick={() => goToSlide(0)}
                                    onMouseEnter={() => setHoveredButton(0)}
                                    onMouseLeave={() => setHoveredButton(null)}
                                    style={getButtonStyle(
                                        currentSlide === 0,
                                        hoveredButton === 0
                                    )}
                                >
                                    HOME
                                </button>

                                {/* About Me Button */}
                                <button
                                    className={
                                        currentSlide === 1 ? 'active' : ''
                                    }
                                    onClick={() => goToSlide(1)}
                                    onMouseEnter={() => setHoveredButton(1)}
                                    onMouseLeave={() => setHoveredButton(null)}
                                    style={getButtonStyle(
                                        currentSlide === 1,
                                        hoveredButton === 1
                                    )}
                                >
                                    ABOUT ME
                                </button>

                                {/* Projects Button */}
                                <button
                                    className={
                                        currentSlide >= 2 && currentSlide <= 6
                                            ? 'active'
                                            : ''
                                    }
                                    onClick={() => goToSlide(2)}
                                    onMouseEnter={() => setHoveredButton(2)}
                                    onMouseLeave={() => setHoveredButton(null)}
                                    style={getButtonStyle(
                                        currentSlide >= 2 && currentSlide <= 6,
                                        hoveredButton === 2
                                    )}
                                >
                                    PROJECTS
                                </button>

                                {/* Contact Me Button */}
                                <button
                                    className={
                                        currentSlide === 7 ? 'active' : ''
                                    }
                                    onClick={() => goToSlide(7)}
                                    onMouseEnter={() => setHoveredButton(7)}
                                    onMouseLeave={() => setHoveredButton(null)}
                                    style={getButtonStyle(
                                        currentSlide === 7,
                                        hoveredButton === 7
                                    )}
                                >
                                    CONTACT ME
                                </button>
                            </div>

                            {/* The slider with your components */}
                            <div className="keen-slider" ref={sliderRef}>
                                <div className="keen-slider__slide">
                                    <LandingPage goToSlide={goToSlide} />
                                </div>
                                <div className="keen-slider__slide">
                                    <StorySlider />
                                </div>
                                <div className="keen-slider__slide">
                                    <Project1 />
                                </div>
                                <div className="keen-slider__slide">
                                    <Project2 />
                                </div>
                                <div className="keen-slider__slide">
                                    <Project3 />
                                </div>
                                <div className="keen-slider__slide">
                                    <Project4 />
                                </div>
                                <div className="keen-slider__slide">
                                    <Project5 />
                                </div>
                                <div className="keen-slider__slide">
                                    <ContactMe />
                                </div>
                            </div>
                        </>
                    }
                />

                {/* Travel Globe Route */}
                <Route
                    path="/travel-globe"
                    element={<TravelGlobe locations={locations} />}
                />
            </Routes>
        </Router>
    )
}

export default App
