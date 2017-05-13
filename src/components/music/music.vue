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
	  beforeMount() {
	  		this.$ajax(`http://route.showapi.com/213-4?showapi_appid=35530&topid=26&showapi_sign=0e82d665e72047d89be96225dbcb5fdb`).then(function(data) {
					console.log(data.data.showapi_res_body.pagebean.songlist);
				// if(data.body.showapi_res_body.pagebean.songlist) {
				// 	console.log(data.body.showapi_res_body.pagebean.songlist);
				// }else {
				// 	console.log("网络错误");
				// }
			},function(){
				console.log(err);
			});
	  },
	  mounted() {
		
		   
	  }
	  
	}
</script>

<style lang="scss" scoped>

</style>
