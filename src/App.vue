<template>
  <div id="app">
    <ul>
      <li v-for="item in filmData">
        <span>{{item.collect_count}}</span>
        <p>{{item.original_title}}</p>
      </li>
    </ul>

    <router-view></router-view>
  </div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'
import axios from 'axios'
export default {
  computed: {
    ...mapGetters([
      'filmData'
    ]),   
  },
  created() {
    this._init();
  },
  methods: {
    _init() {
      axios.get('https://api.douban.com/v2/movie/in_theaters')
      .then( res => {
        this.getfilmdata(res.data.subjects)
      })
      
    },
    ...mapMutations({
      getfilmdata: 'GET_FILMDATA'
    })
  }
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
