import { withInstall } from '@versakit/shared'
import Upload from './src/index.vue'
import UploadDragger from './src/dragger.vue'

const VKUpload = withInstall(Upload)
const VKUploadDragger = withInstall(UploadDragger)

export { VKUpload, VKUploadDragger }

export type VKUploadProps = InstanceType<typeof Upload>['$props']
export type VKUploadDraggerProps = InstanceType<typeof UploadDragger>['$props']
