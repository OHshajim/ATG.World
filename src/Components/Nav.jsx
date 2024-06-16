import { useContext, useState } from "react";
import { Button, Dropdown, Form, Image, InputGroup, Navbar } from "react-bootstrap";
import { IoSearch } from "react-icons/io5";
import SignIn from "./SignIn";
import { AuthContext } from "../Authentication/AuthProvider";

const Nav = () => {

    const [showModalS, setShowModalS] = useState(false);
    const { user, logout } = useContext(AuthContext)


    const handleCloseS = () => setShowModalS(false);
    const handleShowS = () => setShowModalS(true);
    console.log(user);
    const handleLogout = () => {
        logout()
    }
    return (
        <div>
            <Navbar className="bg-body-tertiary px-2 px-md-5">

                <Image src="./logo.png" style={{ maxWidth: '140px' }} />
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
                    {
                        user ? <>
                            <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic" className="bg-transparent border-0">
                                        <Image src={user?.photoURL || "../../public/Rectangle 3 (1).png"} alt="user" roundedCircle style={{ height: "50px", width: '50px' }} />
                                    </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>
                                        <Button onClick={handleLogout}>Logout</Button>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </> :
                            <Navbar.Text className="">
                                Create account.<span onClick={handleShowS} className="link-primary border border-0 bg-transparent" >It’s free!</span>
                            </Navbar.Text>
                    }
                </Navbar.Collapse>

            </Navbar>
            <SignIn show={showModalS} handleClose={handleCloseS} />

        </div>

    );
};

export default Nav;