import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const WorkshopDetail = () => {
    const { id } = useParams();
    const [workshop, setWorkshop] = useState(null);

    useEffect(() => {
        const fetchWorkshopDetail = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/workshop/${id}`);
                setWorkshop(response.data.data[0]);
            } catch (error) {
                console.error('There was an error fetching workshop detail:', error);
            }
        };

        fetchWorkshopDetail();
    }, [id]);

    if (!workshop) {
        return <p>Loading...</p>;
    }

    return (
        <Container fluid>
            <br />
            <Row className="mb-4">
                <Col xs={12} md={6}>
                    <h1>{workshop.nameWorkshop}</h1>
                    <p className="left-align">{workshop.descriptionWorkshop}</p>

                    <p><strong>Thời gian:</strong> {workshop.timeWorkshop}</p>
                    <p><strong>Địa chỉ:</strong> {workshop.addressWorkshop}</p>
                    <Col>
                        <Button variant="primary" className="mt-3">Đặt vé</Button>
                    </Col>

                </Col>
                <Col xs={12} md={6}>
                    <Image src={`http://localhost:8080/images/${workshop.imageWorkshop.split('\\').pop()}`} fluid style={{ width: '450px', height: '450px' }} />



                </Col>
            </Row>

            <Row className="mb-4">
                <Col>
                    <h2>Thông tin công ty tổ chức</h2>
                    <Image src={`http://localhost:8080/images/${workshop.imageCompanyWorkshop.split('\\').pop()}`} roundedCircle style={{ width: '100px', height: '100px', marginBottom: '20px' }} />
                    <h4>{workshop.nameCompanyWorkshop}</h4>
                    <p>{workshop.descriptionCompanyWorkshop}</p>
                </Col>
            </Row>
        </Container>
    );
};

export default WorkshopDetail;
