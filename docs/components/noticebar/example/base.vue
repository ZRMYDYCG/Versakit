<script setup lang="ts">
import { VerNoticeBar } from '@versakit/ui'
</script>

<template>
  <div>
    <VerNoticeBar text="This is an info notice" type="info" />

    <VerNoticeBar
      text="Success! Your operation has been completed."
      type="success"
    />

    <VerNoticeBar
      text="Warning: Please backup your data before proceeding."
      type="warning"
    />

    <VerNoticeBar
      text="Error: Failed to save changes. Please try again."
      type="error"
    />
  </div>
</template>

<style scoped></style>
