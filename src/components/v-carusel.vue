<template>
	<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
		<ol class="carousel-indicators home__carousel-indicators">
			<li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"></li>
			<li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
			<li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
		</ol>
		<div class="carousel-inner">
			<div class="carousel-item active">
				<img src="@/assets/images/home.jpg" class="d-block w-100" alt="" />
				<div class="carousel-caption d-none d-md-block">
					
					<button type="button" class="btn btn-outline-dark"><router-link to="/catalog">Catalog</router-link></button>
				</div>
			</div>
			<div class="carousel-item">
				<img src="@/assets/images/home2.jpg" class="d-block w-100" alt="" />
				<div class="carousel-caption d-none d-md-block">
					<button type="button" class="btn btn-outline-dark"><router-link to="/catalog">Catalog</router-link></button>
				</div>
			</div>
			<div class="carousel-item">
				<img src="@/assets/images/home-3.jpg" class="d-block w-100" alt="" />
				<div class="carousel-caption d-none d-md-block">
					<button type="button" class="btn btn-outline-dark"><router-link to="/catalog">Catalog</router-link></button>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
a {
	color: black;
	text-decoration: inherit;
	background: darkgray;
}
	.home {
		&__carousel-indicators {
			bottom: 200px;
		}
	}
</style>