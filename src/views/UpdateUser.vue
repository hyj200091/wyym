<template>
  <div id="UpdateUser">
    <div class="top">
      <div class="left">
        <van-icon name="arrow-left" />
        <em>返回</em>
      </div>
      <div class="right">
        <van-icon name="success" />
        <em>完成</em>
      </div>
    </div>
    <div class="content">
      <van-cell-group>
        <van-field
          :value="username"
          v-model="user.nickname"
          required
          clearable
          label="昵称"
          icon="question-o"
          placeholder="请输入昵称名"
        />
        <br>
        <van-field
          :value="gender"
          v-model="user.gender"
          required
          clearable
          label="性别"
          icon="question-o"
          placeholder="性别 0:保密 1:男性 2：女性"
        />
        <br>
        <van-field
          :value="birthday"
          v-model="time"
          required
          clearable
          label="生日"
          icon="question-o"
          placeholder="请输入生日"
        />
        <br>
        <van-field
          :value="signatureName"
          v-model="user.signature"
          required
          clearable
          label="签名"
          icon="question-o"
          placeholder="请输入个性签名"
        />
        <br>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UpdateUser',
  data() {
    return {
      time: '',
      dates: '',
      username: '',
      gender: '',
      birthday: '',
      signatureName: '',
      uid: sessionStorage.getItem('uid'),
      user: []
    }
  },
  created() {
    this.axios.get('http://localhost:3000/user/detail?uid=' + this.uid).then((res) => {
      this.user = res.data.profile
      this.dates = this.user.birthday
      this.timestmap()
    })
  },
  methods: {
    timestmap() {
      var date = new Date(this.dates)
      let Y = date.getFullYear() + '-'
      let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
      let D = date.getDate() + ''
      this.time = Y + M + D
    }
  },
  components: {}
}
</script>
<style scoped>
#UpdateUser {
  width: 100%;
}
.top {
  display: flex;
  width: 100%;
}
.left {
  margin-top: 10px;
  color: blue;
  margin-left: 10px;
}
.right {
  margin-top: 10px;
  color: blue;
  margin-left: 180px;
}
.content {
  margin-top: 20px;
  width: 100%;
  height: 200px;
}
</style>
