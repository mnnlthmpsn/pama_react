import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const KCarousel = () => {
    return (
        <Carousel showArrows={false} showThumbs={false} showStatus={false}>
            <div>
                <img className="object-cover object-center" src="https://images.unsplash.com/photo-1646047964396-f1cd76f3e4c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
            </div>
            <div>
                <img className="object-cover object-center" src="https://images.unsplash.com/photo-1646047964396-f1cd76f3e4c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
            </div>
        </Carousel>
    )
}

export default KCarousel