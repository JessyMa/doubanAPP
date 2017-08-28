<template>
  <div class="guan">
    <img :src="imge" alt="">
    <h3>{{txt}}</h3>
  </div>
</template>

<script>
  export default {
    props: ['imge', 'txt'],
    data () {
      return {

      }
    }
  }
</script>
<style>
  .guan{margin-top: 10px;width: 100%;background: #fff}
  .guan img{width: 100%}
  .guan h3{
    font-size: 14px;
    display: inline-block;
    letter-spacing: 1px;
    line-height: 40px;
    width: 100%;
    text-align: center;
  }
</style>
