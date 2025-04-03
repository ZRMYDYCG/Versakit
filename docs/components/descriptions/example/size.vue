<script setup lang="ts">
import { ref } from 'vue'
import { VerDescriptions, VerDescriptionsItem, VerTag } from '@versakit/ui'

const size = ref('default')
</script>

<template>
  <div style="margin-bottom: 20px">
    <VerRadio label="small" v-model="size">small</VerRadio>
    <VerRadio label="default" v-model="size">default</VerRadio>
    <VerRadio label="large" v-model="size">large</VerRadio>
  </div>
  <VerDescriptions title="User Info" extra="extra" :size="size" border>
    <VerDescriptionsItem label="Username">kooriookami</VerDescriptionsItem>
    <VerDescriptionsItem label="Telephone">18100000000</VerDescriptionsItem>
    <VerDescriptionsItem label="Place">Suzhou</VerDescriptionsItem>
    <VerDescriptionsItem label="Remarks">
      <VerTag size="small">School</VerTag>
    </VerDescriptionsItem>
    <VerDescriptionsItem label="Address">
      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </VerDescriptionsItem>
  </VerDescriptions>
  <div style="margin-bottom: 20px"></div>
  <VerDescriptions title="User Info" extra="extra" :size="size">
    <VerDescriptionsItem label="Username">kooriookami</VerDescriptionsItem>
    <VerDescriptionsItem label="Telephone">18100000000</VerDescriptionsItem>
    <VerDescriptionsItem label="Place">Suzhou</VerDescriptionsItem>
    <VerDescriptionsItem label="Remarks">
      <VerTag size="small">School</VerTag>
    </VerDescriptionsItem>
    <VerDescriptionsItem label="Address">
      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </VerDescriptionsItem>
  </VerDescriptions>
</template>
