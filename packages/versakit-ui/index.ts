import type { App, Component } from 'vue'
import { installTheme } from './core/theme'

// 基础组件
import { VerButton } from './components/button/index'
import { VerText } from './components/text/index'
import { VerRow } from './components/row/index'
import { VerCol } from './components/col/index'
import { VerInput } from './components/input/index'
import { VerDialog } from './components/dialog/index'
import { VerDivider } from './components/divider/index'
import { VerAvatar } from './components/avatar/index'
import { VerBadge } from './components/badge/index'
import { VerCard } from './components/card/index'
import { VerTag } from './components/tag/index'
import { VerDrawer } from './components/drawer/index'
import { VerSwitch } from './components/switch/index'
import { VerRadio } from './components/radio/index'
import { VerMessage } from './components/message/index'
import { VerTextarea } from './components/textarea/index'
import { VerContainer } from './components/container/index'
import { VerHeader } from './components/header/index'
import { VerMain } from './components/main/index'
import { VerNotification } from './components/notification/index'
import { VerIcon } from './components/icon/index'
import { VerBacktop } from './components/backtop/index'
import { VerResult } from './components/result/index'
import { VerEmpty } from './components/empty/index'
import { VerPanel } from './components/panel/index'
import { VerSegmented } from './components/segmented/index'
import { VerGradientText } from './components/gradienttext/index'
import { VerFooter } from './components/footer/index'
import { VerAside } from './components/aside/index'
import { VerProgress } from './components/progress/index'
import { VerTooltip } from './components/tooltip/index'
import { VerSlider } from './components/slider/index'
import { VerFlex } from './components/flex/index'
import { VerTable } from './components/table/index'
import { VerScrollBar } from './components/scrollbar/index'
import { VerInputOtp } from './components/inputotp/index'
import { VerCalendar } from './components/calendar/index'
import { VerSkeleton } from './components/skeleton/index'
import { VerPagination } from './components/pagination/index'
import { VerPopover } from './components/popover/index'

// 层级组件
import { VerCarousel, VerCarouselItem } from './components/carousel/index'
import { VerCollapse, VerCollapseItem } from './components/collapse/index'
import { VerTimeline, VerTimeLineItem } from './components/timeline/index'
import { VerTab, VerTabItem } from './components/tab/index'
import { VerBreadcrumb, VerBreadcrumbItem } from './components/breadcrumb/index'
// 指令
import { vRipple, vIncrease } from './directives/index'

// 样式
import './style/index.css'

// 热更新暂时不支持图标，先运行 pnpm ui:build，再注释掉此行
// import 'virtual:svg-icons-register'

const components: Component[] = [
  VerPagination,
  VerSkeleton,
  VerCalendar,
  VerInputOtp,
  VerBreadcrumb,
  VerBreadcrumbItem,
  VerTabItem,
  VerTimeline,
  VerTimeLineItem,
  VerScrollBar,
  VerCol,
  VerTag,
  VerNotification,
  VerMessage,
  VerText,
  VerBadge,
  VerCarouselItem,
  VerCarousel,
  VerFlex,
  VerSlider,
  VerTooltip,
  VerProgress,
  VerAside,
  VerFooter,
  VerCollapse,
  VerCollapseItem,
  VerButton,
  VerRow,
  VerInput,
  VerDialog,
  VerAvatar,
  VerCard,
  VerPanel,
  VerDivider,
  VerDrawer,
  VerSwitch,
  VerRadio,
  VerTextarea,
  VerContainer,
  VerHeader,
  VerMain,
  VerTab,
  VerIcon,
  VerBacktop,
  VerResult,
  VerEmpty,
  VerSegmented,
  VerGradientText,
  VerTable,
  VerPopover,
]
export {
  VerPagination,
  VerSkeleton,
  VerCalendar,
  VerInputOtp,
  VerBreadcrumb,
  VerBreadcrumbItem,
  VerTabItem,
  VerTimeline,
  VerTimeLineItem,
  VerScrollBar,
  VerCol,
  VerTag,
  VerNotification,
  VerMessage,
  VerText,
  VerBadge,
  VerCarouselItem,
  VerCarousel,
  VerFlex,
  VerSlider,
  VerTooltip,
  VerProgress,
  VerAside,
  VerFooter,
  VerSegmented,
  VerCollapse,
  VerCollapseItem,
  VerButton,
  VerRow,
  VerInput,
  VerDialog,
  VerAvatar,
  VerCard,
  VerPanel,
  VerDivider,
  VerDrawer,
  VerSwitch,
  VerRadio,
  VerTextarea,
  VerContainer,
  VerHeader,
  VerMain,
  VerTab,
  VerIcon,
  VerBacktop,
  VerResult,
  VerEmpty,
  VerGradientText,
  VerTable,
  VerPopover,
}

// 定义 ThemeOptions 类型
type ThemeOptions = {
  preset: any // 由于不清楚 Element 的具体类型，暂时使用 any
}

// 定义 VersakitOptions 类型
type VersakitOptions = {
  theme?: ThemeOptions
}

const Versakit = {
  install: (app: App, options?: VersakitOptions) => {
    for (const c in components) {
      app.component(components[c]?.name || c, components[c])
    }

    app.directive('ripple', vRipple)
    app.directive('increase', vIncrease)

    if (options?.theme) {
      installTheme(options.theme)
    }
  },
}

export default Versakit
