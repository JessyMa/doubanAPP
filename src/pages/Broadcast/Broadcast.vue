<template>
  <div class="broad">
  	<m-header title="广播" fixed>
  			<a href="javascript:;" slot="right"><img class="m-icon-img margin-right-10" src="../../assets/images/ic_status_search_user.png"/></a>
  			<a href="javascript:;" slot="right"><img class="m-icon-img" src="../../assets/images/ic_chat_green.png"/></a>
  	</m-header>
    <div class="find">
      <i><img src="../../assets/images/ic_status_anonymous_header.png" alt=""></i>
      <div class="wor">
        <h4>发现有趣的人</h4>
        <span>关注他们，发现更大的世界</span>
      </div>
    </div>
    <Broadcont :bconts="contain"></Broadcont>
  </div>
</template>

<script>
  import mHeader from '../../components/header'
  import Broadcont from './broadcont'

  export default {
    components: {
      mHeader,Broadcont
    },
    data: function () {
      return {
        contain:[
          {
            user:'Alrex',
            vis:624,
            text:'50大寿的摇滚趴 ',
            like:54,
            comm:22,
            bol:true,
            imge:'https://img1.doubanio.com/view/group_topic/llarge/public/p69200597.webp'
          },
          {
              user:'hansey',
              vis:9244,
              text:'我是一个街拍摄影师，感谢那些零下20°到39°三伏天都坚持工作的模特，没办法把美好的一刻既分享给她们也留给自己，下面直接上图我用富士instax 拍的照片。 ',
              like:12,
              comm:2,
              bol:true,
              imge:'https://img3.doubanio.com/view/group_topic/llarge/public/p85972601.webp'
          },
          {
            user:'张一一',
            vis:244,
            text:'我心目中的美照绝不是酱紫的…… 先来给你们上几张楼主的自黑照： ',
            like:322,
            comm:62,
            bol:true,
            imge:'https://img3.doubanio.com/view/group_topic/llarge/public/p86224611.webp'
          },
          {
            user:'在人间',
            vis:890,
            text:'王坪煤矿，一片废墟',
            like:44,
            comm:23,
            bol:true,
            imge:'https://img3.doubanio.com/view/group_topic/llarge/public/p81497103.webp'
          },
          {
            user:'Jessy',
            vis:1214,
            bol:true,
            text:'每个城市都会有独具韵味的地方，你可曾去关注过你所在城市的独特美。在一个地方就算你的城市没有旅游景点，公园的一角，某幢楼的天台，校园的跑道操场，家里的小床都可以是拍摄的地方。 ',
            like:622,
            comm:42,
            imge:'https://img1.doubanio.com/view/group_topic/llarge/public/p86223477.webp'
          },
          {
            user:'阿菲',
            vis:454,
            bol:true,
            text:'这个时代，没有什么大不了，只要你够勇敢，便能量无穷。  ',
            like:45,
            comm:21,
            imge:'https://img3.doubanio.com/view/group_topic/llarge/public/p82728006.webp'
          },
          {
            user:'一朵茉茉酱',
            vis:4564,
            text:'从惶恐不安到找到第一份工作，从形只单影到认识第一个朋友，从两手不沾阳春水到学会煮饭，从旅游者再一次变成大学生',
            like:465,
            comm:211,
            bol:true,
            imge:'https://img3.doubanio.com/view/group_topic/llarge/public/p67034072.webp'
          },
          {
            user:'lucy酱',
            vis:8964,
            text:'南极 ',
            like:2612,
            bol:true,
            comm:1262,
            imge:'https://img1.doubanio.com/view/group_topic/llarge/public/p66935339.webp'
          },
          {
            user:'Alrex',
            vis:624,
            text:'一入民宿，发现都是寺庙风格，淡淡的檀香悠远的飘来 ',
            like:54,
            bol:true,
            comm:22,
            imge:'https://img3.doubanio.com/view/group_topic/llarge/public/p67099471.webp'
          },
          {
            user:'海边的曼彻斯特',
            vis:890,
            text:'这里的光我也很喜欢。 ',
            like:44,
            comm:23,
            bol:true,
            imge:'https://img3.doubanio.com/view/group_topic/llarge/public/p77092220.webp'
          },

        ]
      }
    },
  }
</script>


<style lang="less">
.find{width: 60%;margin: 0 auto;height: 80px;padding: 10px 0;margin-top: 50px}
.find i{height: 60px;width: 60px;display: block;float: left}
.find i img{height: 60px;width: 60px;}
.find .wor{float: right;text-align: left;padding-left: 10px;}
.find .wor h4{padding-top: 8px;font-size: 13px;line-height: 22px;letter-spacing: 1px}
.broad{margin-bottom: 60px}
</style>
