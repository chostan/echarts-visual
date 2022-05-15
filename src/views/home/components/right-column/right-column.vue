<template>
  <div class="right-column">
    <!-- 左上柱形图 -->
    <panel class="item" :options="options1">
      <template #title>柱形图-技能掌握</template>
    </panel>
    <!-- 左上柱形图 -->
    <panel class="item" :options="options2">
      <template #title>折线图-播放量</template>
    </panel>
    <!-- 左上柱形图 -->
    <panel class="item" :options="options3">
      <template #title>饼形图-地区分布</template>
    </panel>
  </div>
</template>

<script>
import Panel from "@/components/panel/index.vue";
import { options1, options2, options3 } from "./echart-config";

export default {
  name: "RightColumn",
  components: {
    Panel,
  },
  data() {
    return {
      // 柱形图
      options1,
      // 折线图
      options2,
      // 饼图
      options3,
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.right-column {
  // height: 100%;
  height: calc(100% - (15px) * 2);
  .item {
    margin-bottom: 15px;
  }
  .item:last-child {
    margin-bottom: 0;
  }
}
</style>
