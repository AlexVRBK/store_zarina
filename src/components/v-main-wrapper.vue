<template>
<v-header />
  <div class="v-main-wrapper">
    
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
  <v-footer />
</template>

<script>
    import vHeader from './layouts/v-header'
    import vFooter from './layouts/v-footer'

  


  export default {
    name: 'v-main-wrapper',
    components: {
      vHeader,
      vFooter ,
     
    },
    props: {},
    data() {
      return {
        title: 'Main wrapper'
      }
    },
    computed: {
    
    },
    methods: {
 
  },
    watch: {},
  
  mounted() {
  }
  }
</script>

<style>
  .v-main-wrapper {
    margin: 0 auto;
  }
</style>