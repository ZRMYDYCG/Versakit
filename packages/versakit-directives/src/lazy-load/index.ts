import type { Directive } from 'vue'

interface LazyLoadOptions {
  loading?: string
  error?: string
  rootMargin?: string
  threshold?: number
}

interface HTMLImageElementWithLazy extends HTMLImageElement {
  _lazyObserver?: IntersectionObserver
  _lazySrc?: string
}

export const vLazyLoad: Directive = {
  mounted(el: HTMLImageElementWithLazy, binding) {
    const options: LazyLoadOptions = binding.value || {}
    const {
      loading = '',
      error = '',
      rootMargin = '0px',
      threshold = 0,
    } = options

    // 保存原始src
    el._lazySrc = el.getAttribute('src') || ''

    // 设置占位图
    if (loading) {
      el.setAttribute('src', loading)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElementWithLazy
            if (img._lazySrc) {
              img.src = img._lazySrc
              img.onload = () => {
                observer.unobserve(img)
              }
              img.onerror = () => {
                if (error) {
                  img.src = error
                }
                observer.unobserve(img)
              }
            }
          }
        })
      },
      {
        rootMargin,
        threshold,
      },
    )

    observer.observe(el)
    el._lazyObserver = observer
  },
  unmounted(el: HTMLImageElementWithLazy) {
    if (el._lazyObserver) {
      el._lazyObserver.disconnect()
    }
  },
}
