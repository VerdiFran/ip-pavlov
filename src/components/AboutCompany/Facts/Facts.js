import CarouselSlider from '../../common/CarouselSlider/CarouselSlider'
import FactsList from './FactsList'
import Fact from './Fact/Fact'

/**
 * Component that provide slider with fact list.
 * @constructor
 */
const Facts = () => {
    return (
        <div>
            <h1 className="heading">факты о компании</h1>
            <CarouselSlider>
                {
                    FactsList.map(fact =>
                        <Fact description={fact.description} image={fact.image}/>
                    )
                }
            </CarouselSlider>
        </div>
    )
}

export default Facts