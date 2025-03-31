<script setup lang="ts">
import { VerDescriptions, VerDescriptionsItem, VerTag } from '@versakit/ui'
</script>

<template>
  <VerDescriptions title="User Info" extra="extra">
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
