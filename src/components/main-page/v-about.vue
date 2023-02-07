<template>
  <div class="about-brand">
    <h3 class="about-brand__title">ПРО НАС</h3>
    <div class="about-brand-elements">
        
            <div class="first">
                <h3>ДОСТАВКА</h3>
            <img src="@/assets/images/icons/about-brand-1.svg" alt="">
            <p>Новою Поштою в будь-який куточок України 1-3 дні.</p>
            </div>

            <div class="second">
                <h3>ПЕРЕВІРКА ЯКОСТІ</h3>
            <img src="@/assets/images/icons/about-brand-2.svg" alt="">
            <p>Отримуючи товар на пошті, ви маєте право перш ніж оплачувати замовлення, приміряти, подивитися.</p>
            </div>

            <div class="thirst">
                <h3>ОПЛАТА</h3>
            <img src="@/assets/images/icons/about-brand-3.svg" alt="">
            <p>Банківською картою VISA або Master Card на нашому сайті або при отриманні замовлення накладеним платежем.</p>
            </div>

            <div class="quattro">
                <h3>Натуральний одяг</h3>
            <img src="@/assets/images/icons/about-brand-4.svg" alt="">
            <p>Навіть у колекціях відомих модельєрів можна побачити багато моделей з натуральних матеріалів, у тому числі з конопель.</p>
            </div>
            
      </div>
    </div>
  
</template>

<script>
  export default {
    name: "v-about",
    props: {},
    data() {
      return {}
    },
    computed: {}
  }
</script>

<style lang="scss" scoped>

.first{
    background: white;
    border: 3px solid black;
    border-radius: 10px;
    h3 {
        font-size: 25px;
        padding: 10px 10px 10px 5px;
    }
    img{
        width: 30px;
        height: 60px;
    }
    p {
       font-size: 18px; 
       padding: 2px 10px 7px 10px;
    }
}
.second{
    background: white;
    border: 3px solid black;
    border-radius: 10px;
    h3 {
        font-size: 25px;
        padding: 10px 10px 10px 5px;
    }
    img{
        width: 30px;
        height: 60px;
    }
    p {
       font-size: 18px; 
       padding: 2px 10px 7px 10px;
    }
}
.thirst{
    background: white;
    border: 3px solid black;
    border-radius: 10px;
    h3 {
        font-size: 25px;
        padding: 10px 10px 10px 5px;
    }
    img{
        width: 30px;
        height: 60px;
    }
    p {
       font-size: 18px; 
       padding: 2px 10px 7px 10px;
    }
}
.quattro{
    background: white;
    border: 3px solid black;
    border-radius: 10px;
    h3 {
        font-size: 25px;
        padding: 10px 10px 10px 5px;
    }
    img{
        width: 30px;
        height: 60px;
    }
    p {
       font-size: 18px; 
       padding: 2px 10px 7px 10px;
    }
}

.about-brand {
  padding: 80px 80px 20px 80px;
  
  &__title {
    text-align: center;
    font-size: 33px;
    color: black;
    margin: 0 0 30px 0;
    
  }
  &-elements {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-between;
    gap: 20px;
   
  &-element {
    color: black;
    
    padding: 48px;
    
    &__img {
      display: block;
      margin-bottom: 12px;
    }
    &__title {
      margin: 0 0 12px 0;
      font-size: 20px;
    }
    &__description {
      font-size: 16px;
      line-height: 1.5;
    }
  }
  }
}
</style>
