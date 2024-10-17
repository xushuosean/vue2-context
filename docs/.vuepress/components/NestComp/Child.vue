<template>
  <div :class="context.value" style="padding: 10px;">
    <ThemeDisplay />
    <NestContextProvider :value="childTheme">
      <ThemeDisplay />
    </NestContextProvider>
  </div>
</template>

<script>
import { useContext } from '../../../../lib';
import { nestContext } from './config';
import ThemeDisplay from './ThemeDisplay.vue';
const NestContextProvider = nestContext.Provider;

export default {
  components: {
    NestContextProvider,
    ThemeDisplay,
  },
  data() {
    return {
      context: useContext(nestContext, this),
      childTheme: 'light',
    }
  }
}
</script>

<style lang="css" scoped>

</style>