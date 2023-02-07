<template>
  <div class='v-cart-item'>
    <img class="v-cart-item__image" :src=" require('@/assets/images/catalog/' + cart_item_data.image) " alt="">
    <div class="v-cart-item__info">
      <p>{{cart_item_data.name}}</p>
    
      <p>Ціна: {{cart_item_data.price }}</p>
      <p>Артикул: {{cart_item_data.article}}</p>
    </div>
    <div class="v-cart-item__quantity">
      <p>Кількість: </p>
      <br>
      <span class="quantity__tools">
        <span class="quantity__btn" @click="decrementItem">-</span>
        {{cart_item_data.quantity}}
        <span class="quantity__btn" @click="incrementItem">+</span>
      </span>
    </div>
    <button class="v-cart-item__delete" @click="deleteFromCart">Видалити</button>
  </div>
</template>

<script>



  export default {
    name: "v-cart-item",
    
    props: {
      cart_item_data: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {}
    },
    
    computed: {},
    methods: {
      decrementItem() {
        this.$emit('decrement')
      },
      incrementItem() {
        this.$emit('increment')
      },
      deleteFromCart() {
        this.$emit('deleteFromCart')
      }
    },
   mounted() {
	const cartItemData = this.cart_item_data;
	cartItemData.quantity = 1;
  }
  }
</script>

<style lang="scss">
  .v-cart-item {
    display: flex; 
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 8px 0 #000000;
    padding: 16px;
    margin: 20px 100px 15px 100px;
    &__image {
      max-width: 90px;
    }
    &__delete {
      background: rgb(255, 64, 64);
      font-size: 17px;
      border-radius: 8px;
      border: 1px solid red;
      cursor: pointer;
    }

    .quantity__btn {
      cursor: pointer;
    }

    .quantity__tools {
      user-select: none;
      font-size: 20px;
    }
  }
  .v-cart-item__info{ 
    border: 1px solid black;
    border-radius: 7px;
    p {
      font-size: 20px;
      padding: 10px 10px;
    }
  }
</style>
