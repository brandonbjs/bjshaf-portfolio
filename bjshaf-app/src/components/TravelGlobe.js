import React, { useEffect, useRef, useState } from 'react'
import Globe from 'globe.gl'
//import { useNavigate } from 'react-router-dom' // Import useNavigate for redirection
import { Modal, Carousel } from 'react-bootstrap'

const TravelGlobe = ({ locations }) => {
    const globeRef = useRef()
    const [showModal, setShowModal] = useState(false)
    const [currentLocation, setCurrentLocation] = useState(null)

    const handleBackClick = () => {
        window.location.href = '/' // Reload the landing page by navigating to '/' and forcing a page refresh
    }

    useEffect(() => {
        const globe = Globe()(globeRef.current)
            .globeImageUrl(
                '//unpkg.com/three-globe/example/img/earth-blue-marble.jpg'
            )
            .bumpImageUrl(
                '//unpkg.com/three-globe/example/img/earth-topology.png'
            )
            .pointOfView({ lat: 0, lng: 0, altitude: 2 })

        globe
            .pointsData(locations)
            .pointLat('lat')
            .pointLng('lng')
            .pointAltitude(0.2)
            .pointRadius(0.2)
            .pointColor(() => '#e76f51')
            .onPointClick((point) => {
                setCurrentLocation(point)
                setShowModal(true)
            })
    }, [locations])

    return (
        <>
            {/* Back button in the top left corner */}
            <button className="backToLandingPage" onClick={handleBackClick}>
                Back to Portfolio
            </button>
            <div ref={globeRef} style={{ width: '100%', height: '100%' }} />

            {currentLocation && (
                <Modal
                    className="travelModal"
                    show={showModal}
                    onHide={() => setShowModal(false)}
                    backdrop="static" // This will prevent closing when clicking outside
                    keyboard={false}
                >
                    <Modal.Header>
                        <button
                            type="button"
                            className="closeButton"
                            aria-label="Close"
                            onClick={() => setShowModal(false)}
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <Modal.Title>{currentLocation.name}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Carousel interval={null}>
                            {' '}
                            {/* Ensuring it doesn't auto-slide */}
                            {currentLocation.images.map((img, idx) => (
                                <Carousel.Item key={idx}>
                                    <img src={img.src} alt={`Slide ${idx}`} />
                                    <Carousel.Caption>
                                        <p>{img.caption}</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Modal.Body>
                </Modal>
            )}
        </>
    )
}

export default TravelGlobe
