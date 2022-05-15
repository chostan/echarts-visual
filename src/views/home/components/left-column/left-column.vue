<template>
  <div class="left-column">
    <!-- 左上柱形图 -->
    <panel class="item" :options="options1">
      <template #title>柱形图-就业行业</template>
    </panel>
    <!-- 左上柱形图 -->
    <panel class="item" :options="options2" :isShowYear="true">
      <template #title>折线图-人员变化</template>
      <template #year>
        <!-- <a href="#" @click.prevent="changeData(0)">2020年</a>
        <a href="#" @click.prevent="changeData(1)">2021年</a> -->
        <a
          v-for="(item, index) in yearArr"
          :key="index"
          :class="{ active: activeYearIndex === index }"
          href="#"
          @click.prevent="changeData(index)"
          >{{ item }}</a
        >
      </template>
    </panel>
    <!-- 左上柱形图 -->
    <panel class="item" :options="options3">
      <template #title>饼形图-年龄分布</template>
    </panel>
  </div>
</template>

<script>
import Panel from "@/components/panel/index.vue";
import { options1, options2, yearData, options3 } from "./echart-config";

export default {
  name: "LeftColumn",
  components: {
    Panel,
  },
  data() {
    return {
      //左上柱形图echarts数据源
      options1,
      //左中折线图echarts数据源
      options2,
      //左下饼图
      options3,
      //点击年份切换数据,这个是年份的数据
      yearData,
      activeYearIndex: 1,
      yearArr: ["2020年", "2021年"],
    };
  },
  methods: {
    changeData(index) {
      this.activeYearIndex = index;
      const obj = yearData[index];
      obj.data.forEach((item, index) => {
        this.options2.series[index].data = obj.data[index];
      });
      // this.options2.series[0].data = obj.data[0];
      // this.options2.series[1].data = obj.data[1];
    },
  },
};
</script>

<style lang="less" scoped>
.left-column {
  // height: 100%;
  height: calc(100% - (15px) * 2);
  .item {
    margin-bottom: 15px;
    a {
      margin: 0 10px;
      color: #fff;
      font-size: 14px;
      text-decoration: none;
    }
    .active {
      color: #00f2f1;
    }
  }
  .item:last-child {
    margin-bottom: 0;
  }
}
</style>
