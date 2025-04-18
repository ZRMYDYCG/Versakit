import { withInstall } from '@versakit/shared'
import Avatar from './src/index.vue'
import AvatarGroup from './src/group.vue'

const VKAvatar = withInstall(Avatar)
const VKAvatarGroup = withInstall(AvatarGroup)

export { VKAvatar, VKAvatarGroup }
