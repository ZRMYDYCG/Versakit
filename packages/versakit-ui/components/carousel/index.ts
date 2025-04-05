import { withInstall } from '@versakit/shared'
import Carousel from './src/index.vue'
import CarouselItem from './src/item.vue'

const VerCarousel = withInstall(Carousel)
const VerCarouselItem = withInstall(CarouselItem)

export { VerCarousel, VerCarouselItem }
