import { withInstall } from '@versakit/shared'
import Timeline from './src/index.vue'
import TimeLineItem from './src/item.vue'

const VKTimeline = withInstall(Timeline)
const VKTimeLineItem = withInstall(TimeLineItem)

export { VKTimeline, VKTimeLineItem }
