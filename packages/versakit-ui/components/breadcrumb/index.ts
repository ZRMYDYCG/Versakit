import { withInstall } from '@versakit/shared'
import Breadcrumb from './src/index.vue'
import BreadcrumbItem from './src/item.vue'

const VKBreadcrumb = withInstall(Breadcrumb)
const VKBreadcrumbItem = withInstall(BreadcrumbItem)

export { VKBreadcrumb, VKBreadcrumbItem }
