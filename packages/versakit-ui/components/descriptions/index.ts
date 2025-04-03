import { withInstall } from '../../utils/withinstall'
import Descriptions from './src/index.vue'
import DescriptionsItem from './src/item.vue'

const VerDescriptions = withInstall(Descriptions)
const VerDescriptionsItem = withInstall(DescriptionsItem)

export { VerDescriptions, VerDescriptionsItem }
