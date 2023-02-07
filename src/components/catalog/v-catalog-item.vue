<template>
  <div class='v-catalog-item'>

   <v-popup
        v-if="isInfoPopupVisible"
        rightBtnTitle="Add to cart"
        :popupTitle="product_data.name"
        @closePopup="closeInfoPopup"
        @rightBtnAction="addToCart"
    >
      <img class="v-cart-item__image" :src=" require('@/assets/images/catalog/' + product_data.image) " alt="">
      <div>
        <p class="v-catalog-item__name">{{product_data.name}}</p>
        <br>
        <p class="v-catalog-item__price">Ціна: {{product_data.price }} грн.</p>
        <br>
        <p class="v-catalog-item__price">{{product_data.category}}</p>
      </div>
    </v-popup>

  


    <img class="v-catalog-item__image" :src=" require('@/assets/images/catalog/' + product_data.image) " alt="img" @click="productClick">
    <br>
    <br>
    <p class="v-catalog-item__name">{{product_data.name}}</p>
    <br>
    <p class="v-catalog-item__price">Ціна: {{product_data.price }} грн.</p>
    <br>
    <button
        class="v-catalog-item__show-info"
        @click="showPopupInfo"
    >
      Детальніше
    </button>
    <br><br>
    <button
        class="v-catalog-item__add_to_cart_btn btn"
        @click="addToCart"
    >Додати в кошик 
    </button>
  </div>
</template>

<script>
 import vPopup from '@/components/popup/v-popup.vue'

  export default {
    name: "v-catalog-item",
    components: {
     vPopup
    },
    props: {
      product_data: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        isInfoPopupVisible: false
      }
    },
    
    computed: {
},

    methods: {
      productClick() {
        this.$emit('productClick', this.product_data.article)
      },
      showPopupInfo() {
        this.isInfoPopupVisible = true
      },
      closeInfoPopup() {
         this.isInfoPopupVisible = false
      },
      addToCart() {
        this.$emit('addToCart', this.product_data);
      }
    },
  }
</script>

<style lang="scss">
  .v-catalog-item {
    flex-basis: 30%;
    box-shadow: 0 0 8px 0 #292727;
    padding: 16px;
    margin-bottom: 24px;
    margin-right: 15px;
    margin-left: 15px;

    &__image {
      width: 100px;
    }
    &__show-info{
      background: rgb(133, 132, 132);
      padding: 10px;
      border-radius: 8px
    }
    &__add_to_cart_btn{
       background: rgb(133, 132, 132);
      padding: 10px;
      border: 3px solid black;
      border-radius: 8px
    }
  }
</style>
