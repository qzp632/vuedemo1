<template>
  <div class="list">
    <div>aaaaaa</div>
    <div>aaaaaa</div>
    <div>aaaaaa</div>
    <div>aaaaaa</div>
    <button @click="btn">点击我就行</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'change'
    ]),      
  },
  data() {
    return {
      flag:false
    }
  },

  methods: {
    btn() {
      this.flag = !this.flag
      this.getchange(this.flag)
      this.$emit('btnv',this.change)
    },
    ...mapMutations({
      getchange: 'GET_CHANGE'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
