import { withInstall } from '@versakit/shared'
import Upload from './src/index.vue'
import UploadDragger from './src/dragger.vue'

const VerUpload = withInstall(Upload)
const VerUploadDragger = withInstall(UploadDragger)

export { VerUpload, VerUploadDragger }
export type VerUploadProps = InstanceType<typeof Upload>['$props']
export type VerUploadDraggerProps = InstanceType<typeof UploadDragger>['$props']

export default VerUpload
