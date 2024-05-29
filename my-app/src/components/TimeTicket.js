import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';

const TicketForm = () => {
    const [form, setForm] = useState({
        workshopStart: new Date(),
        workshopEnd: new Date(),
        ticketName: '',
        ticketPrice: '',
        totalTickets: '',
        saleStart: new Date(),
        saleEnd: new Date(),
        ticketInfo: '',
        ticketImage: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleDateChange = (date, name) => {
        setForm({
            ...form,
            [name]: date
        });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setForm({
            ...form,
            [name]: files[0]
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(form);
    };

    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={8}>
                    <h1 className="text-center">Create Workshop & Ticket</h1>
                    <div className="p-4 border rounded">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formWorkshopStart" className="mb-3">
                                <Form.Label>Workshop Start Time</Form.Label>
                                <DatePicker
                                    selected={form.workshopStart}
                                    onChange={(date) => handleDateChange(date, 'workshopStart')}
                                    showTimeSelect
                                    dateFormat="Pp"
                                    className="form-control"
                                />
                            </Form.Group>

                            <Form.Group controlId="formWorkshopEnd" className="mb-3">
                                <Form.Label>Workshop End Time</Form.Label>
                                <DatePicker
                                    selected={form.workshopEnd}
                                    onChange={(date) => handleDateChange(date, 'workshopEnd')}
                                    showTimeSelect
                                    dateFormat="Pp"
                                    className="form-control"
                                />
                            </Form.Group>

                            <Form.Group controlId="formTicketName" className="mb-3">
                                <Form.Label>Ticket Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="ticketName"
                                    value={form.ticketName}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="formTicketPrice" className="mb-3">
                                <Form.Label>Ticket Price</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="ticketPrice"
                                    value={form.ticketPrice}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="formTotalTickets" className="mb-3">
                                <Form.Label>Total Tickets</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="totalTickets"
                                    value={form.totalTickets}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="formSaleStart" className="mb-3">
                                <Form.Label>Sale Start Time</Form.Label>
                                <DatePicker
                                    selected={form.saleStart}
                                    onChange={(date) => handleDateChange(date, 'saleStart')}
                                    showTimeSelect
                                    dateFormat="Pp"
                                    className="form-control"
                                />
                            </Form.Group>

                            <Form.Group controlId="formSaleEnd" className="mb-3">
                                <Form.Label>Sale End Time</Form.Label>
                                <DatePicker
                                    selected={form.saleEnd}
                                    onChange={(date) => handleDateChange(date, 'saleEnd')}
                                    showTimeSelect
                                    dateFormat="Pp"
                                    className="form-control"
                                />
                            </Form.Group>

                            <Form.Group controlId="formTicketInfo" className="mb-3">
                                <Form.Label>Ticket Info</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    name="ticketInfo"
                                    value={form.ticketInfo}
                                    onChange={handleChange}
                                    rows={5}
                                />
                            </Form.Group>

                            <Form.Group controlId="formTicketImage" className="mb-3">
                                <Form.Label>Ticket Image</Form.Label>
                                <Form.Control
                                    type="file"
                                    name="ticketImage"
                                    onChange={handleFileChange}
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="me-2">
                                Save
                            </Button>
                            <Button href='/bankinfo' variant="secondary">
                                Continue
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default TicketForm;
