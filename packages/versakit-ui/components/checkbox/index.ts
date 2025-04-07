import { withInstall } from '@versakit/shared'
import Checkbox from './src/index.vue'
import CheckboxGroup from './src/group.vue'

export const VerCheckbox = withInstall(Checkbox)
export const VerCheckboxGroup = withInstall(CheckboxGroup)

export default VerCheckbox

export * from './type'
