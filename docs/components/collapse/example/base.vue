<script setup lang="ts">
import { VKCollapse, VKCollapseItem } from '@versakit/ui'

import { ref } from 'vue'

const activeNames = ref(['1'])
const handleChange = (val: string[]) => {
  console.log(val)
}
</script>

<template>
  <div>
    <VKCollapse v-model="activeNames" @change="handleChange">
      <VKCollapseItem title="Consistency 1" name="1" icon="ep:caret-right">
        <div>
          Consistent with real life: in line with the process and logic of real
          life, and comply with languages and habits that the users are used to;
        </div>
      </VKCollapseItem>
      <VKCollapseItem title="Consistency 2" name="2" icon="ep:caret-right">
        <div>
          Consistent with real life: in line with the process and logic of real
          life, and comply with languages and habits that the users are used to;
        </div>
      </VKCollapseItem>
      <VKCollapseItem title="Consistency 3" name="3" icon="ep:caret-right">
        <div>
          Consistent with real life: in line with the process and logic of real
          life, and comply with languages and habits that the users are used to;
        </div>
      </VKCollapseItem>
    </VKCollapse>
  </div>
</template>
