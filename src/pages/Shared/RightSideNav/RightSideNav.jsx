import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaFacebook, FaGithub, FaGoogle, FaTwitch, FaTwitter, FaWhatsapp } from "react-icons/fa6";
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const RightSideNav = () => {
    const { providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const hendleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                console.log(result.user);

            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={hendleGoogleSignIn} className='mb-2' variant="outline-primary"><FaGoogle /> Login With Google</Button>
                <Button variant="outline-dark"><FaGithub /> Login With Github</Button>
            </ButtonGroup>
            <div>
                <h5 className='my-3'>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-3'><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaWhatsapp></FaWhatsapp> Whatsapp</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitch></FaTwitch>  Twitch</ListGroup.Item>
                </ListGroup>
            </div>
            <BrandCarousel></BrandCarousel>
        </div >
    );
};

export default RightSideNav;