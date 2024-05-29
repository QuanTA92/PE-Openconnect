import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignInForm() {
    const [usernameOrEmailOrPhone, setUsernameOrEmailOrPhone] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/user/login', null, {
                params: {
                    usernameOrEmailOrPhone,
                    password
                }
            });

            if (response.status === 200) {
                // Tạo cookie sau khi đăng nhập thành công
                document.cookie = `authenticated=true; max-age=${24 * 60 * 60}; path=/`;
                document.cookie = `username=${usernameOrEmailOrPhone}; max-age=${24 * 60 * 60}; path=/`;

                alert('Login successful');
                navigate('/home');
            }
        } catch (error) {
            console.error('There was an error!', error);
            alert('Invalid username/email/phone or password');
        }
    };

    const handleSignInWithGmail = () => {
        // Xử lý đăng nhập bằng Gmail ở đây
    };

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <div style={{ border: '1px solid #dee2e6', borderRadius: '5px', padding: '20px', marginTop: '20px', marginBottom: '20px' }}>
                        <h2>Sign In</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formBasicUsername">
                                <Form.Label>Username or Email or Phone</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter username or email or phone"
                                    value={usernameOrEmailOrPhone}
                                    onChange={(e) => setUsernameOrEmailOrPhone(e.target.value)}
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

                            <Button variant="primary" type="submit">
                                Sign In
                            </Button>
                        </Form>
                        <div className="text-center" style={{ margin: '20px 0' }}>
                            <Button variant="danger" onClick={handleSignInWithGmail}>
                                Sign In with Gmail
                            </Button>
                        </div>
                        <div className="text-center" style={{ fontSize: '0.9rem' }}>
                            If you do not have an account, <a href="/signup">click here</a> to register.
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default SignInForm;