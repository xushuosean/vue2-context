# 快速上手

### 依赖要求

::: tip 提示
此包依赖于 Vue 2。请确保在安装此包之前，你的项目中已经安装了 Vue 2。
::::

本文会帮助你从头使用 vue2-context。

1. 安装 vue2-context

```js
yarn add vue2-context -S
// 或
npm install vue2-context -S
```

2. 创建上下文实例

```javascript config.js
import { createContext } from "vue2-context";
export const chatContext = createContext();
```

3. 父级组件

```vue
<template>
  <ChatContextProvider :value="{ hello }">
    parent: {{ hello }}
    <Child />
    <button @click="hello++">++</button>
  </ChatContextProvider>
</template>

<script>
import Child from "./Child.vue";
import { chatContext } from "./config";
const ChatContextProvider = chatContext.Provider;

export default {
  components: { ChatContextProvider, Child },
  data() {
    return {
      hello: 0,
    };
  },
};
</script>
```

4. 子级组件

```vue
<template>
  <div>child : {{ context.value.hello }}</div>
</template>

<script>
import { useContext } from "vue2-context";
import { chatContext } from "./config";

export default {
  data() {
    return {
      context: useContext(chatContext, this),
    };
  },
};
</script>
```

<iframe src="https://codesandbox.io/embed/3znzqz?view=preview&module=%2Fsrc%2Fcomponents%2FChildOne.vue&hidenavigation=1"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vue2-context-example"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
   

::: warning
如果传入的是一个基本数据类型，请使用`.value`，以保证能够响应
:::
