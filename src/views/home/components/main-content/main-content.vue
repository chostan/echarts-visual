<template>
  <div class="main-content main-content-max">
    <div class="column">
      <slot name="left"></slot>
    </div>
    <div class="column">
      <slot name="center"></slot>
    </div>
    <div class="column">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "main-content",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.main-content {
  display: flex;
  height: 90%;
  margin: 0 auto;
  padding: 10px 10px 0;
  .column {
    flex: 3;
  }
  .column:nth-child(2) {
    flex: 5;
    padding: 0 10px 15px;
  }
}
.main-content-max {
  min-width: 1024px;
  max-width: 1920px;
}
</style>
