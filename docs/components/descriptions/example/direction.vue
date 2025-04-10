<script setup lang="ts">
import { ref } from 'vue'
import { VKDescriptions, VKDescriptionsItem, VKTag } from '@versakit/ui'

const size = ref('default')
</script>

<template>
  <div style="margin-bottom: 20px">
    <VKRadio label="small" v-model="size">small</VKRadio>
    <VKRadio label="default" v-model="size">default</VKRadio>
    <VKRadio label="large" v-model="size">large</VKRadio>
  </div>
  <VKDescriptions
    title="Vertical list with border"
    direction="vertical"
    :column="4"
    :size="size"
    border
  >
    <VKDescriptionsItem label="Username">kooriookami</VKDescriptionsItem>
    <VKDescriptionsItem label="Telephone">18100000000</VKDescriptionsItem>
    <VKDescriptionsItem label="Place" :colspan="2">Suzhou</VKDescriptionsItem>
    <VKDescriptionsItem label="Remarks">
      <VKTag size="small">School</VKTag>
    </VKDescriptionsItem>
    <VKDescriptionsItem label="Address">
      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </VKDescriptionsItem>
  </VKDescriptions>
  <div style="margin-bottom: 20px"></div>
  <VKDescriptions
    title="Vertical list without border"
    :column="4"
    :size="size"
    direction="vertical"
  >
    <VKDescriptionsItem label="Username">kooriookami</VKDescriptionsItem>
    <VKDescriptionsItem label="Telephone">18100000000</VKDescriptionsItem>
    <VKDescriptionsItem label="Place" :colspan="2">Suzhou</VKDescriptionsItem>
    <VKDescriptionsItem label="Remarks">
      <VKTag size="small">School</VKTag>
    </VKDescriptionsItem>
    <VKDescriptionsItem label="Address">
      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </VKDescriptionsItem>
  </VKDescriptions>
</template>
