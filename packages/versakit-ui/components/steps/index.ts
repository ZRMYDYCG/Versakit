import { withInstall } from '../../utils/withinstall'
import Steps from './src/index.vue'
import StepItem from './src/item.vue'

const VerSteps = withInstall(Steps)
const VerStepItem = withInstall(StepItem)

export { VerSteps, VerStepItem }
