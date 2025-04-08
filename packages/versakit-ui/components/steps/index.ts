import { withInstall } from '@versakit/shared'
import Steps from './src/index.vue'
import StepItem from './src/item.vue'
import type { Step } from './src/index.vue'

const VerSteps = withInstall(Steps)
const VerStepItem = withInstall(StepItem)

export { VerSteps, VerStepItem }
export type { Step }
export type VerStepsProps = InstanceType<typeof Steps>['$props']
export type VerStepItemProps = InstanceType<typeof StepItem>['$props']

export default VerSteps
