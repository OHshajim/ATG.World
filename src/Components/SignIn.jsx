import { useContext, useState } from "react";
import { Button, Col, Form, Modal, Navbar, Row } from "react-bootstrap";
import { BiX } from "react-icons/bi";
import { CgGoogle } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa";
import Login from "./Login";
import { AuthContext } from "../Authentication/AuthProvider";

const SignIn = ({ show, handleClose }) => {
    const [showModalL, setShowModalL] = useState(false);
    const [error, setError] = useState('');
    const handleCloseL = () => setShowModalL(false);
    const handleShowL = () => setShowModalL(true);
    const { createUser } = useContext(AuthContext)
    const handleSignUp = () => {
        handleClose()
        handleShowL()
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirm = e.target.confirm.value;
        console.log(email, password, confirm);
        if (password !== confirm) {
            return setError('password is not match');
        }
        createUser(email, password)
            .then((result) => {
                console.log(result.user);
                if (result.user) {
                    handleClose()
                }
            }
            )
            .catch((error) => {
                console.log(error);
            }
            )
    }
    return (
        <div>
            <Modal show={show} onHide={handleClose} size="lg" centered>
                <div className="modal-close-button" onClick={handleClose}>
                    <BiX size={30} />
                </div>
                <p className="text-success bg-green p-2 m-0">Let's learn, share & inspire each other with our passion for computer engineering. Login now 🤘🏼</p>
                <Modal.Body>
                    <Row>

                        <Col md={6} xs={12} className="login-form">
                            <h2>Sign Up</h2>
                            <Form onSubmit={handleSubmit}>
                                <div className="d-flex">
                                    <Form.Group controlId="firstname">
                                        <Form.Control type="text" placeholder="First Name" className="py-2" required />
                                    </Form.Group>
                                    <Form.Group controlId="lastname">
                                        <Form.Control type="text" placeholder="Last Name" className="py-2" required />
                                    </Form.Group>
                                </div>
                                <Form.Group controlId="email">
                                    <Form.Control type="email" placeholder="Enter email" className="py-2" required />
                                </Form.Group>
                                <Form.Group controlId="password">
                                    <Form.Control type="password" placeholder="Password" className="py-2" required />
                                </Form.Group>
                                <Form.Group controlId="confirm">
                                    <Form.Control type="password" placeholder="Confirm Password" className="py-2" required />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="w-100 rounded-pill my-3 fw-bold">
                                    Sign Up
                                </Button>

                            </Form>
                            {
                                error && <p className="text-danger ">{error}</p>
                            }
                            <div className=" w-100">
                                <Button variant="outline-danger" className="w-48 d-flex align-items-center justify-content-center w-100">
                                    <CgGoogle className="me-2" />
                                    Sign Up With Google
                                </Button>
                                <Button variant="outline-primary" className="w-48 d-flex align-items-center justify-content-center w-100 mt-2">
                                    <FaFacebook className="me-2" />
                                    Sign Up With Facebook
                                </Button>
                            </div>
                        </Col>
                        <Col md={6} className="d-none d-md-block login-photo">
                            {/* Replace with your image */}
                            <Navbar.Text className="sm-fs-5 fs-6">
                                Already have an account yet?<button onClick={handleSignUp} className="link-primary border border-0 bg-transparent" >Sign Up Now</button>
                            </Navbar.Text>
                            <img src="../../public/atg_illustration.png" alt="Login" className="img-fluid" />
                        </Col>

                    </Row>
                </Modal.Body>
            </Modal>
            <Login show={showModalL} handleClose={handleCloseL} />
        </div>
    );
};

export default SignIn;