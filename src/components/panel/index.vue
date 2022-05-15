<template>
  <div class="panel">
    <h2 class="title-wrap ignore-title">
      <div>
        <slot name="title"></slot>
      </div>
      <div v-if="isShowYear">
        <slot name="year"></slot>
      </div>
    </h2>
    <div ref="chart" class="chart"></div>
    <div class="panel-footer"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "Panel",
  props: {
    options: {
      type: Object,
      default: () => ({}),
    },
    isShowYear: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      chart: null,
    };
  },
  watch: {
    //echarts数据源的数据变了,就要重新对echats初始化重新获得图表
    options: {
      handler: function () {
        this.setOptions();
      },
      deep: true,
    },
  },
  mounted() {
    if (Object.keys(this.options).length) {
      this.options && this.init();
      window.addEventListener("resize", () => {
        this.chart.resize();
      });
    }
  },
  methods: {
    init() {
      //2.初始化
      this.chart = echarts.init(this.$refs.chart);
      this.setOptions();
    },
    setOptions() {
      //3.配置数据
      let options = this.options;
      // 4.传入数据
      this.chart.setOption(options);
    },
  },
};
</script>

<style lang="less" scoped>
.panel {
  position: relative;
  // height: 310px;
  height: 33%;
  padding: 0 15px 40px;
  // margin-bottom: 15px;
  border: 1px solid rgba(25, 186, 139, 0.17);
  background: rgba(255, 255, 255, 0.03) url("@/assets/images/line(1).png");
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 10px;
    border-left: 2px solid #02a6b5;
    border-top: 2px solid #02a6b5;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 10px;
    height: 10px;
    border-right: 2px solid #02a6b5;
    border-top: 2px solid #02a6b5;
  }

  .title-wrap {
    display: flex;
    height: 48px;
    color: #fff;
    // font-size: 24px;
    line-height: 48px;
    text-align: center;
    font-weight: 400;
    div {
      flex: 1;
    }
  }

  .ignore-title {
    font-size: 16px;
  }

  .chart {
    height: 84%;
    // background-color: pink;
  }

  .panel-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 10px;
      height: 10px;
      border-left: 2px solid #02a6b5;
      border-bottom: 2px solid #02a6b5;
    }
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      width: 10px;
      height: 10px;
      border-right: 2px solid #02a6b5;
      border-bottom: 2px solid #02a6b5;
    }
  }
}
</style>
