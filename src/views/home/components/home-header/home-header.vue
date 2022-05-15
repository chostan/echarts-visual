<template>
  <div class="home-header">
    <h1 class="title">可视化展板-ECharts</h1>
    <div class="show-time">
      当前时间:
      {{ headerTime | tansformDate("YYYY年MM月DD日 HH[时]:mm[分]:ss[秒]") }}
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
  data() {
    return {
      //当前时间
      headerTime: new Date(),
      //时间实例,用于组件销毁时清空计时器
      timer: null,
    };
  },
  mounted() {
    //DOM出来后,开启定时器,显示时间
    this.timer = setInterval(() => {
      this.headerTime = new Date();
    }, 1000);
  },
  methods: {},
  //组件销毁后,清空定时器
  beforeDestoryed() {
    if (this.timer) clearInterval(this.timer);
  },
};
</script>

<style lang="less" scoped>
.home-header {
  position: relative;
  // height: 100px;
  height: 10%;
  background: url("@/assets/images/head_bg.png") no-repeat;
  background-size: 100% 100%;
  .title {
    font-size: 38px;
    color: #fff;
    text-align: center;
    line-height: 80px;
  }
  .show-time {
    position: absolute;
    top: 0;
    right: 30px;
    color: rgba(255, 255, 255, 0.7);
    font-size: 20px;
    line-height: 75px;
  }
}
</style>
