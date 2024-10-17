## 使用场景

如果你想用vue2-context传递theme是完全可行的，你可以用它做多层嵌套，vue2-context会自动为你寻找最近的父级，并获取其映射的可变值

1. 创建一个ThemeDisplay组件
``` vue
<template>
  <div :class="context.value">theme display: {{ context.value }}</div>
</template>
```

2. 在父组件中使用Provider包裹
``` vue
<NestContextProvider :value="theme">
  <Child />
</NestContextProvider>

<script>
...
data() {
  return {
    theme: 'dark'
  }
}
...
</script>
```

3. 在子组件中使用Provider包裹一层
``` vue
<div :class="context.value" style="padding: 10px;">
  <ThemeDisplay />
  <NestContextProvider :value="childTheme">
    <ThemeDisplay />
  </NestContextProvider>
</div>

<script>
...
data() {
  return {
    context: useContext(nestContext, this),
    childTheme: 'light',
  }
}
...
</script>
```

即可获得如下效果

<Nest />