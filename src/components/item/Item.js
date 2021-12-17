import { Card, Button } from 'react-bootstrap'

export const Item = (props) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>Brief Desc.</Card.Text>
                    <Button variant="primary">See Details</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
