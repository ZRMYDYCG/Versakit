<script setup lang="ts">
import { VerDropdownMenu, VerDropdownMenuItem } from '@versakit/ui'

const handleSelect = (value: string) => {
  console.log('Selected:', value)
}
</script>

<template>
  <div class="container">
    <div class="menu-group">
      <!-- Bottom (Default) -->
      <VerDropdownMenu>
        <template #trigger>
          <span>Click me</span>
        </template>

        <VerDropdownMenuItem @select="handleSelect('Item 1')">
          Item 1
        </VerDropdownMenuItem>
        <VerDropdownMenuItem @select="handleSelect('Item 2')">
          Item 2
        </VerDropdownMenuItem>
        <VerDropdownMenuItem disabled>Disabled Item</VerDropdownMenuItem>
      </VerDropdownMenu>

      <!-- Top -->
      <VerDropdownMenu placement="top" class="ml-4">
        <template #trigger>
          <span>Top Dropdown</span>
        </template>

        <VerDropdownMenuItem @select="handleSelect('Top 1')">
          Top Item 1
        </VerDropdownMenuItem>
        <VerDropdownMenuItem @select="handleSelect('Top 2')">
          Top Item 2
        </VerDropdownMenuItem>
      </VerDropdownMenu>

      <!-- Bottom Right -->
      <VerDropdownMenu placement="bottom-right" class="ml-4">
        <template #trigger>
          <span>Bottom Right</span>
        </template>

        <VerDropdownMenuItem @select="handleSelect('BR 1')">
          Bottom Right 1
        </VerDropdownMenuItem>
        <VerDropdownMenuItem @select="handleSelect('BR 2')">
          Bottom Right 2
        </VerDropdownMenuItem>
      </VerDropdownMenu>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.header {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.divider {
  height: 1px;
  background: #eee;
  width: 100%;
}

.menu-group {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

h2 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
}

.ml-4 {
  margin-left: 1rem;
}
</style>
