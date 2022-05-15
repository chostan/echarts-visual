<template>
  <div class="center-column">
    <!-- no模块制作 -->
    <div class="no">
      <div class="no-hd">
        <ul>
          <li>123456</li>
          <li>100000</li>
        </ul>
      </div>
      <div class="no-bd">
        <ul>
          <li>前端需求人数</li>
          <li>市场供应人数</li>
        </ul>
      </div>
    </div>
    <!-- 地图模块 -->
    <div class="map">
      <div ref="chinaMap" class="china-map"></div>
      <div class="earth"></div>
      <div class="rotate-lbx"></div>
      <div class="rotate-jt"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { mapOptions } from "./echarts-config";

export default {
  name: "CenterColumn",
  data() {
    return {
      mapOptions,
      chart: null,
    };
  },
  mounted() {
    this.initEcharts();
    window.addEventListener("resize", () => {
      this.chart.resize();
    });
  },
  methods: {
    initEcharts() {
      this.chart = echarts.init(this.$refs.chinaMap);
      this.chart.setOption(this.mapOptions);
    },
  },
};
</script>

<style lang="less" scoped>
.center-column {
  height: 100%;
  .no {
    padding: 15px;
    background: rgba(101, 132, 226, 0.1);
    .no-hd {
      position: relative;
      border: 1px solid rgba(25, 186, 139, 0.17);
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 30px;
        height: 10px;
        border-top: 2px solid #02a6b5;
        border-left: 2px solid #02a6b5;
      }
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        width: 30px;
        height: 10px;
        border-bottom: 2px solid #02a6b5;
        border-right: 2px solid #02a6b5;
      }
      ul {
        display: flex;
        li {
          flex: 1;
          color: #ffeb7b;
          font-size: 70px;
          text-align: center;
          line-height: 80px;
          font-family: "electronicFont";
        }
        li:not(:last-child) {
          position: relative;
          &::after {
            content: "";
            position: absolute;
            top: 25%;
            right: 0;
            height: 50%;
            width: 1px;
            background: rgba(255, 255, 255, 0.1);
          }
        }
      }
    }
    .no-bd {
      ul {
        display: flex;
        li {
          flex: 1;
          height: 40px;
          margin-top: 10px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 18px;
          text-align: center;
          line-height: 40px;
        }
      }
    }
  }
  .map {
    overflow: hidden;
    position: relative;
    height: 80%;

    .china-map {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 9;
    }

    .earth {
      width: 518px;
      height: 518px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: url("@/assets/images/map.png") no-repeat;
      background-size: 100% 100%;
      opacity: 0.3;
    }
    .rotate-lbx {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      // width: 643px;
      // height: 643px;
      width: 590px;
      height: 590px;
      background: url("@/assets/images/lbx.png") no-repeat;
      background-size: 100% 100%;
      animation: rotate1 15s linear infinite;
      opacity: 0.6;
    }

    .rotate-jt {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 566px;
      height: 566px;
      background: url("@/assets/images/jt.png") no-repeat;
      background-size: 100% 100%;
      animation: rotate2 10s linear infinite;
      opacity: 0.6;
    }

    @keyframes rotate1 {
      from {
        transform: translate(-50%, -50%) rotate(0deg);
      }
      to {
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }

    @keyframes rotate2 {
      from {
        transform: translate(-50%, -50%) rotate(0deg);
      }
      to {
        transform: translate(-50%, -50%) rotate(-360deg);
      }
    }
  }
}
</style>
