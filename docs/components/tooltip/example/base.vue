<script setup lang="ts">
import { VKTooltip, VKButton } from '@versakit/ui'
</script>

<template>
  <div class="tooltip-base-box">
    <div class="row center">
      <VKTooltip
        class="box-item"
        effect="dark"
        content="Top Left"
        position="top-left"
      >
        <VKButton ghost>top-left</VKButton>
      </VKTooltip>

      <VKTooltip class="box-item" effect="dark" content="Top " position="top">
        <VKButton ghost>top</VKButton>
      </VKTooltip>

      <VKTooltip
        class="box-item"
        effect="dark"
        content="Top Right prompts info"
        position="top-right"
      >
        <VKButton ghost>top-right</VKButton>
      </VKTooltip>
    </div>

    <div class="row">
      <VKTooltip
        class="box-item"
        effect="dark"
        content="Left Top prompts info"
        position="left-top"
      >
        <VKButton ghost>left-top</VKButton>
      </VKTooltip>
      <VKTooltip
        class="box-item"
        effect="dark"
        content="Right Top prompts info"
        position="right-top"
      >
        <VKButton ghost>right-top</VKButton>
      </VKTooltip>
    </div>
    <div class="row">
      <VKTooltip class="box-item" effect="dark" content="Left" position="left">
        <VKButton ghost class="mt-3 mb-3">left</VKButton>
      </VKTooltip>
      <VKTooltip
        class="box-item"
        effect="dark"
        content="Right"
        position="right"
      >
        <VKButton ghost>right</VKButton>
      </VKTooltip>
    </div>
    <div class="row">
      <VKTooltip
        class="box-item"
        effect="dark"
        content="left-bottom"
        position="left-bottom"
      >
        <VKButton ghost>left-bottom</VKButton>
      </VKTooltip>
      <VKTooltip
        class="box-item"
        effect="dark"
        content="Right Bottom prompts info"
        position="right-bottom"
      >
        <VKButton ghost>right-bottom</VKButton>
      </VKTooltip>
    </div>
    <div class="row center">
      <VKTooltip
        class="box-item"
        effect="dark"
        content="Bottom Left prompts info"
        position="bottom-left"
      >
        <VKButton ghost>bottom-left</VKButton>
      </VKTooltip>

      <VKTooltip
        class="box-item"
        effect="dark"
        content="Bottom "
        position="bottom"
      >
        <VKButton ghost>bottom</VKButton>
      </VKTooltip>
      <VKTooltip
        class="box-item"
        effect="dark"
        content="Bottom Right prompts info"
        position="bottom-right"
      >
        <VKButton ghost>bottom-right</VKButton>
      </VKTooltip>
    </div>
  </div>
</template>

<style>
.tooltip-base-box {
  width: 600px;
}
.tooltip-base-box .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tooltip-base-box .center {
  justify-content: center;
}
.tooltip-base-box .box-item {
  margin: 10px 10px;
}
</style>
