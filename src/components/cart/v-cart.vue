<template>

   <router-link :to="{name: 'catalog'}">
      <div class="v-catalog__link_to_cart">Перейти в Каталог</div>
    </router-link>
  <div class='v-cart'>
  <p v-if="!CART.length">Ваш кошик порожній...</p>
  <v-cart-item 
        v-for="(item, index) in CART"
        :key="item.article"
        :cart_item_data="item"
        @deleteFromCart="deleteFromCart(index)"
        @increment="increment(index)"
        @decrement="decrement(index)"
        />
    
    <div class="v-cart__total">
      <p class="total__name">До сплати:</p>
      <p>{{cartTotalCost}}</p>
    </div>
  </div>
</template>

<script>

    import vCartItem from './v-cart-item.vue';
    import {mapActions, mapGetters} from 'vuex'
    

  export default {
    name: "v-cart",
    components: {
      vCartItem
       
    },
    props: {
    },
    data() {
      return {}
    },
  
    computed: {
       ...mapGetters([
        'CART',
        ]),
        cartTotalCost() {
        let result = []
        if (this.CART.length) {
          for (let item of this.CART) {
            result.push(item.price * item.quantity)
          }
          result = result.reduce(function (sum, el) {
            return sum + el;
          })
          return result;
        } else {
          return 0
        }
      }
    },
    methods: {
      ...mapActions([
        'DELETE_FROM_CART',
        'INCREMENT_CART_ITEM',
        'DECREMENT_CART_ITEM'
      ]),
      increment(index) {
        this.INCREMENT_CART_ITEM(index)
      },
      decrement(index) {
        this.DECREMENT_CART_ITEM(index)
      },
      deleteFromCart(index) {
        this.DELETE_FROM_CART(index)
      }
    }
  }
</script>

<style lang="scss">
  .v-cart {
    margin-bottom: 100px;
    &__total {
     margin: 250px 200px 50px 200px;
      bottom: 0;
      right: 0;
      left: 0;
      padding: 16px 24px;
      display: flex;
      justify-content: center;
      border-radius: 7px;
      background: rgb(0, 0, 0);
      color: #ffffff;
      font-size: 20px;
      
    }

    .total__name {
      margin-right: 32px;
    }
   
  }
</style>
