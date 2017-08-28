<template>
  <div class="niwrap">
     <slot></slot>
    <br>
    <span>{{con}}</span>
  </div>
</template>

<script>

  export default {
    data () {
      return {}
    },
    props:['con']
  }
</script>
<style>
  .niwrap {
    float: left;
    width: 25%;
    text-align: center;
    height: 110px;
    padding-top: 20px;
    border-bottom: 1px solid #eee;

  }

  .niwrap img {
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }

  .niwrap span {
    font-size: 14px;
    color: #646464;
  }
</style>
