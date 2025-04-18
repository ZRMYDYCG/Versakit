import type { App } from 'vue'
import { vDrag } from './drag'
import { vLazyLoad } from './lazy-load'
import { vThrottle } from './throttle'
import { vDebounce } from './debounce'
import { vRipple } from './ripple'
import { vIncrease } from './increase'
import { vCopy } from './copy'
import { vLongPress } from './long-press'
import { vTypewriter } from './typewriter'
import { vResize } from './resize'

export default {
  install(app: App) {
    app.directive('drag', vDrag)
    app.directive('lazy-load', vLazyLoad)
    app.directive('throttle', vThrottle)
    app.directive('debounce', vDebounce)
    app.directive('ripple', vRipple)
    app.directive('increase', vIncrease)
    app.directive('copy', vCopy)
    app.directive('long-press', vLongPress)
    app.directive('typewriter', vTypewriter)
    app.directive('resize', vResize)
  },
}
