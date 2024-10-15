import CreateContext from "./createContext.vue"
import Vue from 'vue';

export function createContext(value) {
  const context = {
    value,
    map: new Map(),
  };

  context.Provider = {
    ...CreateContext,
    methods: {
      ...CreateContext.methods,
      setContextValue(newVal) {
        const wrapperValue = { value: newVal }

        let hasVal = context.map.has(this);
        if (!hasVal) {
          const observableValue = Vue.observable(wrapperValue)
          context.map.set(this, observableValue)
        } else {
          const oldValue = context.map.get(this);
          Object.keys(wrapperValue).forEach(key => {
            Vue.set(oldValue, key, wrapperValue[key])
          })
          Object.keys(oldValue)
            .filter(key => !Object.keys(wrapperValue).includes(key))
            .forEach(key => {
              Vue.delete(oldValue, key)
            })
        }
      }
    }
  };

  return context;
}

export function useContext(context, vm) {
  let parent = vm;
  while (parent) {
    if (!parent) return undefined;
    if (context.map.has(parent)) {
      return context.map.get(parent);
    }

    parent = parent.$parent;
  }
  return undefined;
}