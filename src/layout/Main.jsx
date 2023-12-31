import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import LeftSideNav from "../pages/Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../pages/Shared/RightSideNav/RightSideNav";
import Header from "../pages/Shared/Header/Header";

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg="2" className="d-none d-lg-block">
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg="7">

                        <Outlet></Outlet>
                    </Col>
                    <Col lg="3">
                        <RightSideNav></RightSideNav>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Main;