<template>
  <VKRow>
    <VKCard style="width: 480px" shadow="always">Always</VKCard>
    <VKCard style="width: 480px" shadow="hover">Hover</VKCard>
    <VKCard style="width: 480px" shadow="never">Never</VKCard>
  </VKRow>
</template>

<script lang="ts" setup>
import { VKCard, VKRow } from '@versakit/ui'
</script>

<style scoped>
.ver-card {
  margin: 20px 0;
}
</style>
