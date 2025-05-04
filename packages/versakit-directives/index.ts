import type { App } from 'vue'
import { vDrag } from './src/drag/index'
import { vLazyLoad } from './src/lazy-load'
import { vThrottle } from './src/throttle'
import { vDebounce } from './src/debounce'
import { vRipple } from './src/ripple'
import { vIncrease } from './src/increase'
import { vCopy } from './src/copy'
import { vLongPress } from './src/long-press'
import { vTypewriter } from './src/typewriter'
import { vResize } from './src/resize'
import { vDesensitize } from './src/desensitize'

const VersakitDirectives = {
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
    app.directive('desensitize', vDesensitize)
  },
}

export { VersakitDirectives }
