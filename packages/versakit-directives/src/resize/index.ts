import type { Directive } from 'vue'

interface ResizeOptions {
  minWidth?: number
  minHeight?: number
  maxWidth?: number
  maxHeight?: number
  handles?: ('n' | 's' | 'e' | 'w' | 'ne' | 'nw' | 'se' | 'sw')[]
  onResize?: (width: number, height: number) => void
}

interface HTMLElementWithResize extends HTMLElement {
  _resizeHandlers?: {
    mousedown: (e: MouseEvent) => void
    mousemove: (e: MouseEvent) => void
    mouseup: () => void
  }
  _resizeState?: {
    isResizing: boolean
    startX: number
    startY: number
    startWidth: number
    startHeight: number
    handle: string
  }
}

export const vResize: Directive = {
  mounted(el: HTMLElementWithResize, binding) {
    const options: ResizeOptions = binding.value || {}
    const {
      minWidth = 50,
      minHeight = 50,
      maxWidth = Infinity,
      maxHeight = Infinity,
      handles = ['se'],
      onResize,
    } = options

    // 确保元素有定位属性
    const computedStyle = window.getComputedStyle(el)
    if (computedStyle.position === 'static') {
      el.style.position = 'relative'
    }

    // 创建调整大小的手柄
    const createHandle = (position: string) => {
      const handle = document.createElement('div')
      handle.className = `resize-handle resize-${position}`
      handle.style.position = 'absolute'
      handle.style.width = '10px'
      handle.style.height = '10px'
      handle.style.backgroundColor = 'transparent'
      handle.style.cursor = `${position}-resize`

      // 设置手柄位置
      switch (position) {
        case 'n':
          handle.style.top = '-5px'
          handle.style.left = '50%'
          handle.style.transform = 'translateX(-50%)'
          break
        case 's':
          handle.style.bottom = '-5px'
          handle.style.left = '50%'
          handle.style.transform = 'translateX(-50%)'
          break
        case 'e':
          handle.style.right = '-5px'
          handle.style.top = '50%'
          handle.style.transform = 'translateY(-50%)'
          break
        case 'w':
          handle.style.left = '-5px'
          handle.style.top = '50%'
          handle.style.transform = 'translateY(-50%)'
          break
        case 'ne':
          handle.style.top = '-5px'
          handle.style.right = '-5px'
          break
        case 'nw':
          handle.style.top = '-5px'
          handle.style.left = '-5px'
          break
        case 'se':
          handle.style.bottom = '-5px'
          handle.style.right = '-5px'
          break
        case 'sw':
          handle.style.bottom = '-5px'
          handle.style.left = '-5px'
          break
      }

      el.appendChild(handle)
      return handle
    }

    // 创建所有需要的手柄
    const resizeHandles = handles.map(createHandle)

    const mousedown = (e: MouseEvent) => {
      const handle = e.target as HTMLElement
      const position = handle.className.split(' ')[1].split('-')[1]

      el._resizeState = {
        isResizing: true,
        startX: e.clientX,
        startY: e.clientY,
        startWidth: el.offsetWidth,
        startHeight: el.offsetHeight,
        handle: position,
      }
    }

    const mousemove = (e: MouseEvent) => {
      if (!el._resizeState?.isResizing) return

      const { startX, startY, startWidth, startHeight, handle } =
        el._resizeState
      const deltaX = e.clientX - startX
      const deltaY = e.clientY - startY

      let newWidth = startWidth
      let newHeight = startHeight

      // 根据手柄位置计算新的尺寸
      if (handle.includes('e')) {
        newWidth = Math.min(Math.max(startWidth + deltaX, minWidth), maxWidth)
      }
      if (handle.includes('w')) {
        const widthDelta = Math.min(
          Math.max(startWidth - deltaX, minWidth),
          maxWidth,
        )
        newWidth = widthDelta
        el.style.left = `${startX + (startWidth - widthDelta)}px`
      }
      if (handle.includes('s')) {
        newHeight = Math.min(
          Math.max(startHeight + deltaY, minHeight),
          maxHeight,
        )
      }
      if (handle.includes('n')) {
        const heightDelta = Math.min(
          Math.max(startHeight - deltaY, minHeight),
          maxHeight,
        )
        newHeight = heightDelta
        el.style.top = `${startY + (startHeight - heightDelta)}px`
      }

      el.style.width = `${newWidth}px`
      el.style.height = `${newHeight}px`

      onResize?.(newWidth, newHeight)
    }

    const mouseup = () => {
      if (el._resizeState) {
        el._resizeState.isResizing = false
      }
    }

    // 添加事件监听
    resizeHandles.forEach((handle) => {
      handle.addEventListener('mousedown', mousedown)
    })
    document.addEventListener('mousemove', mousemove)
    document.addEventListener('mouseup', mouseup)

    el._resizeHandlers = { mousedown, mousemove, mouseup }
  },
  unmounted(el: HTMLElementWithResize) {
    if (el._resizeHandlers) {
      document.removeEventListener('mousemove', el._resizeHandlers.mousemove)
      document.removeEventListener('mouseup', el._resizeHandlers.mouseup)
    }
    // 移除所有调整大小的手柄
    const handles = el.querySelectorAll('.resize-handle')
    handles.forEach((handle) => handle.remove())
  },
}
