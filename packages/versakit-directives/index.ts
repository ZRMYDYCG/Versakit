import { App } from 'vue'
import { vRipple, vIncrease } from './src/index'

const VersakitDirectives = {
  install: (app: App) => {
    app.directive('ripple', vRipple)
    app.directive('increase', vIncrease)
  },
}

export { VersakitDirectives }
