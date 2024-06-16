import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Components/Nav';
import Banner from './Components/Banner';
import { useContext, useEffect, useState } from 'react';
import { Button, Container, Dropdown, DropdownButton, Form, FormControl, Image, InputGroup, Tab, Tabs } from 'react-bootstrap';
import Card from './Components/Card';
import { MdOutlineGroups2 } from 'react-icons/md';
import { PiWarningCircle } from 'react-icons/pi';
import { BsGeoAlt } from 'react-icons/bs';
import { BiPencil } from 'react-icons/bi';
import { AuthContext } from './Authentication/AuthProvider';
import { LuArrowLeftSquare } from 'react-icons/lu';
import { GrLike } from 'react-icons/gr';
const Home = () => {
    const [data, setData] = useState([])
    const [isJoin, setJoin] = useState(false)
    const [eng, setEng] = useState(false)
    const [Math, setMath] = useState(false)
    const [MBA, setMBA] = useState(false)
    const [PHY, setPHY] = useState(false)
    const { user } = useContext(AuthContext)
    useEffect(() => {
        fetch('../public/Data.json')
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [])
    console.log(data);
    const articleData = data.filter(card => card.category === "✍️ Article")
    const educationData = data.filter(card => card.category === "🔬️ Education")
    const jobData = data.filter(card => card.category === "💼️ Job")
    const eventData = data.filter(card => card.category === "🗓️ Meetup")
    return (
        <div>
            <Nav />
            <Banner isJoin={isJoin} setJoin={setJoin} />

            <Container className='my-5 d-none d-md-flex '>
                <div className='w-100'>
                    <Tabs
                        defaultActiveKey=""
                        // id="uncontrolled-tab-example"
                        className="mb-3"
                    >
                        <Tab eventKey="" title={`All Post (${data.length})`}>
                            {data.map((card) => <Card card={card} key={card.id} />)}
                        </Tab>
                        <Tab eventKey="Article" title="Article">
                            {articleData.map((card) => <Card card={card} key={card.id} />)}
                        </Tab>
                        <Tab eventKey="Event" title="Event">
                            {eventData.map((card) => <Card card={card} key={card.id} />)}
                        </Tab>
                        <Tab eventKey="Education" title="Education">
                            {educationData.map((card) => <Card card={card} key={card.id} />)}
                        </Tab>
                        <Tab eventKey="Job" title="Job">
                            {jobData.map((card) => <Card card={card} key={card.id} />)}
                        </Tab>
                    </Tabs>
                </div>
                <div className=' w-50 d-xl-block d-none  m-5'>
                    <div className='d-flex justify-content-center align-items-start'>
                        <button className='btn bg-dark-subtle  fw-semibold'>Write a Post</button>
                        {
                            user ?
                                <>

                                    {
                                        isJoin ?
                                            <button
                                                className='btn bg-primary text-light fw-semibold ms-3 d-flex align-items-center '
                                                onClick={() => setJoin(!isJoin)}>
                                                < MdOutlineGroups2 className='fs-4 me-2' />
                                                Join Now
                                            </button>
                                            :
                                            <button
                                                className='btn bg-dark-subtle   fw-semibold ms-3 d-flex align-items-center '
                                                onClick={() => setJoin(!isJoin)}>
                                                <LuArrowLeftSquare className='fs-4 me-2' />
                                                Leave Group
                                            </button>
                                    }
                                </>

                                :
                                <button className='btn bg-primary text-light fw-semibold ms-3 d-flex align-items-center ' disabled><MdOutlineGroups2 className='fs-4 me-2' /> Join Group</button>
                        }
                    </div>

                    <div className=' d-flex flex-column justify-content-center align-items-center'>
                        <Form className="search-bar">
                            <InputGroup className="border-bottom-only">
                                <InputGroup.Text>
                                    <BsGeoAlt />
                                </InputGroup.Text>
                                <FormControl
                                    type="text"
                                    placeholder="Search..."
                                    aria-label="Search"
                                />
                                <InputGroup.Text>
                                    <BiPencil />
                                </InputGroup.Text>
                            </InputGroup>
                        </Form>
                        <p><PiWarningCircle /> Your location will help us serve better and extend a personalised experience.</p>
                    </div>
                    {
                        user &&
                        <div>
                            <div>
                                <h4 className='mb-4'><GrLike /> Recommended Groups</h4>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className='d-flex align-items-center'>
                                        <Image src="../public/Rectangle 3 (1).png" roundedCircle />
                                        <h6 className=' ms-3 '>English</h6>
                                    </div>
                                    <Button className='bg-black border-0' onClick={() => setEng(!eng)}>{eng ? "followed" : "Follow"}</Button>
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                    <div className='d-flex align-items-center'>
                                        <Image src="../public/Rectangle 3.png" roundedCircle />
                                        <h6 className=' ms-3 '>MBA</h6>
                                    </div>
                                    <Button className='bg-black border-0' onClick={() => setMBA(!MBA)}>{MBA ? "followed" : "Follow"}</Button>
                                </div>
                                <div className="d-flex justify-content-between align-items-center my-2">
                                    <div className='d-flex align-items-center'>
                                        <Image src="../public/Rectangle 3 (2).png" roundedCircle />
                                        <h6 className=' ms-3 '>Mathematics </h6>
                                    </div>
                                    <Button className='bg-black border-0' onClick={() => setMath(!Math)}>{Math ? "followed" : "Follow"}</Button>
                                </div>
                                <div className="d-flex justify-content-between align-items-center my-2">
                                    <div className='d-flex align-items-center'>
                                        <Image src="../public/Rectangle 3 (3).png" roundedCircle />
                                        <h6 className=' ms-3 '>Philosophy</h6>
                                    </div>
                                    <Button className='bg-black border-0' onClick={() => setPHY(!PHY)}>{PHY ? "followed" : "Follow"}</Button>
                                </div>
                                <p className='text-end text-primary'>See More...</p>
                            </div>
                        </div>
                    }
                </div>
            </Container>
            <div className='d-md-none px-3'>
                <div className='d-flex justify-content-between mt-4 '>
                    <h5>Post({data?.length})</h5>
                    <DropdownButton id="dropdown-basic-button" title="Sort : All">
                        <Dropdown.Item href="#/action-1">Job</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Event</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Article</Dropdown.Item>
                    </DropdownButton>
                </div>
                <div>
                    {data.map((card) => <Card card={card} key={card.id} />)}
                </div>
            </div>
        </div>
    );
};

export default Home;