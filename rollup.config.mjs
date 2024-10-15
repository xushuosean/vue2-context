import babel from "rollup-plugin-babel"
import vue from 'rollup-plugin-vue';

export default {
  input: "lib/index.js",
  output: {
    name: "vue2Context",
    exports: 'named',
  },
  plugins: [
    vue(),
    babel({
      exclude: 'node_modules/**',
      "extensions":[".js", ".jsx", ".es6", ".es", ".mjs",".vue"],
    })
  ],
  external: ["vue"],
};