<template>
    <div class="switch">
       
           <p :style="{'background':flag?'red':''}" class="b">abc</p>
           <p class="a" @click="to"></p>

    </div>
</template>

<script>
import $ from "jquery"
export default {
    data() {
        return {
            flag:false
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
        to(){
            this.flag=!this.flag

            if(this.flag){
                  $(".a").animate({"left":36+"px"},200)
            }else{
                $(".a").animate({"left":-10+"px"},200)

             
            }
            this.$emit("flag",this.flag)
            
            
        }

    }
};
</script>

<style lang="scss" scoped>
.switch>.trans{
    background: red;
 transition:transform 1s ;
 transform: translate(0,36);

}
.switch .b{
    background: red;
}
.switch{
    width: 100%;
    height: 100%;
    position: relative;
    >:nth-child(1){
        width: 100%;
        height: 100%;
         background:#ccc;
         border-radius: 20px;
         text-align: center;
         line-height: 30px;
    }
     >:nth-child(2){
        width: 40px;
        height: 40px;
        background:#F1F1F1;
        border-radius: 50% 50%;
        position: absolute;
        left: -10px;
        top: -4px;
      
    }
}
</style>
 