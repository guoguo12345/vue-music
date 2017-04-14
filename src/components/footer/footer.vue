<template>
  <div id="footer">
  	<audio :src="msg.url?msg.url:msg.m4a" constrols></audio>
  	<router-link to="/details"><img :src="msg.albumpic_small" /></router-link>
  	<div>
  		<span>{{msg.songname}}</span>
  		<i>{{msg.singername}}</i>
  	</div>
  	<i class="iconfont icon-ttpodicon playBtn" @click="playControl"></i>
  	<i class="iconfont icon-xiayigexiayishou"></i>
  	<i class="iconfont icon-dongtai2-copy"></i>
  </div>
</template>

<script>
	export default {
	  data () {
	    return {
	    }
	  },
	 // props: ["msg"],
		methods: {
			playControl() {
				this.$store.commit("playControl");
			}
		},
		computed: {
			isPlay() {
				return this.$store.state.isPlay;
			}
		},
		computed: {
			msg() {
				return this.$store.state.msg;
			}
		}
	  
	}
</script>
<style lang="scss">
</style>
