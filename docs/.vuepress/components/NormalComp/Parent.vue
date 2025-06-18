<template>
  <ChatContextProvider :value="{hello}">
    parent: {{ hello }}
    <Child />
    <button @click="hello++">hello++</button>
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
      hello: 0
    }
  },
}
</script>