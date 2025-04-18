import { withInstall } from '@versakit/shared'
import Collapse from './src/index.vue'
import CollapseItem from './src/item.vue'

const VKCollapse = withInstall(Collapse)
const VKCollapseItem = withInstall(CollapseItem)

export { VKCollapse, VKCollapseItem }
