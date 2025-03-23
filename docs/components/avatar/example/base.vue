<template>
  <section class="demo-section">
    <div class="demo-row">
      <VerAvatar src="https://randomuser.me/api/portraits/men/1.jpg" />
      <VerAvatar text="User" />
      <VerAvatar backgroundColor="#f56a00">U</VerAvatar>
    </div>
  </section>

  <section class="demo-section">
    <div class="demo-row">
      <VerAvatar shape="circle" text="C" />
      <VerAvatar shape="square" text="S" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { VerAvatar } from '@versakit/ui'
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.demo-section {
  margin-bottom: 40px;
}

.demo-row {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: #f5f5f5;
  border-radius: 8px;
}
</style>
