<template>
  <div>
    <van-nav-bar class="nav-bar" title="标题" left-arrow />
    <van-tabs v-model="active">
      <van-tab title="标签 1">
        <list />
      </van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import list from '../../components/list'
export default {
  data() {
    return {
      active: 0,
    };
  },
  components: {
    list
  }
};
</script>

<style leng="less" scope>
.nav-bar {
  background: #0094ff;
}
.van-nav-bar .van-icon {
  color: #fff;
}
</style>