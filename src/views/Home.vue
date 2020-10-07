<template>
  <div class="home">
    <!-- 头部 -->
    <header id="top">
      <p>eleme</p>
      <p @click="login()">登陆|注册</p>
    </header>

    <div class="guess">
      <p>当前定位城市</p>
      <p>{{ guess.name }}</p>
    </div>

    <!-- 热门城市 -->
    <div class="hot">
      <p>热门城市</p>
      <ul>
        <li @click="detail(i)" v-for="(i, k) in hot" :key="k">
          {{ i.name }}
        </li>
      </ul>
    </div>

    <!-- 按字母排序 -->
    <div class="zimu">
      <ul>
        <li v-for="(i, k) in zimu" :key="k">
          <a :href="'#' + i">{{ i }}</a>
        </li>
      </ul>
    </div>

    <!-- 城市列表 -->

    <div @scroll="scroll()" ref="list" class="list">
      <div v-for="(i, k) in obj" :key="k" class="item">
        <p :id="k">{{ k }}</p>
        <ul>
          <li @click="detail(item)" v-for="(item, key) in i" :key="key">
            {{ item.name }}
          </li>
        </ul>
      </div>

      <a href="#A" v-show="isshow" class="totop">回到顶部</a>
    </div>
  </div>
</template>

<script>
import { more, hot } from "@/utils/api";
export default {
  name: "home",
  data() {
    return {
      header: [],
      hot: [],
      zimu: [],
      arr: [],
      obj: {},
      scrollTop: "",
      isshow: false,
      guess: "",
    };
  },
  watch: {
    // scrollTop(val){
    //   console.log(val)
    // }
  },
  methods: {
    login() {
      this.$router.push("/login");
    },

    scroll() {
      let scrollTop = this.$refs.list.scrollTop;
      console.log(this.$refs.list.scrollTop);
      if (scrollTop > 100) {
        this.isshow = true;
      } else {
        this.isshow = false;
      }
    },

    detail(i) {
      this.$router.push({
        name: "detail",
        params: {
          detail: i.name,
        },
      });
    },

    async getmore() {
      //  this.$http.get("/v1/cities?type=group").then((res)=>{
      let res = await more();
      this.zimu = Object.keys(res);
      this.zimu.sort();
      console.log(res);

      for (let i in this.zimu) {
        this.obj[this.zimu[i]] = res[this.zimu[i]];
      }
      console.log(res);

      // })
    },

    // async getguess(){

    //     let res=await guess()
    //     console.log(res.data)
    //     this.guess=res.data

    // },
    async getguess(url) {
      let res = await hot(url);
      console.log(res);
      // this.hot=res.data
      return res;
    },
  },
  mounted() {
    //  this.$http.get("/v1/cities?type=guess").then((res)=>{

    // console.log(res.data)
    // this.guess=res.data

    // })

    // this.$http.get("/v1/cities?type=hot").then((res)=>{

    //   console.log(res.data)
    //   this.hot=res.data
    // })
    this.getmore();
    // this.getguess("guess")

    this.getguess("guess").then((res) => {
      console.log(res);
      this.guess = res;
    });

    this.getguess("hot").then((res) => {
      console.log(res);
      this.hot = res;
    });

    // this.getguess()

    // this.gethot()
  },
  computed: {},
  components: {},
};
</script>

<style lang="scss" scoped>
.guess {
  width: 100%;
  background: white;
  margin-top: 20px;
  > :nth-child(1) {
    width: 100%;
    height: 30px;

    text-indent: 20px;
    border-bottom: 1px solid #e4e4e4;
    line-height: 30px;
  }
  > :nth-child(2) {
    width: 100%;
    height: 50px;
    font-size: 30px;
    text-indent: 20px;
    color: #3190e8;
    border-bottom: 1px solid #e4e4e4;
  }
}
.totop {
  width: 100px;
  height: 40px;
  font-size: 20px;
  color: white;
  background: red;
  text-align: center;
  line-height: 40px;
  position: fixed;
  bottom: 100px;
  right: 50px;
}

.list {
  flex: 1;
  background: white;
  margin-top: 20px;
  overflow: auto;
  > div {
    width: 100%;
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    > p {
      font-size: 20px;
      padding-left: 20px;
      line-height: 40px;
    }
    ul {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 20px;
      > li {
        width: 25%;
        height: 40px;
        border-right: 1px solid #e4e4e4;
        border-bottom: 1px solid #e4e4e4;
        text-align: center;
        line-height: 40px;
      }
    }
  }
}
.zimu {
  width: 100%;
  background: white;
  margin-top: 20px;
  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 40px;
      height: 40px;
      text-align: center;
      line-height: 40px;
    }
  }
}

.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
}
header {
  width: 100%;
  height: 50px;
  background: #3190e8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 20px;
    color: white;
    margin: 0 10px;
  }
}

.hot {
  margin-top: 20px;
  width: 100%;
  border-top: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;

  > p {
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    padding-left: 20px;
  }
  > ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 25%;
      height: 40px;
      text-align: center;
      line-height: 40px;
      border-right: 1px solid #e4e4e4;
      border-bottom: 1px solid #e4e4e4;
      color: #3190e8;
    }
  }
}
</style>