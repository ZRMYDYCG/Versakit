import { withInstall } from '@versakit/shared'
import Tab from './src/index.vue'
import TabItem from './src/item.vue'

const VKTab = withInstall(Tab)
const VKTabItem = withInstall(TabItem)

export { VKTab, VKTabItem }
