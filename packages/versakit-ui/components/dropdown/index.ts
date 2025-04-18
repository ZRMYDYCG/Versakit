import { withInstall } from '@versakit/shared'
import DropdownMenuItem from './src/item.vue'
import DropdownMenu from './src/index.vue'

const VKDropdownMenu = withInstall(DropdownMenu)
const VKDropdownMenuItem = withInstall(DropdownMenuItem)

export { VKDropdownMenu, VKDropdownMenuItem }
