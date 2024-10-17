<template>
  <NestContextProvider :value="theme">
    <Child />
  </NestContextProvider>
</template>

<script>
import Child from './Child.vue';
import { nestContext } from './config';
const NestContextProvider = nestContext.Provider;

export default {
  components: { NestContextProvider, Child },
  data() {
    return {
      theme: 'dark'
    }
  }
}
</script>

<style lang="css">
.dark {
  background-color: #333;
  color: white;
}

.light {
  background-color: gainsboro;
  color: #333;
}
</style>