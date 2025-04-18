<script setup lang="ts">
import { VKDescriptions, VKDescriptionsItem, VKTag } from '@versakit/ui'
</script>

<template>
  <VKDescriptions title="User Info" extra="extra">
    <VKDescriptionsItem label="Username">kooriookami</VKDescriptionsItem>
    <VKDescriptionsItem label="Telephone">18100000000</VKDescriptionsItem>
    <VKDescriptionsItem label="Place">Suzhou</VKDescriptionsItem>
    <VKDescriptionsItem label="Remarks">
      <VKTag size="small">School</VKTag>
    </VKDescriptionsItem>
    <VKDescriptionsItem label="Address">
      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </VKDescriptionsItem>
  </VKDescriptions>
</template>
