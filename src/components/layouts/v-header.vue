<template>
  <div class='v-header'>
        <nav class="footer_nav">
            <router-link to="/">Головна</router-link> |
            <router-link to="/catalog">Каталог</router-link> |
            <router-link to="/transfer">Доставка</router-link> |
            <router-link to="/info">Інформація</router-link> 
        </nav>
          <div>
            <router-link to="/"><img src="@/assets/images/icons/logoza.svg" alt="" class="footer__logo" /></router-link>
          
        </div>
  </div>
</template>

<script>
export default {
    name: "vHeader",

    props: {},

    data() {
         return {}
    },

    computed: {},

      methods: {},
}
</script>

<style lang="scss">
 
  .v-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: darkgrey;
    padding: 16px;
    width: 100%;
    top: 0;
    left: 0;

   img {
        width: 301px;
        height: 50px;
        margin-right: 70px;
  }

  a{
    color: white;
    font-size: 20px;
  }
    
   .footer_nav{
    color: black;
    font-size: 20px;
   } 
  }
</style>

