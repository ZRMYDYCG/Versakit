import { withInstall } from '@versakit/shared'
import DropdownMenuItem from './src/item.vue'
import DropdownMenu from './src/index.vue'

const VerDropdownMenu = withInstall(DropdownMenu)
const VerDropdownMenuItem = withInstall(DropdownMenuItem)

export { VerDropdownMenu, VerDropdownMenuItem }
