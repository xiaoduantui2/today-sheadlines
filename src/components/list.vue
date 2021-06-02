<template>
  <div class="van-item">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
  <van-list 
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="item in list" :key="item" :title="item" />
    </van-list>
</van-pull-refresh>
   
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      isLoading: false
    };
  },
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh(){
        this.isLoading = true
    }
  },
};
</script>

<style leng="less" scope>
.van-item {
    position: fixed;
    top: 90px;
    left: 0;
    right: 0;
   bottom: 50px;
   overflow-y: auto;
   /* background: fuchsia; */
}
</style>