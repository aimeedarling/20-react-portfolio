import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


import GBN from '../assets/images/gbn-screenshot.jpg'
import productivity from '../assets/images/productivity-PAL.png'
import weather from '../assets/images/weather-checker.png'
import pasta from '../assets/images/Pasta-quiz-Screenshot.png'
import property from '../assets/images/PropertyPulse.png'


export default function Portfolio() {


    const portData = [
        {
            img: property,
            title: 'PropertyPulse',
            text: 'A real estate app where a user can sign up, browse current listings by city, state, or zip code, post to the forum, or make a donation.',
            link: 'https://blooming-bastion-67757-375f3eef618b.herokuapp.com/'
        },
        {
            img: GBN,
            title: 'The Good, the Bad, and the Neutral',
            text: 'adsfgaer',
            link: 'https://aimeedarling.github.io/GBN/'
        },
        {
            img: productivity,
            title: 'Productivity-PAL',
            text: 'kalsdhgfa',
            link: ''
        },
        {
            img: weather,
            title: 'Weather',
            text: '',
            link: ''
        },
        {
            img: pasta,
            title: 'Pasta Quiz',
            text: '',
            link: ''
        }

    ]


    return (
        <>
            <Row xs={1} md={2} className="g-4">
                {portData.map((element, idx) => (
                    <Col key={idx}>
                        <a href={element.link}>
                            <Card>
                                <Card.Img variant="top" src={element.img} />
                                <Card.Body>
                                    <Card.Title>{element.title}</Card.Title>
                                    <Card.Text>
                                        {element.text}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                ))}
            </Row>
        </>
    )
}