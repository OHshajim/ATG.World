import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Components/Nav';
import Banner from './Components/Banner';
import { useEffect, useState } from 'react';
import { Container, Form, FormControl, InputGroup, Tab, Tabs } from 'react-bootstrap';
import Card from './Components/Card';
import { MdOutlineGroups2 } from 'react-icons/md';
import { PiWarningCircle } from 'react-icons/pi';
import { BsGeoAlt } from 'react-icons/bs';
import { BiPencil } from 'react-icons/bi';
const Home = () => {
    const [data, setData] = useState([])
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
            <Banner />

            <Container className='my-5 d-flex'>
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
                <div className=' w-50 d-xl-block d-none'>
                    <div className='d-flex justify-content-center align-items-start'>
                        <button className='btn bg-dark-subtle  fw-semibold'>Write a Post</button>
                        <button className='btn bg-primary text-light fw-semibold ms-3 d-flex align-items-center '><MdOutlineGroups2 className='fs-4 me-2' /> Join Group</button>
                    </div>

                    <div className=' d-flex flex-column justify-content-center align-items-center m-5'>
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
                </div>
            </Container>
        </div>
    );
};

export default Home;