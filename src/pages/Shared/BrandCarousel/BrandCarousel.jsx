import { Carousel } from "react-bootstrap";
import brand1 from './../../../assets/images/1.png'
import brand2 from './../../../assets/images/2.png'
import brand3 from './../../../assets/images/3.png'


const BrandCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img className="w-100  " src={brand1} alt="" />

            </Carousel.Item>
            <Carousel.Item>
                <img className="w-100" src={brand2} alt="" />

            </Carousel.Item>
            <Carousel.Item>
                <img className="w-100" src={brand3} alt="" />

            </Carousel.Item>



        </Carousel>
    );
};

export default BrandCarousel;