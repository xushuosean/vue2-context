<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    value: null,
  },
  watch: {
    value: {
      handler: function (newVal) {
        this.setContextValue(newVal);
      },
      immediate: true,
      deep: true
    },
  }
};
</script>

