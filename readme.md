# vue2-context

> 在vue2中实现上下文功能

与react相似，拥有 `createContext` 和 `useContext` api

## demo

```javascript
import { createContext } from 'vue2-context';

export const chatContext = createContext();
```

``` javascript
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
  components: {ChatContextProvider, ChildOne},
  data() {
    return {
      hello: 0
    }
  },
}
</script>
```

``` javascript
<template>
  <div>
    child : {{ context.hello }}</div>
</template>

<script>
import { useContext } from 'vue2-context';
import { chatContext } from './config';

export default {
  data() {
    return {
        context: useContext(chatContext, this)
    }
  },
}
</script>
```

> 一个provider可以作为多层父级进行使用