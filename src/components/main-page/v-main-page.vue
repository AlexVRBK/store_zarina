<template>
  <div class='home'>

    <vCarusel />
			
		
  </div>
  <div class="descr">
				<div class="descr_title">
					<h3 >ZARINA – це місце, яке полюбить кожна жінка та чоловік</h3>
				</div>
				<div class="descr_title_sub">
					<p>
          ZARINA — це місце, повне модних натхнень. Кожна жінка та чоловік знайдуть тут продукти, які відображають її особистість і характер. Тут мода наповнена еклектичними поєднаннями і божевільними контрастами.<br><br> Вона приймає найрізноманітніші форми і дивує авангардними доповненнями. Як і мінімалістки, які цінують прості форми і монохромні поєднання, так і шанувальниці стилізацій, блискіток та інтенсивних кольорів, знайдуть в MODIVO свої улюблені продукти. <br><br>
          Крім широкого асортименту найвищої якості одягу, Ви також знайдете різні види аксесуарів та доповнень — в тому числі взуття, сумки, біжутерію та окуляри, які задовольнять навіть найвимогливіших шанувальниць дивовижних тенденцій. Увійдіть в надихаючий світ моди MODIVO.
					</p>
				</div>
			</div>

      <vAbout />
      
</template>

<script>
import vCarusel from '@/components/v-carusel'
import vAbout from '@/components/main-page/v-about.vue'

  export default {
    name: "v-main-page",
    props: {},
    components: {
			vCarusel,
			vAbout
		},
    data() {
      return {}
    },
    computed: {}
  }
</script>

<style >
.descr{
    display: block;
    font-family: 'Roboto Condensed', sans-serif;
   
    padding-left: 50px ;
    padding-right: 50px ;
    justify-content: center;
    color: #080608;
    padding-top: 75px;
}
.descr_title{
  font-size: 30px;
}
.descr_title_sub{
  padding-top: 20px;
  font-size: 22px;
}
</style>
