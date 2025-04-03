import { withInstall } from '../../utils/withinstall'
import Timeline from './src/index.vue'
import TimeLineItem from './src/item.vue'

const VerTimeline = withInstall(Timeline)
const VerTimeLineItem = withInstall(TimeLineItem)

export { VerTimeline, VerTimeLineItem }
