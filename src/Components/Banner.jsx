import { Button, Container } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";

const Banner = () => {
    return (
        <div>
            <header className="banner">
                <Container className="banner-content">
                    <h1>Computer Engineering</h1>
                    <p>142,765 Computer Engineers follow this</p>
                </Container>

                <Button className="banner-button-left d-md-none">
                    <FaArrowLeft />
                </Button>
                <Button className="banner-button-right d-md-none">
                    Join Group
                </Button>
            </header>
        </div>
    );
};

export default Banner;