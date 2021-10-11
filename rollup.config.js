import vuePlugin from 'rollup-plugin-vue'

export default {
  input: './src/main.js',
  plugins: [
    vuePlugin(/* options */)
  ],
  output: {
    file: './dist/bundle.js',
    namespaceToStringTag: true,
    inlineDynamicImports: true
  }
}