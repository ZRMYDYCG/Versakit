import { withInstall } from '@versakit/shared'
import Descriptions from './src/index.vue'
import DescriptionsItem from './src/item.vue'

const VKDescriptions = withInstall(Descriptions)
const VKDescriptionsItem = withInstall(DescriptionsItem)

export { VKDescriptions, VKDescriptionsItem }
