<template>
  <div id="Top">
    <div class="card" v-for="(item, index) in top" :key="index">
      <router-link :to="'/top/' + item.id">
        <img :src="item.coverImgUrl" class="image" @click="getId(item.id)" />
      </router-link>
      <span class="wz">{{ item.updateFrequency }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Top',
  data() {
    return {
      top: []
    }
  },
  created() {
    this.axios.get('http://localhost:3000/toplist/detail').then((res) => {
      this.top = res.data.list
    })
  },
  methods: {
    getId(id) {
      localStorage.setItem('id', id)
    }
  },
  components: {}
}
</script>
<style scoped>
#Top {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.card {
  margin: 20px 5px 5px 25px;
  width: 140px;
  height: 140px;
  position: relative;
}
.image {
  width: 100%;
  height: 100%;
}
.wz {
  color: black;
  position: absolute;
  top: 120px;
  left: 0;
}
</style>
