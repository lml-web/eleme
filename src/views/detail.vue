<template>
    <div class="detail">
         
        <header>
            <p @click="home">{{ zuo }}</p>
            <p>{{$route.params.detail}}</p>
            </header>


    </div>
</template>

<script>
export default {
    data() {
        return {
            zuo:"<"
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
             home(){
                 this.$router.push("/")
             }
    }
};
</script>

<style lang="scss" scoped>
.detail {
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

</style>
