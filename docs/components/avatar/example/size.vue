<script setup lang="ts">
import { VerAvatar } from '@versakit/ui'
</script>

<template>
  <div class="container">
    <section class="demo-section">
      <h2>Sizes</h2>
      <div class="demo-row">
        <VerAvatar size="small" text="S" />
        <VerAvatar size="default" text="D" />
        <VerAvatar size="large" text="L" />
        <VerAvatar :size="60" text="60" />
      </div>
    </section>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 40px;
}

.demo-section {
  margin-bottom: 40px;
}

h2 {
  color: #666;
  margin-bottom: 20px;
  font-size: 1.2em;
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
