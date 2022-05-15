<template>
  <div class="home-container">
    <home-header></home-header>
    <!-- 主体区域 -->
    <main-content>
      <template #left>
        <left-column></left-column>
      </template>
      <template #center>
        <center-column></center-column>
      </template>
      <template #right>
        <right-column></right-column>
      </template>
    </main-content>
  </div>
</template>

<script>
import HomeHeader from "./components/home-header/home-header.vue";
import MainContent from "./components/main-content/main-content.vue";
import LeftColumn from "./components/left-column/left-column.vue";
import CenterColumn from "./components/center-column/center-column.vue";
import RightColumn from "./components/right-column/right-column.vue";

export default {
  name: "HomeIndex",
  components: {
    HomeHeader,
    MainContent,
    LeftColumn,
    CenterColumn,
    RightColumn,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
}
</style>
