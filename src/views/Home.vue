<template>
  <div id="appheader">
    <Header></Header>
    <div class="content">
    <Recommend></Recommend>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
import Recommend from '../components/Recommend'
export default {
  name: 'Home',
  data() {
    return {
      active: 1,
    }
  },
  methods: {},
  components:{ Header, Recommend }
}
</script>
<style scoped>
#home {
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-around; */
}
.icon {
  flex: 2;
}
.wrap {
  flex: 8;
}
.icon i {
  font-size: 2rem;
  cursor: pointer;
}
.content{
  margin-top: -190%;
}
</style>
