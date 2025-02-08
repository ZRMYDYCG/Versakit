import { withInstall } from '../../utils/withinstall'
import Breadcrumb from './src/index.vue'
import BreadcrumbItem from './src/item.vue'

const VerBreadcrumb = withInstall(Breadcrumb)
const VerBreadcrumbItem = withInstall(BreadcrumbItem)

export { VerBreadcrumb, VerBreadcrumbItem }
