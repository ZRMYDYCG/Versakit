<template>
  <ver-popover
    content="这是一个提示内容"
    title="标题"
    placement="left"
    trigger="hover"
  >
    <ver-button>放上来</ver-button>
  </ver-popover>
  <ver-popover
    content="这是一个提示内容"
    title="标题"
    placement="top"
    trigger="click"
  >
    <ver-button>点击我</ver-button>
  </ver-popover>
  <ver-popover
    content="这是一个提示内容"
    title="标题"
    placement="bottom"
    trigger="click"
  >
    <ver-button>点击我</ver-button>
  </ver-popover>
  <ver-popover
    content="这是一个提示内容"
    title="标题"
    placement="right"
    trigger="hover"
  >
    <ver-button>点击我</ver-button>
  </ver-popover>
</template>

<script setup>
import { VerPopover } from '@versakit/ui'
</script>

<style>
.ver-popover {
  display: inline-block;
  margin: 10px;
}
</style>
