import { useContext, useState } from "react";
import { Form, Image, InputGroup, Navbar } from "react-bootstrap";
import { IoSearch } from "react-icons/io5";
import SignIn from "./SignIn";
import { AuthContext } from "../Authentication/AuthProvider";

const Nav = () => {

    const [showModalS, setShowModalS] = useState(false);
    const { user } = useContext(AuthContext)


    const handleCloseS = () => setShowModalS(false);
    const handleShowS = () => setShowModalS(true);
    return (
        <div>
            <Navbar className="bg-body-tertiary px-2 px-md-5">

                <Image src="../../public/logo.png" style={{ maxWidth: '140px' }} />
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
                            <div className="d-flex align-items-center">
                                <Image src={user.photoUrl} roundedCircle />
                            </div>
                        </> :
                            <Navbar.Text className="sm-fs-5 fs-6">
                                Create account. <button onClick={handleShowS} className="link-primary border border-0 bg-transparent" >It’s free!</button>
                            </Navbar.Text>
                    }
                </Navbar.Collapse>

            </Navbar>
            <SignIn show={showModalS} handleClose={handleCloseS} />

        </div>

    );
};

export default Nav;