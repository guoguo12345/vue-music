<template>
  <div id="music">
  	<div class="mu-header">
	  	<v-header></v-header>
  	</div>
  	<div class="mu-nav">
  		<v-nav></v-nav>
  	</div>
  	<div class="mu-swiper">
  		<v-swiper></v-swiper>
  	</div>
  	<div class="mu-footer">
  		<v-footer></v-footer>
  	</div>
  </div>
</template>
<script>
	import Header from '../header/header.vue';
	import MusicNav from "./music-nav.vue";
	import OutSwiper from "./out-swiper.vue";
	import Footer from '../footer/footer.vue';
	export default {
	  data () {
	    return {
	      
	    }
	  },
	  components: {
	  	"v-header": Header,
	  	"v-nav": MusicNav,
	  	"v-swiper": OutSwiper,
	  	"v-footer": Footer
	  },
	  mounted() {
		
		   
		}
	  
	}
</script>

<style lang="scss" scoped>

</style>
