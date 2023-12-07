import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaEye, FaRegBookmark, FaShareNodes, FaStar } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
const NewsCard = ({ news }) => {
    const { _id, rating, total_view, title, author, details, image_url } = news;
    return (
        <Card className=" mb-4">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                    <Image className='me-3' style={{ height: '40px' }} roundedCircle src={author?.img} >

                    </Image>
                    <div>
                        <p className='mb-0 mt-2'>{author?.name}</p>
                        <p>{author?.published_date}</p>
                    </div>

                </div>
                <div>
                    <FaRegBookmark />
                    <FaShareNodes />


                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.length > 250 ? <>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read More </Link> </> : details}
                </Card.Text>

            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
                <div>
                    <FaStar className='text-warning me-2'></FaStar>
                    <span>{rating?.number}</span>
                </div>
                <div>
                    <FaEye className='me-2'></FaEye>
                    <span>{total_view}</span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;