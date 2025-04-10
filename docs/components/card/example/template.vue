<template>
  <div>
    <VKCard>
      <template #header>
        <div>
          <span>头部</span>
        </div>
      </template>
      <div>
        <span>内容</span>
      </div>
      <template #footer>
        <div>
          <span>底部</span>
        </div>
      </template>
    </VKCard>
  </div>
</template>

<script lang="ts" setup>
import { VKCard } from '@versakit/ui'
</script>
