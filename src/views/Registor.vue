<template>
  <div>
    <h4>注册用户页面</h4>
    <van-number-keyboard :show="show" @blur="show = false" @input="onInput" @delete="onDelete" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="昵称"
        label="昵称"
        placeholder="昵称"
        :rules="[{ required: true, message: '请填昵称' }]"
      />
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
      <div class="vertify">
        <van-field
          v-model="vertifyCode"
          type="number"
          name="验证码"
          label="验证码"
          placeholder="验证码"
          :rules="[{ required: true, message: '请填写验证码' }]"
        />
        <van-button type="info" @click="vertify">sent</van-button>
      </div>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { Dialog } from 'vant'
export default {
  name: 'Registor',
  data() {
    return {
      show: true,
      username: '',
      phoneNumber: '',
      password: '',
      vertifyCode: '',
      code: []
    }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    onInput(value) {
      this.phoneNumber = (this.phoneNumber + value).slice(0, 11)
    },
    onDelete() {
      this.phoneNumber = this.phoneNumber.slice(0, this.phoneNumber.length - 1)
    },
    vertify() {
      this.axios.get('http://localhost:3000/captcha/sent?phone=' + this.phoneNumber)
    },
    onSubmit() {
      console.log("1")
      this.axios
        .get('http://localhost:3000/captcha/verify?phone=' + this.phoneNumber + '&captcha=' + this.vertifyCode)
        .then((res) => {
          console.log(1)
          console.log(res.date)
          this.axios
            .get(
              'http://localhost:3000/register/cellphone?phone=' +
                this.phoneNumber +
                '&password=' +
                this.password +
                '&captcha=' +
                this.vertifyCode +
                '&nickname=' +
                this.username
            )
            .then((result) => {
              console.log(result.date)
              Dialog.alert({
                title: 'success',
                message: '注册成功'
              }).then(() => {
                this.$router.push('/login')
              })
            })
        })
    }
  }
}
</script>
<style scoped>
.vertify {
  display: flex;
}
</style>
