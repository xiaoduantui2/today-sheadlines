<template>
  <div class="login-header">
    <div>登录</div>
    <div>我的</div>
  </div>
</template>

<script>
import {login} from '../../api/user'
export default {
  data() {
    return {

    }
  },
  methods: {
    async onLogin(){
      try{
        const res = await login(this.user)
        console.log(res)
        this.$store.commit('setUser', data.data)
      }catch(err) {
        console.log(err)
      }
    }
  }

}
</script>

<style leng="less" scoped>
.login-header {
  width: 200px;
  height: 200px;
  background: #0094ff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>