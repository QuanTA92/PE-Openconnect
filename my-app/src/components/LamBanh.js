import React from 'react';
import { Carousel } from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';


const LamBanh = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./Images/banner1.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First Slide Label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./Images/banner2.png"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second Slide Label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./Images/banner3.png"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third Slide Label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div style={{ paddingTop: '20px' }}>
                <h1>Làm Bánh</h1>
            </div>

            <CardGroup style={{ justifyContent: 'center', gap: '20px' }}>
                <Card>
                    <Card.Img variant="top" src="./Images/banh1.jpg" />
                    <Card.Body>
                        <Card.Title>Workshop Thủ Công</Card.Title>
                        <Card.Text>
                            từ 350.000 đ
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">24 tháng 7, 2024</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="./Images/banh2.jpg" />
                    <Card.Body>
                        <Card.Title>Workshop Thủ Công</Card.Title>
                        <Card.Text>
                            từ 360.000 đ
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">14 tháng 7, 2024</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="./Images/banh1.jpg" />
                    <Card.Body>
                        <Card.Title>Workshop Thủ Công</Card.Title>
                        <Card.Text>
                            từ 200.000 đ
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">22 tháng 7, 2024</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="./Images/banh2.jpg" />
                    <Card.Body>
                        <Card.Title>Workshop Thủ Công</Card.Title>
                        <Card.Text>
                            từ 340.000 đ
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">11 tháng 7, 2024</small>
                    </Card.Footer>
                </Card>
            </CardGroup>

            <footer style={{ position: 'fixed', bottom: 0, width: '100%' }}>
                <Container fluid style={{ backgroundColor: 'red', color: 'white' }}>
                    <Row>
                        <Col className="text-center py-3">
                            @2024-Create by FU
                        </Col>
                    </Row>
                </Container>
            </footer>


        </>
    );
}

export default LamBanh;