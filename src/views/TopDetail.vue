<template>
  <div id="TopDetail">
    <div class="backCard">
      <van-icon name="arrow-left" @click="beforePath" class="wz" />
      <em class="wz1">排行榜</em>
      <img :src="details.coverImgUrl" class="image" />
      <div class="description">{{ details.name }}</div>
      <div class="playcount">
        <van-icon name="service-o" />
        播放量：{{ details.playCount | counts }} 万
      </div>
    </div>
    <!-- 歌曲 -->
    <div class="song">
      <van-row type="flex" justify="space-between">
        <van-col span="18">
          <div class="play">
            <span>播放全部</span>
            <span>(共{{ details.trackCount }}首)</span>
          </div>
        </van-col>
        <van-col span="6"></van-col>
      </van-row>
      <transition-group enter-active-class="animated rubberBand" leave-active-class="animated rotateIn">
        <div class="list" v-for="(item, index) in song" :key="index">
          <div class="id">{{ index + 1 }}</div>

          <div class="dansong" @click="play(item.id, song)">
            <div class="name">{{ item.name }}</div>
            <div class="songer">{{ item.ar[0].name }}--{{ item.al.name }}</div>
          </div>
          <div class="meun">
            <!-- <router-link :to="'/songdetail/'+item.id"> -->
            <van-icon name="ellipsis" class="ellipsis" />
            <!-- </router-link> -->
          </div>
        </div>
      </transition-group>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../components/Footer'
export default {
  name: 'TopDetail',
  inject: ['iffooter', 'playaudio'],
  filters: {
    counts(value) {
      return Math.floor(value / 10000)
    }
  },
  data() {
    return {
      id: localStorage.getItem('id'),
      details: [],
      song: []
    }
  },
  created() {
    //歌曲详情
    this.axios.get('http://localhost:3000/playlist/detail?id=' + this.id).then((res) => {
      this.details = res.data.playlist
      this.song = res.data.playlist.tracks
    })
  },
  methods: {
    beforePath() {
      this.$router.push('/top')
    },
    // 音乐url
    getsongurl(id) {
      this.axios.get('http://localhost:3000/song/url?id=' + id).then((res) => {
        this.$store.state.src = res.data.data[0].url
      })
    },
    play(id, song) {
      this.getsongurl(id)
      this.playaudio(id, song)
    }
  },
  components: { Footer }
}
</script>
<style scoped>
.wz {
  color: black;
  position: absolute;
  top: 120px;
  left: 0;
}
#TopDetail {
  width: 100%;
}
.top1 {
  background-color: red;
  display: flex;
  width: 100%;
  height: 20px;
  top: 0px;
  left: 5px;
}
.backCard {
  position: relative;
  margin-top: 1px;
  width: 100%;
  height: 200px;
  background-color: #548fd1;
}
.image {
  width: 100%;
  height: 100%;
}
.playcount {
  color: #fff;
  font-size: 0.8rem;
}
.description {
  width: 100%;
  word-wrap: break-word;
  word-break: break-all;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  margin-top: -4rem;
}
.wz {
  position: absolute;
  top: 2px;
  left: 0;
}
.wz1 {
  color: #fff;
  position: absolute;
  top: 2px;
  left: 15px;
}
/* 歌曲 */
.song {
  width: 100%;
  margin-top: 6px;
  background: #ffffff;
  border-radius: 1rem;
  opacity: 0.9;
}
.play {
  font-size: 1rem;
  text-indent: 1rem;
  margin-top: 1rem;
  color: #000;
  font-weight: 700;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.play span {
  color: #000;
}
.van-icon-bar-chart-o {
  font-size: 1.2rem;
  margin-left: 2rem;
}
.list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 3rem;
  margin-top: 2rem;
  border-radius: 5px;
  border-bottom: 2px solid #ccc;
}
.list:hover {
  background: linear-gradient(45deg, #f40, skyblue);
}
.van-icon {
  color: #000;
  flex: 2;
}
.id {
  flex: 1;
  font-size: 0.6rem;
  color: #000;
  margin-left: 1rem;
}
.list .audio {
  flex: 6;
}
.dansong {
  font-size: 0.1rem;
  flex: 6;
}
.dansong .name {
  font-size: 0.8rem;
  font-weight: 700;
  color: #000;
}
.songer {
  color: #555;
  opacity: 0.8;
  margin-top: 0.4rem;
}
.ellipsis {
  margin-left: 1rem;
  font-size: 1.2rem;
}
.meun {
  width: 3rem;
  height: 3rem;
}
</style>
