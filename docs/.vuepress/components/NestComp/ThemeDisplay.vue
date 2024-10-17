<template>
  <div :class="context.value">theme display: {{ context.value }}</div>
</template>

<script>
import { useContext } from '../../../../lib';
import { nestContext } from './config';

export default {
  data() {
    return {
      context: useContext(nestContext, this),
    }
  }
}
</script>

<style lang="css" scoped>

</style>
