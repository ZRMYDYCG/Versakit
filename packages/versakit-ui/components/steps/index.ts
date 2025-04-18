import { withInstall } from '@versakit/shared'
import Steps from './src/index.vue'
import StepItem from './src/item.vue'
import type { Step } from './src/index.vue'

const VKSteps = withInstall(Steps)
const VKStepItem = withInstall(StepItem)

export { VKSteps, VKStepItem }
export type { Step }
export type VKStepsProps = InstanceType<typeof Steps>['$props']
export type VKStepItemProps = InstanceType<typeof StepItem>['$props']
