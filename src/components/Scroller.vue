<template>
  <div class="scroller">
    <div class="header">
      <h2>{{title}}</h2>
      <a href="##">更多</a>
    </div>
    <div class="content">
      <slot name="promItem"></slot>
      <ul class="hasCover" v-if="type === 'hasCover'">
        <li v-for="item in items">
            <img v-if="item.images" :src="item.images.large" alt=''>
            <span class="title">{{item.title}}</span>
          <span class="score">{{item.score}}</span>
        </li>
      </ul>
      <ul class="onlyString" v-if="type === 'onlyString'">
        <li v-for="item in items" style="border-color: #FFAC2D;">
          <a :href="item.href" v-if="!item.line" :style="{color: item.color}">{{item.title}}</a>
        </li>
      </ul>
      <slot name="lala"></slot>
    </div>

  </div>
</template>

<script>

export default {
  name: 'scroller',
  props: ['title', 'type', 'items'],
  data () {
    return {

    }
  }
}
</script>

<style>
.scroller {
  padding-top: 5px;
}

.header {
  height: 40px;
  line-height: 40px;
  padding: 0 20px;
  margin-top: 5px;
  background: #fff;
}
.header   a {
    float: right;
    font-size: 12px;
    color: #42bd56;
  }

.header   h2 {
  font-size: 15px;
    display: inline-block;
  letter-spacing: 1px;
  color: black;
  }

.content {
  box-sizing: content-box;padding-left: 20px;
  background: #fff;
}

.content   ul {
    padding: 5px 0;
  }

.hasCover {
  overflow-x: auto;
  white-space: nowrap;
}

.hasCover   .title {
    display: block;
    max-width: 100%;
  padding-top: 4px;
    line-height: 20px;
    font-size: 12px;
    color: #111;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
  }
.hasCover .score{font-size: 10px;color: #dba300;font-family: '宋体'}
.hasCover    li {
    display: inline-block;
    width: 9rem;
  }


.hasCover   img {
    height: 12rem;
  }

.onlyString {
  overflow-x: auto;
  white-space: nowrap;
}
.onlyString   li {
    display: inline-block;
    margin: 0 0 0.8rem 1.6rem;
    font-size: 1.6rem;
    border: solid 0.1rem;
    border-radius: 0.4rem;
    vertical-align: middle;
  }

.onlyString   a {
    height: 5rem;
    line-height: 5rem;
    padding: 0 2.4rem;
    letter-spacing: 0.16rem;
    overflow: auto;
    display: block;
    text-align: center;
  }

.onlyString   li:empty {
    width: 100%;
    display: block;
    height: 0.1rem;
    border: 0;
    margin: 0;
  }
</style>
