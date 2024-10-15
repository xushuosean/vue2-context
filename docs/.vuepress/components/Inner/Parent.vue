<template>
    <ChatContextProvider :value={hello}>
      parent: {{ hello }}
      <ChildOne />
      <button @click="hello ++">hello++</button>
    </ChatContextProvider>
  </template>
  
  <script>
  import ChildOne from './ChildOne.vue';
  import { chatContext } from './config';
  const ChatContextProvider = chatContext.Provider;
  
  export default {
    name: 'Test',
    components: {ChatContextProvider, ChildOne},
    data() {
      return {
        hello: 0
      }
    },
  }
  </script>