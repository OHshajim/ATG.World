import { useState } from "react";
import { Button, Col, Form, Modal, Navbar, Row } from "react-bootstrap";
import { BiX } from "react-icons/bi";
import { CgGoogle } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa";

const Login = ({ show, handleClose }) => {
   
    return (
        <Modal show={show} onHide={handleClose} size="lg" centered>
            <div className="modal-close-button" onClick={handleClose}>
                <BiX size={30} />
            </div>
            <p className="text-success bg-green p-2 m-0">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
            <Modal.Body>
                <Row>

                    <Col md={6} xs={12} className="login-form">
                        <h2>Login</h2>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" className="py-2" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" className="py-2" />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="w-100 rounded-pill my-3 fw-bold">
                                Login
                            </Button>
                        </Form>
                        <div className=" w-100">
                            <Button variant="outline-danger" className="w-48 d-flex align-items-center justify-content-center w-100">
                                <CgGoogle className="me-2" />
                                Login With Google
                            </Button>
                            <Button variant="outline-primary" className="w-48 d-flex align-items-center justify-content-center w-100 mt-2">
                                <FaFacebook className="me-2" />
                                Login With Facebook
                            </Button>
                            <p className="mt-4 text-center">Forget Password?</p>
                        </div>
                    </Col>
                    <Col md={6} className="d-none d-md-block login-photo">
                        {/* Replace with your image */}
                        <Navbar.Text className="sm-fs-5 fs-6">
                            Don’t have an account yet?<button  className="link-primary border border-0 bg-transparent" > Create new for free!</button>
                        </Navbar.Text>
                        <img src="../../public/atg_illustration.png" alt="Login" className="img-fluid" />
                    </Col>

                </Row>
            </Modal.Body>
        </Modal>
    );
};

export default Login;