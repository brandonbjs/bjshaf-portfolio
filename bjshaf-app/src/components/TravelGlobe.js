import React, { useEffect, useRef, useState } from 'react'
import Globe from 'globe.gl'
import * as THREE from 'three'
import { Modal, Carousel } from 'react-bootstrap'


const NEEDLE_HEIGHT = 6
const NEEDLE_BASE_RADIUS = 0.3
const HEAD_RADIUS = 1.1

const TravelGlobe = ({ locations }) => {
    const globeRef = useRef()
    const [showModal, setShowModal] = useState(false)
    const [currentLocation, setCurrentLocation] = useState(null)

    const handleBackClick = () => {
        window.location.href = '/'
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
            .customLayerData(locations)
            .customThreeObject(() => {
                const group = new THREE.Group()

                // ConeGeometry: apex at +Y, base at -Y by default.
                // Flip 180° so apex points toward globe (-Y), then shift up
                // so apex sits at local origin (globe surface).
                const needle = new THREE.Mesh(
                    new THREE.ConeGeometry(NEEDLE_BASE_RADIUS, NEEDLE_HEIGHT, 8),
                    new THREE.MeshPhongMaterial({ color: '#ffffff' })
                )
                needle.rotation.z = Math.PI
                needle.position.y = NEEDLE_HEIGHT / 2

                const head = new THREE.Mesh(
                    new THREE.SphereGeometry(HEAD_RADIUS, 16, 8),
                    new THREE.MeshPhongMaterial({ color: '#e74c3c' })
                )
                head.position.y = NEEDLE_HEIGHT + HEAD_RADIUS

                group.add(needle)
                group.add(head)
                return group
            })
            .customThreeObjectUpdate((obj, d) => {
                const { x, y, z } = globe.getCoords(d.lat, d.lng, 0)
                obj.position.set(x, y, z)
                obj.quaternion.setFromUnitVectors(
                    new THREE.Vector3(0, 1, 0),
                    new THREE.Vector3(x, y, z).normalize()
                )
            })
            .onCustomLayerClick((point) => {
                setCurrentLocation(point)
                setShowModal(true)
            })
    }, [locations])

    return (
        <>
            <button className="backToLandingPage" onClick={handleBackClick}>
                Back to Portfolio
            </button>
            <div ref={globeRef} style={{ width: '100%', height: '100%' }} />

            {currentLocation && (
                <Modal
                    className="travelModal"
                    show={showModal}
                    onHide={() => setShowModal(false)}
                    backdrop="static"
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
                        <Carousel
                            interval={null}
                            prevIcon={<span className="carousel-nav-arrow">&#8249;</span>}
                            nextIcon={<span className="carousel-nav-arrow">&#8250;</span>}
                            prevLabel=""
                            nextLabel=""
                        >
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
