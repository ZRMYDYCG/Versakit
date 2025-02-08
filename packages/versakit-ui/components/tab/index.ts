import { withInstall } from '../../utils/withinstall'
import Tab from './src/index.vue'
import TabItem from './src/item.vue'

const VerTab = withInstall(Tab)
const VerTabItem = withInstall(TabItem)

export { VerTab, VerTabItem }
