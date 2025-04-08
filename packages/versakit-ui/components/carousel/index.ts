import { withInstall } from '@versakit/shared'
import Carousel from './src/index.vue'
import CarouselItem from './src/item.vue'

const VKCarousel = withInstall(Carousel)
const VKCarouselItem = withInstall(CarouselItem)

export { VKCarousel, VKCarouselItem }
