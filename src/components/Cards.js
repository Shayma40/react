import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cards = () => {
    const handleClick = () => 
        alert(`This product will be available soon`);

    return (
        <div style={{display : 'flex', justifyContent : 'center', gap : '50px', margin : '4rem'}}>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src='image/cerave2.jpg' ></Card.Img>
            <Card.Body>
            <Card.Title>SA Cleanser</Card.Title>
            <Card.Text>
            CeraVe Renewing SA Cleanser provides gentle, non-irritating exfoliation without harsh microbeads that can scratch your skin. Our salicylic acid cleanser not only exfoliates the skin, but with three essential ceramides, hyaluronic acid and niacinamide it also helps soften and smooth the skin without disrupting its protective barrier
            </Card.Text>
            <Button onClick={handleClick} variant="primary" style={{backgroundColor : '#89CFF0', borderColor : 'transparent'}}>Buy Online </Button>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src='image/cerave lotion.jpg' ></Card.Img>
            <Card.Body>
            <Card.Title>Moisturizing Lotion</Card.Title>
            <Card.Text>
            CeraVe PM Facial Moisturizer, formulated with niacinamide, hyaluronic acid, and three essential ceramides, uses our MVE Technology to deliver a steady stream of much-needed moisture for continuous hydration throughout the night while helping restore the skin barrier.
            </Card.Text>
            <Button onClick={handleClick} variant="primary" style={{backgroundColor : '#89CFF0', borderColor : 'transparent'}}>Buy Online</Button>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src='image/cerave1.jpg' ></Card.Img>
            <Card.Body>
            <Card.Title>Retinol Serum</Card.Title>
            <Card.Text>
            Developed with dermatologists, CeraVe Resurfacing Retinol Serum helps smooth your skin's texture by reducing the appearance of post-acne marks, minimizing the look of pores and improving your skin surface.
            </Card.Text>
            <Button onClick={handleClick} variant="primary" style={{backgroundColor : '#89CFF0', borderColor : 'transparent'}}>Buy Online</Button>
            </Card.Body>
            </Card>
        </div>
    )
}

export default Cards