import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';

const PaymentInfoForm = () => {
    const [form, setForm] = useState({
        accountHolder: '',
        accountNumber: '',
        bankName: '',
        branch: ''
    });

    const [showModal, setShowModal] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(form);
    };

    const handleComplete = () => {
        // Handle complete action
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        // Additional actions after closing the modal, if any
    };

    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={8}>
                    <h1 className="text-center">Thông Tin Thanh Toán</h1>
                    <p className="text-center text-muted">
                        Dịch vụ sẽ chuyển tiền bán vé đến tài khoản của bạn, tiền bán vé (sau khi trừ phí dịch vụ) sẽ vào tài khoản của bạn sau khi xác nhận sale report từ 7 đến 10 ngày. Nếu bạn muốn nhận được tiền sớm hơn, vui lòng liên hệ chúng tôi qua số 0366854448 hoặc huuanh952002@gmail.com
                    </p>
                    <div className="p-4 border rounded">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formAccountHolder" className="mb-3">
                                <Form.Label>Chủ tài khoản</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="accountHolder"
                                    value={form.accountHolder}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="formAccountNumber" className="mb-3">
                                <Form.Label>Số tài khoản</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="accountNumber"
                                    value={form.accountNumber}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="formBankName" className="mb-3">
                                <Form.Label>Tên ngân hàng</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="bankName"
                                    value={form.bankName}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="formBranch" className="mb-3">
                                <Form.Label>Chi Nhánh</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="branch"
                                    value={form.branch}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="me-2">
                                Lưu
                            </Button>
                            <Button variant="secondary" onClick={handleComplete}>
                                Hoàn Thành
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thông Báo</Modal.Title>
                </Modal.Header>
                <Modal.Body>Workshop của bạn đang chờ Admin duyệt</Modal.Body>
                <Modal.Footer>
                    <Button href='/home' variant="primary" onClick={handleClose}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default PaymentInfoForm;
