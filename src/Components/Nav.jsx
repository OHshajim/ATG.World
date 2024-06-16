import { Container, Form, Image, InputGroup, Navbar } from "react-bootstrap";
import { IoSearch } from "react-icons/io5";

const Nav = () => {
    return (
        <div>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Image src="../../public/logo.png" />
                    <div className="d-lg-flex justify-content-center w-100 d-none rounded ">
                        <Form >
                            <InputGroup >
                                <InputGroup.Text id="basic-addon1" className="rounded-start-pill"><IoSearch /></InputGroup.Text>
                                <Form.Control
                                    className="rounded-end-pill"
                                    placeholder="Username"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                        </Form>
                    </div>
                    <Navbar.Collapse className="justify-content-end w-100">
                        <Navbar.Text>
                            Create account. <a href="#login">It’s free!</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Nav;