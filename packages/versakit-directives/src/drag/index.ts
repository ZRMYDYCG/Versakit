import type { Directive } from 'vue'

interface DragOptions {
  axis?: 'x' | 'y' | 'both'
  boundary?: {
    left?: number
    right?: number
    top?: number
    bottom?: number
  }
}

interface HTMLElementWithDrag extends HTMLElement {
  _dragHandler?: {
    mousedown: (e: MouseEvent) => void
    mousemove: (e: MouseEvent) => void
    mouseup: () => void
  }
  _dragState?: {
    isDragging: boolean
    startX: number
    startY: number
    initialLeft: number
    initialTop: number
  }
}

export const vDrag: Directive = {
  mounted(el: HTMLElementWithDrag, binding) {
    const options: DragOptions = binding.value || {}
    const { axis = 'both', boundary } = options

    // 确保元素有定位属性
    const computedStyle = window.getComputedStyle(el)
    if (computedStyle.position === 'static') {
      el.style.position = 'relative'
    }

    // 设置鼠标样式
    el.style.cursor = 'move'

    const mousedown = (e: MouseEvent) => {
      // 防止文本选择
      e.preventDefault()

      // 获取元素当前位置，优先使用 style 属性，如果为空则使用计算样式
      const left = el.style.left
        ? parseInt(el.style.left)
        : parseInt(computedStyle.left)
      const top = el.style.top
        ? parseInt(el.style.top)
        : parseInt(computedStyle.top)

      el._dragState = {
        isDragging: true,
        startX: e.clientX,
        startY: e.clientY,
        initialLeft: left || 0,
        initialTop: top || 0,
      }
    }

    const mousemove = (e: MouseEvent) => {
      if (!el._dragState?.isDragging) return

      const deltaX = e.clientX - el._dragState.startX
      const deltaY = e.clientY - el._dragState.startY

      let newLeft = el._dragState.initialLeft + deltaX
      let newTop = el._dragState.initialTop + deltaY

      if (axis === 'x' || axis === 'both') {
        if (boundary) {
          if (boundary.left !== undefined)
            newLeft = Math.max(boundary.left, newLeft)
          if (boundary.right !== undefined)
            newLeft = Math.min(boundary.right, newLeft)
        }
        el.style.left = `${newLeft}px`
      }

      if (axis === 'y' || axis === 'both') {
        if (boundary) {
          if (boundary.top !== undefined)
            newTop = Math.max(boundary.top, newTop)
          if (boundary.bottom !== undefined)
            newTop = Math.min(boundary.bottom, newTop)
        }
        el.style.top = `${newTop}px`
      }
    }

    const mouseup = () => {
      if (el._dragState) {
        el._dragState.isDragging = false
      }
    }

    el.addEventListener('mousedown', mousedown)
    document.addEventListener('mousemove', mousemove)
    document.addEventListener('mouseup', mouseup)

    el._dragHandler = { mousedown, mousemove, mouseup }
  },
  unmounted(el: HTMLElementWithDrag) {
    if (el._dragHandler) {
      el.removeEventListener('mousedown', el._dragHandler.mousedown)
      document.removeEventListener('mousemove', el._dragHandler.mousemove)
      document.removeEventListener('mouseup', el._dragHandler.mouseup)
    }
  },
}
