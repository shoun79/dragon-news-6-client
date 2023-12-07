import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";

const News = () => {
    const news = useLoaderData();
    const { _id, rating, total_view, title, author, details, image_url, category_id } = news;
    return (
        <Card>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <Link to={`/category/${category_id}`}>
                    <Button variant="primary">All news in this Category</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default News;