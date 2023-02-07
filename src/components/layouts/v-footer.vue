<template>
	<footer class="footer footer_bg">
		<div class="container">
            <div>
                <router-link to="/"><img src="@/assets/images/icons/logoza.svg" alt="" class="footer__logo" /></router-link>
			
		</div>
            <ul class="footer__socials">
			<li class="footer__social">
				<a href="#" target="_blank" class="footer__link">
					<img src="@/assets/images/icons/f.png" alt="" />
				</a>
			</li>
			<li class="footer__social">
				<a href="#" target="_blank" class="footer__link">
					<img src="@/assets/images/icons/p.png" alt="" />
				</a>
			</li>
			<li class="footer__social">
				<a href="#" target="_blank" class="footer__link">
					<img src="@/assets/images/icons/insta.png" alt="" />
				</a>
			</li>
			<li class="footer__social">
				<a href="#" target="_blank" class="footer__link">
					<img src="@/assets/images/icons/g+.png" alt="" />
				</a>
			</li>
		</ul>
			
		</div>
	</footer>
</template>


<script>
export default {
  name: 'vFooter',
  props: {
    
  }
}
</script>


<style scoped lang="scss">
.footer {
    margin-top: 300px;
    color: #fff;
    padding: 75px 0;
    &_bg {
        background: darkgrey;
    }

    &__logo {
        padding-bottom: 20px;
        width: 301px;
        height: 50px;
    }

    &__socials,
    &__list {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
    }

    &__social{
        margin-right: 15px;

            &:last-child {
                margin-right: 0;
            }
      
        text-align: center;
        background: #fff;
        border-radius: 50%;
        width: 30px;
        height: 30px;
    }

    &__link{
        display: inline-block;
        color: #fff;
        text-decoration: none;
        padding: 6px;

        &_red {
            color: red;
        }

        &_underline {
            text-decoration: underline;
            text-transform: none;
        }
    }

    &__list {
        display: flex;
        flex-direction: column;
            &_capitalize {
                text-transform: capitalize;
            }
    }


    &__title {
        font-size: 28px;
        padding-bottom: 35px;
        margin: 0;
    }


}

</style>
