import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const WorkshopForm = () => {
    const [form, setForm] = useState({
        workshopName: '',
        workshopType: 'offline',
        location: '',
        city: '',
        district: '',
        ward: '',
        streetAddress: '',
        category: 'Cắm Hoa',
        workshopInfo: '',
        organizerLogo: '',
        organizerName: '',
        organizerInfo: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
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
                    <h1 className="text-center">Create Workshop</h1>
                    <div className="p-4 border rounded">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formWorkshopBackground" className="mb-3">
                                <Form.Label>Workshop Background Image</Form.Label>
                                <Form.Control type="file" name="workshopBackground" onChange={handleFileChange} />
                            </Form.Group>

                            <Form.Group controlId="formWorkshopLogo" className="mb-3">
                                <Form.Label>Workshop Logo</Form.Label>
                                <Form.Control type="file" name="workshopLogo" onChange={handleFileChange} />
                            </Form.Group>

                            <Form.Group controlId="formWorkshopName" className="mb-3">
                                <Form.Label>Workshop Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="workshopName"
                                    value={form.workshopName}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="formWorkshopType" className="mb-3">
                                <Form.Label>Workshop Type</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="workshopType"
                                    value={form.workshopType}
                                    onChange={handleChange}
                                >
                                    <option value="offline">Offline</option>
                                    <option value="online">Online</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="formLocation" className="mb-3">
                                <Form.Label>Location</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="location"
                                    value={form.location}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="formCity" className="mb-3">
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="city"
                                    value={form.city}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="formDistrict" className="mb-3">
                                <Form.Label>District</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="district"
                                    value={form.district}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="formWard" className="mb-3">
                                <Form.Label>Ward</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="ward"
                                    value={form.ward}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="formStreetAddress" className="mb-3">
                                <Form.Label>Street Address</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="streetAddress"
                                    value={form.streetAddress}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="formCategory" className="mb-3">
                                <Form.Label>Category</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="category"
                                    value={form.category}
                                    onChange={handleChange}
                                >
                                    <option value="Cắm Hoa">Cắm Hoa</option>
                                    <option value="Hội Họa">Hội Họa</option>
                                    <option value="Thủ Công">Thủ Công</option>
                                    <option value="Làm Bánh">Làm Bánh</option>
                                    <option value="other">Other</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="formWorkshopInfo" className="mb-3">
                                <Form.Label>Workshop Info</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    name="workshopInfo"
                                    value={form.workshopInfo}
                                    onChange={handleChange}
                                    rows={5} // Tùy chỉnh số dòng để tăng kích thước của textarea nếu cần
                                />
                            </Form.Group>

                            <Form.Group controlId="formOrganizerLogo" className="mb-3">
                                <Form.Label>Organizer Logo</Form.Label>
                                <Form.Control type="file" name="organizerLogo" onChange={handleFileChange} />
                            </Form.Group>

                            <Form.Group controlId="formOrganizerName" className="mb-3">
                                <Form.Label>Organizer Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="organizerName"
                                    value={form.organizerName}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="formOrganizerInfo" className="mb-3">
                                <Form.Label>Organizer Info</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    name="organizerInfo"
                                    value={form.organizerInfo}
                                    onChange={handleChange}
                                    rows={5} // Tùy chỉnh số dòng để tăng kích thước của textarea nếu cần
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="me-2">
                                Save
                            </Button>
                            <Button href="/time" variant="secondary">
                                Continue
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default WorkshopForm;
