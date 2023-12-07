import { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../contexts/AuthProvider';

const Profile = () => {

    const { user } = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName);
    const photoURLRef = useRef(user.photoURL);

    const hendleSubmit = e => {
        e.preventDefault();
        console.log(photoURLRef.current.value);
    }

    const hendleNameChange = e => {
        setName(e.target.value);
    }

    return (
        <Form onClick={hendleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control readOnly defaultValue={user?.email} type="email" placeholder="Enter email" />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Your Name</Form.Label>
                <Form.Control onChange={hendleNameChange} defaultValue={name} type="text" placeholder="Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control ref={photoURLRef} defaultValue={user?.photoURL} type="text" placeholder="Photo Url" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default Profile;