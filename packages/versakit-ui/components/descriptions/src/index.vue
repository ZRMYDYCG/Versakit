<script setup lang="tsx">
import { useSlots, cloneVNode } from 'vue'
import type { DescriptionsProps, DescriptionsItemVNode } from '../type'

defineOptions({
  name: 'VerDescriptions',
})

const props = withDefaults(defineProps<DescriptionsProps>(), {
  title: '',
  extra: '',
  column: 3,
  border: false,
  size: 'default',
  direction: 'horizontal',
})

const slots = useSlots() as { default?: () => DescriptionsItemVNode[] }
function isChildVNode(vnode: DescriptionsItemVNode) {
  return vnode.type.name === 'VerDescriptionsItem'
}

const calculateRows = () => {
  const items = slots.default?.() || []
  const filteredVNodes = items.filter((item) => {
    return isChildVNode(item)
  })
  const rows: DescriptionsItemVNode[][] = []
  const column = props.column
  // 当前行
  let currentRow: DescriptionsItemVNode[] = []
  // 当前列数
  let curColCount = column

  filteredVNodes.forEach((node, index) => {
    const colspan = node.props?.colspan || 1
    // const rowspan = node.props?.rowspan || 1

    if (index === filteredVNodes.length - 1) {
      // 如果是最后一个节点，则将当前节点添加到结果中，并填充剩余列数
      node.props!.colspan = curColCount
      currentRow.push(node)
      rows.push(currentRow)
      return
    }
    // 当前节点的 colspan 小于当前行的列数，则将当前节点放入当前行，并更新当前列数
    if (curColCount > colspan) {
      curColCount -= colspan
      currentRow.push(node)
    } else {
      const minCol = Math.min(colspan, curColCount)
      if (minCol > 1) {
        node.props!.colspan = minCol
      }
      currentRow.push(node)
      rows.push(currentRow)
      curColCount = column
      currentRow = []
    }
  })
  return calculateTr(rows)
}

const calculateTr = (rows: DescriptionsItemVNode[][]) => {
  if (props.direction === 'horizontal') {
    return rows.map((row) => {
      if (props.border) {
        return (
          <tr>
            {row
              .map((item) => {
                return [
                  cloneVNode(item, {
                    isLabel: true,
                    colspan: 1,
                  } as DescriptionsItemVNode['props']),
                  cloneVNode(item, {
                    isContent: true,
                    colspan: 2 * (item.props?.colspan || 1) - 1,
                  } as DescriptionsItemVNode['props']),
                ]
              })
              .flat()}
          </tr>
        )
      }
      return <tr>{row}</tr>
    })
  } else if (props.direction === 'vertical') {
    return rows.map((row) => {
      return (
        <>
          <tr>
            {row.map((item) => {
              return cloneVNode(item, {
                isLabel: true,
              } as DescriptionsItemVNode['props'])
            })}
          </tr>
          <tr>
            {row.map((item) => {
              return cloneVNode(item, {
                isContent: true,
              } as DescriptionsItemVNode['props'])
            })}
          </tr>
        </>
      )
    })
  }
}

defineRender(() => (
  <>
    <div
      class={[
        'ver-descriptions',
        props.size === 'large' ? 'ver-descriptions--large' : '',
        props.size === 'small' ? 'ver-descriptions--small' : '',
      ]}
    >
      <div class="ver-descriptions__header">
        <div class="ver-descriptions__title">{props.title}</div>
        <div class="ver-descriptions__extra">{props.extra}</div>
      </div>
      <div class="ver-descriptions__body">
        <table
          class={['ver-descriptions__table', props.border ? 'is-bordered' : '']}
        >
          <tbody>{calculateRows()}</tbody>
        </table>
      </div>
    </div>
  </>
))
</script>

<style>
@import '../style/index.css';
</style>
