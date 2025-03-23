<script setup lang="ts">
import { VerAvatar, VerAvatarGroup } from '@versakit/ui'
</script>

<template>
  <div class="container">
    <section class="demo-section">
      <h2>VerAvatar Group</h2>
      <div class="demo-row">
        <VerAvatarGroup>
          <VerAvatar src="https://randomuser.me/api/portraits/women/1.jpg" />
          <VerAvatar src="https://randomuser.me/api/portraits/men/1.jpg" />
          <VerAvatar src="https://randomuser.me/api/portraits/women/2.jpg" />
          <VerAvatar src="https://randomuser.me/api/portraits/men/2.jpg" />
          <VerAvatar src="https://randomuser.me/api/portraits/women/3.jpg" />
          <VerAvatar src="https://randomuser.me/api/portraits/men/3.jpg" />
        </VerAvatarGroup>
      </div>
    </section>

    <section class="demo-section">
      <h2>Custom Max Count</h2>
      <div class="demo-row">
        <VerAvatarGroup :maxCount="3">
          <VerAvatar src="https://randomuser.me/api/portraits/women/4.jpg" />
          <VerAvatar src="https://randomuser.me/api/portraits/men/4.jpg" />
          <VerAvatar src="https://randomuser.me/api/portraits/women/5.jpg" />
          <VerAvatar src="https://randomuser.me/api/portraits/men/5.jpg" />
          <VerAvatar src="https://randomuser.me/api/portraits/women/6.jpg" />
        </VerAvatarGroup>
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
