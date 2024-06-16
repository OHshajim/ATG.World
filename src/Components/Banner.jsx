import { Button, Container } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";

const Banner = ({ isJoin, setJoin }) => {
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
                <Button onClick={() => setJoin(!isJoin)
                } className="banner-button-right d-md-none">
                    {isJoin ? "Join Group" : "leave Group"}
                </Button>
            </header>
        </div>
    );
};

export default Banner;