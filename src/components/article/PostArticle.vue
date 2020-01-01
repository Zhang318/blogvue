<template>
  <mavon-editor></mavon-editor>
</template>

<script>
  import {mavonEditor} from 'mavon-editor'
  // 可以通过 mavonEditor.markdownIt 获取解析器markdown-it对象
  import 'mavon-editor/dist/css/index.css'

  export default {
    components:{
      mavonEditor
    },
    name: "postArticle"
  }
</script>

<style scoped>

</style>
