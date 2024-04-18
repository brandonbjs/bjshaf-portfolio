import { useRef, useEffect } from 'react'
import { register } from 'swiper/element/bundle'

register()

const StorySlider = () => {
    const swiperElRef = useRef(null)

    useEffect(() => {
        // listen for Swiper events using addEventListener
        swiperElRef.current.addEventListener('swiperprogress', (e) => {
            const [swiper, progress] = e.detail
            console.log(progress)
        })

        swiperElRef.current.addEventListener('swiperslidechange', (e) => {
            console.log('slide changed')
        })
    }, [])

    const goToLastSlide = () => {
        if (swiperElRef.current && swiperElRef.current.swiper) {
            const lastIndex = swiperElRef.current.swiper.slides.length - 1
            swiperElRef.current.swiper.slideTo(lastIndex)
        }
    }

    const goToFirstSlide = () => {
        if (swiperElRef.current && swiperElRef.current.swiper) {
            const firstIndex = 0
            swiperElRef.current.swiper.slideTo(firstIndex)
        }
    }

    return (
        <div className="storySliderContainer">
            <div className="storySlider">
                <swiper-container
                    ref={swiperElRef}
                    slides-per-view="1"
                    navigation="true"
                    pagination="true"
                >
                    <swiper-slide>
                        <div className="titleSlide">
                            <img
                                src="images/WorldofSoftware.png"
                                alt="World of Software Logo"
                                style={{ display: 'block', margin: 'auto' }}
                                width="100%"
                                height="100%"
                            />
                            <h4>
                                or click the arrows to learn more about my
                                journey.
                            </h4>
                            <button
                                className="skipToEndButton"
                                onClick={goToLastSlide}
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                }}
                            >
                                Skip to Summary Slide
                            </button>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className="panelImage">
                            <img
                                src="images/panel1.webp"
                                alt="panel 1"
                                style={{ display: 'block', margin: 'auto' }}
                                width="20%"
                                height="50%"
                            />
                        </div>
                        <div className="paragraphWrapper">
                            It's December 26th, 2007... two best friends
                            meticulously watch as a download bar slowly chugs
                            along the screen. Other presents have been opened
                            but their attention is firmly fixed on a brand new
                            video game. This is the third download disc in the
                            set. They have been waiting in anticipation for
                            hours. The game they are waiting to play? World of
                            Warcraft.
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className="panelImage">
                            <img
                                src="images/panel2.webp"
                                alt="panel 2"
                                style={{ display: 'block', margin: 'auto' }}
                                width="20%"
                                height="50%"
                            />
                        </div>
                        <div className="paragraphWrapper">
                            The next day, the boy runs home and immediately
                            tells his parents about the cool game his friend got
                            for Christmas. Despite it being a few days past
                            Christmas, he begs them to buy the game for him and
                            let him play.
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className="headshot">
                            <img
                                src="images/cruise_headshot.jpg"
                                alt="panel 2"
                                style={{ display: 'block', margin: 'auto' }}
                                width="20%"
                                height="50%"
                            />
                        </div>
                        <div className="paragraphWrapper">
                            I'm a bilingual Colombian-American with a passion
                            for coding, gaming, snowboarding, climbing, and
                            TV/films. I am skilled in HTML, CSS, JavaScript,
                            Python, Java, C, and C#. I have also dabbled in
                            Unity and RStudio. I have experience with both
                            relational and non-relational databases and favor
                            the MERN tech stack. My past projects and
                            experiences lean more towards front-end development,
                            but I'm fully capable of developing back-end and
                            APIs. I'm an eager learner keen on becoming a
                            Software Engineer in the tech industry, aiming to
                            evolve into a Full Stack Software Engineer. Make
                            sure to check out my project portfolio below for
                            more examples of my work!
                        </div>
                        <button
                            className="skipToStartButton"
                            onClick={goToFirstSlide}
                            style={{
                                position: 'absolute',
                                top: '50%',
                            }}
                        >
                            Back to Start
                        </button>
                    </swiper-slide>
                    ...
                </swiper-container>
            </div>
        </div>
    )
}

export default StorySlider
