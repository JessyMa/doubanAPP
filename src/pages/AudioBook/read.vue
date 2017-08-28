<template>
  <div class="movie-view has-header">
  <scroller title="最受欢迎书评" type="onlyString" >
      <Comts slot="lala" :comitem="comment"></Comts>
    </scroller>
    <scroller title="新书速递" type="hasCover" :items="film"></scroller>
    <scroller title="最受关注的虚构类图书" type="hasCover"  :items="free"></scroller>
    <Talkd imge="https://img3.doubanio.com/view/dale-online/dale_ad/public/dd2df2652819ee9.jpg" txt="豆瓣观影club的日记 标签: 影评连连看"></Talkd>
    <scroller class="alr" title="最受关注的非虚构类图书" type="hasCover"   :items="already">
      <h4 slot="promItem" class="rec">8.1---8.10日好片推荐</h4>
    </scroller>
    <Talkd imge="https://img3.doubanio.com/view/dale-online/dale_ad/public/abd71ad3fe44014.jpg" txt="金贵晟“简装歌手”全国巡回演唱会 长春站"></Talkd>
    <!--<Comts></Comts>-->
  </div>
</template>

<script>

  import Scroller from '../../components/Scroller'
  import Talkd from '../../components/talkd'
  import Comts from './conm'

  export default {
    components: { Scroller,Talkd,Comts},
    data () {
      return {
          comment:[
      
            {
              tit:'电话谋杀案',
              words:'推理小说作家马克·哈列第乘作的轮船就要到达港口了，然而汤尼和玛戈却各有心思。一年前，玛戈对于汤尼很不满',
              aut:'梁慕橙 评论 《电话谋杀案》',
              imge:'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p1205111193.webp'
            },
            {
              tit:'愿你出走半生，归来仍是少年',
              words:'【6-12集剧评 】愿你出走半生，归来仍是少年（卿尘姑娘） 命运仿佛一匹脱缰的野马，它以风不那么纯粹了，有些人',
              aut:'钱多多 评论 《醉玲珑》',
              imge:'https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2448648049.webp'
            },
            {
              tit:'可怜复可笑',
              words:'王政君就是善良退让 对人很热情坦诚 袁立的演绎端庄大气很有皇后风范 想来王政君应该也是个向往荣华富贵的女孩子 这和她的悲惨身世脱不了关系 她是喜欢萧育的',
              aut:'爱吃糖的猫 评论 《母仪天下》',
              imge:'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2284484150.webp'
            },
          ],
          film:[
          {
              title:'悟空传',
              images:{
                large:'https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2475060299.webp'
              },
              score: '6.1分',

            },
            {
            title:'一念无名',
            images:{
              large:'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2452970761.jpg'
            },
            score: '7.6分',

          },
            {
            title:'三个老枪手',
            images:{
              large:'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2493595992.jpg'
            },
            score: '8.2分',

          },
          
                       
            {
              title:'神奇女侠',
              images:{
                large:'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2460006593.webp'
              },
              score: '7.8分',

            },
        
          ],
        free:[
        {
              title:'父子雄兵',
              images:{
                large:'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2492957074.webp'
              },
              score: '5.8分',

            },
            {
            title:'真实',
            images:{
              large:'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2460120821.jpg'
            },
            score: '5.8',

          },
        {
              title:'建军大爷',
              images:{
                large:'https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2493892158.webp'
              },
              score: '暂无评分',

            },
          
          {
            title:'摔跤吧，爸爸！',
            images:{
              large:'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2457983084.jpg'
            },
            score: '9.1分',

          },   
          {
            title:'悟空传',
            images:{
              large:'https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2475060299.webp'
            },
            score: '6.1分',

          },
        ],
        already:[
          {
            title:'龙之战',
            images:{
              large:'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2469843751.webp'
            },
            score: '8月4日上线',

          },
          {
            title:'神灵寨',
            images:{
              large:'https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2494120787.webp'
            },
            score: '8月1日上线',

          },
          {
            title:'我是马布里',
            images:{
              large:'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2455805686.webp'
            },
            score: '8月4日上线',

          },
          {
            title:'原罪的羔羊',
            images:{
              large:'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2492870282.webp'
            },
            score: '8月4日上线',

          },
          {
            title:'诡井',
            images:{
              large:'https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2494181189.webp'
            },
            score: '8月7日上线',

          },
        ]
      }
    },
  }
</script>

<style>
  .movie-view{
    margin-top: 74px;
    margin-bottom: 60px;
  }
.rec{
  color:brown;font-size: 14px;letter-spacing: 1px;font-weight: normal}
  .alr .content ul li .score{color: darkgray;font-size: 10px;}
</style>
