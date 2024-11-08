import { useRef, useEffect } from 'react'
import { register } from 'swiper/element/bundle'

register()

const StorySlider = () => {
    const swiperElRef = useRef(null)

    useEffect(() => {
        // listen for Swiper events using addEventListener
        swiperElRef.current.addEventListener('swiperprogress', (e) => {
            const [progress] = e.detail
            console.log(progress)
        })

        swiperElRef.current.addEventListener('swiperslidechange', (e) => {
            console.log('slide changed')
        })
    }, [])

    // custom function used to send the user to the first slide of the Swiper Element slide show
    const goToFirstSlide = () => {
        if (swiperElRef.current && swiperElRef.current.swiper) {
            const firstIndex = 0
            swiperElRef.current.swiper.slideTo(firstIndex)
        }
    }

    // everything in this component will be contained within a swiper-container or a swiper-slide
    // So far, I have 15 swiper-slides for my horizontal story slider each with their own image and story paragraph
    return (
        <div className="storySliderContainer">
            <swiper-container
                ref={swiperElRef}
                slides-per-view="1"
                navigation="true"
                pagination="true"
            >
                <swiper-slide>
                    <div className="headshot">
                        <img src="images/cruise_headshot.jpg" alt="panel 2" />
                    </div>
                    <div className="paragraphWrapperLarge">
                        Hello there! My name is Brandon James Shaffer. I'm a
                        bilingual Colombian-American with a passion for coding,
                        gaming, snowboarding, climbing, and TV/films. I
                        graduated from Northern Arizona University in 2023 with
                        my Bachelor of Science in Computer Science and
                        subsequently achieved my AWS Certified Cloud
                        Practitioner cert in November of 2023. I am skilled in
                        HTML, CSS, JavaScript, Python, Java, C, and C#. I have
                        also dabbled in Unity and RStudio. I have experience
                        with both relational and non-relational databases and
                        favor the MERN tech stack. My past projects and
                        experiences lean more towards front-end development, but
                        I'm fully capable of developing back-end and APIs. I'm
                        an eager learner keen on becoming a Software Engineer in
                        the tech industry, aiming to evolve into a Full Stack
                        Software Engineer. Make sure to check out my project
                        portfolio below for more examples of my work! Continue
                        the slide show to read more about how I fell in love
                        with software development.
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className="titleSlide">
                        <div className="titleImgContainer">
                            <img
                                src="images/WorldOfSoftware3.png"
                                alt="World of Software Logo"
                            />
                        </div>
                        <div className="disclaimer">
                            <h3 className="header3">
                                Learn more about my journey!
                            </h3>
                            <p className="disclaimerParagraph">
                                *Disclaimer: Panel images were created using
                                <b> AI</b>; I am not an artist, please don't get
                                mad at me.*
                            </p>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className="panelImage">
                        <img
                            src="images/panel1.webp"
                            alt="panel 1"
                            style={{ display: 'block', margin: 'auto' }}
                        />
                    </div>
                    <div className="paragraphWrapper">
                        It's December 26th, 2007... two best friends
                        meticulously watch as a download bar slowly chugs along
                        the screen. Other presents have been opened but their
                        attention is firmly fixed on a brand new video game.
                        This is the third download disc in the set. They have
                        been waiting in anticipation for hours. The game they
                        are waiting to play? <b>World of Warcraft</b>.
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className="panelImage">
                        <img
                            src="images/panel2.webp"
                            alt="panel 2"
                            style={{ display: 'block', margin: 'auto' }}
                        />
                    </div>
                    <div className="paragraphWrapper">
                        The next day, the boy runs home and immediately tells
                        his parents about the cool game his friend got for
                        Christmas. Despite it being a few days past Christmas,
                        he begs them to buy the game for him and let him play.
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className="panelImage">
                        <img
                            src="images/panel3.webp"
                            alt="panel 2"
                            style={{ display: 'block', margin: 'auto' }}
                        />
                    </div>
                    <div className="paragraphWrapper">
                        Despite their initial reservations to allow a youngling
                        to play a massively multiplayer online role-playing
                        game, the boy's parents relent and agree to buy him the
                        game, so long as he plays with parental controls and
                        helps pay for his $15 sub every month.
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className="panelImage">
                        <img
                            src="images/panel4.webp"
                            alt="panel 2"
                            style={{ display: 'block', margin: 'auto' }}
                        />
                    </div>
                    <div className="paragraphWrapper">
                        Not long after this, the boy's parents decide they are
                        going to pack everything up and move across the country
                        to Phoenix, Arizona. This marks the “first big move” of
                        the boy's life.
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className="panelImage">
                        <img
                            src="images/panel5.webp"
                            alt="panel 2"
                            style={{ display: 'block', margin: 'auto' }}
                        />
                    </div>
                    <div className="paragraphWrapper">
                        Initially, the boy struggles to make friends and he
                        resorts to playing World of Warcraft for many hours a
                        day. During this time, he develops valuable typing and
                        troubleshooting skills while navigating the tough world
                        (of Warcraft).
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className="panelImage">
                        <img
                            src="images/panel6.webp"
                            alt="panel 2"
                            style={{ display: 'block', margin: 'auto' }}
                        />
                    </div>
                    <div className="paragraphWrapper">
                        Eventually, the boy succeeds in making many lifelong
                        friends in Arizona. They encourage him to be more active
                        and play outside. The boy embraces more hobbies, such as
                        BMX biking, airsoft, paintball, football, soccer, and
                        competitive swimming.
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className="panelImage">
                        <img
                            src="images/panel7.webp"
                            alt="panel 2"
                            style={{ display: 'block', margin: 'auto' }}
                        />
                    </div>
                    <div className="paragraphWrapper">
                        The boy grows into a young adult alongside his newfound
                        friends all the way into his freshman year of
                        highschool. During this year, his parents decide to move
                        (once again) to Los Angeles. Here he makes even more
                        friends and eventually graduates with them in 2015.
                        However, the boy, now a young man, had always known he
                        wanted to return to Arizona and attend university there…
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className="panelImage">
                        <img
                            src="images/panel8.webp"
                            alt="panel 2"
                            style={{ display: 'block', margin: 'auto' }}
                        />
                    </div>
                    <div className="paragraphWrapper">
                        So, the young man packs his things and travels to
                        Tucson, to attend the University of Arizona with his
                        best friend. Here, he makes one of the biggest decisions
                        of his young life. On orientation day, he is met with a
                        paper titled “Major Declaration”. All the young man felt
                        he ever knew was computers. As he surveys the list of
                        available majors, two words catch his eye:{' '}
                        <b>Computer Science</b>.
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className="panelImage">
                        <img
                            src="images/panel9.webp"
                            alt="panel 2"
                            style={{ display: 'block', margin: 'auto' }}
                        />
                    </div>
                    <div className="paragraphWrapper">
                        After only one semester, the young man and his best
                        friend find they do not like Tucson as much as they
                        thought they would. During winter break, they both
                        decide to transfer to a campus they had never even
                        visited before: <b>Northern Arizona University</b>. The
                        young man shows up to a beautiful, snow covered campus,
                        and immediately falls in love with Flagstaff. He
                        embraces nature, snowboarding, and all the best things
                        that Flagstaff had to offer.
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className="panelImage">
                        <img
                            src="images/panel10.webp"
                            alt="panel 2"
                            style={{ display: 'block', margin: 'auto' }}
                        />
                    </div>
                    <div className="paragraphWrapper">
                        Throughout his years at NAU, the young man faces many
                        trials and tribulations. He experiences a near death
                        experience, personal struggles, and even a global
                        pandemic. Despite these challenges, the young man never
                        falters from his goal to graduate.
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className="panelImage">
                        <img
                            src="images/panel11.webp"
                            alt="panel 2"
                            style={{ display: 'block', margin: 'auto' }}
                        />
                    </div>
                    <div className="paragraphWrapper">
                        Once the online class mandate was relinquished, the
                        young man returned to his beloved mountain campus. After
                        the pandemic, he finds he has a much greater
                        appreciation of his studies, his professors, and the
                        in-person courses offered at his university. The young
                        man throws himself at his studies, determined to let
                        nothing get in the way of learning how to develop
                        software.
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className="panelImage">
                        <img
                            src="images/panel12.webp"
                            alt="panel 2"
                            style={{ display: 'block', margin: 'auto' }}
                        />
                    </div>
                    <div className="paragraphWrapper">
                        Finally, after years of studying and growth, the man
                        achieves his ultimate goal and graduates with a Bachelor
                        of Science in Computer Science. But where is he now?
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className="panelImage">
                        <img
                            src="images/panel13.webp"
                            alt="panel 2"
                            style={{ display: 'block', margin: 'auto' }}
                        />
                    </div>
                    <div className="paragraphWrapper">
                        Today, the man is an aspiring software engineer. He has
                        tasked himself with expanding his portfolio to showcase
                        his skills to future employers. That very task has led
                        him to{' '}
                        <b>
                            create the portfolio website you are interacting
                            with right now
                        </b>
                        . If you made it this far, thank you so much for
                        inquiring about my life!
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
            </swiper-container>
        </div>
    )
}

export default StorySlider
