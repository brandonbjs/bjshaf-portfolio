import React, { useEffect, useRef, useState } from 'react'
import Globe from 'globe.gl'
//import { useNavigate } from 'react-router-dom' // Import useNavigate for redirection
import { Modal, Carousel } from 'react-bootstrap'

const TravelGlobe = ({ locations }) => {
    const globeRef = useRef()
    const [showModal, setShowModal] = useState(false)
    const [currentLocation, setCurrentLocation] = useState(null)

    useEffect(() => {
        const globe = Globe()(globeRef.current)
            .globeImageUrl(
                '//unpkg.com/three-globe/example/img/earth-night.jpg'
            )
            .pointOfView({ lat: 0, lng: 0, altitude: 2 })

        globe
            .pointsData(locations)
            .pointLat('lat')
            .pointLng('lng')
            .pointAltitude(0.01)
            .pointRadius(0.5)
            .pointColor(() => 'orange')
            .onPointClick((point) => {
                setCurrentLocation(point)
                setShowModal(true)
            })
    }, [locations])

    return (
        <>
            <div ref={globeRef} style={{ width: '100%', height: '100%' }} />

            {currentLocation && (
                <Modal show={showModal} onHide={() => setShowModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>{currentLocation.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Carousel>
                            {currentLocation.images.map((img, idx) => (
                                <Carousel.Item key={idx}>
                                    <img
                                        className="d-block w-100"
                                        src={img}
                                        alt={``}
                                    />
                                    <Carousel.Caption>
                                        <p>{currentLocation.description}</p>
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
