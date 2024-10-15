<template>
  <div>
    <Parent />
  </div>
</template>

<script>
import Parent from './Inner/Parent.vue'
export default {
  components: { Parent },
  name: 'Test',
}
</script>
