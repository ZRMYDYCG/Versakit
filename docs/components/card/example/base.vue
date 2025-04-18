<template>
  <div>
    <VKCard>
      <template #header>
        <div class="card-header">
          <span>Card name</span>
          <VKButton size="sm" type="primary">按 钮</VKButton>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ 'List item ' + o }}
      </div>
    </VKCard>
  </div>
</template>

<script lang="ts" setup>
import { VKCard, VKButton } from '@versakit/ui'
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}
</style>
