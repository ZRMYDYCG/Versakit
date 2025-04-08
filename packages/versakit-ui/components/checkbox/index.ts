import { withInstall } from '@versakit/shared'
import Checkbox from './src/index.vue'
import CheckboxGroup from './src/group.vue'

const VKCheckbox = withInstall(Checkbox)
const VKCheckboxGroup = withInstall(CheckboxGroup)

export { VKCheckbox, VKCheckboxGroup }

export * from './type'
