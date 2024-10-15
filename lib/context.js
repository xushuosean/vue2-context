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
        let getVal = context.map.get(this);
        if (!getVal) {
          context.map.set(this, newVal)
        } else {
          Object.keys(newVal).forEach(key => {
            Vue.set(getVal, key, newVal[key])
          })
          Object.keys(getVal)
            .filter(key => !Object.keys(newVal).includes(key))
            .forEach(key => {
              Vue.delete(getVal, key)
            })
        }
      }
    }
  };

  return context;
}

export function useContext(context, vm) {
  let parent = vm;
  while(parent) {
    if (!parent) return undefined;
    if (context.map.has(parent)) {
      return context.map.get(parent);
    }

    parent = parent.$parent;
  }
  return undefined;
}