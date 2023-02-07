<template>
    <router-link :to="{name: 'cart'}">
      <div class="v-catalog__link_to_cart">Кошик: {{CART.length}}</div>
    </router-link>

    <v-select 
        :selected="selected"
          :options="categories"
          @select="sortByCategories"
    />
  
    <div class="v-catalog">
      <v-catalog-item
          v-for="product in filteredProducts"
          :key="product.article"
          :product_data="product"
          @addToCart="addToCart"
          
      />
  </div>
</template>

<script>
import vCatalogItem from './v-catalog-item'
import vSelect from '@/components/catalog/v-select.vue'
import {mapActions, mapGetters} from 'vuex'

  export default {
    name: "v-catalog",
    components: {
      vCatalogItem,
      vSelect
    },
    props: {},
    data() {
      return {
        categories: [
          {name: 'Все', value: 'ALL'},
          {name: 'Мужские', value: 'м'},
          {name: 'Женские', value: 'ж'},
        ],
        selected: 'Все',
        sortedProducts: []
      }
    },
    computed: {
       ...mapGetters([
        'PRODUCTS',
        'CART',
        
        ]),
        filteredProducts() {
        if (this.sortedProducts.length) {
          return this.sortedProducts
        } else {
          return this.PRODUCTS
        }
      },
    },
    methods: {
      ...mapActions([
        'GET_PRODUCTS_FROM_API',
        'ADD_TO_CART'
  ]),
   sortByCategories(category) {
        this.sortedProducts = []
        let vm = this;
        
        this.PRODUCTS.map(function (item) {
         if (item.category === category.name) {
          vm.sortedProducts.push(item); 
          }
          })
       this.selected = category.name
      },
  addToCart(data) {
    this.ADD_TO_CART(data)
  }
  },
  
  mounted() {
      this.GET_PRODUCTS_FROM_API()
    }

  }
</script>

<style lang="scss">
  .v-catalog {
   
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
   
  }
  .v-catalog__link_to_cart {
    width: 200px;
    border: solid 2px black;
    padding: 20px;
    margin: 20px 20px 20px 20px;
   
    border-radius: 7px;
  }
</style>
