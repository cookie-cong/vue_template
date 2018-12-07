<template>
  <div id="app">
    <Demo name="a"></Demo>
    <Demo name="b"></Demo>
    <Demo name="c"></Demo>
   <h2> {{sum}} </h2>
  </div>
</template>

<script>
import Demo from "@/components/Demo"
export default {
  name: 'App',
  components:{
    Demo
  },
  computed:{
    sum(){
      return this.$store.getters.sum
    }
  }


}
</script>

<style>

</style>
