<template>
  <div class="list">
      <button @click="back">返回上一页</button>
      <div>{{itemFile.original_title}}</div>
      <div>{{itemFile.id}}</div>
      <div>{{itemFile.alt}}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'itemFile'
    ]),      
  },
  created() {
    console.log(this.itemFile)
  },
  methods: {
    back() {
      this.$router.go(-1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
