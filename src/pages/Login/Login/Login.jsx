import { useContext, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
    const [error, setError] = useState('');
    const { signIn, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const hendleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                form.reset();
                setError('')
                if (result.user.emailVerified) {
                    navigate(from, { replace: true });
                }
                else {
                    toast.error("Your email is not verified")

                }

            })
            .catch(error => {
                setError(error.message)
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }
    return (
        <Container className=" bg-secondary py-5">
            <Row>
                <Col xs={11} lg={5} className="mx-auto my-5 p-5  bg-white">
                    <h3 className="text-center">Login your account</h3>
                    <hr className="my-4" />
                    <Form onSubmit={hendleSignIn}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter your email address" required />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Enter your password" required />
                        </Form.Group>

                        <Button className="w-100 py-2 fw-bold" variant="secondary" type="submit">
                            Login
                        </Button>
                        <div className="text-center mt-3">
                            <Form.Text className="text-secondary">
                                Dont’t Have An Account ?  <Link className="text-danger text-decoration-none" to="/register">Register</Link>
                            </Form.Text>
                        </div>
                        <Form.Text className="text-success">

                        </Form.Text>
                        <Form.Text className="text-danger">
                            <p>{error}</p>
                        </Form.Text>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;