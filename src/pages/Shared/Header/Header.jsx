
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { Button, Image } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa6';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const hendleLogOut = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                console.log(error);
            });
    }
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary mb-4">
            <Container>
                <Navbar.Brand > <Link to='/'>Dragon News</Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">All News</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        < >
                            {
                                user ? <><span className='me-2'>{user?.displayName}</span>
                                    <Button onClick={hendleLogOut}> Logout</Button>
                                </> : <>
                                    <Link to='/login'>Login</Link>
                                    <Link to='/register'>Register</Link>
                                </>
                            }

                        </>
                        <Link to="/profile">
                            {user?.photoURL ?
                                <Image roundedCircle style={{ height: '30px' }} src={user?.photoURL}></Image> : <FaUser></FaUser>
                            }
                        </Link>
                    </Nav>
                    <div className='d-lg-none'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;