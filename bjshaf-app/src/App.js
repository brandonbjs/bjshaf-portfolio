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
                src: 'images/rome/IMG_9341.JPEG',
                caption:
                    'Arch of Constantine; erected in the year 315 in commemoration of the victory of Constantine I the Great in the Battle of Milvian Bridge. It is located between the Colosseum and the Palatine Hill.',
            },
            {
                src: 'images/rome/IMG_9342.JPEG',
                caption: 'Arch of Constantine.',
            },
            {
                src: 'images/rome/IMG_9346.JPEG',
                caption: 'Inner wall of Colosseum.',
            },
            {
                src: 'images/rome/IMG_9352.JPEG',
                caption: 'Inner wall of Colosseum.',
            },
            {
                src: 'images/rome/IMG_9353.JPEG',
                caption: 'Inner wall of Colosseum.',
            },
            {
                src: 'images/rome/IMG_9356.JPEG',
                caption: 'Inner wall of Colosseum, with view of Outer Wall.',
            },
            {
                src: 'images/rome/IMG_9611.JPEG',
                caption: 'Within the Colosseum.',
            },
            {
                src: 'images/rome/IMG_9612.JPEG',
                caption: 'Within the Colosseum, second angle.',
            },
            {
                src: 'images/rome/IMG_9615.JPEG',
                caption: 'Within the Colosseum, center view.',
            },
            {
                src: 'images/rome/IMG_9626.JPEG',
                caption: 'Within the Colosseum, center view, second angle.',
            },
            {
                src: 'images/rome/IMG_9639.JPEG',
                caption: 'Cheeeeeese',
            },
            {
                src: 'images/rome/IMG_9643.JPEG',
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
                src: 'images/copper/sick_tripod.jpg',
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
                src: 'images/copper/sick_tripod.jpg',
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
                src: 'images/venice/IMG_2596.JPEG',
                caption: 'San Toma; Church in Venice.',
            },
            {
                src: 'images/venice/IMG_2598.JPEG',
                caption:
                    'The Chiesa di San Polo is a Catholic church in Venice, dedicated to the Apostle Paul.',
            },
            {
                src: 'images/venice/IMG_2601.JPEG',
                caption: 'Gondolas!',
            },
            {
                src: 'images/venice/IMG_2604.JPEG',
                caption: 'Rialto Bridge!',
            },
            {
                src: 'images/venice/IMG_2608.JPEG',
                caption: 'View from Rialto Bridge!',
            },
            {
                src: 'images/venice/IMG_2642.JPEG',
                caption: 'Graffiti I found in Venice.',
            },
            {
                src: 'images/venice/IMG_2644.JPEG',
                caption: 'More Graffiti I found in Venice.',
            },
            {
                src: 'images/venice/IMG_2615.JPEG',
                caption: 'Tolentini; Church found in Santa Croce, Italy.',
            },
            {
                src: 'images/venice/IMG_2622.JPEG',
                caption: 'Amazing glass blown in Murano, Italy!',
            },
            {
                src: 'images/venice/IMG_2623.JPEG',
                caption: 'Amazing glass blown in Murano, Italy!',
            },
            {
                src: 'images/venice/IMG_2624.JPEG',
                caption: 'Amazing glass blown in Murano, Italy!',
            },
            {
                src: 'images/venice/IMG_2625.JPEG',
                caption: 'Amazing glass blown in Murano, Italy!',
            },
            {
                src: 'images/venice/IMG_2626.JPEG',
                caption: 'Amazing glass blown in Murano, Italy!',
            },
            {
                src: 'images/venice/IMG_2627.JPEG',
                caption: 'Amazing glass blown in Murano, Italy!',
            },
            {
                src: 'images/venice/IMG_2628.JPEG',
                caption: 'Amazing glass blown in Murano, Italy!',
            },
            {
                src: 'images/venice/IMG_2629.JPEG',
                caption: 'Amazing glass blown in Murano, Italy!',
            },
            {
                src: 'images/venice/IMG_2658.JPEG',
                caption: 'Famous painted buildings in Burano, Italy.',
            },
            {
                src: 'images/venice/IMG_2663.JPEG',
                caption: 'Famous painted buildings in Burano, Italy.',
            },
            {
                src: 'images/venice/IMG_2666.JPEG',
                caption: 'Famous painted buildings in Burano, Italy.',
            },
            {
                src: 'images/venice/IMG_2684.JPEG',
                caption:
                    'Burano Leaning Bell Tower. Built in the seventeenth century, the leaning tower has a square shape and Renaissance and neoclassical architectural features.',
            },
            {
                src: 'images/venice/IMG_2688.JPEG',
                caption:
                    'Because of land subsidence it is inclined of 1.83 meters respect to its axis.',
            },
            {
                src: 'images/venice/IMG_2692.JPEG',
                caption:
                    "The height of the Burano's tower is 53 meters and it stands on a base with a side of 6.20 meters.",
            },
        ],
    },
    {
        lat: 45.6495,
        lng: 13.7768,
        name: 'Trieste, Italy',
        images: [
            {
                src: 'images/copper/sick_tripod.jpg',
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
                src: 'images/copper/sick_tripod.jpg',
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
                src: 'images/athens/IMG_4051.JPEG',
                caption: `The Parthenon, a temple of the Doric order, was dedicated 
                to Athena Parthenos (Virgin). It was the most important building of 
                the programme of Perikles for the re-establishment of the Acropolis 
                sanctuary after the sack by the Persians in 480 B.C. The architects 
                of the temple were Iktinos and Kallikrates. The renowned sculptor 
                Pheidias collaborated with other sculpters to design and execute the 
                abundant sculptural decoration of the temple. The Parthenon was built 
                in 447-438 B.C.`,
            },
            {
                src: 'images/athens/IMG_2002.JPEG',
                caption: 'Me in front of the magnificent Parthenon!',
            },
            {
                src: 'images/athens/IMG_4044.JPEG',
                caption:
                    'Posing next to a fallen column to help show the scale.',
            },
            {
                src: 'images/athens/IMG_4046.JPEG',
                caption: `Center of marble column with the Greek letters Pi Sigma 
                engraved into it. After some speculation, this could either be 
                the stonecutters initials, a religious or symbolic connotation, 
                later graffiti, or restoration marks used to identify/organize 
                different parts of the structure for reassembly.`,
            },
            {
                src: 'images/athens/IMG_4048.JPEG',
                caption:
                    'The center of another marble column, worn down by time.',
            },
            {
                src: 'images/athens/IMG_4053.JPEG',
                caption: `Closer view of the peripteral octastyle Doric temple with 
                    its Ionic architectural features.`,
            },
            {
                src: 'images/athens/IMG_4055.JPEG',
                caption:
                    'Some of the scattered pieces of marble strewn around the Parthenon.',
            },
            {
                src: 'images/athens/IMG_4057.JPEG',
                caption: `Full view of columns. The whiter marble within the columns and 
                    structure are renovations that have been made over the years.`,
            },
            {
                src: 'images/athens/IMG_4061.JPEG',
                caption:
                    'Close up of the Ionic columns and what is left of the pediment.',
            },
            {
                src: 'images/athens/IMG_4062.JPEG',
                caption: 'Final angle.',
            },
            {
                src: 'images/athens/IMG_4069.JPEG',
                caption: `The Erechtheion. This elegant building of the Ionic order is called, 
                    according to later literary sources, Erechtheion from the name of Erechtheus, 
                    the mythical king of Athens. The construction started before the outbreak of 
                    the Peloponnesian War (431 B.C.) or after the conclusion of the "peace of 
                    Mikias" (421 B.C.) as was finished in 406 B.C., after the interruption of 
                    the works because of the war.`,
            },
            {
                src: 'images/athens/IMG_4070.JPEG',
                caption: `At the north side of the cella there is a magnificent porch with 
                6 Ionic columns. The bases and capitals along with the grame of the doorway 
                leading to the interior of the cella, have elaborate relief decoration, 
                while the ceiling coffers were painted. The peculiar plan of the building 
                is due to the natural irregularity of the ground and the need to house 
                the ancient sacred spots: the salt spring, which appeared when Poseidon 
                struck the rock with his trident during the contest with Athena over 
                the patronage of the city, the trident marks and the tombs of the Athenian 
                kings Kekrops and Erechtheus.`,
            },
            {
                src: 'images/athens/IMG_4071.JPEG',
                caption: `The Erechtheion consists of a rectangular cella divided by an 
                interior wall forming two sections. The eastern section, which was at a 
                level at least 3 m. higher than that of the western, was dedicated to 
                Athena Polias and housed the xoanon, the ancient wooden cult statue of 
                the goddess. The western section was divided into three parts and was 
                dedicated to the cult of Poseidon, Erechtheus, Hephaistus and the hero 
                Boutes.`,
            },
            {
                src: 'images/athens/IMG_4079.JPEG',
                caption: `Better view of the Ionic columns of the Erechtheion.`,
            },
            {
                src: 'images/athens/IMG_4081.JPEG',
                caption: `The sacred Moria tree that stands in front of the Erechtheion, 
                thought to be the same location of the very first olive tree given to 
                Athens by the goddess Athena.`,
            },
            {
                src: 'images/athens/IMG_4099.JPEG',
                caption: `The famous Porch of the Maidens (Korai) or Caryatids dominates
                 the south side of the building: six statues of young women, standing on 
                 a podium 1.77 m. high, support the roof of the porch, which was the part 
                 of Kekrops' tomb above the ground.`,
            },
            {
                src: 'images/athens/IMG_4103.JPEG',
                caption: `Lone column with a repaired section.`,
            },
            {
                src: 'images/athens/IMG_4149.JPEG',
                caption: `The Auditorium of the Theatre of Dionysos is the largest monument 
                on the southern slope of the Acropolis, although the preserved remains of its 
                seating portion, namely the auditorium or cavea, represent only a small 
                portion of the gigantic original complex.`,
            },
            {
                src: 'images/athens/IMG_4151.JPEG',
                caption: `The Auditorium of the Theatre of Dionysos.`,
            },
            {
                src: 'images/athens/IMG_4159.JPEG',
                caption: `East of this monument the honorary base and statue 
                of the most important representative of New Comedy, Menander, 
                was erected in 291/0 B.C. He wrote over 100 plays where his 
                innovative work focused on ordinary people and he is 
                considered the father of psychological drama. At the age of 
                only 51, he drowned while swimming off Piraeus.`,
            },
            {
                src: 'images/athens/IMG_4170.JPEG',
                caption: `The Temple of Olympian Zeus in Athens. This image 
                shows the gigantic 16 Corinthian style columns that remain to 
                this day.`,
            },
            {
                src: 'images/athens/IMG_4172.JPEG',
                caption: `The temple took 638 years to build and was meant to 
                rival the largest temples known at the time. It had 104 columns 
                total, which stood 56 ft high with a 6 ft 7 inch diameter.`,
            },
            {
                src: 'images/athens/IMG_4186.JPEG',
                caption: `The original style of the temple was meant to be Doric 
                and sourced from local limestone but when king Antiochus IV Epiphanes, 
                who presented himself as the earthly embodiment of Zeus, revived the 
                project, he changed the material to the expensive Pentelic marble and 
                the order was changed to Corinthian, which would mark the first time 
                this order would be used on the outside of a major temple.`,
            },
            {
                src: 'images/athens/IMG_4205.JPEG',
                caption: `Alternate angle of The Temple of Olympian Zeus.`,
            },
            {
                src: 'images/athens/IMG_4207.JPEG',
                caption: `Close up of Corinthian style column.`,
            },
            {
                src: 'images/athens/IMG_4197.JPEG',
                caption: `The Arch of Hadrian, built in 131 or 132 AD.`,
            },
            {
                src: 'images/athens/IMG_4198.JPEG',
                caption: `The Arch of Hadrian, built in 131 or 132 AD.`,
            },
            {
                src: 'images/athens/IMG_4237.JPEG',
                caption: `View of Athens from vantage point.`,
            },
            {
                src: 'images/athens/IMG_4252.JPEG',
                caption: `The purely ceremonial Presidential Guard, guarding the 
                Presidential Mansion. They change positions with the guards 
                opposite them every 15 minutes. Their march is slow, 
                exagerated, and highly stylized. These guards are wearing the summer version 
                of their uniform which is light khaki in color.`,
            },
            {
                src: 'images/athens/IMG_4254.JPEG',
                caption: `They are armed with a M1 Garand, fixed with bayonet. 
                Here you can clearly see their tsarouchi shoe, which is made of 
                red leather and a black pompon, which was originally made to 
                make the toe of the shoe waterproof and later became an 
                irreplaceable part of the uniform decoration. The sole of the 
                tsarouchi usually has 60-120 nails which can be heard when the 
                guards slam their right foott down as part of their extravagant 
                marches. The tsarouchi weighs around 3.5 pounds!`,
            },
            {
                src: 'images/athens/IMG_4275.JPEG',
                caption: `Statue of the Emperor Hadrian located in the Ancient 
                Agora of Athens, used as a commercial, assembly, or 
                residential gathering place.`,
            },
            {
                src: 'images/athens/IMG_4282.JPEG',
                caption: `Temple of Hephaistos; a Doric peripteral temple, 
                with pronaos (fore-temple), cella (inner shrine), and 
                opisthonaos (rear temple), the best preserved of its type 
                in the Greek world. It occupies the crest of the Kolonos 
                Agoraios Hill and was designed by an unknown architect 
                probably in honor of Hephaistos, patron of metal-workers, 
                and Athena Ergane, patroness of potters and crafts in general.`,
            },
            {
                src: 'images/athens/IMG_4284.JPEG',
                caption: `Temple of Hephaistos; it is built mostly of 
                Pentelic marble, with its decorative sculpture in Parian.`,
            },
            {
                src: 'images/athens/IMG_4285.JPEG',
                caption: `Temple of Hephaistos; it is built mostly of 
                Pentelic marble, with its decorative sculpture in Parian.`,
            },
            {
                src: 'images/athens/IMG_4288.JPEG',
                caption: `Closer view of the Doric order columns.`,
            },
            {
                src: 'images/athens/IMG_4289.JPEG',
                caption: `A peak into the cella (inner shrine).`,
            },
            {
                src: 'images/athens/IMG_4301.JPEG',
                caption: `New Bouleuterion and Propylon; rectangular 
                prostyle building that served as a meeting-place of 
                the 500-member Boule (council), made up of fifty 
                citizens from each of the ten Athenian tribes, 
                chosen by allotment each year.`,
            },
            {
                src: 'images/athens/IMG_4304.JPEG',
                caption: `Tholos or Skias; one of the more significant 
                public buildings of the Agora is the Tholos, a round 
                structure with six interior columns and a propylon at 
                the east that was added in the 1st century BC. It was 
                the headquarters of the 50 prytaneis who served as the 
                executive committee of the Boule (council) for an 
                interval of 35 or 36 days, after which they were 
                replaced by prytaneis from another tribe, so that 
                by the end of the year representatives of all 10 
                tribes had a turn in the administration.`,
            },
            {
                src: 'images/athens/IMG_4305.JPEG',
                caption: `Left view of the Tholos.`,
            },
            {
                src: 'images/athens/IMG_4306.JPEG',
                caption: `Wide shot of whats left of the Ancient 
                Agora of Athens.`,
            },
            {
                src: 'images/athens/IMG_4310.JPEG',
                caption: `Southwest Fountain House.`,
            },
            {
                src: 'images/athens/IMG_4312.JPEG',
                caption: `A water clock!`,
            },
            {
                src: 'images/athens/IMG_4313.JPEG',
                caption: `Ruins located behind the water clock.`,
            },
            {
                src: 'images/athens/IMG_4314.JPEG',
                caption: `Another wide shot of the Agora, with modern Athens flanking it.`,
            },
            {
                src: 'images/athens/IMG_4316.JPEG',
                caption: `Socrates and Confucius: An Encounter - Wu Weishan, 2021`,
            },
            {
                src: 'images/athens/IMG_4321.JPEG',
                caption: `The Church of the Holy Apostles is located on the 
                western side of the Ancient Agora of Athens and dates from 
                the mid-10th century. It and the Temple of Hephaistos are 
                the only two monuments within the Agora that remain intact since its 
                foundation.`,
            },
            {
                src: 'images/athens/IMG_4325.JPEG',
                caption: `Corinthian Capital from Odeion of Acrippa.`,
            },
            {
                src: 'images/athens/IMG_4327.JPEG',
                caption: `Middle Stoa; it is the largest building in the Agora, 
                147m. wide and 17.5m. deep, oriented east-west, with a Doric 
                colonnade on each of its four sides. The Stoa was built of 
                poros stone. It was destroyed by fire in A.D. 267.`,
            },
        ],
    },
    {
        lat: 37.637,
        lng: 21.6307,
        name: 'Olympia, Greece',
        images: [
            {
                src: 'images/copper/sick_tripod.jpg',
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
                src: 'images/mykonos/IMG_5271.JPEG',
                caption: 'Beautiful water in Mykonos!',
            },
            {
                src: 'images/mykonos/IMG_5280.JPEG',
                caption: `First thing on the list... get some food! 
                I ordered a kebab that came with peta bread and fries!`,
            },
            {
                src: 'images/mykonos/IMG_5284.JPEG',
                caption: `After lunch, we explored the shops around the area. 
                The city is made up of intricate alleys and walk ways, with 
                steep inclines everywhere you went (my pops did not appreciate 
                this fact).`,
            },
        ],
    },
    {
        lat: 35.5138,
        lng: 24.018,
        name: 'Chania, Crete, Greece',
        images: [
            {
                src: 'images/copper/sick_tripod.jpg',
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
                src: 'images/kusadasi/IMG_4341.JPEG',
                caption: 'Our harbor view, entering into Kusadasi, Turkey!',
            },
            {
                src: 'images/kusadasi/IMG_4347.JPEG',
                caption: `First stop: Ephesus, a city in Ancient Greece, 
                on the coast of Ionia, that now exists in present day 
                Turkey. It was built in the 10th century BC on the site 
                of Apasa, the former Arzawan capital, by Attic and 
                Ionian Greek colonists.`,
            },
            {
                src: 'images/kusadasi/IMG_4349.JPEG',
                caption: `Original irrigation/plumbing within the ancient city.`,
            },
            {
                src: 'images/kusadasi/IMG_4352.JPEG',
                caption: `View of some of the ruins, with the Odeon in 
                view behind it.`,
            },
            {
                src: 'images/kusadasi/IMG_4358.JPEG',
                caption: `It's true, Turkey is full of beautiful stray cats 
                that are well taken care of by the Turkish people. Ephesus Cat #1!`,
            },
            {
                src: 'images/kusadasi/IMG_4363.JPEG',
                caption: `More pipes excavated from the ruins.`,
            },
            {
                src: 'images/kusadasi/IMG_4365.JPEG',
                caption: `Ephesus Cat #2! Love how they allowed 
                the cats to chill wherever they wanted.`,
            },
            {
                src: 'images/kusadasi/IMG_4368.JPEG',
                caption: `Intriguing stairwell with an archway.`,
            },
            {
                src: 'images/kusadasi/IMG_4373.JPEG',
                caption: `Odeon in Ephesus: The smaller theatre located in Ephesus, 
                that seats around 1500. It had a double function in use. First, 
                it was used as a Bouleuterion for the meetings of the Boules, or 
                the Senate. The second function was the Odeum as a concert hall 
                for performances.`,
            },
            {
                src: 'images/kusadasi/IMG_4374.JPEG',
                caption: `Ephesus Cat #3, looking extra comfy!`,
            },
            {
                src: 'images/kusadasi/IMG_4375.JPEG',
                caption: `View of the Odeon from the seating area, with the 
                Arcadiane (Harbour) Street in view behind it!`,
            },
            {
                src: 'images/kusadasi/IMG_4377.JPEG',
                caption: `Wide view of the Odeon from the seating area.`,
            },
            {
                src: 'images/kusadasi/IMG_4381.JPEG',
                caption: `Beautiful archway still intact.`,
            },
            {
                src: 'images/kusadasi/IMG_4384.JPEG',
                caption: `Multiple columns along the Arcadiane (Harbour) Street. 
                One column looks to be Corinthian while the other might be Doric.`,
            },
            {
                src: 'images/kusadasi/IMG_4386.JPEG',
                caption: `Clearer view of the Arcadiane (Harbour) Street.`,
            },
            {
                src: 'images/kusadasi/IMG_4387.JPEG',
                caption: `Ya boy posing with the columns for scale.`,
            },
            {
                src: 'images/kusadasi/IMG_4390.JPEG',
                caption: `Ruins along the Arcadiane Street.`,
            },
            {
                src: 'images/kusadasi/IMG_4393.JPEG',
                caption: `Ruins along the Arcadiane Street.`,
            },
            {
                src: 'images/kusadasi/IMG_4397.JPEG',
                caption: `Ruins on the way down to the Library of Celsus, 
                which you can see standing in the background.`,
            },
            {
                src: 'images/kusadasi/IMG_4405.JPEG',
                caption: `Figures engraved into the marble.`,
            },
            {
                src: 'images/kusadasi/IMG_4407.JPEG',
                caption: `A marvelously preserved Caduceus. 
                You might recognize this as the staff that 
                is carried by Hermes, the messenger god.`,
            },
            {
                src: 'images/kusadasi/IMG_4409.JPEG',
                caption: `Hermes, the messenger god! In this bas-relief, 
                you can clearly see Hermes with his winged sandals and his 
                caduceus, with its intertwined snakes looping around it. 
                Due to the altar and libation bowl visible behind Hermes, 
                it seems as though he is leading this goat towards sacrifice.`,
            },
            {
                src: 'images/kusadasi/IMG_4417.JPEG',
                caption: `Nike, the goddess of victory! This is dated to the 
                1st or 2nd century AD and stands on the west side of Domitian 
                Square. In her left hand, she is holding a wreath, which would 
                be given to a victor, and in her right hand she holds a palm 
                branch.`,
            },
            {
                src: 'images/kusadasi/IMG_4423.JPEG',
                caption: `Ruins of the Temple of Domitian. The temple 
                and altar served the Imperial cult and were dedicated to 
                Emperor Domitian (AD 81-96); after his death and 
                condemnation of his memory (damnatio memoriae), however, 
                they were dedicated to the Flavian family. After the victory of 
                Christianity it was torn down to its foundations and 
                today it has almost completely disappeared.`,
            },
            {
                src: 'images/kusadasi/IMG_4427.JPEG',
                caption: `The Memmius Monument was built between 50 and 30 B.C. 
                at a particularly prominent sit: it is an honorific monument 
                for Gaius Memmius, a grandson of the Roman Dictator Sulla.`,
            },
            {
                src: 'images/kusadasi/IMG_4431.JPEG',
                caption: `Ruins along the Curetes Street, which ran through 
                the valley depression between the two city mountains and the 
                former Processional Way. It does not follow the orthogonal 
                street grid of the Hellenistic-Roman city. The 210m long main 
                boulevard was prestigiously equipped with porticoes and marble 
                paving in the early Imperial period. A sewer channel ran 
                under the 6.80-10m wide street.`,
            },
            {
                src: 'images/kusadasi/IMG_4435.JPEG',
                caption: `Ruins along the Curetes Street.`,
            },
            {
                src: 'images/kusadasi/IMG_4436.JPEG',
                caption: `Ionic column along the Curetes Street.`,
            },
            {
                src: 'images/kusadasi/IMG_4441.JPEG',
                caption: `Corinthian columns along the Curetes Street.`,
            },
            {
                src: 'images/kusadasi/IMG_4442.JPEG',
                caption: `The statue of a male figure wrapped in a himation 
                (cloak) was made in the Roman Imperial period and reused, 
                perhaps with the addition of a portrait head of Alexander 
                (Alexandros) in the late 4th - 5th century AD. The 
                inscription on the base states that the statue was set up by 
                council and people (the boule and the demos) of Ephesus.`,
            },
            {
                src: 'images/kusadasi/IMG_4447.JPEG',
                caption: `Relief that is part of the Hercules Gate, most likely 
                depicting Hercules and the Nemean lion!`,
            },
            {
                src: 'images/kusadasi/IMG_4448.JPEG',
                caption: `Ichthus Wheel: Used as a symbol for Christian meeting 
                places and as a "signal" to fellow believers during eras of persecution.`,
            },
            {
                src: 'images/kusadasi/IMG_4449.JPEG',
                caption: `Interesting symbols carved into the stone. 
                Maybe used to count something?`,
            },
            {
                src: 'images/kusadasi/IMG_4450.JPEG',
                caption: `More impressions in the stone.`,
            },
            {
                src: 'images/kusadasi/IMG_4452.JPEG',
                caption: `Corinthian style column.`,
            },
            {
                src: 'images/kusadasi/IMG_4454.JPEG',
                caption: `Dilapidated Corinthian style column.`,
            },
            {
                src: 'images/kusadasi/IMG_4456.JPEG',
                caption: `Greek letters engraved in the marble.`,
            },
            {
                src: 'images/kusadasi/IMG_4458.JPEG',
                caption: `Another set of Greek letters engraved in marble.`,
            },
            {
                src: 'images/kusadasi/IMG_4459.JPEG',
                caption: `Corinthian style column heads.`,
            },
            {
                src: 'images/kusadasi/IMG_4461.JPEG',
                caption: `Entrance way.`,
            },
            {
                src: 'images/kusadasi/IMG_4470.JPEG',
                caption: `Interesting stairwell that happened to be roped off.`,
            },
            {
                src: 'images/kusadasi/IMG_4472.JPEG',
                caption: `Beautiful mosaic inlay.`,
            },
            {
                src: 'images/kusadasi/IMG_4481.JPEG',
                caption: `Temple of Hadrian; Magnificent archway also built in the Corinthian style.`,
            },
            {
                src: 'images/kusadasi/IMG_4485.JPEG',
                caption: `Close up of the entrance to the Temple of Hadrian.`,
            },
        ],
    },
    {
        lat: 41.0082,
        lng: 28.9784,
        name: 'Istanbul, Turkey',
        images: [
            {
                src: 'images/istanbul/IMG_4864.JPEG',
                caption: `Great view of the bridge separating the EU and Asia
                 sides of Istanbul. The view is from the EU side.`,
            },
            {
                src: 'images/istanbul/IMG_4951.JPEG',
                caption: `Picture of me in front of a beautiful Istanbul sunset, 
                viewed from the tower we ate dinner at.`,
            },
            {
                src: 'images/istanbul/IMG_4977.JPEG',
                caption: `The Obelisk of Theodosius; first erected in Ancient
                 Egpyt during the 18th dynasty (1550 - 1292 BC), and 
                 subseqeuntly moved to the Hippodrome of Constantinople 
                 by the Roman emperor Theodosius I in the 4th century AD.`,
            },
            {
                src: 'images/istanbul/IMG_5011.JPEG',
                caption: `Hagia Sophia Grand Mosque; a mosque and former church 
                completed in AD 537 and built by the Byzantine emperor Justinian I 
                as the Christian cathedral of Constantinople for the Byzantine Empire.`,
            },
            {
                src: 'images/istanbul/IMG_5025.JPEG',
                caption: `Entrance to the Topkapi Palace Museum which served as the 
                administrative center of the Ottoman Empire, and was the main residence 
                of its sultans!`,
            },
            {
                src: 'images/istanbul/IMG_5128.JPEG',
                caption: `Sult of Ceremonial Armour of Mustafa III; 
                Ottoman, second half of 18th century`,
            },
            {
                src: 'images/istanbul/IMG_5074.JPEG',
                caption: `Ornate ceremonial dagger made with many jewels and gems!`,
            },
            {
                src: 'images/istanbul/IMG_5142.JPEG',
                caption: `The white eunuchs were responsible for guarding the 
                Gate of Felicity and carrying out important functions at the 
                palace, and the chief white eunuch was the highest 
                functionary in the palace hierarchy.`,
            },
            {
                src: 'images/istanbul/IMG_5190.JPEG',
                caption: `Side angle of Hagia Sophia Grand Mosque, while we wait to enter.`,
            },
            {
                src: 'images/istanbul/IMG_5206.JPEG',
                caption: `Inside the Hagia Sophia you can see clear influences from both Islam 
                and Christianity, which corresponds to the differing occupations that have 
                occurred in Istanbul over time.`,
            },
            {
                src: 'images/istanbul/IMG_5245.JPEG',
                caption: `Delicious apple tea being enjoyed with Turkish delights and Baklava.`,
            },
            {
                src: 'images/istanbul/IMG_5264.JPEG',
                caption: `A view of the many shops that exist within the Egyptian Bazaar! 
                You can acquire sweets, teas, fragrances and much more from bazaars like this one.`,
            },
            {
                src: 'images/istanbul/IMG_5262.JPEG',
                caption: `Some of the many varieties of teas that the bazaar has to offer.`,
            },
            {
                src: 'images/istanbul/IMG_4980.JPEG',
                caption: `Istanbul is known as the "City of Cats" or "Catstanbul". The cats 
                are well-fed and cared for by the city's residents, who consider them to be 
                part of the city experience. Here is Istanbul Cat #1.`,
            },
            {
                src: 'images/istanbul/IMG_4984.JPEG',
                caption: `The only dog I saw while roaming around Istanbul.`,
            },
            {
                src: 'images/istanbul/IMG_5157.JPEG',
                caption: `Istanbul is estimated to have 125,000 to 750,000 cats. 
                Here is Istanbul Cat #2.`,
            },
            {
                src: 'images/istanbul/IMG_5243.JPEG',
                caption: `Here is Istanbul Cat #3. This cat is perhaps an 
                intellectual as it hung around where we enjoyed our lunch meal.`,
            },
            {
                src: 'images/istanbul/IMG_5246.JPEG',
                caption: `Here is Istanbul Cat #4. Beautiful coat and appears 
                to be very well fed as well!`,
            },
        ],
    },
    {
        lat: 9.9281,
        lng: -84.0907,
        name: 'San José, Costa Rica',
        images: [
            {
                src: 'images/costaRica/IMG_3292.JPG',
                caption: 'Alajuela, Costa Rica: La Fortuna Waterfall!',
            },
            {
                src: 'images/costaRica/IMG_3293.JPG',
                caption: 'Couple of Green Iguanas I saw while in San Carlos.',
            },
            {
                src: 'images/costaRica/IMG_3295.JPG',
                caption: 'A lone Green Iguana, basking in the sunlight.',
            },
            {
                src: 'images/costaRica/IMG_3299.JPG',
                caption:
                    'A cacao pod in San Carlos, ripening. We had some of the best chocolate ever on this tour!',
            },
            {
                src: 'images/costaRica/IMG_3301.JPG',
                caption: 'Multiple unripe cacao pods.',
            },
            {
                src: 'images/costaRica/IMG_3327.JPG',
                caption: 'A Panamanian white-faced capuchin.',
            },
            {
                src: 'images/costaRica/IMG_3382.JPG',
                caption:
                    'My zip line guide that I talked quite a bit with in Spanish. Really cool gentleman.',
            },
            {
                src: 'images/costaRica/IMG_3387.JPG',
                caption: 'Young Brandon posted with another Green Iguana.',
            },
            {
                src: 'images/costaRica/IMG_3406.JPG',
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
                src: 'images/copper/sick_tripod.jpg',
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
                src: 'images/copper/sick_tripod.jpg',
                caption:
                    'My buddy was trying to take a pic of the mountain backdrop, and I ended up rippin a sweet tripod right through his picture. Unintentionally the best photo of the trip.',
            },
            {
                src: 'images/copper/IMG_1298.JPEG',
                caption: 'First run; backwards view from the lift.',
            },
            {
                src: 'images/copper/IMG_1299.JPEG',
                caption: 'First run selfie on the lift. Wear your helmet kids!',
            },
            {
                src: 'images/copper/IMG_1301.JPEG',
                caption: 'Lift pic with my homies Dalton and Dax!',
            },
            {
                src: 'images/copper/IMG_1302.JPEG',
                caption: 'Mountain View #1',
            },
            {
                src: 'images/copper/IMG_1304.JPEG',
                caption: 'Mountain View #2',
            },
            {
                src: 'images/copper/IMG_1305.JPEG',
                caption: 'Wider Mountain View #3',
            },
            {
                src: 'images/copper/IMG_1308.JPEG',
                caption: "My brother Julian and I; don't mind my helmet gap!",
            },
            {
                src: 'images/copper/IMG_1315.JPEG',
                caption: 'Juli and I again.',
            },
            {
                src: 'images/copper/IMG_1331.JPEG',
                caption: 'Fit pic',
            },
            {
                src: 'images/copper/IMG_2511.JPEG',
                caption:
                    'Second Copper Mountain trip. About to rip Woodward Peace Park! One of the highlights of this trip for me.',
            },
            {
                src: 'images/copper/IMG_2514.JPEG',
                caption:
                    'Second Copper Mountain trip. About to rip Woodward Peace Park! One of the highlights of this trip for me.',
            },
        ],
    },
    {
        lat: 58.3019,
        lng: -134.4197,
        name: 'Juneau, Alaska',
        images: [
            {
                src: 'images/juneau/IMG_1449.JPEG',
                caption: 'Juneau Welcome Sign!',
            },
            {
                src: 'images/juneau/IMG_1445.JPEG',
                caption: `Shangukeidí Kooteéyaa: The Shangukeidí, who are the Eagle moiety, are 
                    identified as the Thunderbird clan. The designs on the Shangukeidí totem 
                    pole include four of their crests. The Thunderbird, White Bear, and House 
                    Lowered from the Sun were obtained through supernatural encounters. The 
                    bottom crest reprsents a historical encounter with a US military officer 
                    who failed to adequately compensate the Shangukeidí. As payment for this 
                    debt, they took his name and the military uniform.`,
            },
            {
                src: 'images/juneau/IMG_1430.JPEG',
                caption:
                    'Glacierita: Margarita made with Glacier ice from the Tracy Arm Fjord. Might have ingested an ice worm from this drink :)',
            },
            {
                src: 'images/juneau/IMG_1450.JPEG',
                caption:
                    'Alaska King Crab: the best + largest crab I have ever enjoyed in my life.',
            },
            {
                src: 'images/juneau/IMG_1454.JPEG',
                caption: 'Fog with a cool little waterfall hiding behind it.',
            },
            {
                src: 'images/juneau/IMG_1467.JPEG',
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
                src: 'images/copper/sick_tripod.jpg',
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
                src: 'images/copper/sick_tripod.jpg',
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
                src: 'images/copper/sick_tripod.jpg',
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
                src: 'images/copper/sick_tripod.jpg',
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
                src: 'images/copper/sick_tripod.jpg',
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
