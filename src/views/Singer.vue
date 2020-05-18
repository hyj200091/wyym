<template>
  <div id="Singer">
    <div class="content">
      <div class="card" v-for="(item, index) in singer" :key="index">
        <img class="image" :src="item.img1v1Url" />
        <div class="description">
          <p style="padding-left:0px;">{{ item.name }}</p>
          <!-- <p style="padding-left:80px;">专辑数:{{ item.albumSize }}</p> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Singer',
  data() {
    return {
      singer: []
    }
  },
  created() {
    this.axios.get('http://localhost:3000/top/artists?offset=0&limit=30').then((res) =>{
      this.singer = res.data.artists
    })
  },
  methods: {},
  components:{},
}
</script>
<style scoped>
#Singer{
  width: 360px;
}
.content{
  display: flex;
  flex-wrap: wrap;
  margin: 30px 20px 0px 10px;
}
.card{
  box-shadow: 10px 5px 5px black;
  width: 140px;
  height: 140px;
}
.image{
  width: 100%;
  height: 120px;
}
.description{
 margin: -20px 20px 0px 0px;
  width: 100%;
  height: 20px;
}
</style>
