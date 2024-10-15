<template>
    <div>
      child : {{ context.hello }}</div>
  </template>
  
  <script>
  import { useContext } from '../../../../lib';
  import { chatContext } from './config';
  
  export default {
    data() {
      return {
          context: useContext(chatContext, this)
      }
    },
  }
  </script>