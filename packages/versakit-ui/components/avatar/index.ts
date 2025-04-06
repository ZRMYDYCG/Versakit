import { withInstall } from '@versakit/shared'
import Avatar from './src/index.vue'
import AvatarGroup from './src/group.vue'

const VerAvatar = withInstall(Avatar)
const VerAvatarGroup = withInstall(AvatarGroup)

export { VerAvatar, VerAvatarGroup }
