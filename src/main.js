import Vue  from 'vue'
const renderer = require('vue-server-renderer').createRenderer()
export  async function  render () {
    const html = await renderer.renderToString(new Vue({
        template: `<lazy></lazy>`,
        components: {
            lazy:  () => import('./lazy.vue')
        }
    }), )
    return html
}