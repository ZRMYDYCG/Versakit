import { withInstall } from '@versakit/shared'
import Steps from './src/index.vue'
import StepItem from './src/item.vue'

const VerSteps = withInstall(Steps)
const VerStepItem = withInstall(StepItem)

export { VerSteps, VerStepItem }
