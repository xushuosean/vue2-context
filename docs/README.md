# 介绍

[[toc]]

vue2-context由两个方法组成，`useContext` 和 `createContext`

## 它是如何工作的？

通过 `createContext` 创建得到的上下文，会携带一个 `Provider` 组件，通过该组件注入`可变值`，会在将组件实例与`可变值`进行绑定。

当使用`useContext`时，需要传入`context`和当前组件的实例，`vue2-context`会自动为你寻找最近的`Provider`父级，获取可变值。

