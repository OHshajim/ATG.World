import { Button, Image } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { BsEye } from "react-icons/bs";
import { CiLocationOn, CiShare2 } from "react-icons/ci";
import { FaBusinessTime } from "react-icons/fa";
const CardElement = ({ card }) => {
    return (
        <Card className="my-4">
            {
                card.image &&
                <Card.Img variant="top" src={card.image} />
            }
            <Card.Body>
                <h6>{card.category}</h6>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>
                    {card.description}
                </Card.Text>

                {
                    card.category == "💼️ Job" &&
                    <div>
                        <div className="d-flex justify-content-between">
                            <p className="d-flex align-items-center"><FaBusinessTime />{card.company}</p>
                            <p className="d-flex align-items-center"><CiLocationOn /> {card.location}</p>
                        </div>
                        <Button type="button" className="fw-bold w-100 btn btn-outline-light text-danger bg-transparent border" >Apply on Timesjobs</Button>
                    </div>
                }
                {
                    card.category == "🗓️ Meetup" &&
                    <div>
                        <div className="d-flex justify-content-between">
                            <p className="d-flex align-items-center"><FaBusinessTime />{card.time}</p>
                            <p className="d-flex align-items-center"><CiLocationOn /> {card.location}</p>
                        </div>
                        <Button type="button" className="fw-bold w-100 btn btn-outline-light text-success bg-transparent border" >Visit Website</Button>
                    </div>
                }
            </Card.Body>
            <div className="p-3  d-flex align-items-center justify-content-between w-100">
                <div className="d-flex align-items-center">
                    <Image src={card.photo} roundedCircle />
                    <h5 className="m-2">{card.name}</h5>
                </div>
                <div className="d-flex align-items-center">
                    <p className="d-flex align-items-center"><BsEye/> {card.views} Views</p>
                    <button className="border border-0 px-3 py-2 ms-3"><CiShare2 /></button>
                </div>
            </div>
        </Card>
    );
};

export default CardElement;