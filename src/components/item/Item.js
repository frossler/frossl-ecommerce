import { Card, Button } from 'react-bootstrap'
import './Item.css'

export const Item = (props) => {
    return (
        <div>
            <Card style={{ flex: 1, width: '8rem' }}>
                <Card.Img className='prod-img' variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>Brief Desc.</Card.Text>
                    <Button variant="primary">See Details</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
