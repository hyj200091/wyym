<template>
  <div class="bg">
    <div class="box-top">登录</div>
    <van-form @submit="onSubmit" class="box-content" ref="form">
      <van-number-keyboard :show="show" @blur="show = false" @input="onInput" @delete="onDelete" />
      <van-field
        @touchstart.native.stop="show = true"
        v-model="phoneNumber"
        type="number"
        name="手机号"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <router-link to="/register">
      <p>还没有账号?去注册</p>
      </router-link>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit" @click="submit">提交</van-button>
      </div>
    </van-form>
    <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">其他登录方式</van-divider>
    <van-row class="spacing">
      <van-col span="12" class="align-center">
        <img alt srcset class="iconfont" />
      </van-col>
      <van-col span="12" class="align-center">
        <img alt srcset class="iconfont" />
      </van-col>
    </van-row>
    <van-row class="bottom-content">
      <van-col class="bottom-bg">温馨提示：登录的用户,默认同意用户协议和隐私政策</van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      show: true,
      phoneNumber: '',
      password: '',
      roles: []
    }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    onSubmit(values) {
      console.log('submit', values)
    },
    //验证登录
    submit() {
      this.axios
        .get('http://localhost:3000/login/cellphone?phone=' + this.phoneNumber + '&password=' + this.password)
        .then((res) => {
          console.log(res.data.code)
          if (res.data.code == 200) {
            // localStorage.setItem('token', res.data.token)
            // this.$store.commit('setToken', res.date.token)
            this.$notity({ type: 'success', message: '登录成功' })
          }
          if (res.date.code == 502) {
            this.$notity({ type: 'warning', message: '密码错误' })
          }
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    onInput(value) {
      this.phoneNumber = (this.phoneNumber + value).slice(0, 11)
    },
    onDelete() {
      this.phoneNumber = this.phoneNumber.slice(0, this.phoneNumber.length - 1)
    }
  },
  computed: {}
}
</script>

<style scoped lang="scss">
.bg {
  //   background: url('../assets/images/bg.jpg');
  height: 100%;
  background-size: cover;
}
.box-top {
  text-align: center;
  padding-top: 100px;
  font-size: 22px;
  color: #0674b1;
}
.box-content {
  margin-top: 80px;
}
.spacing {
  padding: 10px 16px;
}
.align-center {
  text-align: center;
}
.bottom-content {
  font-size: 14px;
  color: #0674b1;
  font-weight: 400;
  text-align: center;
  padding: 10px 16px;
  padding-bottom: 92px;
}
.iconfont {
  width: 36px;
}
</style>
