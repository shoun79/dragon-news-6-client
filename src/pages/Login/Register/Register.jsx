import { useContext, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import toast from "react-hot-toast";


const Register = () => {
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const { createUser, updateUser, verifyEmail } = useContext(AuthContext);

    const hendleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                form.reset();
                setError('')
                hendleUpdateUser(name, photo)
                hendleVerifyEmail()
                toast.success('Verify your email')

            })
            .catch(error => {
                setError(error.message)
                console.log(error)
            })
    }

    const hendleUpdateUser = (name, photo) => {
        const profile = {
            displayName: name, photoURL: photo
        }
        updateUser(profile)
            .then(() => {
                // Profile updated!
                // ...
            }).catch((error) => {
                console.log(error);
                // An error occurred
                // ...
            });
    }

    const hendleVerifyEmail = () => {
        verifyEmail()
            .then(() => {
                // Email verification sent!
                // ...
            });
    }

    const hendleAccepted = (e) => {
        setAccepted(e.target.checked);
    }
    return (
        <Container className=" bg-secondary py-5">
            <Row>
                <Col xs={11} lg={5} className="mx-auto my-5 p-5  bg-white">
                    <h3 className="text-center">Register your account</h3>
                    <hr className="my-4" />
                    <Form onSubmit={hendleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text" name="name" placeholder="Enter your name" required />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPhoto">
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control type="text" name="photo" placeholder="Enter your photo URL" required />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter your email address" required />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Enter your password" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check
                                onClick={hendleAccepted}
                                name="accept" type="checkbox" label={<>Accept <Link to='/terms'> terms and conditions</Link></>} />
                        </Form.Group>
                        <Button disabled={!accepted} className="w-100 py-2 fw-bold" variant="secondary" type="submit">
                            Register
                        </Button>
                        <div className="text-center mt-3">
                            <Form.Text className="text-secondary">
                                Already Have An Account ?  <Link className="text-danger text-decoration-none" to="/login">Login</Link>
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

export default Register;