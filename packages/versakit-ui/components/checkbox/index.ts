import { withInstall } from '@versakit/shared'
import checkbox from './src/index.vue'
import group from './src/group.vue'

const VerCheckbox = withInstall(checkbox)
const VerCheckboxGroup = withInstall(group)

export { VerCheckbox, VerCheckboxGroup }
