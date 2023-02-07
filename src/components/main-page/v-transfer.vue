<template>
  <div>
    <img src="@/assets/images/transfer2.png" alt="" class="transfer_img">
    <h1 class="title_transfer">ОПЛАТА І ДОСТАВКА</h1>
    <hr>
    <div class="transfer_descr">
       Ви можете оплатити замовлення одним із доступних способів: 
        <ul>
            <li>Сервіс миттєвих платежів LiqPay;</li>
            <li>Безготівковий розрахунок за реквізитами рахунку для оплати або PayPal; </li>
            <li>Післяплатою при отриманні замовлення. </li>
        </ul>
        <p>
          Замовлення з післяплатою відправляємо за передплатою, що покриває транспортні витрати у разі відмови отримувача на пошті. Будь ласка, зверніть увагу, що «Нова Пошта» стягує комісію у розмірі 2% від суми переказу + 20 грн за послугу післяплати при отриманні. 
        </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "v-transfer",
    props: {},
    data() {
      return {}
    },
    computed: {}
  }
</script>

<style scoped>
.title_transfer{
  padding-top: 50px;
  font-size: 30px;
}
hr {
  border: 1px solid black;
  margin: 30px 150px 30px 150px;
  text-align: center;
}
.transfer_descr{
  font-size: 20px;
}
ul {
  padding: 20px 20px;
  padding-left: 0px; 
  
}

</style>