<template>
  <div>
    child : {{ context.value.hello }}</div>
</template>
  
<script>
import { useContext } from '../../../../lib';
import { chatContext } from './config';

export default {
  data() {
    return {
      context: useContext(chatContext, this)
    }
  },
}
</script>