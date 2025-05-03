import type { ComponentResolver } from 'unplugin-vue-components'

// 将组件名拆分为独立数组元素
const components = [
  'VKSelect',
  'VKPopoVK',
  'VKUpload',
  'VKUploadDragger',
  'VKTimeSelect',
  'VKTimePicker',
  'VKDateTimePicker',
  'VKDropdownMenu',
  'VKDropdownMenuItem',
  'VKDataPicker',
  'VKInputNumber',
  'VKAvatarGroup',
  'VKStepItem',
  'VKSteps',
  'VKNoticeBar',
  'VKSplitter',
  'VKRate',
  'VKInputTag',
  'VKImage',
  'VKCheckbox',
  'VKCheckboxGroup',
  'VKPagination',
  'VKSkeleton',
  'VKCalendar',
  'VKDescriptions',
  'VKDescriptionsItem',
  'VKInputOtp',
  'VKBreadcrumb',
  'VKBreadcrumbItem',
  'VKTabItem',
  'VKTimeline',
  'VKTimeLineItem',
  'VKScrollBar',
  'VKCol',
  'VKTag',
  'VKNotification',
  'VKMessage',
  'VKText',
  'VKBadge',
  'VKCarouselItem',
  'VKCarousel',
  'VKFlex',
  'VKSlider',
  'VKTooltip',
  'VKProgress',
  'VKAside',
  'VKFooter',
  'VKCollapse',
  'VKCollapseItem',
  'VKButton',
  'VKRow',
  'VKInput',
  'VKDialog',
  'VKAvatar',
  'VKCard',
  'VKPanel',
  'VKDivider',
  'VKDrawer',
  'VKSwitch',
  'VKRadio',
  'VKTextarea',
  'VKContainer',
  'VKHeader',
  'VKMain',
  'VKTab',
  'VKBacktop',
  'VKResult',
  'VKEmpty',
  'VKSegmented',
  'VKGradientText',
  'VKTable',
  'VKColorPicker',
]

export interface ResolverOptions {
  prefix?: string
  importStyle?: boolean // 新增样式导入选项
}

const VersakitResolver = (options: ResolverOptions = {}): ComponentResolver => {
  const { prefix = '', importStyle = true } = options

  return {
    type: 'component',
    resolve: (name: string) => {
      // 处理前缀匹配（不区分大小写）
      const prefixRegex = new RegExp(`^${prefix}`, 'i')

      if (prefixRegex.test(name)) {
        const componentName = name.replace(prefixRegex, '')

        // 直接检查组件名是否存在数组中
        if (components.includes(componentName)) {
          return {
            name: componentName,
            from: '@versakit/ui',
            sideEffects: importStyle
              ? '@versakit/ui/dist/esm/ui.css'
              : undefined,
          }
        }
      }
    },
  }
}

export { VersakitResolver }
