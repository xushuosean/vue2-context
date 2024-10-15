<template>
  <ChatContextProvider :value="hello">
    parent: {{ hello.val }}
    <Child />
    <button @click="hello.val++">hello++</button>
  </ChatContextProvider>
</template>
  
<script>
import Child from './Child.vue';
import { chatContext } from './config';
const ChatContextProvider = chatContext.Provider;

export default {
  components: { ChatContextProvider, Child },
  data() {
    return {
      hello: {
        val: 0
      }
    }
  },
}
</script>