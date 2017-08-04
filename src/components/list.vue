<template>
  <div class="list">
  <sons @btnv="bus"></sons>
    <ul v-show="flag">
      <li v-for="(item, index) in filmData" @click="getDeyali(item,index)">
        <span>{{item.collect_count}}</span>
        <p>{{item.original_title}}</p>
      </li>
    </ul>
    
  </div>
</template>

<script>
import sons from '@/components/sons'
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
  data() {
    return {
      flag : false
    }
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
    bus(key) {
      this.flag = key
    },
    ...mapMutations({
      getfilmdata: 'GET_FILMDATA',
      getitemFile: 'GET_ITEMFILE'
    })
  },
  components: { sons }
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
