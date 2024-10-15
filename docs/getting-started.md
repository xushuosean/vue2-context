# 快速上手

本文会帮助你从头使用vue2-context。

1. 安装vue2-context
  ``` js
  yarn add vue2-context -S
  // 或
  npm install vue2-context -S
  ```
2. 创建上下文实例
  ```javascript config.js
  import { createContext } from 'vue2-context';
  export const chatContext = createContext();
   ```
3. 父级组件
  ```vue
  <template>
    <ChatContextProvider :value="hello">
      parent: {{ hello.val }}
      <Child />
      <button @click="hello.val++">++</button>
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
  ```
4. 子级组件
  ```vue
  <template>
    <div>
      child : {{ context.value.val }}</div>
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

<Normal />

::: warning
如果传入的是一个基本数据类型，请使用`.value`，保证能够响应
:::