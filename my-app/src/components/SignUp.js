import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignUpForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/user/signup', null, {
                params: {
                    username,
                    password,
                    email,
                    phone
                }
            });

            if (response.status === 200) {
                alert('User created successfully');
                navigate('/home');
            }
        } catch (error) {
            console.error('There was an error!', error);
            alert('Failed to create user');
        }
    };

    const handleSignInWithGmail = () => {
        // Implement your Gmail sign-in logic here
    };

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <div style={{ border: '1px solid #dee2e6', borderRadius: '5px', padding: '20px', marginTop: '20px', marginBottom: '20px' }}>
                        <h2>Sign Up</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formBasicUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicPasswordConfirm">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicPhone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Sign Up
                            </Button>
                        </Form>
                        <div className="text-center" style={{ margin: '20px 0' }}>
                            <Button variant="danger" onClick={handleSignInWithGmail}>
                                Sign Up with Gmail
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default SignUpForm;
