<template>
  <div>
    <van-cell-group>
      
      <van-field
        v-model="moddie"
        left-icon="smile-o"
        placeholder="请输入手机号"
      />
      <van-field
        v-model="code"
        clearable
        left-icon="music-o"
        placeholder="请输入密码"
      >
        <template #button>
          <van-button
            v-if="verificationCode"
            size="small"
            @click="sendVerificationCode"
            type="primary"
            >发送验证码</van-button
          >
          <van-count-down
            @finish="finish"
            v-else
            :time="time"
            millisecond
            format="ss s"
          />
        </template>
      </van-field>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      moddie: "",
      code: "",
      verificationCode: true,
      time: 10 * 1000,
    };
  },
  methods: {
    sendVerificationCode() {
      this.verificationCode = false;
    },
    finish() {
      this.verificationCode = true;
     
    },
  },
  mounted() {},
};
</script>

<style>
.van-cell {
  align-items: center;
}
</style>