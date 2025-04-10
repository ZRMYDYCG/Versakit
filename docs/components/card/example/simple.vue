<template>
  <div>
    <VKCard>
      <div v-for="o in 4" :key="o" class="text item">
        {{ 'List item ' + o }}
      </div>
    </VKCard>
  </div>
</template>

<script lang="ts" setup>
import { VKCard } from '@versakit/ui'
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
