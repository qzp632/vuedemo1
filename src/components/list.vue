<template>
  <div class="list">
    <ul>
      <li v-for="(item, index) in filmData" @click="getDeyali(item,index)">
        <span>{{item.collect_count}}</span>
        <p>{{item.original_title}}</p>
      </li>
    </ul>

  </div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'
import { listF } from '../comm/comm'
export default {
  computed: {
    ...mapGetters([
      'filmData',
      'itemFile'
    ]),   
  },
  created() {
    this._init();
  },
  methods: {
    _init() {
      listF("movie/in_theaters").then( res => {
        this.getfilmdata(res)
      })
      
    },
    getDeyali(item, index) {
        this.getitemFile(item)
        this.$router.push("/detali")
    },
    ...mapMutations({
      getfilmdata: 'GET_FILMDATA',
      getitemFile: 'GET_ITEMFILE'
    })
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list ul {
  list-style: none;
}
li {
  padding: 10px;
  float: left;
  border:1px solid #ccc;
}
</style>
