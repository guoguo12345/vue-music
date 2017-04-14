<template>
	<div class="details">
		<div class="top">
			<a class="iconfont icon-moreunfold" @click="goBack"></a>
			<span> {{msg.songname}} <i>  ~ {{msg.singername}} </i></span>
			<i class="iconfont icon-attachment"></i>
		</div>
		<div class="pic">
			<img :src="msg.albumpic_big" /> 		</div>
		<div class="lyrics">
			{{lyric}}
		</div>
		<div class="ado">
			<audio :src="msg.url" controls></audio>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
	
			}
		},
		methods: {
			goBack() {
				window.history.go(-1);
			},
			getLyric() {
				this.$store.commit("getLyric",this.$store.state.msg.songid);
			}

		},
		computed: {
			msg() {
				return this.$store.state.msg
			},
			lyric() {
				return this.$store.state.lyric
			}
		},
		mounted() {
			this.getLyric();
		}
	}
</script>