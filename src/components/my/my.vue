<template>
  <div id="my">
  	<v-header></v-header>
  	<v-nav></v-nav>
  	<v-createMusic></v-createMusic>
  	<v-footer></v-footer>
  </div>
</template>

<script>
	import Header from '../header/header.vue';
	import MyNav from "./my-nav.vue";
	import MyCreateMusic from "./my-createMusic.vue";
	import Footer from "../footer/footer.vue";
	export default {
	  data () {
	    return {
	      
	    }
	  },
	  components: {
	  	"v-header": Header,
	  	"v-nav": MyNav,
	  	"v-createMusic": MyCreateMusic,
	  	"v-footer": Footer
	  }
	  
	}
</script>

<style lang="scss">

</style>
