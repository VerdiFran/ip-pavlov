import Carousel, { arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Arrow from "./Arrow/Arrow";

/**
 * Our custom carrousel slider.
 * @param props Properties
 */
const CarouselSlider = (props) => {
    return (
        <Carousel
            plugins={[
                {
                    resolve: arrowsPlugin,
                    options: {
                        arrowRight: <Arrow type={'right'}/>,
                        arrowLeft: <Arrow type={'left'}/>,
                        addArrowClickHandler: true,
                    }
                }
            ]}
        >
            {props.children}
        </Carousel>
    )
}

export default CarouselSlider
