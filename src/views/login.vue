<template>
  <div class="login">
    <header>
      <p @click="home">{{ zuo }}</p>
      <p>密码登录</p>
    </header>

    <div class="from">
      <p>
        <input v-model="user" @blur="bl()"  placeholder="账号" type="text"  />
        <span v-show="tishi"   class="tishi">账号格式不正确</span>
      </p>
      <p><input v-model="psd" placeholder="密码" :type="type" /></p>
      <p>
        <input v-model="yzm" placeholder="验证码" type="text" /><img
          :src="img"
          alt=""
        /><span @click="changeimg">换一张</span>
      </p>
    </div>
    <div class="warning">
      <p>温馨提示：未注册的账号，登陆时将自动注册</p>
      <p>注册过的用户可凭账号密码的登陆</p>
    </div>
    <div class="btn">
      <button :disabled="isdisabled" @click="login">登录</button>
    </div>
    <div class="switch">
      <Sw @flag="flag"></Sw>
    </div>
  </div>
</template>

<script>
import Sw from "../components/Switch"
export default {
    components:{
        Sw
    },
    data() {
        return {
           zuo:"<",
           tishi:false,
           user:"",
           psd:"",
           yzm:"",
           img:"",
           arr:[],
           bool:false,
           type:"password"
        };
    },
    watch:{
      

    },
    mounted() {
        this.changeimg()
                 
    },
    computed:{

        isdisabled(){
            
             if(this.user!=""&&this.psd!=""&&this.yzm!=""){
                   
                    return false
             }else{
                 return true
             }


        }

    },
    methods: {
        home(){
            
            this.$router.push("/")

        },
        changeimg(){
            this.$http.post("http://elm.cangdu.org/v1/captchas").then((res)=>{
                       console.log(res.data)
                       this.img=res.data.code
                   })
        },
         setCookie(key,value,t){
            var oDate=new Date();
            oDate.setDate(oDate.getDate()+t);
            document.cookie=key+"="+value+"; expires="+oDate.toDateString();
        },

        login(){
           
           

           this.setCookie("SID",100,2)
            this.setCookie("cap",this.yzm,2)
            
            console.log(this.$http.defaults.withCredentials)


            this.$http.post("http://elm.cangdu.org/v2/login",{username:this.user,password:this.psd,captcha_code:this.yzm}).then((res)=>{
                console.log(res.data)
            })
            console.log({username:this.user,password:this.psd,captcha_code:this.yzm})

        },

        flag(i){
            console.log(i)

            if(i){
                
                 this.type="text"
            }else{
                this.type="password"
                

            }

        },
bl(){
         if(!(/^1[3456789]\d{9}$/.test(this.user))){ 
                   this.tishi=true
                   return false
        
            }else{
                this.tishi=false
            }     

    }
    },
    
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
}
header {
  width: 100%;
  height: 60px;
  background: #3190e8;
  display: flex;
  align-items: center;
  > :nth-child(1) {
    font-size: 40px;
    color: white;
    margin-left: 50px;
    margin-right: 22%;
  }
  > :nth-child(2) {
    font-weight: bold;
    font-size: 28px;
    color: white;
  }
}

.switch {
  width: 60px;
  height: 30px;
  position: fixed;
  top: 150px;
  right: 45px;
}
.from {
  margin-top: 30px;
  width: 100%;
  > p {
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #e4e4e4;
    background: white;
    // justify-content: space-around;
    > input {
      width: 60%;
      height: 100%;
      border: 0;
      text-indent: 20px;
    }
    .tishi {
      color: red;
    }
    > :nth-child(2) {
      width: 40px;
      height: 20px;
    }
  }
  > :nth-child(3) {
    display: flex;
    align-items: center;
    img {
      width: 50px;
      height: 50px;
      margin-right: 10px;
    }
    span {
      color: #3190e8;
    }
  }
}
.warning {
  width: 100%;
  padding: 10px 20px;
  p {
    color: red;
    font-size: 14px;
    margin-bottom: 10px;
  }
}
.btn {
  width: 100%;
  padding: 10px 20px;
  button {
    width: 100%;
    height: 45px;
    background: #4cd964;
    color: white;
    text-align: center;
    line-height: 45px;
    border: 0;
  }
}
</style>
